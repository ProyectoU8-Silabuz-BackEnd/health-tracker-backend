import express, { type Application } from "express";
import { loginrouter, recordatoryRouter,
        medicacionRouter,inventarioRouter,
        enfermedadRouter } from "./components";
import { twiliorouter } from "./services";



const app: Application = express();
app.use(express.json());


app.use("/api/v1/recordatory", recordatoryRouter);
app.use("/api/v1/medicacion", medicacionRouter);
app.use("/api/v1/inventario", inventarioRouter);
app.use("/api/v1/enfermedad", enfermedadRouter);
app.use("/api/v1/user/login", loginrouter);
app.use("/api/v1/twilio",twiliorouter)
export default app;
