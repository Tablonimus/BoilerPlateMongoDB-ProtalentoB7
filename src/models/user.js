const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
