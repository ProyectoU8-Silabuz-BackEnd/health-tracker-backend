import type { Request, Response} from "express";
import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

export const medicacionFindAll = async (_req: Request, res: Response): Promise<void> => {
    try {
        const medicaciones = await prisma.medicacion.findMany();

        res.status(200).json({
            ok: true,
            data: medicaciones,
        });

    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
}

export const medicacionFindOne = async (req:Request, res: Response): Promise<void> => {

    try {

    	const {pacienteId, pastillaId} = req.params;

        const medicacion = await prisma.medicacion.findUnique({
        	where:{
		        pacienteId: Number(pacienteId),
		        pastillaId: Number(pastillaId),
		    },
		});

        res.status(200).json({
            ok: true,
            data: medicacion,
		})

    } catch (error) {

        res.status(500).json({
            ok:false,
            message: error,
        })
        
    }
}

export const medicacionAdd = async (req: Request, res: Response): Promise<void> => {
    try {

    	const {pacienteId, pastillaId} = req.params;

        const medicacion = await prisma.medicacion.create({
        	data: {
		        pacienteId: Number(pacienteId),
		        pastillaId: Number(pastillaId),
		    },
		});

        res.status(201).json({
            ok: true,
            data: medicacion,
            message: "medicacion añadida correctamente",
		})

    } catch (error) {

        res.status(500).json({
            ok:false,
            message: error,
        })
        
    }
}