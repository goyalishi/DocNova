const express = require("express");

const router = express.Router();
const {
  signupValidation,
  loginValidation,
} = require("../middlewares/authValidation");

const { handleSignup, handleLogin } = require("../controllers/authController");

router.post("/login", loginValidation, handleLogin);
router.post("/signup", signupValidation, handleSignup);

module.exports = router;
