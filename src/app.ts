import express, { type Application } from "express";
import { loginrouter, recordatoryRouter,
        inventarioRouter,enfermedadRouter, 
        pacienterouter, doctorrouter, userrouter, pastillarouter } from "./components";
import { twiliorouter } from "./services";



const app: Application = express();
app.use(express.json());


app.use("/api/v1/recordatory", recordatoryRouter);
app.use("/api/v1/inventario", inventarioRouter);
app.use("/api/v1/enfermedad", enfermedadRouter);
app.use("/api/v1/pacientes", pacienterouter);
app.use("/api/v1/doctor",doctorrouter);
app.use("/api/v1/users",userrouter);
app.use("/api/v1/user/login", loginrouter);
app.use("/api/v1/twilio",twiliorouter);
app.use("/api/v1/pastilla",pastillarouter)
export default app;
