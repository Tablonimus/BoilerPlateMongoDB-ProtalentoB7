require("dotenv").config(); /*HABILITAMOS A USAR VARIABLES DE ENTORNO EN NUESTRO DOCUMENTO*/
const { PORT } = process.env;
const server = require("./src/app.js");
const connection = require("./src/db.js");

connection();


server.listen(PORT, () => {
  console.log("Servidor levantado correctamente en el puerto ", PORT);
});
