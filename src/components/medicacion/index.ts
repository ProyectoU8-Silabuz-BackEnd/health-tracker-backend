import { Router } from "express";
import { medicacionFindAll, medicacionFindOne, medicacionAdd } from "./controller";

const medicacionRouter: Router = Router();

medicacionRouter.get("/", medicacionFindAll);
medicacionRouter.get("/:pacienteId/:pastillaId", medicacionFindOne);
medicacionRouter.post("/", medicacionAdd);

export default medicacionRouter;