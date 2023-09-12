const { Router } = require("express");
const router = Router();
const User = require("../models/User"); //tenemos que conectar nuestro model correspondiente
const { createUser } = require("../controllers/user.controller");


//GET A TODOS
router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    console.log(allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//GET USER BY ID O DE A UNO---



//POST CREAR USUARIO
router.post("/", createUser);



module.exports = router;
