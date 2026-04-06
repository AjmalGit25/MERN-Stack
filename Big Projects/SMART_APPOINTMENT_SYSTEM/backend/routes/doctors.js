import express from 'express';
const router = express.Router();
import { getDoctors, toggleAvailability, setOffDays, setConsultationType, getDoctorStats, getAllDoctorRankings } from '../controllers/doctorController.js';
import { protect, doctorOnly } from '../middleware/auth.js';

router.get('/', protect, getDoctors);
router.get('/stats', protect, doctorOnly, getDoctorStats);
router.get('/rankings', protect, getAllDoctorRankings);
router.patch('/availability', protect, doctorOnly, toggleAvailability);
router.patch('/off-days', protect, doctorOnly, setOffDays);
router.patch('/consultation-type', protect, doctorOnly, setConsultationType);

export default router;