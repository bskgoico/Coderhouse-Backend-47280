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

import express from "express";

// app va a poder ejecutar todos los metodos de express
const app = express();

const PORT = 4000;

//array de productos
const products = [
  {
    name: "Lentejas",
    id: 1,
    category: "Legumbres",
  },
  {
    name: "Mani",
    id: 2,
    category: "Snack",
  },
  {
    name: "Queso",
    id: 3,
    category: "Lacteos",
  },
];

app.get("/", (req, res) => {
  res.send("Hola desde el sur");
});

//res.send() actua como un return implicito
app.get("/products/:id", (req, res) => {
  const prod = products.find((prod) => prod.id === parseInt(req.params.id));
  if (prod) res.send(prod);
  res.send("Producto no encontrado");
});

//La ruta de 404 tiene que ir a lo ultimo
app.get("*", (req, res) => {
  res.send("Error 404");
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

//Hasta aca hicimos un servidor basico con express

// req.params se definen en una ruta con el simbolo de dos puntos ":"

// req.query params tamb aparecen en las rutas pero es para hacer busquedas de ciertos elementos de forma particular
