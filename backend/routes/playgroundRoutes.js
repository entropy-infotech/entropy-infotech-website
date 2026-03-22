const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Quiz = require('../models/Quiz');
const Activity = require('../models/Activity');
const Leaderboard = require('../models/Leaderboard');
const quizController = require('../controllers/quizController');
const studentAuthController = require('../controllers/studentAuthController');

// GET all quizzes
router.get('/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET live activities
router.get('/activities', async (req, res) => {
  try {
    const activities = await Activity.find().sort({ createdAt: -1 }).limit(10);
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET leaderboard (Real Data)
router.get('/leaderboard', async (req, res) => {
  try {
    const topStudents = await Student.find()
      .sort({ points: -1 })
      .limit(10);
    
    // Map to frontend interface
    const leaderboard = topStudents.map((student, index) => ({
      _id: student._id,
      rank: index + 1,
      name: student.username,
      score: student.points.toLocaleString(),
      trend: student.trend || 'stable',
      avatarColor: student.avatarColor || 'bg-white/10'
    }));

    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Student Auth Routes
router.post('/register', studentAuthController.registerStudent);
router.post('/login', studentAuthController.loginStudent);
router.get('/me', studentAuthController.getStudentProfile);
router.post('/logout', studentAuthController.logoutStudent);

// AI Quiz Routes
router.get('/quiz/questions/:category', quizController.getAIQuestions);
router.post('/quiz/submit', quizController.submitQuizResult);

// Seed Initial Data Endpoint
router.post('/seed', async (req, res) => {
  try {
    await Quiz.deleteMany({});
    await Activity.deleteMany({});
    await Leaderboard.deleteMany({}); 

    await Quiz.insertMany([
      { name: 'Python', questions: '1.2k', color: 'bg-blue-500/10 text-blue-500', difficulty: 'Beginner', initial: 'P', studentsActive: '1.2k' },
      { name: 'JavaScript', questions: '3.5k', color: 'bg-yellow-500/10 text-yellow-500', difficulty: 'Intermediate', initial: 'JS', studentsActive: '2.8k' },
      { name: 'React', questions: '2.1k', color: 'bg-cyan-500/10 text-cyan-500', difficulty: 'Expert', initial: 'R', studentsActive: '1.5k' },
      { name: 'Node.js', questions: '1.8k', color: 'bg-green-500/10 text-green-500', difficulty: 'Intermediate', initial: 'N', studentsActive: '1.2k' },
      { name: 'Flutter', questions: '1.4k', color: 'bg-blue-400/10 text-blue-400', difficulty: 'Beginner', initial: 'F', studentsActive: '900' },
      { name: 'C++', questions: '4.2k', color: 'bg-indigo-500/10 text-indigo-500', difficulty: 'Master', initial: 'C+', studentsActive: '3.1k' },
      { name: 'Java', questions: '5.1k', color: 'bg-red-500/10 text-red-500', difficulty: 'Advanced', initial: 'J', studentsActive: '4.5k' },
      { name: 'Data Structures', questions: '6.8k', color: 'bg-purple-500/10 text-purple-500', difficulty: 'Legend', initial: 'DS', studentsActive: '5.2k' },
      { name: 'Git', questions: '2.5k', color: 'bg-orange-500/10 text-orange-500', difficulty: 'Beginner', initial: 'G', studentsActive: '2.0k' },
      { name: 'Machine Learning', questions: '3.9k', color: 'bg-teal-500/10 text-teal-500', difficulty: 'Expert', initial: 'ML', studentsActive: '2.7k' }
    ]);

    await Activity.insertMany([
      { user: "CodeExplorer", action: "joined the Python Battle Zone", time: "Just now", color: "text-blue-400" },
      { user: "Sarah_JS", action: "extended their learning streak to 7 days!", time: "5m ago", color: "text-orange-400" },
      { user: "GlobalDev", action: "is now live in the Hangout", time: "2m ago", color: "text-green-400" }
    ]);

    // Seed some users with points for the leaderboard if none exist or for testing
    const seedUsers = [
      { username: 'Alex Rivera', password: 'password123', points: 2840, trend: 'up', avatarColor: 'bg-blue-500' },
      { username: 'Sarah Chen', password: 'password123', points: 2620, trend: 'stable', avatarColor: 'bg-purple-500' },
      { username: 'Jordan Smyth', password: 'password123', points: 2480, trend: 'down', avatarColor: 'bg-emerald-500' },
      { username: 'Mika Tanaka', password: 'password123', points: 2310, trend: 'up', avatarColor: 'bg-orange-500' }
    ];

    for (const s of seedUsers) {
      const exists = await Student.findOne({ username: s.username });
      if (!exists) {
        await Student.create(s);
      } else {
        exists.points = s.points;
        exists.trend = s.trend;
        exists.avatarColor = s.avatarColor;
        await exists.save();
      }
    }

    res.json({ message: 'Playground data seeded successfully with real users and more categories' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET high-level stats for Admin Dashboard
router.get('/stats', async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments();
    const totalQuizzes = await Quiz.countDocuments();
    const totalActivities = await Activity.countDocuments();
    
    res.json({
      totalStudents,
      totalQuizzes,
      totalActivities
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
