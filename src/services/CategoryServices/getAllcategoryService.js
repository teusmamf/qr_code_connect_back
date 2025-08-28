import Category from "../../models/categoryModel.js";

const getAllCategoryService = async (filters ={}) => {
  try {
      const { eventId , categoryId} = filters;

        console.log(" CATEGORIES ID", categoryId);
      const whereClause = {};

      if (eventId) {
          whereClause.id_event = eventId;
      }
      if (categoryId) {
        whereClause.id = categoryId;
      }

      const categories = await Category.findAll({
        where:whereClause,
      });
       console.log(" CATEGORIES", categories);
      return categories;
  } catch (error) {
    console.log("ERROR GETTING CATEGORIES", error);
    throw new Error(`Failed to fetch categories: ${error.message}`);
  }
};
export default getAllCategoryService;