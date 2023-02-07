import { Router } from "express";
import passport from "passport";
import { create, findAll, findRecordatory } from "./controller";
import {checkRoles} from "./../../middleware/handler/roleHandler"

const recordatoryRouter: Router = Router();
/** 
 * Get
 * @openapi
 * /api/v1/recordatory:
 *    get:
 *      tags:
 *        - recordatorio
 *      summary: Listar todos recordatorios
 *      description: Este endpoint nos permite extraer la informacion de todos los recordatorios creados hasta el momento
 *      response:
 *        '200':
 *          description: Retorna una lista de objetos
 *        '500':
 *          description: Retorna un error si alguno de los campos especificados como unicos se repite al registrar a un usuario
 *      security:
 *       - bearerAuth:
*/
recordatoryRouter.get("/",
    passport.authenticate('jwt',{session:false}),
    checkRoles(['admin']),
    findAll);

/** 
 * Get
 * @openapi
 * /api/v1/recordatory/{id}:
 *    get:
 *      tags:
 *        - recordatorio
 *      summary: Listar todos recordatorio
 *      description: Este endpoint nos permite extraer la informacion de un recordatorio en especifico
 *      operationId: getrecordatorio
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del recordatorio a retornar
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
recordatoryRouter.get("/:id",
    passport.authenticate('jwt',{session:false}),
    checkRoles(['pacient','doctor','admin']),
    findRecordatory)



/** 
 * Post
 * @openapi
 * /api/v1/recordatory:
 *    post:
 *      tags:
 *        - recordatorio
 *      summary: Registrar un recordatorio
 *      description: Este endpoint nos permite crear un recordatorio
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/recordatorio'
 *      response:
 *        '200':
 *          description: El recordatorio ha sido creado
 *        '404':
 *          description: No esta authorizado
 *      security:
 *       - bearerAuth:
*/
recordatoryRouter.post("/",
    passport.authenticate('jwt',{session:false}),
    checkRoles(['pacient','doctor','admin']),
    create);

export default recordatoryRouter;