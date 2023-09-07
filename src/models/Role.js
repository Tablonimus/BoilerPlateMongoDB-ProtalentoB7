const mongoose = require("mongoose");

const ROLES = ["admin","moderator","user"]    //FALTA EXPORTAR

const rolesSchema = new mongoose.Schema({
  name: String,
 });

const Role = mongoose.model("Role", rolesSchema);

module.exports = Role
