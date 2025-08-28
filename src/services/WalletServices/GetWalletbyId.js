import Wallet from "../../models/WalletModel.js";
import Customer from "../../models/CustomerModel.js";

const getWalletByUserIdService = async (userId) => {
    try {
        const wallet = await Wallet.findOne({
            where: { id_customer: userId },
            include: [{
                model: Customer,
                attributes: ['id', 'name', 'email']
            }]
        });

        if (!wallet) {
            throw new Error('Wallet not found for this user');
        }

        return wallet;
    } catch (error) {
        throw new Error(`Failed to get wallet: ${error.message}`);
    }
};

export { getWalletByUserIdService };