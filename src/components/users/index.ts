import { Router } from "express";
import passport from "passport";
import { checkRoles } from "../../middleware/handler/roleHandler";
import { findAllUsers, findiduser,adduser } from "./controller";

const userrouter: Router = Router();
/** 
 * Get
 * @openapi
 * /api/v1/users:
 *    get:
 *      tags:
 *        - user admin
 *      summary: Listar todos user admins
 *      description: Este endpoint nos permite extraer la informacion de todos los user admins creados hasta el momento
 *      response:
 *        '200':
 *          description: Retorna una lista de objetos
 *        '500':
 *          description: Retorna un error si alguno de los campos especificados como unicos se repite al registrar a un usuario
 *      security:
 *       - bearerAuth:
*/
userrouter.get("/",
        passport.authenticate('jwt',{session:false}), 
        findAllUsers);


/** 
 * Get
 * @openapi
 * /api/v1/users/{id}:
 *    get:
 *      tags:
 *        - user admin
 *      summary: Listar todos user admin
 *      description: Este endpoint nos permite extraer la informacion de un user admin en especifico
 *      operationId: getuser admin
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del user admin a retornar
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
userrouter.get("/:id",
        passport.authenticate('jwt',{session:false}),
        checkRoles(['admin']),
        findiduser);

        

/** 
 * Post
 * @openapi
 * /api/v1/users:
 *    post:
 *      tags:
 *        - user admin
 *      summary: Registrar un user admin
 *      description: Este endpoint nos permite crear un user admin
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/user admin'
 *      response:
 *        '200':
 *          description: El user admin ha sido creado
 *        '404':
 *          description: No esta authorizado
 *      security:
 *       - bearerAuth:
*/
userrouter.post("/", adduser);



export default userrouter