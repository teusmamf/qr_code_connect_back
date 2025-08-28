import createCategoryService from "../services/CategoryServices/createCategoryServices.js";
import getAllCategoryService from "../services/CategoryServices/getAllcategoryService.js";

const getAllCategories = async (req, res) => {
  try {
    const filters =  {
      eventId : req.query.eventId,
      categoryId : req.query.categoryId

    }
    console.log("LOGGING FILTERS", filters);
    
    const categories = await getAllCategoryService(filters);
    
     console.log("LOGGING categories", categories);
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching categories', 
      error: error.message 
    });
  }
};


const createCaTegory = async (req, res) => {
    try {
        const categoryData = req.body;
        const newCategory = await createCategoryService(categoryData);

        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({message:'Error creating category', error: error.message});
    }
}


export {
    createCaTegory,
    getAllCategories
}
