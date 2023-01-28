import express, { type Application } from "express";

const app: Application = express();
//hello world
app.get("/",(req,res)=>{
    res.json(
        {
            "Title": "Hola mundito"
        }
    );
})


export default app;
