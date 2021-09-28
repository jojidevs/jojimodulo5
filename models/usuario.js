import  Mongoose  from "mongoose";

const usuarioSchema= Mongoose.Schema({

    nombre:{type:String,required:true},
    fechanacimiento:{type:String,required:true},
    celular:{type:String,required:true},
    cargo:{type:String,required:true},
    usuario:{type:String,required:true},
    contrasena:{type:String,required:true}


})

export default Mongoose.model('Usuario',usuarioSchema)
