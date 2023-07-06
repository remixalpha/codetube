import { Schema, model } from 'mongoose';

const courseSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  courseTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  uploadedBy: {
    type: String,
    required: true,
  },
  uploadedAt: {
    type: Date,
    required: true,
  },
});

const Course = model('Course', courseSchema);

export default Course;
