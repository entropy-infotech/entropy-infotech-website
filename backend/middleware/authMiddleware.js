const User = require("../models/User");

const protect = async (req, res, next) => {
  if (req.session && req.session.user && !req.session.user.isPartial) {
    try {
      req.user = await User.findById(req.session.user._id).select("-password");
      if (!req.user) {
        return res
          .status(401)
          .json({ message: "Not authorized, user not found" });
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, session failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no session" });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(401).json({ message: "Not authorized as an admin" });
  }
};

module.exports = { protect, admin };
