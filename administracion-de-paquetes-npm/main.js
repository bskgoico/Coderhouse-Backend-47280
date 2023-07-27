// let code = "Le-555-Ar"

/*
REPASO NODE JS (Corazon de proyectos)

Node js no es solo un modulo mas o una libreria para trabajar.
Sino que es un entorno de desarrollo completo sobre el cual viven y se ejecutan
nuestros programas de JavaScript.


Surgio de la necesidad de ejectuar Javascript fuera del navegador, y ha crecido hasta convertirse
en uno de los elementos principales para el desarrollo web.

Cuenta con el mismo motor v8 de Google Chrome, el cual  permite convertir codigo Javascrit
a código maquina para poder ser procesado correctamente.

Además, cuenta con muchas funcionalidades internas del mismo lenguaje gracias a sus ajustes con ECMAScript.


MODULOS NATIVOS DE NODE JS

Conforme necesitmaos programas mas complejos necesitamos operaciones mas complejas y conforme operaciones mas
complejas necesitamos herramientas mas utiles.

Es por eso que desed que instalamos Nodejs en nuestro computador, contamos ya con una serie de modulos nativos
para poder resolver este tipo de tareas de manera eficiente y sin tener que reprogramar todo (no reinventar la rueda)


fs --> para manejo de archivos

ctypto ---> seguridad de datos

http ---> para crear servidores solicitud / respuesta

path ---> para evitar ambiguedad al trabajar con rutas



CRYPTO

Proceso de Encriptacion

1) Algoritmo de encriptación
2) Key o Clave de la encriptación
3) Iv o Vector inicial (único)    Vector: Una linea recta que esta orientada en algun sentido

*/

import * as crypto from 'crypto';

//console.log(crypto.getCiphers()); //Consultar los tipos de algoritmos de encriptacion

const algoritmo = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

//console.log(key);
//console.log(iv);

//Buffer es como un array para los bytes


const encriptar = (password) => {
    //Poder consultar el Buffer
    const cipher = crypto.createCipheriv(algoritmo, Buffer.from(key), iv) //Objeto para encriptar la contraseña
    cipher.update(password) // Preparo el objeto para encriptar
    let passwordEncriptado = cipher.final() //Resultado de la encriptacion
    console.log(passwordEncriptado.toString('hex'))
    return passwordEncriptado
}

const hackerman = (passwordEncriptada) => {
    const decipher = crypto.createDecipheriv(algoritmo, Buffer.from(key), Buffer.from(iv, 'hex'))
    decipher.update(passwordEncriptada)
    let passwordDes = decipher.final()
    console.log(passwordDes.toString())
}

const passwordE = encriptar("Coder1234")
hackerman(passwordE)
