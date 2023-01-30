import express, { type Application } from "express";
import { recordatoryRouter } from "./components";
import { medicacionRouter } from "./components";
import { inventarioRouter } from "./components";

const app: Application = express();
//hello world
app.get("/",(req,res)=>{
    res.json(
        {
            "Title": "Hola mundito"
        }
    );
})

app.use("/api/v1/recordatory", recordatoryRouter);
app.use("/api/v1/medicacion", medicacionRouter);
app.use("/api/v1/inventario", inventarioRouter);

export default app;
