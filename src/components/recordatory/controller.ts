import type { Request, Response} from "express";
import { PrismaClient } from "@prisma/client";


const prisma= new PrismaClient();



export const findAll = async (_req: Request, res: Response): Promise<void> => {
    try {
        const recordatory = await prisma.recordatory.findMany();
        console.log(recordatory);
        res.status(200).json({
            ok: true,
            data: recordatory,
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }

}

export const create= async (req:Request, res: Response): Promise<void> =>{
    console.log(req.body);
    try {
        const data = req.body;
        console.log("test");
        // console.log(paciente_id,medicacion_id,metodo_notificacion,Hora);
        await prisma.recordatory.create({data});
        res.status(201).json({
            ok:true, message: "Recordatorio creado correctamente"
        });

    }
     catch (error) {
        res.status(500).json({
            ok:false,
            message:error
        });    
    }
}