import { Router } from 'express';
const router = Router();
import { getAllTutors, getTutorById, createTutor, updateTutor, deleteTutor, followTutor, unfollowTutor } from '../controllers/tutorController';

// GET /tutors
router.get('/', getAllTutors);

// GET /tutors/:id
router.get('/:id', getTutorById);

// POST /tutors
router.post('/', createTutor);

// PUT /tutors/:id
router.put('/:id', updateTutor);

// DELETE /tutors/:id
router.delete('/:id', deleteTutor);

router.put('/:id/follow', followTutor);

router.put('/:id/unfollow', unfollowTutor);

export default router;
