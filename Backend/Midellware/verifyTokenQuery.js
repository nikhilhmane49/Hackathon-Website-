const jwt = require("jsonwebtoken");

const verifyTokenQuery = (req, res, next) => {
  const atoken = req.query.atoken;
  if (!atoken) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(atoken, process.env.JWT_SECRET);
    req.auth = { id: decoded.id }; // attach organizer ID
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyTokenQuery;
