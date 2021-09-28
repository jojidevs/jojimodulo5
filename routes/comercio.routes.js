import Router from "express"
import cController from "../controllers/comercioController.js"
const ruta = Router();

/**
 * @swagger
 * components:
 *  securitySchemes:
 *      BearerAuth:
 *          type: http
 *          scheme: basic
 *          bearerFormat: JWT
 *  security:
 *      - bearerAuth: []
 *  parameters:
 *      token:
 *          in: header
 *          name: token
 *          schema:
 *              type: string
 *              format: JWT
 *          required: true
 *          example: ejemplo
 *      idComercio:
 *          in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          example: 614956586cd61b7b04afbee0
 *          description: id del Comercio
 *  schemas:
 *      Comercio:
 *          type: object
 *          properties:
 *              _id:
 *                  type: string
 *              NombreComercio:
 *                  type: string
 *              NombreDueno:
 *                  type: string
 *              Coordenadas:
 *                  type: string
 *              Telefono:
 *                  type: string
 *              RedesSociales:
 *                  type: string
 *              Categoria:
 *                  type: string
 *              Descripcion:
 *                  type: string
 *              
 *          required:
 *              - NombreComercio
 *              - NombreDueno
 *              - Coordenadas
 *              - Telefono
 *              - RedesSociales
 *              - Categoria
 *              - Descripcion
 *          example:
 *              _id: 614a4e6d2f4c7f869f310b6c
 *              NombreComercio: Puzzle Store
 *              NombreDueno: Johana Cordova
 *              Coordenadas: 14.037577, -88.936522
 *              Telefono: 23018654
 *              RedesSociales: PuzzleStoreCH
 *              Categoria: Juguetes
 *              Descripcion: Tienda especializada en venta y reparacion de instrumentos musicales,asi mismo, como accesorios para los mismos
 *              
 */

/**
 * @swagger
 * tags:
 *  name: Comercios
 *  description: Funciones comercios
 */

/**
 * @swagger
 * /comercios:
 *  get:
 *      summary: Listado Comercios
 *      tags: [Comercios]
 *      parameters:
 *        - $ref: '#/components/parameters/token'
 *      responses:
 *          200:
 *              description: Lista de comercios
 *              content:
 *                 application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Comercio'
 *          500:
 *              description: Ocurrio un error
 */


ruta.get("/listadoComercios",cController.listado)

/**
 * @swagger
 * /comercios/{id}:
 *  get:
 *      summary: Mostrar comercio por el ID
 *      tags: [Comercios]
 *      parameters:
 *        - $ref: '#/components/parameters/idComercio'
 *        - $ref: '#/components/parameters/token'
 *      responses:
 *          200:
 *              description: no se que poner
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Comercio'
 *          404:
 *              description: Comercio missing
 *          500:
 *              description: Error
 *
 */

ruta.get("/uno/:id",cController.uno)

/**
 * @swagger
 * /comercios:
 *  post:
 *      summary: Registrar comercio
 *      tags: [Comercios]
 *      parameters:
 *        - $ref: '#/components/parameters/token'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Comercio'
 *      responses:
 *          201:
 *              description: Se ha registrado un comercio
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Comercio'
 *          500:
 *              description: Error
 *
 */


ruta.post("/registrar",cController.registrar)

/**
 * @swagger
 * /comercios/{id}:
 *  put:
 *      summary: Modificar comercio
 *      tags: [Comercios]
 *      parameters:
 *        - $ref: '#/components/parameters/idComercio'
 *        - $ref: '#/components/parameters/token'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Comercio'
 *      responses:
 *          200:
 *              description: Comercio modificado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Comercio'
 *          500:
 *              description: Error
 */



ruta.put("/editarComercio/:id",cController.actualizar)

/**
 * @swagger
 * /comercios/{id}:
 *  delete:
 *      summary: Eliminar comercio
 *      tags: [Comercios]
 *      parameters:
 *        - $ref: '#/components/parameters/idComercio'
 *        - $ref: '#/components/parameters/token'
 *      responses:
 *          200:
 *              description: Comercio eliminado
 *          404:
 *              description: El comercio no fue encontrado
 *          500:
 *              description: ocurrio un error
 *
 */

ruta.delete("/eliminarComercio/:id",cController.eliminar)



export default ruta