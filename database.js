import  Mongoose  from "mongoose";


Mongoose
.connect("mongodb://localhost/emprendeapp")
.then((db)=>console.log("Online"))
.catch((err)=>console.log("Offline"));


export default Mongoose