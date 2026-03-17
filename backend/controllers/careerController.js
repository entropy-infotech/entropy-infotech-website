const Application = require("../models/Application");

// @desc    Submit internship application
// @route   POST /api/careers/apply
// @access  Public
exports.submitApplication = async (req, res) => {
  try {
    const data = { ...req.body };

    // Handle file upload
    if (req.file) {
      data.resumeFile = req.file.path.replace(/\\/g, "/"); // Normalize path for web
    } else {
      throw new Error("Resume file is required");
    }

    // Parse skills if it comes as a string (common with FormData)
    if (typeof data.skills === "string") {
      try {
        data.skills = JSON.parse(data.skills);
      } catch (e) {
        data.skills = data.skills.split(",").map((s) => s.trim());
      }
    }

    const application = await Application.create(data);
    res.status(201).json({
      success: true,
      message: "Application submitted successfully!",
      data: application,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all applications
// @route   GET /api/careers/admin/applications
// @access  Private/Admin
exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort("-createdAt");
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update application status
// @route   PATCH /api/careers/admin/applications/:id
// @access  Private/Admin
exports.updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true },
    );
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete application
// @route   DELETE /api/careers/admin/applications/:id
// @access  Private/Admin
exports.deleteApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json({ success: true, message: "Application deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
