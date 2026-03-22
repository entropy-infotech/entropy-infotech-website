const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../.env") });

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");

    const username = "superadmin nayan"; // Default admin username
    const password = Math.random().toString(36).slice(-10); // Random password

    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      console.log("Admin user already exists.");
      process.exit(0);
    }

    const admin = new User({
      username,
      password,
      role: "admin",
      isTwoFactorEnabled: false,
    });

    await admin.save();

    console.log("======================================");
    console.log("   ADMIN USER CREATED SUCCESSFULLY    ");
    console.log("======================================");
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log("Note: 2FA setup will be required on first login.");
    console.log("======================================");

    process.exit(0);
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();
