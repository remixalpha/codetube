import { Router } from 'express';
const router = Router();
import { getAllVideosByCourse, getVideoById, createVideo, updateVideo, deleteVideo } from '../controllers/videoController';

// Routes for videos
router.get('/courses/:courseId/videos', getAllVideosByCourse);
router.get('/:id', getVideoById);
router.post('/', createVideo);
router.put('/:id', updateVideo);
router.delete('/:id', deleteVideo);

export default router;
