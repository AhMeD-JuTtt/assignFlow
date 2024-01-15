import dbConnect from "@/config/db"
import { expertModel } from "@/model/experts";
import { NextResponse } from "next/server"

dbConnect();

export async function GET() {
    try {
        const experts = await expertModel.find().select({password: 0, role: 0});
        return NextResponse.json(experts)
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({message:"Something went wrong", error: error.message})
    }
}
