const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from config.env file
dotenv.config({ path: './config/.env' });

const connectDatabase = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MongoDB URI is missing in environment variables.");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connection Successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = connectDatabase;

