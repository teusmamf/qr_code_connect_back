import { getWalletByUserIdService } from "../services/WalletServices/GetWalletbyId.js";

const getWalletByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const wallet = await getWalletByUserIdService(userId);
        
        res.status(200).json({
            success: true,
            data: wallet
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
};

export { getWalletByUserId };