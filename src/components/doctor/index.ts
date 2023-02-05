import { Router } from "express";
import passport from "passport";
import { checkRoles } from "../../middleware/handler/roleHandler";
import { createDoctor, getAll, getDoctor } from "./controller";

const doctorrouter: Router = Router();

doctorrouter.get("/",
        passport.authenticate('jwt',{session:false}),
        checkRoles(['admin']),
        getAll);


doctorrouter.get("/:id",
        passport.authenticate('jwt',{session:false}),
        checkRoles(['admin','doctor']),
        getDoctor );

doctorrouter.post("/",
        passport.authenticate('jwt',{session:false}),
        createDoctor);

export default doctorrouter;