import type { Request, Response} from "express";
import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

export const allpacientes = async (_req: Request, res: Response): Promise<void> => {
    try {
        const pacientes = await prisma.pacients.findMany();

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
        const pacienteid = await prisma.pacients.findUnique({where: {
        id: Number(id),
                },});
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
        const data = req.body;

        await prisma.pacients.create({
            data,
            include:{
                users:true
            }
        });
                res.status(201).json({
                    ok:true, message: "Paciente añadido correctamente"
                });

            }
     catch (error) {
        res.status(500).json({
            ok:false,
            message:error
        });    
    }
}