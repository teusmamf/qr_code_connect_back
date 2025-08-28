import express from 'express';
import {
    createCaTegory,
    getAllCategories
} from '../controllers/CategoryController.js';

const router = express.Router();

router.post('/create_category',createCaTegory);
router.get('/get_all_categories',getAllCategories);

export default router;