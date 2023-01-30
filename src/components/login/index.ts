import passport from "passport";
import { Router } from "express";
import {login} from "./controller";


require("../../middleware/auth");
const loginrouter: Router = Router();

loginrouter.post("/",passport.authenticate('local',{session:false}),login);

export default loginrouter;