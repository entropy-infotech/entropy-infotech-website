const { GoogleGenerativeAI } = require("@google/generative-ai");
const Student = require("../models/Student");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const DEFAULT_QUESTIONS = {
  "Python": [
    { "question": "What is the correct file extension for Python files?", "options": [".pt", ".py", ".pyt", ".pw"], "correctAnswer": 1 },
    { "question": "Which keyword is used to create a function in Python?", "options": ["func", "define", "def", "function"], "correctAnswer": 2 },
    { "question": "How do you insert comments in Python code?", "options": ["//", "/* */", "#", "--"], "correctAnswer": 2 },
    { "question": "Which data type is used to store multiple items in a single variable?", "options": ["List", "Integer", "String", "Float"], "correctAnswer": 0 },
    { "question": "What is the correct syntax to output 'Hello World' in Python?", "options": ["echo('Hello World')", "print('Hello World')", "p('Hello World')", "console.log('Hello World')"], "correctAnswer": 1 }
  ],
  "JavaScript": [
    { "question": "Inside which HTML element do we put the JavaScript?", "options": ["<js>", "<scripting>", "<script>", "<javascript>"], "correctAnswer": 2 },
    { "question": "How do you create a function in JavaScript?", "options": ["function = myFunction()", "function:myFunction()", "function myFunction()", "def myFunction()"], "correctAnswer": 2 },
    { "question": "How do you write an IF statement in JavaScript?", "options": ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"], "correctAnswer": 1 },
    { "question": "How does a FOR loop start?", "options": ["for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)"], "correctAnswer": 3 },
    { "question": "Which operator is used to assign a value to a variable?", "options": ["*", "-", "=", "x"], "correctAnswer": 2 }
  ],
  "React": [
    { "question": "What is a common folder pattern for React components?", "options": ["src/assets", "src/components", "src/styles", "src/hooks"], "correctAnswer": 1 },
    { "question": "Which hook is used to manage state in a functional component?", "options": ["useEffect", "useContext", "useReducer", "useState"], "correctAnswer": 3 },
    { "question": "What is JSX?", "options": ["A CSS preprocessor", "A database query language", "A syntax extension for JavaScript", "A state management library"], "correctAnswer": 2 },
    { "question": "How do you pass data to a child component?", "options": ["Via State", "Via Props", "Via Context", "Via Redux"], "correctAnswer": 1 },
    { "question": "What is the default port for a local React development server?", "options": ["5000", "8080", "4200", "3000"], "correctAnswer": 3 }
  ],
  "Node.js": [
    { "question": "Which module is used to create a web server in Node.js?", "options": ["fs", "url", "http", "path"], "correctAnswer": 2 },
    { "question": "How do you include a module in Node.js?", "options": ["include('module')", "require('module')", "import 'module'", "using 'module'"], "correctAnswer": 1 },
    { "question": "What does NPM stand for?", "options": ["New Packet Manager", "Node Project Manager", "Node Package Manager", "Node Protocol Manager"], "correctAnswer": 2 },
    { "question": "Which object is used to access command-line arguments?", "options": ["console", "process", "window", "document"], "correctAnswer": 1 },
    { "question": "What is the primary language used for Node.js development?", "options": ["Python", "Java", "JavaScript", "C++"], "correctAnswer": 2 }
  ],
  "Flutter": [
    { "question": "Which programming language is used to build Flutter apps?", "options": ["Kotlin", "Swift", "Java", "Dart"], "correctAnswer": 3 },
    { "question": "What are the two types of widgets in Flutter?", "options": ["Static and Dynamic", "Stateful and Stateless", "First and Second", "Text and Image"], "correctAnswer": 1 },
    { "question": "What command is used to run a Flutter app?", "options": ["flutter start", "flutter build", "flutter run", "flutter launch"], "correctAnswer": 2 },
    { "question": "Which widget is used for creating a scrollable list?", "options": ["Column", "ListView", "Stack", "Container"], "correctAnswer": 1 },
    { "question": "In Flutter, everything is a...?", "options": ["Object", "Function", "Widget", "Class"], "correctAnswer": 2 }
  ]
};

exports.getAIQuestions = async (req, res) => {
  const { category } = req.params;
  const prompt = `Generate 5 multiple-choice questions about ${category}. 
  Return ONLY a JSON array of objects with the following structure:
  [
    {
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correctAnswer": 0 (index of the correct option)
    }
  ]
  No extra text, no markdown code blocks.`;

  try {
    // If API key is missing or placeholder, go straight to fallback
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "your_actual_key_here") {
      console.warn(`[QuizAPI] Gemini API Key missing/placeholder. Using fallback for ${category}.`);
      return res.json(DEFAULT_QUESTIONS[category] || DEFAULT_QUESTIONS["Python"]);
    }

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    // Clean up potential markdown blocks if AI includes them despite instructions
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();
    
    const questions = JSON.parse(text);
    res.json(questions);
  } catch (error) {
    console.error(`[QuizAPI] Gemini Error for ${category}:`, error.message);
    console.log(`[QuizAPI] Attempting fallback for ${category}...`);
    
    const fallback = DEFAULT_QUESTIONS[category] || DEFAULT_QUESTIONS["Python"];
    res.json(fallback);
  }
};

exports.submitQuizResult = async (req, res) => {
  const { score } = req.body;
  if (!req.session.student) {
    return res.status(401).json({ message: "You must be logged in to save your score." });
  }

  try {
    const student = await Student.findById(req.session.student._id);
    if (!student) {
      return res.status(404).json({ message: "Student record not found." });
    }

    // Update student points (e.g., each correct answer is 100 points)
    const pointsEarned = score * 100;
    student.points += pointsEarned;
    await student.save();

    res.json({ 
      message: "Score submitted successfully!", 
      totalPoints: student.points, 
      pointsEarned 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
