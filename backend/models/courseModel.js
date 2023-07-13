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
  coverImage: {
    type: String,
    required: true,
    default: function () {
      return getCategoryCoverImage(this.category);
    },
  },
  tutor: {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});

const Course = model('Course', courseSchema);

export default Course;
