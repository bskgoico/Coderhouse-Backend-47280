/*import http from 'http'; // o import * as http from 'http

const PORT = 4000
//req = request y res = response
const server = http.createServer((req, res) => {
    res.end("Hola, buenos dias")
})

//Arrancar mi servidor
server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})*/

import express from 'express';

// app va a poder ejecutar todos los metodos de express
const app = express()

const PORT = 4000

app.get('/', (req, res) => {
    res.send("Hola desde el sur")
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})

//Hasta aca hicimos un servidor basico con express