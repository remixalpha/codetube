import express from 'express';
const router = express.Router();

import { indexController, testController } from '../controllers/indexController';

router.get('/', indexController);
router.get('/test', testController);

export default router;
