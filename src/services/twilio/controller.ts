import type { Request, Response} from "express";
import twilio from 'twilio';
import { getDateArray } from "./funciones";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const service = process.env.TWILIO_MESSAGING_SERVICE_SID;


const client = twilio(accountSid, authToken);

export function sendSMS(number:string,Fecha_send:Date,message:string){

    try {    
        const createMessage=client.messages.create({
            body:message,
            messagingServiceSid:service,
            to: "51"+number,
            sendAt: Fecha_send,
            scheduleType: 'fixed',
        });
        return {
            ok:true,
            message:"Mensajes creados"
        }
    }catch(error) {
        return{
            ok:false,
            message: "Algo salio mal"
        }
    }
}
