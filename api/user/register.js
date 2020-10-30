/*
 * @file: register.js
 * @description: It Contain register User  router/api.
 * @author: Dixit
 */
import express from "express";
import { createValidator } from "express-joi-validation";
import Joi from "@hapi/joi";

import { register } from "./../../src/user/controller";

const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/user:
 *  post:
 *   tags: ["user"]
 *   summary: user register api
 *   description: api used to register users <br/> <b>Note:-</b>
 *   parameters:
 *      - in: body
 *        name: user
 *        description: The user to create.
 *        schema:
 *         type: object
 *         required:
 *          - user register
 *         properties:
 *           firstName:
 *             type: string
 *             required:
 *           lastName:
 *             type: string
 *             required:
 *           email:
 *             type: string
 *             required:
 *           password:
 *             type: string
 *             required:
 *           dob:
 *             type: string
 *             required:
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */

const userSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .label("First Name"),
  lastName: Joi.string()
    .required()
    .label("Last Name"),
  email: Joi.string()
    .email()
    .required()
    .label("Email Addresss"),
  password: Joi.string()
    .required()
    .label("Password"),
  dob: Joi.string()
    .required()
    .label("Birth")
});

app.post("/user", validator.body(userSchema, { joi: { convert: true, allowUnknown: false } }), register);

export default app;
