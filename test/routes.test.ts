import { describe, it, expect } from "@jest/globals";
import { addpaciente } from "../src/components/pacientes/controller";
import axios from "axios";


describe("testeo para rutas",()=>{
    var token:string;
    it("ruta login que devuele un usuario con su token",async ()=>{
        const res=await axios.post('http://localhost:9001/api/v1/user/login',{
            correo:"juan23@gmail.com",
            password:"123456"
        })
        token=res.data.token;
        expect(res.status).toBe(200)
        expect(res.data.user).toEqual({
            "id": 7,
            "correo": "juan23@gmail.com",
            "password": "$2b$10$q6iKhgbI69kWmfmB.nKrs.GtfIkIhl4DmUcODz21MKm2awypCEGUa",
            "rol": "admin",
            "createAt": "2023-02-03T06:12:12.274Z"
        })
    })


    it("Devuelve un mensaje de creado satisfactoriamente",async ()=>{
        const res=await axios.post('http://localhost:9001/api/v1/pacientes',{
            nombre:"Luis Fra",
            dni:"12344444",
            edad:22,
            celular:"888883821",
            users:{
                correo:"luisfr@gmail.com",
                password:"1234567"
            }
        },{
            headers:{Authorization: `Bearer ${token}`
        }})
        expect(res.status).toBe(201)
        expect(await res.data.message).toEqual("Paciente añadido correctamente")
    })
});

