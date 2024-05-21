const bcrypt = require("bcrypt")

//Funcion para hashear(encriptar) un acontraseña

function hashPassword(plainPassword){
    return new Promise((resolve,reject)=>{
        const saltRounds = 10;
        bcrypt.hash(plainPassword,saltRounds,(error,hashedPasword)=>{
            if(error){
                PromiseRejectionEvent(new Error("Error al hashear la contraseña"))
            }else{
                resolve(hashedPasword)
            }
        })
    })
}

//Funcion para comparar una contraseña con su contraseña encriptada

function comparePassword (plainPassword,hashedPassword) {
        return new Promise((resolve,reject)=>{
            bcrypt.compare(plainPassword,hashedPassword, (error,match)=>{
    if (error){
        PromiseRejectionEvent(new Error("Error al comparar contraseñas"))
    }
    else
    {
        resolve(match)
    }
})

})
}

module.exports={
    hashPassword,
    comparePassword

}