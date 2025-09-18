import {getAuth} from "@clerk/nextjs/server"

export async function GET(request) {
    try {
 
       

        await connectDB()
        const products = await Product.find({})
        return NextResponse.json({success:true, products})
        

    }catch (error) {
 return NextResponse.json({success:false, message:error.message})
    }
        
}