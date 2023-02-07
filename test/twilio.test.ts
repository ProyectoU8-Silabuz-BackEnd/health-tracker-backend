import * as request from "supertest";
import { sendSMS } from "../src/services/twilio/controller";
import { describe, it, expect } from "@jest/globals";

interface Respuesta {
    ok: boolean;
    message: string
}


describe("sendSMS", () => {
    it("probando twilio", async () => {
        
        const res: Respuesta= await sendSMS("929076660", new Date("2023-02-08T23:00:00Z"), "hola");
        expect(res.message).toEqual("Mensajes creados"
    )
    });
  });