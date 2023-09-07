require("dotenv").config(); /*HABILITAMOS A USAR VARIABLES DE ENTORNO EN NUESTRO DOCUMENTO*/
const { PORT } = process.env;
const server = require("./src/app.js");
const connection = require("./src/db.js");
const {createAdmin,createRoles} = require("./src/libs/initialSetup.js")


/* ------------------------------------ */
connection();
//crear roles
createRoles()
//crear usuarios
createAdmin()

/* --------------------- */
server.listen(PORT, () => {
  console.log("Servidor levantado correctamente en el puerto ", PORT);
});
