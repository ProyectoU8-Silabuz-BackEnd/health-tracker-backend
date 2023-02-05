import { Router } from "express";
import passport from "passport";
import { checkRoles } from "../../middleware/handler/roleHandler";
import {allpastillas, findpastillas, addpastilla} from "./controller";

const pastillarouter =Router();

pastillarouter.get("/", allpastillas);
pastillarouter.get("/:id", findpastillas);

pastillarouter.post("/", 
    passport.authenticate('jwt',{session:false}),
    checkRoles(['doctor','admin']),
    addpastilla);

export default pastillarouter;

