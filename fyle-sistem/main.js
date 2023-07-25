import fs from 'fs';

// Sincronica

// Escribir txt
fs.writeFileSync('./ejemplo.txt', "Hola, Buenas Noches");

// Consultar si existe txt
console.log(fs.existsSync('./ejemplo.txt'))

if(fs.existsSync('./ejemplo.txt')) {
    //Leer txt
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
}