import dbConnect from "@/config/db"
import { userModel } from "@/model/users"
import { NextResponse } from "next/server"
dbConnect()

export const POST = async (req) => {
    try {
        const body = await req.json()
        const existing = await userModel.findOne({email: body.email})
        if (!existing) {
            await userModel.create({
                name: body.name,
                email:body.email,
                password:body.password,
                role:body.role,
            });
            return NextResponse.json({message:"Successfully Created", ok: true})
        } else {
            return NextResponse.json({message:"Email already exists!", ok: false})
        }
    } catch (error) {
        return NextResponse.json({message:"Something went wrong", error: JSON.stringify(error)})
    }
}