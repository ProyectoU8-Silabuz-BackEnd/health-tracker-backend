import { Router } from "express";
import { sendMessage} from "./controller";

const twiliorouter: Router = Router();


twiliorouter.post("/", sendMessage);



export default twiliorouter;