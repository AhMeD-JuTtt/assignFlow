import dbConnect from "@/config/db"
import { expertOrdersModel } from "@/model/expert_orders";
import { AcademicSchema, CalculationsSchema, OrderModel, ProgrammingSchema } from "@/model/orders";
import { userModel } from "@/model/users";
import { NextResponse } from "next/server"

dbConnect();

// export const POST = async (req) => {
//     try {
//         const body = await req.json()
//         const userId = body.userId
//         const expertId = body.expertId
//         const assignmentCategory = body.assignmentCategory
//         const status = body.status
//         delete body.userId;
//         delete body.assignmentCategory;
//         delete body.status;
//         delete body.expertId;
//         const order = {userId: userId, expertId: expertId, assignmentCategory: assignmentCategory, status:status, orderDetails: body}

//         let schema;

//         switch (order.assignmentCategory) {
//             case 'Academic Writing':
//                 schema = AcademicSchema;
//                 break;

//             case 'Programming Assignment':
//                 schema = ProgrammingSchema;
//                 break;

//             case 'Calculations Assignment':
//                 schema = CalculationsSchema;
//                 break;

//             default:
//                 throw new Error('Invalid assignment category');
//         }

//         const doc = await OrderModel.create({
//             userId: order.userId,
//             expertId: order.expertId,
//             assignmentCategory: order.assignmentCategory,
//             status: order.status,
//             orderDetails: {
//                 type: order.assignmentCategory.toLowerCase(), 
//                 details: order.orderDetails,
//             },
//         });

//         return NextResponse.json({ message: 'Order created successfully' });
//     } catch (error) {
//         return NextResponse.json({ message: 'Something went wrong', error });
//     }
// }

export async function GET(req) {
    try {
        const expertId = req.nextUrl.searchParams.get('expertId');
        const expertOrder = await expertOrdersModel.findOne({ expertId: expertId });
        const orderIds = expertOrder.orderIds
        let orders = []
        const users = [];
        
        for (const id of orderIds) {
            const order = await OrderModel.findById(id)
            orders.push(order)
        }
        
        const uniqueUserIds = [...new Set(orders.map(order => order.userId))];

        for (const id of uniqueUserIds) {
        const user = await userModel.findOne({ _id: id }).select({password: 0});
        // delete user.password
        users.push(user);
        }
        
        const data = {orders, users}
        return NextResponse.json(data)
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