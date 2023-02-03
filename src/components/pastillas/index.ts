import { Router } from "express";
import {allpastillas, findpastillas, addpastilla} from "./controller";

const pastillarouter =Router();

pastillarouter.get("/", allpastillas);
pastillarouter.get("/:id", findpastillas);
pastillarouter.post("/", addpastilla);

export default pastillarouter;

