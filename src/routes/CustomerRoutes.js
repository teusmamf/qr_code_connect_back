import express from 'express';
import { createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer } from '../controllers/CustomerController.js';
import authCustomer from '../controllers/AuthCustomerController.js';

const router = express.Router();

router.post('/create_customer', createCustomer);
router.get('/get_all_customers', getAllCustomers);
router.get('/get_customer/:id', getCustomerById);
router.put('/update_customer/:id', updateCustomer);
router.delete('/delete_customer/:id', deleteCustomer);

router.post('/login', authCustomer);

export default router;
