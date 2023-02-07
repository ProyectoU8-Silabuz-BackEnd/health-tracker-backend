import { Router } from "express";
import passport from "passport";
import { checkRoles } from "./../../middleware/handler/roleHandler";
import { allpacientes, findpaciente,addpaciente } from "./controller";

const pacienterouter: Router = Router();

/** 
 * Get
 * @openapi
 * /api/v1/paciente:
 *    get:
 *      tags:
 *        - paciente
 *      summary: Listar todos pacientes
 *      description: Este endpoint nos permite extraer la informacion de todos los pacientes creados hasta el momento
 *      response:
 *        '200':
 *          description: Retorna una lista de objetos
 *        '500':
 *          description: Retorna un error si alguno de los campos especificados como unicos se repite al registrar a un usuario
 *      security:
 *       - bearerAuth:
*/

pacienterouter.get("/",
        passport.authenticate('jwt',{session:false}), 
        allpacientes);


/** 
 * Get
 * @openapi
 * /api/v1/paciente/{id}:
 *    get:
 *      tags:
 *        - paciente
 *      summary: Listar todos paciente
 *      description: Este endpoint nos permite extraer la informacion de un paciente en especifico
 *      operationId: getpaciente
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del paciente a retornar
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
pacienterouter.get("/:id",
        passport.authenticate('jwt',{session:false}),
        checkRoles(['pacient','admin']),
        findpaciente);

      


/** 
 * Post
 * @openapi
 * /api/v1/paciente:
 *    post:
 *      tags:
 *        - paciente
 *      summary: Registrar un paciente
 *      description: Este endpoint nos permite crear un paciente
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/paciente'
 *      response:
 *        '200':
 *          description: El paciente ha sido creado
 *        '404':
 *          description: No esta authorizado
 *      security:
 *       - bearerAuth:
*/

pacienterouter.post("/", addpaciente);



export default pacienterouter