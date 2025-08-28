import Customer from "../../models/CustomerModel.js";

const getAllCustomersService = async () => {
    try{
        const customers = await Customer.findAll();
        return customers;
    } catch (error) {
        throw new Error(`Error fetching customers: ${error.message}`);
    };
};

export default getAllCustomersService;