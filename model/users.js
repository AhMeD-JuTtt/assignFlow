import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },

})

export const userModel = mongoose.models?.users || mongoose.model("users", UserSchema)