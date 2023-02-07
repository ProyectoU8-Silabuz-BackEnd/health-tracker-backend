import { Router } from "express";
import passport from "passport";
import { checkRoles } from "../../middleware/handler/roleHandler";
import {allpastillas, findpastillas, addpastilla} from "./controller";

const pastillarouter =Router();
/** 
 * Get
 * @openapi
 * /api/v1/pastilla:
 *    get:
 *      tags:
 *        - pastilla
 *      summary: Listar todos pastillas
 *      description: Este endpoint nos permite extraer la informacion de todos los pastillas creados hasta el momento
 *      response:
 *        '200':
 *          description: Retorna una lista de objetos
 *        '500':
 *          description: Retorna un error si alguno de los campos especificados como unicos se repite al registrar a un usuario
 *      security:
 *       - bearerAuth:
*/
pastillarouter.get("/", allpastillas);



/** 
 * Get
 * @openapi
 * /api/v1/pastilla/{id}:
 *    get:
 *      tags:
 *        - pastilla
 *      summary: Listar todos pastilla
 *      description: Este endpoint nos permite extraer la informacion de un pastilla en especifico
 *      operationId: getpastilla
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del pastilla a retornar
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


pastillarouter.get("/:id", findpastillas);



/** 
 * Post
 * @openapi
 * /api/v1/pastilla:
 *    post:
 *      tags:
 *        - pastilla
 *      summary: Registrar un pastilla
 *      description: Este endpoint nos permite crear un pastilla
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/pastilla'
 *      response:
 *        '200':
 *          description: El pastilla ha sido creado
 *        '404':
 *          description: No esta authorizado
 *      security:
 *       - bearerAuth:
*/
pastillarouter.post("/", 
    passport.authenticate('jwt',{session:false}),
    checkRoles(['doctor','admin']),
    addpastilla);

export default pastillarouter;

