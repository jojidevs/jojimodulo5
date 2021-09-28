import usuario from "../models/usuario.js";


const controlador={}

controlador.listadoU= async (req,res)=>{
    console.log("Mostrando usuarios")
    const usuarios= await usuario.find() 
    res.json(usuarios)
}

controlador.unoU= async (req,res)=>{
    console.log("Consulta individual")
    await usuario.findById(req.params.id)
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"No existe ese usuario",
        "id":req.params.id
        }
        
        ));
    
}

controlador.registrarU= async (req,res)=>{
    const nuevousuario = new usuario(req.body)
    console.log(nuevousuario)
    await nuevousuario
        .save()
        .then((usuario) => {
            if (usuario){

                res.status(200).send(usuario);
            }

        })
        .catch((error) =>
            res.status(500).send({mensaje: "Error", error: error})
        
        );

    
}

controlador.eliminarU= async (req,res)=>{
    console.log("Eliminación individual")
    await usuario.findByIdAndDelete(req.params.id)
    res.json({"status":"Usuario eliminado"})
}

controlador.actualizarU= async (req,res)=>{
    console.log("Actualizando un usuario")
    await usuario.findByIdAndUpdate(req.params.id,req.body)
    res.json({"status":"Usuario actualizado"})
}



export default controlador