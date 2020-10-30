/*
 * @file: index.js
 * @description: It's combine all user routers.
 * @author: Dixit
 */

import register from "./register";
import login from "./login";
import logout from "./logout";

export default [
  register,
  login,
  logout
];
