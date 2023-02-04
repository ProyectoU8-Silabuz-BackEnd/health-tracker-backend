import { Router } from "express";
import passport from "passport";
import { checkRoles } from "../../middleware/handler/roleHandler";
import { createDoctor, getAll, getDoctor } from "./controller";

const doctorrouter: Router = Router();

doctorrouter.get("/",
        passport.authenticate('jwt',{session:false}),
        checkRoles(['admin']),
        getAll);
        doctorrouter.get("/:id",passport.authenticate('jwt',{session:false}),getDoctor );
doctorrouter.post("/",
        passport.authenticate('jwt',{session:false}),
        checkRoles(['doctor']),
        createDoctor);

export default doctorrouter;