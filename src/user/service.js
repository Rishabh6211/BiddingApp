/*
 * @file: user.js
 * @description: It Contain function layer for user service.
 * @author: Dixit
 */
import User from "../../collections/user";
import Message from "../../utilities/messages";
import { encryptpassword, generateToken } from "../../utilities/universal";

/********** Save users **********/
export const _register = async payload => {
    if (await User.checkEmail(payload.email)) throw new Error(Message.emailAlreadyExists);
    payload.password = encryptpassword(payload.password);
    return await User.saveUser(payload);
};

/********** Login users **********/
export const _login = async payload => {
    const userData = await User.checkEmail(payload.email);
    if (!userData) throw new Error(Message.invalidCredentials);
    if (userData.status === 0) throw new Error(Message.accountDeleted);
    if (userData.status === 2) throw new Error(Message.userBlocked);
    let loginToken = generateToken({
        when: new Date(),
        lastLogin: userData.lastLogin,
        role: userData.role,
        userId: userData._id
    });
    let updateQuery = {
        lastLogin: new Date(), loginToken: { token: loginToken, deviceType: userData.loginToken.deviceType }
    };
    const data = await User.saveLoginToken(userData._id, updateQuery);
    return { _id: data._id, loginToken: data.loginToken.token, lastLogin: data.lastLogin };
};

/********** Logout users **********/
export const _logout = async payload => {
    return await User.logout(payload.userId, payload.token);
};