import express, { type Application } from "express";
import { recordatoryRouter } from "./components";
import { medicacionRouter } from "./components";

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

export default app;
