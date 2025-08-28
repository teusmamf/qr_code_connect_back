import Customer from "../../models/CustomerModel.js";

const getCustomerByIdService = async (id) => {
    try {
        const customer = await Customer.findByPk(id);
        if(!customer) {
            throw new Error('Customer not found');
        };
        return customer;
    } catch (error) {
        throw new Error(`Error fetching customer: ${error.message}`);
    };
};

export default getCustomerByIdService;