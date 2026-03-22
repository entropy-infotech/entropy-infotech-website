const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  name: { type: String, required: true },
  questions: { type: String, default: '0' },
  color: { type: String, default: 'bg-blue-500/10 text-blue-500' },
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Master', 'Legend'], default: 'Beginner' },
  initial: { type: String, required: true },
  studentsActive: { type: String, default: '0' }
}, { timestamps: true });

module.exports = mongoose.model('Quiz', QuizSchema);
