import mongoose from "mongoose";
const { Schema } = mongoose;

const ExpertSchema = new Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },

})

export const expertModel = mongoose.models?.experts || mongoose.model("experts", ExpertSchema)