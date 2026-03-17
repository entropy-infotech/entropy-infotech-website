const Message = require("../models/Message");

// @desc    Submit a contact message
// @route   POST /api/contact
// @access  Public
exports.submitMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = await Message.create({ name, email, subject, message });
    res
      .status(201)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private/Admin
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort("-createdAt");
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// @desc    Delete a contact message
// @route   DELETE /api/contact/:id
// @access  Private/Admin
exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }
    await message.deleteOne();
    res.json({ success: true, message: "Message removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
