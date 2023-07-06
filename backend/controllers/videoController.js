import Video from '../models/videoModel';

// Get all videos by course
export async function getAllVideosByCourse(req, res) {
  try {
    const courseId = req.params.courseId;
    const videos = await Video.find({ courseId });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch videos' });
  }
}

// Get video by ID
export async function getVideoById(req, res) {
  try {
    const videoId = req.params.id;
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch video' });
  }
}

// Create a new video
export async function createVideo(req, res) {
  try {
    const { title, courseId, views, uploadedAt } = req.body;
    const video = await Video.create({ title, courseId, views, uploadedAt });
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create video' });
  }
}

// Update a video
export async function updateVideo(req, res) {
  try {
    const videoId = req.params.id;
    const { videoTitle, courseId, views, uploadedAt } = req.body;
    const video = await Video.findByIdAndUpdate(
      videoId,
      { videoTitle, courseId, views, uploadedAt },
      { new: true }
    );
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update video' });
  }
}

// Delete a video
export async function deleteVideo(req, res) {
  try {
    const videoId = req.params.id;
    const video = await Video.findByIdAndDelete(videoId);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete video' });
  }
}

export default {
  getAllVideosByCourse,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
};
