import Company from "../../models/companyModel.js";

const getAllCompaniesService = async (userId = null) => {
  const whereClause = {};
  
 
  if (userId) {
    whereClause.id_customer = userId; 
  }

  try {
    const companies = await Company.findAll({
      where: whereClause,
      order: [['name', 'ASC']],
    });
    return companies;
  } catch (error) {
    throw new Error(`Error fetching companies: ${error.message}`);
  }
};

export default getAllCompaniesService;