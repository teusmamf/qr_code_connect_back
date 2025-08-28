import Wallet from '../../models/WalletModel.js';

const updateWalletBalanceService = async (id_customer, amount) => {
    
    const wallet = await Wallet.findOne({
        where: { id_customer }
    });

    if (!wallet) {
        throw new Error('Wallet not found for the customer');
    }

    
    wallet.balance += amount;
    await wallet.save();

    return wallet;
};

export default updateWalletBalanceService;