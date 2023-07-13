import tutorModel from '../models/tutorModel';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

// Get all tutors
const getAllTutors = async (req, res) => {
  try {
    const tutors = await tutorModel.find();
    res.json(tutors);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a specific tutor by ID
const getTutorById = async (req, res) => {
  const  tutorId  = req.params.id;
  try {
    const tutor = await tutorModel.findById(tutorId);
    if (!tutor) {
      return res.status(404).json({ error: 'Tutor not found' });
    }
    res.json(tutor);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



// Login tutor
const loginTutor =async (req,res,next) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const tutor = await tutorModel.findOne({ email });
    if (!tutor) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // check if password is correct
    const passwordMatch = await bcrypt.compare(password, tutor.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ tutorId: tutor._id }, JWT_SECRET);

    res.status(200).json({
      status: true,

      message: "logged in successfully",
      token,
      doc: tutor._id,
    });
  } catch (error) {
    res.status(500).json({ status: false, msg: "catch err" });
  }
};



// Create a new tutor
const createTutor = async (req, res) => {
  try{
  const { name,category,email,password } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newTutor = await tutorModel.create({ name, category ,email,password:hashedPassword });
  
    res.status(201).json({
      status: true,
      success:true,
      message: "Registered successfully",
      data: newTutor,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};




// Update an existing tutor
const updateTutor = async (req, res) => {
  const  tutorId  = req.params.id;
  const { name, category,email,password } = req.body;
  try {
    const tutor = await tutorModel.findByIdAndUpdate(
      tutorId,
      { name, category,email,password },
      { new: true }
    );
    if (!tutor) {
      return res.status(404).json({ error: 'Tutor not found' });
    }
    res.json(tutor);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a tutor
const deleteTutor = async (req, res) => {
  const  tutorId  = req.params.id;
  try {
    const tutor = await tutorModel.findByIdAndDelete(tutorId);
    if (!tutor) {
      return res.status(404).json({ error: 'Tutor not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Follow a tutor
const followTutor = async (req, res) => {
  try {
    const tutorId = req.params.id;
    const tutor = await tutorModel.findByIdAndUpdate(
      tutorId,
      { $inc: { followersCount: 1 } },
      { new: true }
    );
    res.json(tutor);
  } catch (error) {
    res.status(500).json({ message: 'Failed to follow tutor' });
  }
};

// Unfollow a tutor
const unfollowTutor = async (req, res) => {
  try {
    const tutorId = req.params.id;
    const tutor = await tutorModel.findByIdAndUpdate(
      tutorId,
      { $inc: { followersCount: -1 } },
      { new: true }
    );
    res.json(tutor);
  } catch (error) {
    res.status(500).json({ message: 'Failed to unfollow tutor' });
  }
};

module.exports = {
  getAllTutors,
  getTutorById,
  loginTutor,
  createTutor,
  updateTutor,
  deleteTutor,
  followTutor,
  unfollowTutor,
};
