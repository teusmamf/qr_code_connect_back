// services/ticketServices/getAllTicketsService.js
import Ticket from "../../models/ticketsModel.js";


const getAllTicketsService = async (filters = {}) => {
  try {
    const { id, eventId, userId, categoryId, available } = filters;
    const whereClause = {};

    if (id) {
      whereClause.id = id;
    }
    if (categoryId) {
      whereClause.id_category = categoryId;
    }
    if (eventId) {
      whereClause.id_event = eventId;
    }
    if (userId) {
      whereClause.id_customer = userId;
    }
    if (available !== undefined) {
      whereClause.available = available; // ⬅️ ADD THIS LINE
    }

    console.log("TICKET FILTERS:", filters);

    const tickets = await Ticket.findAll({
      where: whereClause,
    
    });

    return tickets;
  } catch (error) {
    console.error("Error in getAllTicketsService:", error);
    throw new Error(`Failed to fetch tickets: ${error.message}`);
  }
};


export default getAllTicketsService;