import { Router } from "express";
import { findAllUsers, findiduser,adduser } from "./controller";

const userrouter: Router = Router();

userrouter.get("/", findAllUsers);
userrouter.get("/:id", findiduser);
userrouter.post("/", adduser);



export default userrouter