import  Mongoose  from "mongoose";

const comercioSchema= Mongoose.Schema({

    NombreComercio:{type:String,required:true},
    NombreDueno:{type:String,required:true},
    Coordenadas:{type:String,required:true},
    Telefono:{type:String,required:true},
    RedesSociales:{type:String,required:true},
    Categoria:{type:String,required:true},
    Descripcion:{type:String,required:true}

})

export default Mongoose.model('Comercio',comercioSchema)

