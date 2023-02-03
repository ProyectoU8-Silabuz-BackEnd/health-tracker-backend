import { Router } from "express";
import { createDoctor, getAll, getDoctor } from "./controller";

const inventarioRouter: Router = Router();

inventarioRouter.get("/", getAll);
inventarioRouter.get("/:id",getDoctor );
inventarioRouter.post("/", createDoctor);

export default inventarioRouter;