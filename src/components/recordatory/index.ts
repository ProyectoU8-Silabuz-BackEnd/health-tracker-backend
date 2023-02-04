import { Router } from "express";
import passport from "passport";
import { create, findAll, findRecordatory } from "./controller";
import {checkRoles} from "./../../middleware/handler/roleHandler"

const recordatoryRouter: Router = Router();

recordatoryRouter.get("/",
    passport.authenticate('jwt',{session:false}),
    checkRoles(['admin']),
    findAll);


recordatoryRouter.get("/:id",
    passport.authenticate('jwt',{session:false}),
    checkRoles(['paciente','doctor','admin']),
    findRecordatory)

recordatoryRouter.post("/",
    passport.authenticate('jwt',{session:false}),
    checkRoles(['paciente','doctor','admin']),
    create);

export default recordatoryRouter;