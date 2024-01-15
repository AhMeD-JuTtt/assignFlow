import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

// Embedded document schemas
export const AcademicSchema = new Schema({
    edu: { type: String, required: true },
    paperType: { type: String, required: true },
    discipline: { type: String, required: true },
    pages: { type: Number, required: true },
    instructions: { type: String },
    paperLvl: { type: String, required: true },
});

export const CalculationsSchema = new Schema({
    discipline: { type: String, required: true },
    software: { type: String, required: true },
    instructions: { type: String },
    taskSize: { type: String, required: true },
});

export const ProgrammingSchema = new Schema({
    progLang: { type: String, required: true },
    field: { type: String, required: true },
    instructions: { type: String },
    taskSize: { type: String, required: true },
});

// Base schema with embedded document
const baseSchema = new Schema({
    userId: { type: String, required: true },
    expertId: { type: String, required: true },
    assignmentCategory: { type: String, required: true },
    status: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    orderDetails: {
        type: { type: String, required: true },
        details: Schema.Types.Mixed, // Allow any schema
    },
});

// Create a model based on the schema
export const OrderModel = models?.all_Orders || model('all_Orders', baseSchema);