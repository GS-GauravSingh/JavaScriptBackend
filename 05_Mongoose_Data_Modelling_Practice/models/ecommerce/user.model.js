import mongoose from "mongoose"

// Schema
const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
    }

}, { timestamps: true });

// Creating and exporting model.
export const User = mongoose.model("User", userSchema);