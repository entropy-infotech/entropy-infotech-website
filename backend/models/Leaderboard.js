const mongoose = require('mongoose');

const LeaderboardSchema = new mongoose.Schema({
  rank: { type: Number, required: true },
  name: { type: String, required: true },
  score: { type: String, required: true },
  trend: { type: String, enum: ['up', 'down', 'stable'], default: 'stable' },
  avatarColor: { type: String, default: 'bg-white/10' }
}, { timestamps: true });

module.exports = mongoose.model('Leaderboard', LeaderboardSchema);
