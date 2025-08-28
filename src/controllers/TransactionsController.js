import purchaseTicketService from "../services/TransactionsService/PurchaseService.js";

const purchaseTicket = async (req, res) => {
    try {
        const purchaseData = req.body; 
        const result = await purchaseTicketService(purchaseData);
        res.status(200).json({
            message: 'Ticket purchased successfully',
            transaction: result.transaction,
            ticket: result.ticket
        });
    } catch (error) {
        res.status(500).json({ message: 'Error purchasing ticket', error: error.message });
    }
};

export { purchaseTicket };