import type { Request, Response} from "express";
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const service = process.env.TWILIO_MESSAGING_SERVICE_SID;

const client = twilio(accountSid, authToken);

export const sendMessage= async (req:Request,res:Response)=>{
    const {number,message}=req.body;
    const createMessage=await client.messages.create({
        body:message,
        messagingServiceSid:service,
        to: number,
    });
    console.log(createMessage);
    // console.log(createMessage.id);
    if(!createMessage){
        res.status(401).json({
            ok:false,
            message: "Algo salio mal"
        })
    }
    res.status(200).json({
        ok:true,
        message:"El mensaje se envio con exito"
    })
}

