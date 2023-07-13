import { Router } from 'express';
const router = Router();
import {
  getAllTutors,
  getTutorById,
  createTutor,
  loginTutor,
  updateTutor,
  deleteTutor,
  followTutor,
  unfollowTutor,
} from '../controllers/tutorController';
// GET /tutors/:id
router.get('/:id', getTutorById);

// GET /tutors
router.get('/', getAllTutors);


// POST /tutors/register
router.post('/register', createTutor);

// POST /tutors/login
router.post('/login', loginTutor);

// PUT /tutors/:id/update
router.put('/:id/update', updateTutor);

// DELETE /tutors/:id/delete
router.delete('/:id/delete', deleteTutor);

// PUT /tutors/:id/follow
router.put('/:id/follow', followTutor);

// PUT /tutors/:id/unfollow
router.put('/:id/unfollow', unfollowTutor);

export default router;
