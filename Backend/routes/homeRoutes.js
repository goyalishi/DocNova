const express  = require('express');

const router = express.Router();
const {ensureAuthenticated} = require('../middlewares/auth');

router.get("/home", ensureAuthenticated,(req,res)=>{
    console.log("Logged in user details",req.user);
    
    res.status(200).json({msg:"HomePage"});
});

module.exports = router;