/*
 * @file: db-schema.js
 * @description: It Contain db schema for user collection.
 * @author: Dixit
 */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        default: ""
    },
    password: {
        type: String
    },
    dob: {
        type: String,
        default: ""
    },
    loginToken: {
        token: {
            type: String,
            default: ""
        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    },
    status: {
        type: Number,
        default: 1 // 0 account deleted, 1 active, 2 block
    },
    lastLogin: {
        type: Date,
        default: null
    },
    role: {
        type: Number,
        default: 2 // 1 => ADMIN, 2 => USER
    }
}, { timestamps: true });

export default userSchema;