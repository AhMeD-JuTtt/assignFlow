import mongoose from "mongoose";
const { Schema } = mongoose;

const ExpertOrdersSchema = new Schema({

    expertId: { type: String, required: true },
    orderIds: { type: [String], default: [] },

})

export const expertOrdersModel = mongoose.models?.expert_orders || mongoose.model("expert_orders", ExpertOrdersSchema)