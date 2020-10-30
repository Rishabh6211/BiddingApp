/*
 * @file: login.js
 * @description: It Contain login router/api.
 * @author: Dixit
 */
import express from "express";
import { createValidator } from "express-joi-validation";
import Joi from "@hapi/joi";
import { login } from "./../../src/user/controller";
const app = express();
const validator = createValidator({ passError: true });
// https://swagger.io/docs/specification/2-0/describing-parameters

/**
 * @swagger
 * /api/user/login:
 *  post:
 *   tags: ["user"]
 *   summary: user login api
 *   description: api used to login users <br/> <b>Note:-</b> <br/> <b>role, deviceToken, deviceType </b> fields are optional.<br/> <b>role</b> should be one of 1 => ADMIN, 2 => USER
 *   parameters:
 *      - in: body
 *        name: user
 *        description: The user to login.
 *        schema:
 *         type: object
 *         required:
 *          - user login
 *         properties:
 *           email:
 *             type: string
 *             required:
 *           password:
 *             type: string
 *             required:
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */

const userSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .label("Email Addresss"),
  password: Joi.string()
    .required()
    .label("Password")
});

app.post(
  "/user/login",
  validator.body(userSchema, {
    joi: { convert: true, allowUnknown: false }
  }),
  login
);

export default app;
