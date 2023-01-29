import { Router } from "express";
import { inventarioFindAll, inventarioFindOne, pastillaAdd } from "./controller";

const inventarioRouter: Router = Router();

inventarioRouter.get("/", inventarioFindAll);
inventarioRouter.get("/:pastillaId", inventarioFindOne);
inventarioRouter.post("/", pastillaAdd);

export default inventarioRouter;