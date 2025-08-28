import Customer from "../../models/CustomerModel.js";
import bcrypt from 'bcrypt';
import { database } from "../../config/database.js";

import createAddressService from "../AddressServices/createAddressService.js";
import createWalletService from "../WalletServices/createWalletService.js";

const createCustomerService = async (customerData) => {
    const transaction = await database.transaction();

    try {
        const existingCustomer = await Customer.findOne({
            where: { email: customerData.email },
            transaction 
        });

        if (existingCustomer) {
            throw new Error('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(customerData.password, 10);

        const newCustomer = await Customer.create({
            ...customerData,
            password:hashedPassword
        }, { transaction });

        await createAddressService(customerData.address, newCustomer.id, transaction);

        await createWalletService(newCustomer.id, transaction);

        await transaction.commit();
        return newCustomer;

    } catch (error) {
        await transaction.rollback();
        throw new Error(`Error creating customer: ${error.message}`);
    };
};

export default createCustomerService;