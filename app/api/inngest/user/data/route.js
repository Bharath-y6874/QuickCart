import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "@/config/db";


export async function GET(request){

    try{

        const { userId } =getAuth(request)

        await connectDB()
        const user = await User.findById(UserId)
        if (!user) {
            return NextResponse.json({ message: "User not found", success : false}) 
} 
return NextResponse.json({  success : true, user})
}catch(error){
     return NextResponse.json({ message: "error.message", success : false}) 
}

}