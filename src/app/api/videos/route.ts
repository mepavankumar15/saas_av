
import { NextResponse } from "next/server"
import { PrismaClient } from "@/generated/prisma"


const prisma = new PrismaClient() 


export async function GET(){
    try {
       const videos = await prisma.video.findMany({
            orderBy :{
                createdAt : "desc"
            }
        })

        return NextResponse.json(videos)
    } catch (error: unknown) {
        console.error("Error fetching videos:", error);
        return NextResponse.json({error: "error fetching videos"}, {status:500})
    } finally {
        await prisma.$disconnect()
    }
}