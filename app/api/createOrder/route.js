import dbConnect from "@/config/db"
import { AcademicSchema, CalculationsSchema, OrderModel, ProgrammingSchema } from "@/model/orders";
import { NextResponse } from "next/server"

dbConnect();

export const POST = async (req) => {
    try {
        const body = await req.json()
        const userId = body.userId
        const expertId = body.expertId
        const assignmentCategory = body.assignmentCategory
        const status = body.status
        delete body.userId;
        delete body.assignmentCategory;
        delete body.status;
        delete body.expertId;
        const order = {userId: userId, expertId: expertId, assignmentCategory: assignmentCategory, status:status, orderDetails: body}

        let schema;

        switch (order.assignmentCategory) {
            case 'Academic Writing':
                schema = AcademicSchema;
                break;

            case 'Programming Assignment':
                schema = ProgrammingSchema;
                break;

            case 'Calculations Assignment':
                schema = CalculationsSchema;
                break;

            default:
                throw new Error('Invalid assignment category');
        }

        const doc = await OrderModel.create({
            userId: order.userId,
            expertId: order.expertId,
            assignmentCategory: order.assignmentCategory,
            status: order.status,
            orderDetails: {
                type: order.assignmentCategory.toLowerCase(), 
                details: order.orderDetails,
            },
        });

        return NextResponse.json({ message: 'Order created successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Something went wrong', error });
    }
}

export async function GET(req) {
    try {
        const userId = req.nextUrl.searchParams.get('userId');
        const orders = await OrderModel.find({ userId: userId });
        return NextResponse.json(orders)
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({message:"Something went wrong", error: error.message})
    }
}

export const PUT = async (req) => {
    try {
        const body = await req.json()
        await OrderModel.updateOne({ _id: body._id}, {status:body.status});
        return NextResponse.json({message:"Successfully Updated"})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong", error: JSON.stringify(error)})
    }
}