const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    //logica para crear usuario
    const { username, email, password, roles } = req.body; //["admin"] //req.params y req.query => vienen desde el endpoint   'o  se los puedo agregar yo en el middleware

    //buscar los roles del body en la DB
    const defaultRole = ["user"]; //<=========== A PRUEBA
    const rolesFound = await Role.find({ name: { $in: roles || defaultRole } }); //O UNO O EL OTRO  //<=========== A PRUEBA


    //crear la instancia de el usuario
    const user = new User({
      username: username,
      email: email,
      password: password, //1234
      roles: rolesFound.map((role) => role._id),
    });

    ////encriptar la contraseña sin método estatico
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(password, salt); // user.encryptPassword(password)

    //encriptar la contraseña CON método estatico
    user.password = await User.encryptPassword(password);

    //guardar usuario en base de datos
    const newUser = await user.save();

    res.status(200).json({
      _id: newUser._id,
      username: newUser.username,
      mail: newUser.email,
      roles: newUser.roles,
    });
    
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = { createUser };
