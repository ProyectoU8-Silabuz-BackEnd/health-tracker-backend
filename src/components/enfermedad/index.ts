import { Router } from "express";
import { enfermedadAdd,enfermedadFindAll,enfermedadfindOne } from "./controller";

const enfermedadRouter: Router = Router();

enfermedadRouter.get("/", enfermedadFindAll);
enfermedadRouter.get("/:enfermedadId", enfermedadfindOne);
enfermedadRouter.post("/", enfermedadAdd);

export default enfermedadRouter;