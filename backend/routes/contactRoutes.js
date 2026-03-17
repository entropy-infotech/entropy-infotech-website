const express = require("express");
const {
  submitMessage,
  getMessages,
  deleteMessage,
} = require("../controllers/contactController");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(submitMessage).get(protect, admin, getMessages);
router.route("/:id").delete(protect, admin, deleteMessage);

module.exports = router;
