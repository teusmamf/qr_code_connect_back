import express from 'express';
import {
    purchaseTicket
} from '../controllers/TransactionsController.js'


const router  = express.Router();



router.post('/buy_ticket',purchaseTicket);



export default router;