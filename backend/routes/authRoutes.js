const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  generate2FA,
  verifyAndEnable2FA,
  createClient,
  getClients,
  deleteUser,
  getDashboardStats,
  convertMessageToClient,
} = require("../controllers/authController");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/generate-2fa", generate2FA);
router.post("/verify-2fa", verifyAndEnable2FA);
router.get("/stats", protect, admin, getDashboardStats);
router.post("/convert-query", protect, admin, convertMessageToClient);
router.post("/create-client", protect, admin, createClient);
router.get("/clients", protect, admin, getClients);
router.delete("/users/:id", protect, admin, deleteUser);

module.exports = router;
