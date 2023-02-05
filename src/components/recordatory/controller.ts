import type { Request, Response} from "express";
import { PrismaClient } from "@prisma/client";
import { Connect } from "twilio/lib/twiml/VoiceResponse";


const prisma= new PrismaClient();



export const findAll = async (_req: Request, res: Response): Promise<void> => {
    try {
        const recordatory = await prisma.recordatory.findMany({
            include:{
                medicamento:true,
                pacientes:true
            }
        });

        res.status(200).json({
            ok: true,
            data: recordatory,
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }

}


export const findRecordatory = async (req:Request, res: Response): Promise<void> => {

    try { const {id} = req.params;
        const recordatory = await prisma.recordatory.findUnique({
            where: {
                id: Number(id),
                },
            include:{
                pacientes:true,
                medicamento:true
            }
            });
        res.status(200).json({
            ok:true,
            data:recordatory ,
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            message: error,
        })
        
    }
}


export const create= async (req:Request, res: Response): Promise<void> =>{
    console.log(req.body);
    try {
        const {Fecha_inicio,
            Fecha_fin,
            interval,
            message,
            medicamento,
            pacientes} = req.body;
        await prisma.recordatory.create({
            data:{
                Fecha_inicio:new Date(Fecha_inicio),
                Fecha_fin:new Date(Fecha_fin),
                interval:interval,
                message:message,
                medicamento:{connect:{id:medicamento}},
                pacientes:{connect:{id:pacientes}}
            }
        });
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