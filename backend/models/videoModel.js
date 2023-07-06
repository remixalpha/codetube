import mongoose, { Schema, model } from 'mongoose';

const videoSchema = new Schema({
  videoTitle: {
    type: String,
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  views: {
    type: Number,
    required: true,
  },
  uploadedAt: {
    type: Date,
    required: true,
  },
});

const Video = model('Video', videoSchema);

export default Video;
