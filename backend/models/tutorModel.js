import { Schema, model } from 'mongoose';

const tutorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: 'default-avatar.png',
  },
  postCount: {
    type: Number,
    default: 0,
  },
  followingCount: {
    type: Number,
    default: 0,
  },
  followersCount: {
    type: Number,
    default: 0,
  }
});

// Update postCount whenever a new video is uploaded
tutorSchema.methods.uploadVideo = async function () {
  this.postCount += 1;
  await this.save();
};

const Tutor = model('Tutor', tutorSchema);

module.exports = Tutor;
