import express from 'express';
const router = express.Router();

import { getSlots, bookAppointment, getMyAppointments, updateStatus, cancelAppointment, markNoShow, getWaitingTime } from '../controllers/appointmentController.js';
import { protect, doctorOnly, patientOnly } from '../middleware/auth.js';

router.get('/slots', protect, getSlots);
router.get('/waiting-time', protect, getWaitingTime);
router.get('/my', protect, getMyAppointments);
router.post('/', protect, patientOnly, bookAppointment);
router.patch('/:id/status', protect, doctorOnly, updateStatus);
router.patch('/:id/cancel', protect, patientOnly, cancelAppointment);
router.patch('/:id/no-show', protect, doctorOnly, markNoShow);

export default router;