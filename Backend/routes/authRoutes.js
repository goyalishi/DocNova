const express = require("express");

const router = express.Router();
const {
  signupValidation,
  loginValidation,
} = require("../middlewares/authValidation");

const { handleSignup, handleLogin } = require("../controllers/authController");
const {googleLogin} = require('../controllers/oauthController.js')

router.post("/login", loginValidation, handleLogin);
router.post("/signup", signupValidation, handleSignup);

// google login route
router.get('/google',googleLogin)


module.exports = router;
