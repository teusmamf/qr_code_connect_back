import Wallet from "../../models/WalletModel.js";

const createWalletService = async (customerId, transaction) => {
    return await Wallet.create({
        id_customer: customerId,
        balance: 0
    }, { transaction });
};

export default createWalletService;