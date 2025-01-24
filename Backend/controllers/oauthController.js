const { oauth2client } = require("../utils/googleConfig");
const axios = require("axios");
const { GoogleUserModel } = require("../models/user.js");
const jwt = require("jsonwebtoken");

async function googleLogin(req, res) {
  try {
    const { code } = req.query;
    
    const googleRes = await oauth2client.getToken(code);
    
    oauth2client.setCredentials(googleRes.tokens);
    
    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${googleRes.tokens.access_token}`
    );

    // console.log(userRes.data);
    

    const { email, name ,picture} = userRes.data;
    console.log(email, name, picture);
    
    let user = await GoogleUserModel.findOne({ email });

    if (!user) {
      user = await GoogleUserModel.create({
        name,
        email,
        img:picture
      });
    }

    const { _id } = user;
    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    return res.status(200).json({
      msg: "Success",
      token,
      user,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ msg: "Internal server error", error });
  }
}

module.exports = { googleLogin };
