const jwt = require('jsonwebtoken');

const authuser = (req, res, next) => {
  const { token } = req.headers;

  try {
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is required"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Properly attach the user ID to req.user
    req.user = { id: decoded.id };

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
      success: false,
      message: "User authentication error"
    });
  }
};

module.exports = authuser;
