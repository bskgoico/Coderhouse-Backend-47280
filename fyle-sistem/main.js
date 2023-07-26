import fs from "fs";

// Sincronica

// Escribir txt
fs.writeFileSync("./ejemplo.txt", "Hola, Buenas Noches");

// Consultar si existe txt
console.log(fs.existsSync("./ejemplo.txt"));

if (fs.existsSync("./ejemplo.txt")) {
  // Leer txt
  let contenido = fs.readFileSync("./ejemplo.txt", "utf-8");
  console.log(contenido);

  // Agregar contenido al txt
  fs.appendFileSync("./ejemplo.txt", "\n Hola, buenas Noches");

  // Eliminar txt
  //fs.unlinkSync('./ejemplo.txt');
  //fs.writeFileSync('./ejemplo.txt', "Hola");
}

// Callbacks

fs.writeFile("./ejemplo.txt", "Hola mundo", (error) => {
  if (error) return "Error en escritura de archivo";
  fs.readFile("./ejemplo.txt", "utf-8", (error, resultado) => {
    if (error) return "Error en lectura de archivo";
    console.log(resultado);
    fs.appendFile("./ejemplo.txt", "\nAdios", (error) => {
      if (error) return "Error al modificar archivo";
      fs.unlink("./ejemplo.txt", (error) => {
        if (error) return "Error al eliminar archivo";
      });
    });
  });
});
