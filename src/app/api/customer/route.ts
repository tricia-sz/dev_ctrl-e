import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import prismaClient from "@/lib/prisma"

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);

    if(!session || !session.user) {
        return NextResponse.json({error: "Not Authorized"}, {status: 401})
    }

    const {name, email, phone, address, userId} =  await  request.json();

    try{
        await prismaClient.customer.create({
            data: {
                name,
                phone,
                email,
                address: address ? address : "",
                userId: userId
            }
        })

        return NextResponse.json({message: "Cliente cadastrado com sucesso!"})

    }catch(err){
        return NextResponse.json({error: "failed create new customerd"}, {status: 400})
    }
    
    

}   