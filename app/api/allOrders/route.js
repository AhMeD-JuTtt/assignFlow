import dbConnect from "@/config/db"
import { OrderModel } from "@/model/orders";
import { userModel } from "@/model/users";
import { NextResponse } from "next/server"

dbConnect();

export async function GET() {
    try {
        // let data = {orders:{}, users:{}}
        const orders = await OrderModel.find();
        const uniqueUserIds = [...new Set(orders.map(order => order.userId))];
        
        const users = [];

        for (const id of uniqueUserIds) {
        const user = await userModel.findOne({ _id: id }).select({password: 0});
        delete user.password
        users.push(user);
        }
        
        const data = {orders, users}
        // data.push(user)

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