const jwt = require("jsonwebtoken")

//Almacenamos nuestra clave secreta
const JWT_SECRET ="71b8b7236a031c1ef2acb749d59fcd295b06b3dc7c2905994c62763b9ed92564"

//Creamos un afuncion para generar un token

function generateToken(user){
    const payload = {
        uerId : user._id,
        email: user.email
    };
    //Creams el token y retornamos
    const token = jwt.sign(payload,JWT_SECRET, {expiresIn:"1h"});
    return token;

}

//Exportamos para utilizarlo en otros archivos
module.exports={
    generateToken
};