import { Router } from "express";
import passport from "passport";
import { checkRoles } from "../../middleware/handler/roleHandler";
import { findAllUsers, findiduser,adduser } from "./controller";

const userrouter: Router = Router();

userrouter.get("/",
        passport.authenticate('jwt',{session:false}), 
        findAllUsers);

userrouter.get("/:id",
        passport.authenticate('jwt',{session:false}),
        checkRoles(['admin']),
        findiduser);
        
userrouter.post("/", adduser);



export default userrouter