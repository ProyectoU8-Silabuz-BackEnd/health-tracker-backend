import type { Request, Response} from "express";
import { PrismaClient } from "@prisma/client";
import {hash} from "bcrypt"
const prisma= new PrismaClient();

export const allpacientes = async (_req: Request, res: Response): Promise<void> => {
    try {
        const pacientes = await prisma.pacients.findMany({
            include:{
                users:true
            }
        });

        res.status(200).json({
            ok: true,
            data: pacientes,
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
}



export const findpaciente = async (req:Request, res: Response): Promise<void> => {

    try { const {id} = req.params;
        const pacienteid = await prisma.pacients.findUnique({
            where: {
                id: Number(id),
                },
            include:{
                users:true
            }
            });
        res.status(200).json({
            ok:true,
            data:pacienteid ,
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            message: error,
        })
        
    }
}


export const addpaciente= async(req:Request, res: Response): Promise<void> =>{
    try {
        const {nombre,dni,edad,celular,users} = req.body;
        var role;
        console.log(users);
        const hashP=await hash(users.password,10);
        const pacient=await prisma.pacients.create({
            data:{
                nombre:nombre,
                dni:dni,
                edad:edad,
                celular:celular,
                users: {
                    connectOrCreate:{
                        where:{
                            correo:users.correo
                        },
                        create:{
                            correo:users.correo,
                            password:hashP,
                            rol:"pacient"
                        },
                    },
                },
            },
            include:{
                users:true
            }
        });
                res.status(201).json({
                    ok:true, 
                    message: "Paciente añadido correctamente",
                });

            }
     catch (error) {
        res.status(500).json({
            ok:false,
            message:error
        });    
    }
}