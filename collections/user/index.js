/*
 * @file: index.js
 * @description: It Contain function layer for user collection.
 * @author: Dixit
 */

import mongoose from "mongoose";
import dbSchema from "./db-schema";
import { Somerset, Middlesex } from "./../../utilities/constants";

class UserClass {
    static saveUser(payload) {
        return this(payload).save();
    }
    static checkEmail(email) {
        return this.findOne({ email });
    }

    static checkAddressVerified(payload) {
        return this.findOne(payload);
    }

    static checkAcountOtp(payload) {
        return this.findOne({ role: { $ne: 1 }, status: { $ne: 0 }, ...payload });
    }

    static checkMobile(mobile) {
        return this.findOne({
            role: { $ne: 1 },
            status: { $ne: 0 },
            mobile: mobile
        });
    }
    static findOneByCondition(condition) {
        return this.findOne({ status: { $ne: 0 }, ...condition });
    }
    static findByCondition(condition) {
        return this.find({ role: { $ne: 1 }, ...condition });
    }
    static checkUsername(username) {
        return this.findOne({ username });
    }
    static checkZipCode(counties, zipCode) {
        if (Somerset.indexOf(zipCode) !== -1) {
            return true;
        } else if (Middlesex.indexOf(zipCode) !== -1) {
            return true;
        } else {
            return false;
        }
    }
    static checkToken(token) {
        return this.findOne({ "loginToken.token": token });
    }
    static updateLoginToken(userId, loginToken, payload = {}) {
        let updateData = {
            $set: {
                lastLogin: new Date(),
                "loginToken.$.token": loginToken
            }
        };
        return this.findOneAndUpdate({ _id: userId, "loginToken.deviceToken": payload["deviceToken"] },
            updateData, { new: true }
        );
    }

    static saveLoginToken(userId, updateQuery) {
        let updateData = {
            $set: updateQuery
        };
        return this.findByIdAndUpdate(userId, updateData, { new: true });
    }
    static updateUser(payload) {
        let updateData = {
            $set: {
                ...payload
            }
        };
        if (payload.referred) {
            updateData = { ...updateData, $inc: { referredCount: 1 } };
        }
        return this.findByIdAndUpdate(payload.userId, updateData, { new: true });
    }

    static updateUserReferral(userId, payload) {
        let updateData = { $addToSet: { referredTo: payload } };
        return this.findByIdAndUpdate(userId, updateData, { new: true });
    }
    static logout(userId, token) {
        let updateData = {
            $set: {
                loginToken: {}
            }
        };
        return this.findOneAndUpdate({ _id: userId, "loginToken.token": token },
            updateData, { new: true }
        );
    }
}

dbSchema.loadClass(UserClass);

export default mongoose.model("User", dbSchema);