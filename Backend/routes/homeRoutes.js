const express  = require('express');

const router = express.Router();
const {ensureAuthenticated} = require('../middlewares/auth.js');

router.get("/home", ensureAuthenticated,(req,res)=>{
    // console.log("Logged in user details",req.user);
    console.log("UserId",req.userId);
    res.status(200).json({msg:"HomePage"});
});

module.exports = router;