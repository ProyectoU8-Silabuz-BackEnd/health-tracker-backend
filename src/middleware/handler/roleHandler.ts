import { User } from "./../../interfaces/userInterface";
import type { Request, Response,NextFunction} from "express";


export function checkRoles(roles:string[]){
    return (req:Request,res:Response,next:NextFunction)=>{
        const user=req.user as User;
        if (roles.includes(user.rol)){
            next();
        } else{
            next({ err: "No estas autorizado" });
        }

    }
}