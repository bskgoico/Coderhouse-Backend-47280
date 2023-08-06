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

const app = express()
