import type { Request, Response} from "express";
import { PrismaClient } from "@prisma/client";
import { Connect } from "twilio/lib/twiml/VoiceResponse";
import { getDateArray } from "../../services/twilio/funciones";
import { sendSMS } from "../../services/twilio/controller";


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
        
        let fechainicial = new Date(Fecha_inicio);
        let fechafinal = new Date(Fecha_fin);
        let intervalo_milisegundos= Number(interval)*1000*60*60;
        let datearray= getDateArray(fechainicial, fechafinal, intervalo_milisegundos);
        console.log(fechainicial,fechafinal,intervalo_milisegundos,datearray);
        await prisma.recordatory.create({
            data:{
                Fecha_inicio:fechainicial,
                Fecha_fin:fechafinal,
                interval:interval,
                message:message,
                medicamento:{connect:{id:medicamento}},
                pacientes:{connect:{id:pacientes}}
            }
        });
        const paciente=await prisma.pacients.findUnique({
            where:{
                id:pacientes
            }
        })
        console.log(paciente?.celular);
        for (let i = 0; i < datearray.length; i++) {
            const respuesta=sendSMS(paciente?.celular!,datearray[i],message||"enviado desde twilio",);
            console.log(respuesta);
        };
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