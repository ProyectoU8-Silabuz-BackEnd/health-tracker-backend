
import type { Request, Response} from "express";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma= new PrismaClient();



export const findAllUsers = async (_req: Request, res: Response): Promise<void> => {
    try {
        const users = await prisma.user.findMany();

        res.status(200).json({
            ok: true,
            data: users,
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
}


export const findiduser = async (req:Request, res: Response): Promise<void> => {

    try { const {id} = req.params;
        const userid = await prisma.user.findUnique({
            where: {
                id: Number(id),
                },
        });
        res.status(200).json({
            ok:true,
            data:userid,
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            message: error,
        })
        
    }
}


export const adduser= async(req:Request, res: Response): Promise<void> =>{
    try {
        const {correo, password,rol} = req.body;
        var role:string;
        if(!rol){
             role="admin";
        }
        
        hash(password,10,async (error:any,hashP:string)=>
        {
            if(error){
                res.status(500).json({
                    ok:false,
                    message:"error"
                })

                return
            }
            else{
                await prisma.user.create({
                    data:{
                        correo: correo,
                        password: hashP,
                        rol:role        
                    }
                });
                res.status(201).json({
                    ok:true, message: "Admin creado correctamente"
                });

            }
        }    
        )
        
    
    } catch (error) {
        res.status(500).json({
            ok:false,
            message:error
        });    
    }
}
