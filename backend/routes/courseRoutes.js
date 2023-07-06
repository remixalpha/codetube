import { Router } from 'express';
const router = Router();
import { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } from '../controllers/courseController';

// Routes for courses
router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;
