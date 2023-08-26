const { Router } = require("express");
const router = Router();
const User = require("../models/user");
//tenemos que conectar nuestro model correspondiente

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

router.post("/", async (req, res) => {
  try {
    //logica para crear usuario
    const { name, password } = req.body;

    await User.create({ name: name, password: password });

    res.status(200).json("Usuario creado correctamente 💙💛💙");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
