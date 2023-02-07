import { Strategy } from "passport-local";
import { findByEmail } from "../../../utils/auxiliar.user";
import { compare } from "bcrypt";

const localStrategy=new Strategy({
        usernameField:'correo',
        passwordField:'password'
    },
    async (email:string,password:string,done:any)=>{
    try {
        const user=await findByEmail(email);
        if(!user){
            done(null,false);
            return;
        }
       const equal=compare(password,user.password);
       const rpta=await equal;
       if(rpta===false){
        done(null,false);
        return;
       }
       done(null,user);
    } catch (error) {
        
    }
});

export default localStrategy;