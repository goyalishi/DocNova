const jwt = require("jsonwebtoken");
const {getUserType} = require('../models/user');

const ensureAuthenticated = async(req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(403).json({
      msg: "Unauthorized , JWT token is required",
    });
  }

  try {
    
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decoded;
    req.userId= decoded._id;
    const userType = await getUserType(decoded._id);
    if(!userType){
      console.log("Usertype is not found in the database");
      
    }
    req.userType = userType;
    // console.log(decoded);
    console.log(req.userId);
    console.log(req.userType);
    
    
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ msg: "Unauthorized , JWT token is required" });
  }
};

module.exports = { ensureAuthenticated };
