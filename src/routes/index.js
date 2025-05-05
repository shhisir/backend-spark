const express = require("express");

const { isAutheticated } = require("../middleware/auth");
const { signup, login } = require("../controller/user.controller");
const { createUser } = require("../controller/controller_user");

const router = express.Router();

// router.get("/user",

//     getuser
// )

router.post(
  "/login",

  login
);
router.post("/signup", signup);
router.get("/user/:id", (req, res, next) => {
  res.send("Messgae for user from id");
});

module.exports = router;
