const express = require("express");
const {
  submitApplication,
  getApplications,
  updateApplicationStatus,
  deleteApplication,
} = require("../controllers/careerController");
const { protect, admin } = require("../middleware/authMiddleware");

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/resumes");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname),
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only .pdf files are allowed!"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

const router = express.Router();

// Public route for candidates
router.post("/apply", upload.single("resume"), submitApplication);

// Admin routes for managing applications
router.get("/admin/applications", protect, admin, getApplications);
router.patch(
  "/admin/applications/:id",
  protect,
  admin,
  updateApplicationStatus,
);
router.delete("/admin/applications/:id", protect, admin, deleteApplication);

module.exports = router;
