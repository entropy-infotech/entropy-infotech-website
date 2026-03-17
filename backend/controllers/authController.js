const User = require("../models/User");
const Blog = require("../models/Blog");
const Message = require("../models/Message");
const Application = require("../models/Application");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "fallback_secret", {
    expiresIn: "30d",
  });
};

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Prevent registration as admin
    if (req.body.role === "admin") {
      return res
        .status(403)
        .json({ message: "Admin registration is restricted" });
    }
    const user = await User.create({ username, password });
    if (user) {
      req.session.user = {
        _id: user._id,
        username: user.username,
        role: user.role,
      };
      res.status(201).json({
        _id: user._id,
        username: user.username,
        role: user.role,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const { authenticator } = require("otplib");
const qrcode = require("qrcode");

exports.generate2FA = async (req, res) => {
  try {
    console.log("Starting 2FA generation for session:", req.session?.id);
    if (!req.session || !req.session.user || !req.session.user._id) {
      console.error("2FA Error: Missing session user", req.session);
      return res
        .status(401)
        .json({ message: "Authentication required for 2FA setup" });
    }

    const user = await User.findById(req.session.user._id);
    if (!user) {
      console.error(
        `2FA Error: User not found for ID: ${req.session.user._id}`,
      );
      return res.status(404).json({ message: "User not found" });
    }

    console.log("Generating secret for user:", user.username);
    const secret = authenticator.generateSecret();
    user.twoFactorSecret = secret;
    await user.save();
    console.log("Secret saved to database");

    const otpauth = authenticator.keyuri(user.username, "Entropy Infotech", secret);
    console.log("Keyuri generated:", otpauth);
    
    const qrImageUrl = await qrcode.toDataURL(otpauth);
    console.log("QR Image URL generated successfully");

    res.json({ secret, qrImageUrl });
  } catch (error) {
    console.error("2FA Generation Error Details:", error);
    res.status(500).json({ 
      message: "Failed to generate 2FA QR code",
      details: error.message 
    });
  }
};

exports.verifyAndEnable2FA = async (req, res) => {
  const { token } = req.body;
  try {
    if (!req.session || !req.session.user || !req.session.user._id) {
       return res.status(401).json({ message: "Session expired or invalid" });
    }
    const user = await User.findById(req.session.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });
    
    console.log("Verifying 2FA for user:", user.username);
    const isValid = authenticator.check(token, user.twoFactorSecret);

    if (isValid) {
      user.isTwoFactorEnabled = true;
      await user.save();
      // Clear partial auth if it exists
      if (req.session.user) {
        req.session.user.isPartial = false;
        // Also update local cache if necessary, but here we just return success
      }
      console.log("2FA enabled successfully for:", user.username);
      res.json({ message: "2FA enabled successfully" });
    } else {
      console.warn("Invalid 2FA token attempt for:", user.username);
      res.status(400).json({ message: "Invalid token" });
    }
  } catch (error) {
    console.error("2FA Verification Error:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password, token } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))) {
      if (user.role === "admin") {
        // Enforce IP check for admin
        const clientIp =
          req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;
        if (user.allowedIp && user.allowedIp !== clientIp) {
          console.log(`Unauthorized admin login attempt from IP: ${clientIp}`);
          return res
            .status(403)
            .json({ message: "Access restricted: Unauthorized IP" });
        }

        // Enforce 2FA for admin
        if (!user.isTwoFactorEnabled) {
          req.session.user = {
            _id: user._id,
            username: user.username,
            role: user.role,
            isPartial: true,
          };
          // Explicitly save session before responding to avoid race conditions with next request
          return req.session.save((err) => {
            if (err) {
              console.error("Session Save Error:", err);
              return res.status(500).json({ message: "Session error" });
            }
            return res.status(200).json({ setup2FA: true, userId: user._id });
          });
        } else {
          if (!token) {
            return res.status(200).json({ require2FA: true, userId: user._id });
          }
          const isValid = authenticator.check(token, user.twoFactorSecret);
          if (!isValid) {
            return res.status(401).json({ message: "Invalid 2FA token" });
          }
        }
      } else if (user.isTwoFactorEnabled) {
        if (!token) {
          return res.status(200).json({ require2FA: true, userId: user._id });
        }
        const isValid = authenticator.check(token, user.twoFactorSecret);
        if (!isValid) {
          return res.status(401).json({ message: "Invalid 2FA token" });
        }
      }

      req.session.user = {
        _id: user._id,
        username: user.username,
        role: user.role,
        isPartial: false,
      };
      res.json({
        _id: user._id,
        username: user.username,
        role: user.role,
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Could not log out" });
    }
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out successfully" });
  });
};

exports.createClient = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User already exists with this username" });
    }
    const user = await User.create({
      username,
      password,
      role: "client",
    });
    res.status(201).json({
      message: "Client created successfully",
      _id: user._id,
      username: user.username,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.convertMessageToClient = async (req, res) => {
  const { messageId } = req.body;
  try {
    const message = await Message.findById(messageId);
    if (!message) {
      return res.status(404).json({ message: "Query not found" });
    }

    // Check if user already exists
    const userExists = await User.findOne({ username: message.email });
    if (userExists) {
      return res.status(400).json({ message: "A client with this email already exists" });
    }

    // Create client using email as username and a default password (or random)
    const password = Math.random().toString(36).slice(-8); // Random temporary password
    const user = await User.create({
      username: message.email,
      password: password,
      role: "client"
    });

    // Optionally delete the message after conversion or mark it
    await message.deleteOne();

    res.status(201).json({
      message: "Client created and query converted successfully",
      username: user.username,
      tempPassword: password // In real app, send email, here we return for demo
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all clients
// @route   GET /api/auth/clients
// @access  Private/Admin
exports.getClients = async (req, res) => {
  try {
    const clients = await User.find({ role: "client" }).sort("-createdAt");
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a user (client)
// @route   DELETE /api/auth/users/:id
// @access  Private/Admin
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.deleteOne();
    res.json({ success: true, message: "User removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// @desc    Get dashboard stats
// @route   GET /api/auth/stats
// @access  Private/Admin
exports.getDashboardStats = async (req, res) => {
  try {
    const clientsCount = await User.countDocuments({ role: "client" });
    const blogsCount = await Blog.countDocuments();
    const messagesCount = await Message.countDocuments();
    const applicationsCount = await Application.countDocuments();

    res.json({
      clients: clientsCount,
      blogs: blogsCount,
      messages: messagesCount,
      applications: applicationsCount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
