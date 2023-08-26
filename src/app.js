const express = require("express");
const server = express();
server.name = "Protalento B7 Mongo";

//configuraciones de express
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

//conecta con las rutas
const router = require("./routes/index.routes");
server.use("/", router);

//conectamos a mongo---
require("./db.js"); /* ESTA LINEA ME CONECTA CON MONGO DB */

module.exports = server;
