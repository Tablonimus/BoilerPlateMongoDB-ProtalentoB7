const { Router } = require("express");
const router = Router();
const User = require("../models/User"); //tenemos que conectar nuestro model correspondiente
const { createUser } = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/authJwt");

//GET A TODOS
router.get("/", verifyToken, async (req, res) => {
  try {
    console.log(req);

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
router.post("/", verifyToken, createUser);

module.exports = router;
