const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function handleSignup(req, res) {
  try {
    const { name, email, password } = req.body;
    //Checking user is already present
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ msg: "User already exists, you can login", success: false });
    }
    const userModel = new UserModel({ name, email, password });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res.status(201).json({ msg: "Signup successfull", success: true });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
}
async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;
    //Checking user is already present
    const user = await UserModel.findOne({ email });
    const errMsg = "Authentication Failed ,email or password is wrong";

    if (!user) {
      return res.status(403).json({ msg: errMsg, success: false });
    }

    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(403).json({ msg: errMsg, success: false });
    }

    //jwtToken creation

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    // sending jwtToken with the response

    return res.status(200).json({
      msg: "Login successfull",
      success: true,
      jwtToken,
      name: user.name,
      email,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
}

module.exports = { handleSignup, handleLogin };
