import express from "express";
import { updateAddress, deleteAddress,getAddressById } from '../controllers/AddressController.js';

const router = express.Router();

router.put('update_address/:id', updateAddress);
router.delete('delete_address/:id', deleteAddress);
router.get('/get_address_by_id', getAddressById);

export default router;
