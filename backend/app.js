import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import Mongoose from "mongoose";
const log = require("simple-node-logger").createSimpleLogger();
import index from "./routes/index";
const cors = require("cors");
const https = require("https");
const fs = require("fs");
const app = express();


// Connect to MongoDB
// Connect to the database
Mongoose.connect("mongodb://127.0.0.1:27017/codetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = Mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("MongoDB Connected");
});

// Middleware

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("", index);

// Register route handler
app.post("/api/tutors/register", (req, res) => {
  console.log('Received registration request:', req.body); // Log the received request data
  // Process the registration request and send the response

  // Log the response data
  console.log('Response sent:', { success: true }); // Replace { success: true } with your actual response data
  res.status(200).json({ success: true }); // Replace { success: true } with your actual response data
});

// Error handling middleware
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json({ message: err });
});

// Start the server
app.listen(5000, () => {
  log.info(`APP IS RUNNING 5000`);
});
