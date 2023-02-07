import passport from "passport";
import { Router } from "express";
import {login} from "./controller";


require("../../middleware/auth");
const loginrouter: Router = Router();


/** 
 * Post
 * @openapi
 * /api/v1/user/login:
 *    post:
 *      tags:
 *        - login
 *      summary: Permite iniciar sesion
 *      description: Este endpoint nos permite iniciar sesion siempre y cuando que estemos registrados
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/login'
 *      response:
 *        '200':
 *          description: Se ha logeado con exito
 *        '404':
 *          description: Contraseña o correo no validos
 *      security:
 *       - bearerAuth:
*/
loginrouter.post("/",passport.authenticate('local',{session:false}),login);

export default loginrouter;