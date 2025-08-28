import createCompanyService from "../services/CompanyServices/createCompanyService.js";
import getAllCompaniesService from '../services/CompanyServices/getAllcompaniesService.js'


const createCompany = async (req, res) => {
    try {
           const companyData = req.body;
           const newCompany = await createCompanyService(companyData);
           res.status(201).json(newCompany); 
    } catch (error) {
           
        res.status(500).json({message:'Error creating company', error: error.message});

    }
 
    
}


const getAllCompanies = async (req, res) => {
  try {
    const userId = req.query.userId; 
    const companies = await getAllCompaniesService(userId);
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching companies', 
      error: error.message 
    });
  }
};

export {
    createCompany,
    getAllCompanies
}