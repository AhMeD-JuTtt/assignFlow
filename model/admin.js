import mongoose from "mongoose";
const { Schema } = mongoose;

const AdminSchema = new Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },

})

export const adminModel = mongoose.models?.admins || mongoose.model("admins", AdminSchema)