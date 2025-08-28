// routes/TicketRoutes.js
import express from 'express';
import {getAllTickets , validateTicket} from '../controllers/TicketController.js'
const router = express.Router();



router.get('/get_all_tickets', getAllTickets);

router.patch('/validate/:ticketId', validateTicket);
export default router;