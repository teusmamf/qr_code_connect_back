import Customer from "../../models/CustomerModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authCustomerService = async ({ email, password }) => {
    try {
        const customer = await Customer.findOne({ where: { email } });

        if(!customer) {
            throw new Error('Invalid email or password');
        };

        const isPasswordValid = await bcrypt.compare(password, customer.password);

        if(!isPasswordValid) {
            throw new Error('Invalid password');
        };

        const token = jwt.sign(
            { id: customer.id, email: customer.email, role: customer.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return { token, customer: { id: customer.id, name: customer.name, email: customer.email, role: customer.role } };
    } catch (error) {
        throw new Error(`Authentication failed: ${error.message}`);
    };
};

export default authCustomerService;