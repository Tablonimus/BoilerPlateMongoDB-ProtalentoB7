const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// import bcrypt from "bcryptjs";

const usersSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  },
  { timestamps: true }
);

usersSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10); //cantidad de rondas que va a dar el encriptado
  return await bcrypt.hash(password, salt);
}; //lo que encripto

usersSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword); //si o no
};

const User = mongoose.model("User", usersSchema);

module.exports = User;
