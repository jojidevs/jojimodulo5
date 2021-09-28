import Router from "express"
import cController from "../controllers/usuarioController.js"
const rutaU = Router();

/**
 * @swagger
 * components:
 *  parameters:
 *      token:
 *          in: header
 *          name: token
 *          schema:
 *              type: string
 *              format: JWT
 *          required: true
 *          example: ejemplo
 *      idUsuario:
 *          in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          example: 614a4c132f4c7f869f310abe
 *          description: ID
 *  schemas:
 *      Usuario:
 *          type: object
 *          properties:
 *              _id:
 *                  type: string
 *              nombre:
 *                  type: string
 *              fechanacimiento:
 *                  type: string
 *              celular:
 *                  type: string
 *              cargo:
 *                  type: string
 *              usuario:
 *                  type: string
 *              contrasena:
 *                  type: string
 *          required:
 *              - nombre
 *              - fechanacimiento
 *              - celular
 *              - cargo
 *              - usuario
 *              - contrasena
 *          example:
 *              _id: 614a4c132f4c7f869f310abe
 *              nombre: Edwin Anael
 *              fechanacimiento: 15/08/1998
 *              celular: 65062341
 *              cargo: Administrador
 *              usuario: anaelswag
 *              contrasena: boneless
 */

/**
 * @swagger
 * tags:
 *  name: Usuarios
 *  description: Funciones usuarios
 */

/**
 * @swagger
 * /usuarios:
 *  get:
 *      summary: Todos los usuarios
 *      tags: [Usuarios]
 *      parameters:
 *        - $ref: '#/components/parameters/token'
 *      responses:
 *          200:
 *              description: Listado usuarios
 *              content:
 *                 application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Usuario'
 *          500:
 *              description: Ocurrio un error
 */

rutaU.get("/listadoUsuarios",cController.listadoU)


/**
 * @swagger
 * /usuarios/{id}:
 *  get:
 *      summary: Mostrar usuario por ID
 *      tags: [Usuarios]
 *      parameters:
 *        - $ref: '#/components/parameters/idUsuario'
 *        - $ref: '#/components/parameters/token'
 *      responses:
 *          200:
 *              description: Usuario 
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 *          404:
 *              description: Usuario missing
 *          500:
 *              description: Error
 *
 */

rutaU.get("/usuario/:id",cController.unoU)


/**
 * @swagger
 * /usuarios:
 *  post:
 *      summary: Registrar usuario
 *      tags: [Usuarios]
 *      parameters:
 *        - $ref: '#/components/parameters/token'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Usuario'
 *      responses:
 *          201:
 *              description: Usuario registrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 *          500:
 *              description: Error
 *
 */

rutaU.post("/registrarUsuario",cController.registrarU)

/**
 * @swagger
 * /usuarios/{id}:
 *  put:
 *      summary: Modificar usuario por ID
 *      tags: [Usuarios]
 *      parameters:
 *        - $ref: '#/components/parameters/idUsuario'
 *        - $ref: '#/components/parameters/token'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Usuario'
 *      responses:
 *          200:
 *              description: Usuario modificado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 *          404:
 *              description: Usuario missing
 *          500:
 *              description: Error
 */

rutaU.put("/editarUsuario/:id",cController.actualizarU)

/**
 * @swagger
 * /usuarios/{id}:
 *  delete:
 *      summary: Eliminar usuario
 *      tags: [Usuarios]
 *      parameters:
 *        - $ref: '#/components/parameters/idUsuario'
 *        - $ref: '#/components/parameters/token'
 *      responses:
 *          200:
 *              description: Usuario Eliminado
 *          404:
 *              description: Usuario missing
 *          500:
 *              description: Error
 *
 */

rutaU.delete("/eliminarUsuario/:id",cController.eliminarU)



export default rutaU