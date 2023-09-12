const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Role = require("../models/Role");

const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token)
    return res.status(400).json({ message: "No token here my friend" });
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.id; //PAYLOAD CON EL QUE YO FIRMO, EL ID

    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not Found" });

    next();
  } catch (error) {
    return res.status(401).json({ message: "not authorized my friend!" });
  }
};


module.exports= {verifyToken}