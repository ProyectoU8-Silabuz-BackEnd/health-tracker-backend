import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();


export async function findByEmail(correo:string){
    const user=await prisma.user.findUnique({
     where:{
         correo
     }
    });
    return user;
 }