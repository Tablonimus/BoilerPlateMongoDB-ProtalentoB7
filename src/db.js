const mongoose = require("mongoose");

require("dotenv").config(); /*HABILITAMOS A USAR VARIABLES DE ENTORNO EN NUESTRO DOCUMENTO*/
const { URI_MONGO } = process.env;

module.exports = () => {
  mongoose
    .connect(
      //uri de mongo
      //process.env.URI_MONGO
      URI_MONGO
    )
    .catch((e) => console.log("Error de conexión con el servidor de mongo", e));
};
