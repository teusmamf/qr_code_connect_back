import authCustomerService from "../services/CustomerServices/AuthCustomerService.js";

const authCustomer = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authCustomerService({ email, password });
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed', error: error.message });
    };
};

export default authCustomer;