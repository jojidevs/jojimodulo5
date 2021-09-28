import  Express  from "express";
import Morgan from "morgan";
import RutasComercio from "./routes/comercio.routes.js";
import RutasUsuario from "./routes/usuario.routes.js";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";


const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API de comercios",
        version: "1.0.0",
        description:
          " aplicación web para mostrar la geolocalización de comercios de emprendedores en el departamento de Chalatenango",
      },
      servers: [
        {
          url: "http://localhost:3000/jorge",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
  const specs = swaggerJsDoc(options);

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
app.use(Morgan('dev'))
app.use(RutasComercio)
app.use(RutasUsuario)
app.set('puerto', 3000)
app.use("/salvamedios", swaggerUI.serve, swaggerUI.setup(specs));



//GET con  
app.get("/",(req,res)=>{
    res.send("No sale swagger ayuda");
})


export default app




