import { Router } from "express";
import passport from "passport";
import { checkRoles } from "../../middleware/handler/roleHandler";
import { allpacientes, findpaciente,addpaciente } from "./controller";

const pacienterouter: Router = Router();

pacienterouter.get("/",
        passport.authenticate('jwt',{session:false}), 
        checkRoles(['admin']),
        allpacientes);

pacienterouter.get("/:id",
        passport.authenticate('jwt',{session:false}),
        checkRoles(['pacient','admin']),
        findpaciente);

pacienterouter.post("/", 
        passport.authenticate('jwt',{session:false}),
        checkRoles(['pacient','admin']),
        addpaciente);



export default pacienterouter