const Student = require("../models/Student");

exports.registerStudent = async (req, res) => {
  const { username, password } = req.body;
  try {
    const studentExists = await Student.findOne({ username });
    if (studentExists) {
      return res.status(400).json({ message: "Username already taken" });
    }
    const student = await Student.create({ username, password });
    if (student) {
      // Store in session specifically as 'student' to avoid collision with 'user'
      req.session.student = {
        _id: student._id,
        username: student.username,
        role: "student"
      };
      res.status(201).json({
        _id: student._id,
        username: student.username,
        role: "student"
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginStudent = async (req, res) => {
  const { username, password } = req.body;
  try {
    const student = await Student.findOne({ username });
    if (student && (await student.matchPassword(password))) {
      req.session.student = {
        _id: student._id,
        username: student.username,
        role: "student"
      };
      res.json({
        _id: student._id,
        username: student.username,
        role: "student"
      });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStudentProfile = async (req, res) => {
  if (req.session.student) {
    res.json(req.session.student);
  } else {
    res.status(401).json({ message: "Not logged in" });
  }
};

exports.logoutStudent = (req, res) => {
  req.session.student = null;
  res.json({ message: "Student logged out" });
};
