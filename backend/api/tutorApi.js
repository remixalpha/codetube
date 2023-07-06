import axios from 'axios';

// Fetch all tutors

export const getAllTutors = () => {
  return axios.get('/api/tutors');
};

// Fetch a specific tutor by ID

export const getTutorById = (tutorId) => {
  return axios.get(`/api/tutors/${tutorId}`);
};

// Create a new tutor

export const createTutor = (tutorData) => {
  return axios.post('/api/tutors', tutorData);
};

// Update an existing tutor

export const updateTutor = (tutorId, tutorData) => {
  return axios.put(`/api/tutors/${tutorId}`, tutorData);
};

// Delete a tutor

export const deleteTutor = (tutorId) => {
  return axios.delete(`/api/tutors/${tutorId}`);
};

export const followTutor = (tutorId) => {
  return axios.put(`/api/tutors/${tutorId}/follow`);
};

export const unfollowTutor = (tutorId) => {
  return axios.put(`/api/tutors/${tutorId}/unfollow`);
};
