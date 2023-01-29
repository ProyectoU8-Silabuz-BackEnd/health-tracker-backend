import { Router } from "express";
import { create, findAll } from "./controller";

const recordatoryRouter: Router = Router();

recordatoryRouter.get("/",findAll);
recordatoryRouter.post("/",create);

export default recordatoryRouter;