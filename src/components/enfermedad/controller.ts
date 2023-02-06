import type { Request, Response} from "express";
import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

export const enfermedadFindAll = async (_req: Request, res: Response): Promise<void> => {
    try {
        const enfermedades = await prisma.enfermedad.findMany();

        res.status(200).json({
            ok: true,
            data: enfermedades,
        });

    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error 
        });
    }
}

export const enfermedadfindOne = async (req:Request, res: Response): Promise<void> => {

    try {

    	const {enfermedadId} = req.params;;

        const enfermedad = await prisma.enfermedad.findUnique({
        	where:{
		        id: Number(enfermedadId),
		    },
		});

        res.status(200).json({
            ok: true,
            data: enfermedad,
		});

    } catch (error) {

        res.status(500).json({
            ok:false,
            message: error,
        });
        
    }
}

export const enfermedadAdd = async (req: Request, res: Response): Promise<void> => {

    try{
        const {name,gravedad} = req.body;

        const enfermedad = await prisma.enfermedad.create({
            data:{
                name:name,
                gravedad:Number(gravedad)
            }
        });
    
        res.status(201).json({
            ok:true,
            message: "enfermedad agregada"
        });
    } catch(error){

        res.status(500).json({
            ok:false,
            message:error
        });
    }
}