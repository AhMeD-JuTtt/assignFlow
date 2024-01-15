import dbConnect from "@/config/db"
import { expertOrdersModel } from "@/model/expert_orders";
import { AcademicSchema, CalculationsSchema, OrderModel, ProgrammingSchema } from "@/model/orders";
import { NextResponse } from "next/server"

dbConnect();

export const POST = async (req) => {
    try {
        const body = await req.json()
        // console.log(body);

        const chkAlreadyAssigned = (allAssignedOrders) => {
            for (const order of allAssignedOrders) {
                if (order.orderIds.includes(body.orderId)) {
                    return true
                }
            }
            return false
        }

        const allAssignedOrders = await expertOrdersModel.find()
        // console.log(allAssignedOrders);
        const existingAssignedOrder = await expertOrdersModel.findOne({expertId:body.expertId})
        
        if (chkAlreadyAssigned(allAssignedOrders)) {
            return NextResponse.json({ message: 'Already Assigned to someone' });
        }
        if (existingAssignedOrder) {
            if (!existingAssignedOrder.orderIds.includes(body.orderId)) {
                const updatedAssignedOrder = await expertOrdersModel.findOneAndUpdate(
                    { expertId: body.expertId },
                    { $push: { orderIds: body.orderId } },
                    { new: true }
                    );
                await OrderModel.updateOne({ _id: body.orderId}, 
                    {$set: {
                      expertId: body.expertId,
                      status: "Expert Assigned"
                        }
                    });
            }
        } else {
            await expertOrdersModel.create({
                expertId: body.expertId,
                orderIds: [body.orderId],
            });
            await OrderModel.updateOne({ _id: body.orderId},  
                {$set: {
                    expertId: body.expertId,
                    status: "Expert Assigned"
                    }
                });
        }
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