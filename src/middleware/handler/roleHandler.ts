import { UserPayload } from "./../../interfaces/userInterface";
import type { Request, Response,NextFunction} from "express";


export function checkRoles(roles:any){
    return (req:Request,res:Response,next:NextFunction)=>{
        const usuario=req.user as UserPayload;
        if (roles.includes(usuario.user.rol)){
            next();
        } else{
            res.status(200).json({
                ok:false,
                message:"No estas autorizado"
            })
        }

    }
}