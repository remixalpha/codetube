const Tutor = require('../models/tutorModel');

// Get all tutors
const getAllTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find();
    res.json(tutors);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a specific tutor by ID
const getTutorById = async (req, res) => {
  const { tutorId } = req.params;
  try {
    const tutor = await Tutor.findById(tutorId);
    if (!tutor) {
      return res.status(404).json({ error: 'Tutor not found' });
    }
    res.json(tutor);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new tutor
const createTutor = async (req, res) => {
  const { name, expertise } = req.body;
  try {
    const tutor = new Tutor({ name, expertise });
    await tutor.save();
    res.status(201).json(tutor);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an existing tutor
const updateTutor = async (req, res) => {
  const { tutorId } = req.params;
  const { name, expertise } = req.body;
  try {
    const tutor = await Tutor.findByIdAndUpdate(
      tutorId,
      { name, expertise },
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
  const { tutorId } = req.params;
  try {
    const tutor = await Tutor.findByIdAndDelete(tutorId);
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
    const tutor = await Tutor.findByIdAndUpdate(
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
    const tutor = await Tutor.findByIdAndUpdate(
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
  createTutor,
  updateTutor,
  deleteTutor,
  followTutor,
  unfollowTutor,
};
