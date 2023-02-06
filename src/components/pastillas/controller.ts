import type { Request, Response} from "express";
import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

export const allpastillas = async (_req: Request, res: Response): Promise<void> => {
    try {
        const pastillas= await prisma.pastillas.findMany();
        res.status(200).json({
            ok:true,
            data : pastillas,

        });
    } catch (error) {
        res.status(500).json({
            ok:false,message:error});
        }
    }


export const findpastillas = async (req:Request, res: Response): Promise<void> => {

    try { const {id} = req.params;
        const idpastilla= await prisma.pastillas.findUnique({ where:{
            id: Number(id),
        },});

        res.status(200).json({
            ok:true,
            data : idpastilla,
        })
        } catch (error) {
            res.status(500).json({
                ok:false,message:error});
            }
        }
            

export const addpastilla= async(req:Request, res: Response): Promise<void> =>{
    try {
        const {id_enfermedad,nombre,  dosis,recordatory,inventory} = req.body;

        await prisma.pastillas.create({
            data:{
                id_enfermedad: id_enfermedad,
                nombre: nombre,
                dosis:dosis,
                recordatory:recordatory,
                inventory:inventory
            }
        });

        res.status(200).json({
            ok:true,message:"Pastilla agredada correctamente"
        });

    } catch (error) {
        res.status(500).json({

            ok:false,message:error

        });
    }
}