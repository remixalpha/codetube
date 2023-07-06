import express from "express";
var router = express.Router();

import indexRoute from "./indexRoute";
import tutorRoutes from "./tutorRoutes";
import courseRoutes from "./courseRoutes";
import videoRoutes from "./videoRoutes";


// Routes
router.use("/", indexRoute);
router.use('/tutors', tutorRoutes);
router.use('/courses', courseRoutes);
router.use('/videos', videoRoutes);

export default router;