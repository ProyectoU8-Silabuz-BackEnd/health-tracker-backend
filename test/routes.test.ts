import { describe, it, expect } from "@jest/globals";
import { addpaciente } from "../src/components/pacientes/controller";
import axios from "axios";
// describe("create pacient" ,() => {
//     test('respond to create Paciente',()=>{
//         const req={body:{
//             nombre:"Renato",
//             dni:"83829304",
//             edad:22,
//             celular:"943050240",
//             users:{
//                 correo:"renato@gmail.com",
//                 password:"1234567"
//             }
//         }};
//         const res={};

//         addpaciente(req,res);
//     })
// })

describe("router login",()=>{
    it("Devuele un usuario con su token",async ()=>{
        const res=await axios.post('http://localhost:9001/api/v1/user/login',{
            correo:"juan23@gmail.com",
            password:"123456"
        })
        expect(res.status).toBe(200)
        expect(res.data.user).toEqual({
            "id": 7,
            "correo": "juan23@gmail.com",
            "password": "$2b$10$q6iKhgbI69kWmfmB.nKrs.GtfIkIhl4DmUcODz21MKm2awypCEGUa",
            "rol": "admin",
            "createAt": "2023-02-03T06:12:12.274Z"
        })
        // console.log(res.data.user);
        // expect(res.data).toEqual({"user": {
        //     "id": 7,
        //     "correo": "juan23@gmail.com",
        //     "password": "$2b$10$q6iKhgbI69kWmfmB.nKrs.GtfIkIhl4DmUcODz21MKm2awypCEGUa",
        //     "rol": "admin",
        //     "createAt": "2023-02-03T06:12:12.274Z"
        // },})
    })
})