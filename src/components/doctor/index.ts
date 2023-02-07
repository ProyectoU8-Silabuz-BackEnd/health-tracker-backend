import { Router } from "express";
import passport from "passport";
import { checkRoles } from "../../middleware/handler/roleHandler";
import { createDoctor, getAll, getDoctor } from "./controller";

const doctorrouter: Router = Router();
/** 
 * Get
 * @openapi
 * /api/v1/doctor:
 *    get:
 *      tags:
 *        - doctor
 *      summary: Listar todos doctores
 *      description: Este endpoint nos permite extraer la informacion de todos los doctores creados hasta el momento
 *      response:
 *        '200':
 *          description: Retorna una lista de objetos
 *        '500':
 *          description: Retorna un error si alguno de los campos especificados como unicos se repite al registrar a un usuario
 *      security:
 *       - bearerAuth:
*/
doctorrouter.get("/",
        passport.authenticate('jwt',{session:false}),
        checkRoles(['admin']),
        getAll);



/** 
 * Get
 * @openapi
 * /api/v1/doctor/{id}:
 *    get:
 *      tags:
 *        - doctor
 *      summary: Listar todos doctores
 *      description: Este endpoint nos muestra la informacion de un doctor en especifico
 *      operationId: getDoctor
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del doctor a retornar
 *          schema:
 *            type: integer
 *            format: int64
 *      response:
 *        '200':
 *          description: Retorna una lista de objetos
 *        '500':
 *          description: Retorna un error si alguno de los campos especificados como unicos se repite al registrar a un usuario
 *      security:
 *       - bearerAuth:
*/
doctorrouter.get("/:id",
        passport.authenticate('jwt',{session:false}),
        checkRoles(['admin','doctor']),
        getDoctor );


/** 
 * Post
 * @openapi
 * /api/v1/doctor:
 *    post:
 *      tags:
 *        - doctor
 *      summary: Registrar un doctor
 *      description: Este endpoint nos permite crear un doctor
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/doctor'
 *      response:
 *        '200':
 *          description: El doctor ha sido creado
 *        '404':
 *          description: No esta authorizado
 *      security:
 *       - bearerAuth:
*/
doctorrouter.post("/",createDoctor);

export default doctorrouter;