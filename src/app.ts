import express, { type Application } from "express";
import { loginrouter, recordatoryRouter } from "./components";
import { medicacionRouter } from "./components";
import { inventarioRouter } from "./components";

const app: Application = express();
app.use(express.json());


app.use("/api/v1/recordatory", recordatoryRouter);
app.use("/api/v1/medicacion", medicacionRouter);
app.use("/api/v1/inventario", inventarioRouter);
app.use("/api/v1/user/login", loginrouter);

export default app;
