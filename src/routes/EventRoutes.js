import express from 'express';
import {
    createEvent,
    getAllEvents
} from '../controllers/EventController.js';

const router = express.Router();

router.post('/create_event',createEvent);
router.get('/get_all_events',getAllEvents);

export default router;