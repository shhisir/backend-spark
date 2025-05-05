const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const User = require("../schemas/User");

const login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email });

    delete user.password;

    const check = await bcrypt.compare(password, user.password);

    if (check) {
      const userWithoutPassword = { ...user.toObject() };
      delete userWithoutPassword.password;

      const token = jwt.sign(userWithoutPassword, "shhhhh");

      res.send(token);
    } else {
      res.send(403).send({ message: "creditail not match" });
    }
  } catch (err) {
    next(err);
  }
};

const signup = async (req, res, next) => {
  try {
    const data = req.body;
    const password = req.body.password;
    delete data.password;

    const salt = await bcrypt.genSalt(10);
    const hasedpassword = await bcrypt.hash(password, salt);
    data.password = hasedpassword;

    await User.create(data);
    res.status(200).send({ message: "Signed up" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signup,
  login,
};
