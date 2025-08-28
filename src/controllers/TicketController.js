import getAllTicketsService from "../services/TicketsServices/GetAllTicketservice.js";
import validateTicketService from "../services/TicketsServices/validateTicketService.js";


export const getAllTickets = async (req, res) => {
  try {
    const filters = {
      id:req.query.id,
      eventId: req.query.eventId,
      userId: req.query.userId,
      categoryId:req.query.categoryId,
      available:req.query.available,
    };
    
    const tickets = await getAllTicketsService(filters);
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching tickets', 
      error: error.message 
    });
  }
};



export const validateTicket = async (req, res) => {
    try {
        const { ticketId } = req.params;
        
        if (!ticketId) {
            return res.status(400).json({
                success: false,
                message: 'Ticket ID is required'
            });
        }

        const result = await validateTicketService(ticketId);
        
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
