import express from 'express';
import { getWalletByUserId } from '../controllers/WalletController.js';


const router = express.Router();

// Get wallet by user ID
router.get('/:userId', getWalletByUserId);

export default router;