const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    cityCountry: {
      type: String,
      required: [true, "City/Country is required"],
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    role: {
      type: String,
      required: true,
      enum: [
        "Frontend Developer Intern",
        "Backend Developer Intern",
        "UI/UX Designer Intern",
        "Python Developer Intern",
        "SEO Intern",
      ],
    },
    highestQualification: {
      type: String,
      required: [true, "Highest qualification is required"],
      enum: ["High School", "Diploma", "Bachelor’s Degree", "Master’s Degree", "Other"],
    },
    fieldOfStudy: {
      type: String,
      required: [true, "Field of study is required"],
      trim: true,
    },
    university: {
      type: String,
      required: [true, "University name is required"],
      trim: true,
    },
    graduationYear: {
      type: String,
      required: [true, "Graduation year is required"],
    },
    skills: {
      type: [String],
      required: [true, "Skills are required"],
    },
    hasExperience: {
      type: String,
      required: [true, "Experience status is required"],
      enum: ["Yes", "No"],
    },
    experienceDescription: {
      type: String,
      trim: true,
    },
    hoursPerWeek: {
      type: String,
      required: [true, "Availability is required"],
      enum: ["5–10", "10–20", "20+"],
    },
    resumeLink: {
      type: String,
      default: "",
    },
    resumeFile: {
      type: String,
      required: [true, "Resume file is required"],
    },
    portfolioLink: {
      type: String,
      default: "",
    },
    githubLink: {
      type: String,
      default: "",
    },
    linkedinLink: {
      type: String,
      default: "",
    },
    hiringMessage: {
      type: String,
      trim: true,
    },
    declaration: {
      type: Boolean,
      required: [true, "Declaration is required"],
      validate: {
        validator: function (v) {
          return v === true;
        },
        message: "You must accept the declaration",
      },
    },
    status: {
      type: String,
      enum: ["pending", "interview", "hired", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Application", applicationSchema);
