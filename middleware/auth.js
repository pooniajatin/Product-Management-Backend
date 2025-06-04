const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
   //console.log("autheader",authHeader)
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Authentication invalid" });
  }
  const token = authHeader.split(" ")[1];
  //console.log('tokennmiddleware',token);
  
  try {
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY);

    req.user = { userId: payload.UserId, name: payload.Name };
    
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Authentication invalid" });
  }
};

module.exports = auth;