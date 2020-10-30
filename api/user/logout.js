/*
 * @file: logout.js
 * @description: It Contain logout router/api.
 * @author: Dixit
 */
import express from "express";
import { logout } from "./../../src/user/controller";
import { checkToken } from "../../utilities/universal";

const app = express();

/**
 * @swagger
 * /api/user/logout:
 *  delete:
 *   tags: ["user"]
 *   summary: user logout api
 *   description: api used to logout users
 *   security:
 *    - OAuth2: [admin]   # Use Authorization
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        type: string
 *        required: true
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */

app.delete("/user/logout", checkToken, logout);

export default app;
