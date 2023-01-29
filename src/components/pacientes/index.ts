import { Router } from "express";
import { allpacientes, findpaciente,addpaciente } from "./controller";

const pacienterouter: Router = Router();

pacienterouter.get("/", allpacientes);
pacienterouter.get("/:id", findpaciente);
pacienterouter.post("/", addpaciente);



export default pacienterouter