const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  user: { type: String, required: true },
  action: { type: String, required: true },
  time: { type: String, required: true }, // e.g., '2m ago' or 'Just now'
  color: { type: String, default: 'text-blue-400' }
}, { timestamps: true });

module.exports = mongoose.model('Activity', ActivitySchema);
