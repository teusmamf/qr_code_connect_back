import Event from "../../models/eventsModels.js";
import Address from "../../models/AddressModel.js";
import Company from "../../models/companyModel.js";

const getAllEventsService = async (filters = {}) => {
  try {
    const { companyId, eventId } = filters;
    const whereClause = {};
    
    if (companyId) {
      whereClause.id_company = companyId;
    }

    if (eventId) {
      whereClause.id = eventId;
    }

    console.log("FILTERS:", filters);

    const events = await Event.findAll({
      where: whereClause,
      order: [['createdAt', 'ASC']], 
    });

    return events;
  } catch (error) {
    console.error("Error in getAllEventsService:", error);
    throw new Error(`Failed to fetch events: ${error.message}`);
  }
};

export default getAllEventsService;