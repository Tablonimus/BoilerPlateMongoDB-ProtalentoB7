const { Router } = require("express");
const router = Router();
const {signInHandler,signUpHandler} = require("../controllers/auth.controllers")

// sign up// crear
router.post("/signup",signUpHandler)


//sign in  //login
router.post("/signin", signInHandler)






module.exports = router;