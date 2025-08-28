import Ticket from "../../models/ticketsModel.js";

const validateTicketService = async (ticketId) => {
    try {
        const ticket = await Ticket.findByPk(ticketId);
        
        if (!ticket) {
            throw new Error('Ticket not found');
        }

        if (ticket.validated) {
            throw new Error('Ticket already validated');
        }

        if (!ticket.available) {
            throw new Error('Ticket is not available for validation');
        }

        const updatedTicket = await ticket.update({
            validated: true,
            validatedAt: new Date()
        });

        return {
            success: true,
            ticket: updatedTicket,
            message: 'Ticket validated successfully'
        };
    } catch (error) {
        console.error('Validation error:', error);
        throw error;
    }
};

export default validateTicketService;