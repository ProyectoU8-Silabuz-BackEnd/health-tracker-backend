import type { Request, Response} from "express";
import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

export const getAll = async (_req: Request, res: Response): Promise<void> => {
    try {
        const doctor = await prisma.doctor.findMany({
            include: {
                users: true,
              },
        });

        res.status(200).json({
            ok: true,
            data: doctor,
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
}



export const getDoctor = async (req:Request, res: Response): Promise<void> => {

    try { const {id} = req.params;
        const doctor = await prisma.doctor.findUnique({
            where: {
                id: Number(id),
                },
            include:{
                users:true,
            },
        });
        res.status(200).json({
            ok:true,
            data: doctor ,
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            message: error,
        })
        
    }
}


export const createDoctor= async(req:Request, res: Response): Promise<void> =>{
    try {
        const data = req.body;

        const doctor=await prisma.doctor.create({
            data,
            include:{
                users:true
            }
        });
        res.status(201).json({
            ok:true, 
            message: "Doctor añadido correctamente",
            doctor: doctor
        });

        }catch (error) {
        res.status(500).json({
            ok:false,
            message:error
        });    
    }
}