const { Router } = require("express");
const router = Router();
const users = require("./users.routes")


router.get("/", (req, res) => {
  res.send("la conexión salió exitosa");
});

router.use("/users", users)/* localhost:3000/users */


module.exports = router;
