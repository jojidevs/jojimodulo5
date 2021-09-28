import comercio from "../models/comercio.js";

const controlador={}

controlador.listado= async (req,res)=>{
    console.log("Ejecutando el FIND")
    const comercios= await comercio.find() 
    res.json(comercios)
}

controlador.uno= async (req,res)=>{
    console.log("Consulta individual")
    await comercio.findById(req.params.id)
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"No existe ese comercio",
        "id":req.params.id
        }
        
        ));
    
}

controlador.registrar= async (req,res)=>{
    const nuevocomercio = new comercio(req.body)
    console.log(nuevocomercio)
    await nuevocomercio
        .save()
        .then((comercio) => {
            if (comercio){

                res.status(200).send(comercio);
            }

        })
        .catch((error) =>
            res.status(500).send({mensaje: "Error", error: error})
        
        );

    
}

controlador.eliminar= async (req,res)=>{
    console.log("Eliminación individual")
    await comercio.findByIdAndDelete(req.params.id)
    res.json({"status":"Comercio eliminado"})
}

controlador.actualizar= async (req,res)=>{
    console.log("Actualizando un comercio")
    await comercio.findByIdAndUpdate(req.params.id,req.body)
    res.json({"status":"Comercio actualizado"})
}



export default controlador