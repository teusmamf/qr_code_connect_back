import createCustomerService from "../services/CustomerServices/CreateCustomerService.js";
import getAllCustomersService from "../services/CustomerServices/GetAllCustomersService.js";
import getCustomerByIdService from "../services/CustomerServices/GetCustomerByIdService.js";
import updateCustomerService from "../services/CustomerServices/UpdateCustomerService.js";
import deleteCustomerService from "../services/CustomerServices/DeleteCustomerService.js";

const createCustomer = async (req, res) => {
    try {
        const customerData = req.body;
        const newCustomer = await createCustomerService(customerData);
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(500).json({ message: 'Error creating customer', error: error.message });
    };
};

const getAllCustomers = async (req, res) => {
    try {
        const customers = await getAllCustomersService();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customers', error: error.message });
    };
};

const getCustomerById = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await getCustomerByIdService(id);
        res.status(200).json(customer);
    } catch (error) {
        res.status(404).json({ message: 'Customer not found', error: error.message });
    };
};

const updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updateCustomer = await updateCustomerService(id, updateData);
        res.status(200).json(updateCustomer);
    } catch (error) {
        res.status(404).json({ message: 'Error updating customer', error: error.message });
    };
};

const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteCustomerService(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: 'Error deleting customer', error: error.message });
    };
};

export{ 
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};
