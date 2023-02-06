import type { Request, Response} from "express";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import jwt from 'jsonwebtoken';


const prisma= new PrismaClient();
const secreto=process.env.SECRET_KEY;


export const login=async (req:Request,res:Response): Promise<void>  =>{
    try {
        const user=req.user;
        const token=jwt.sign({user},process.env.SECRET_KEY as string);
        res.status(200).json({
            ok:true,
            user:user,
            token:token
        })
    } catch (error) {
        res.status(500).json({
            ok:false,
            message:error
        })
    }
}