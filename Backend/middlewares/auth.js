const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req, res, next) => {
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
    // console.log(decoded);
    
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ msg: "Unauthorized , JWT token is required" });
  }
};

module.exports = { ensureAuthenticated };
