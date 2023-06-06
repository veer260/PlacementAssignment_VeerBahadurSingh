const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const { password, ...rest } = req.body;
    console.log(req.body);
    const hashedPwd = bcrypt.hashSync(password, 10);
    const newUser = await User.create({
      ...rest,
      password: hashedPwd,
    });
    return res.status(201).json("successfully registered a new user");
  } catch (error) {
    // throw newError('cannot register a user', 500);
    return res.status(500).json({
      status: "failure",
      data: "",
      message: "unable to  register a user",
      error: error,
    });
  }
};

const login = async (req, res, next) => {
  try {
    // console.log("tried");
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // console.log({ user });
    if (!user) {
      return res.send("user not found!");
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.send("check Email or Password!");
    }

    const token = jwt.sign({ email, id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 6,
    });

    res.cookie("accessToken", token, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });
    const { password: userPassword, ...rest } = user._doc;
    return res.json({
      ...rest,
    });

    // res.setC
  } catch (error) {
    return res.status(500).json({
      status: "failure",
      data: "",
      message: "unable to login",
      error: error,
    });
  }
};

module.exports = {
  register,
  login,
};
