import Customer from "../../models/CustomerModel.js";

const updateCustomerService = async (id, updateData) => {
    try {
        const customer = await Customer.findByPk(id);
        if(!customer) {
            throw new Error('Customer not found');
        };
        await customer.update(updateData);
        return customer;
    } catch (error) {
        throw new Error(`Error updating customer: ${error.message}`);
    };
};

export default updateCustomerService;