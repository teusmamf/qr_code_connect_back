import Category from "../../models/categoryModel.js";
import CreateTicketService from "../TicketsServices/CreateTicketsService.js";

const createCategoryService = async (categoriesData) => {
  const results = [];

  for (const categoryData of categoriesData) {
    const { idEvent, numberTickets, ...restCategoryData } = categoryData;

    console.log("LOGANDO CATEGORIES DATA", categoriesData);
    
    const category = await Category.create({
      id_event: idEvent,
      number_tickes:numberTickets,
      ...restCategoryData,
    });

    const ticketData = {
      categoryId: category.id,
      eventId: idEvent,
    };

    const tickets = await CreateTicketService(ticketData, numberTickets);

    results.push({
      category,
      tickets,
    });
  }

  return results;
};

export default createCategoryService;
