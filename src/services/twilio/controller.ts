import type { Request, Response} from "express";
import twilio from 'twilio';
import { getDateArray } from "./funciones";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const service = process.env.TWILIO_MESSAGING_SERVICE_SID;

const client = twilio(accountSid, authToken);

const client = twilio(accountSid, authToken);

export const sendMessage= async (req:Request,res:Response)=>{
    const {number,message, from, to, interval}=req.body;

    let fechainicial = new Date(from);
    let fechafinal = new Date(to);
    let intervalo_milisegundos= Number(interval)*1000*60*60;
    let datearray= getDateArray(fechainicial, fechafinal, intervalo_milisegundos);
    console.log(datearray[0]);
            //interval : milisegundos

    try {    
    for (let i = 0; i < datearray.length; i++) {
    await client.messages.create({
        body:message,
        messagingServiceSid:service,
        to: number,
        sendAt: datearray[i],
        scheduleType: 'fixed',
    });
     } res.status(201).json({
        ok:true,
        message: "mensajes creados"
     })}

    catch(error) {
        res.status(401).json({
            ok:false,
            message: "Algo salio mal"
        })
    }
   }
      



/* 
Verify that the SendAt parameter is using "[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS]Z" format (in UTC). */


/* {
    "number":"+51929076660",
    "message":"mensaje enviado desde twilio",
    "from":"2023-02-02T19:00:00Z",
    "to": "2023-02-02T23:00:00Z" ,
    "interval" : "3"
} */

