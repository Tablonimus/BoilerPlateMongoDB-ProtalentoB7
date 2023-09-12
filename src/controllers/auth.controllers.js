const User = require("../models/User");
const Role = require("../models/Role");
const jwt = require("jsonwebtoken");

const signUpHandler = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    //crear un objeto instancia de Usuario
    const newUser = new User({
      username,
      email,
      password,
    });

    //verificamos si los roles existen
    if (roles) {
      const rolesFound = await Role.find({ name: { $in: roles } });
      newUser.roles = rolesFound.map((role) => role._id);
    } else {
      // const defaultRole = ["user"];
      const role = await Role.find({ name: "user" });
      newUser.roles = [role._id];
    }

    //guardo el usuario en la DB y me genero una constante con el
    const savedUser = newUser.save();

    //Crear un token
    const token = jwt.sign(savedUser._id, process.env.SECRET, {
      expiresIn: 86400, //24 hours
    });

    return res.status(204).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const signInHandler = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = { signInHandler, signUpHandler };
