//Importamos mongoose para definir el esquema y modelo de usuario
const mongoose = require("mongoose")
const bcryptService = require("../services/bcryptService")


//Definimos el esquema de usuario utilizando el constructor de mongoose llamado schemaconst userschema
const userSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true, //el nombre es obligatorio
    },
    edad:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true, //es unico
    },
    contraseña:{
        type:String,
        required:true,
    },
});

//Antes de guardar un nuevo uuriovamos a hsehar la contraseña

userSchema.pre("save", function(next){
    if(!this.isModified("contraseña")){
        return next();
    }

    bcryptService
    .hashPassword(this.contraseña)
    .then(hashedPassword=>{
        this.contraseña=hashedPassword
    })
});




    //Crear el modelo user utilizando el esquema definido anteriormente
    const User = mongoose.model("User",userSchema);

    //exportamos el modelo User para usarlo en cualquuier parte

    module.exports = User;