import express from 'express';
import {
    createCompany,
    getAllCompanies
} from '../controllers/CompanyController.js';

const router = express.Router();

router.post('/create_company',createCompany);
router.get('/get_all_companies',getAllCompanies);

export default router; 