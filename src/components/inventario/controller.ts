import type { Request, Response} from "express";
import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

export const inventarioFindAll = async (_req: Request, res: Response): Promise<void> => {
    try {
        const inventario = await prisma.inventory.findMany();

        res.status(200).json({
            ok: true,
            data: inventario,
        });

    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
}

export const inventarioFindOne = async (req:Request, res: Response): Promise<void> => {

    try {

    	const {pastillaId} = req.params;

        const pastillaStock = await prisma.inventory.findUnique({
        	where:{
		        id: Number(pastillaId),
		    },
		});

        res.status(200).json({
            ok: true,
            data: pastillaStock,
		})

    } catch (error) {

        res.status(500).json({
            ok:false,
            message: error,
        })
        
    }
}

export const pastillaAdd = async (req: Request, res: Response): Promise<void> => {
    try {

    	const {pastillaId, cantidad} = req.body;

        const pastillaStock = await prisma.inventory.create({
        	data: {
		        pastillaId: Number(pastillaId),
		        cantidad: cantidad,
		    },
		});

        res.status(201).json({
            ok: true,
            message: "pastilla y su cantidad añadidas correctamente",
		})

    } catch (error) {

        res.status(500).json({
            ok:false,
            message: error,
        })
        
    }
}