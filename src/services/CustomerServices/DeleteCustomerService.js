import Customer from "../../models/CustomerModel.js";

const deleteCustomerService = async (id) => {
    try {
        const customer = await Customer.findByPk(id);
        if (!customer) {
            throw new Error("Customer not found");
        }
        await customer.destroy();
        return { message: 'Customer deleted successfully' };
    } catch (error) {
        throw new Error(`Error deleting customer: ${error.message}`);
    };
};

export default deleteCustomerService;