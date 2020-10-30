/*
 * @file: user.js
 * @description: It Contain function layer for user controller.
 * @author: Dixit
 */

import { successAction, failAction } from "../../utilities/response";
import { _register, _login, _logout } from "./service";
import Message from "../../utilities/messages";

/**************** Add User ***********/
export const register = async (req, res, next) => {
  const payload = req.body;
  console.log("payload : ", payload);
  try {
    const userData = await _register(payload);
    const data = { userData, isFeaturingMessage: userData.isFeaturing ? "" : Message.notFeaturingCounty };
    res.status(200).json(successAction(data, Message.userAdded));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};

/**************** Login user ***********/
export const login = async (req, res, next) => {
  const payload = req.body;
  try {
    const data = await _login(payload);
    res.status(200).json(successAction(data, Message.success));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};

/**************** Logout user ***********/
export const logout = async (req, res, next) => {
  const payload = req.user;
  try {
    await _logout(payload);
    res.status(200).json(successAction(null, Message.success));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};
