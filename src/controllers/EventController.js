import createEventService from "../services/createEventService.js/createEventService.js";
import getAllEventsService from "../services/createEventService.js/getallEentService.js";





const createEvent = async (req,res) => {
    try {
        const eventData = req.body;
        const newEvent  = await createEventService(eventData);
        res.status(201).json(newEvent);

    } catch (error) {
        console.log(error.message);
        
        res.status(500).json({message:'Error creating event', error});
    }
}

const getAllEvents = async (req, res) => {
    try {
        const filters = {
            companyId: req.query.companyId,
            eventId: req.query.eventId
        };
        
        const events = await getAllEventsService(filters);
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ 
            message: 'Error fetching events', 
            error: error.message 
        });
    }
};

export {
    createEvent,
    getAllEvents
}