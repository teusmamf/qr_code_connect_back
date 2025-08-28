// services/addressServices/getAddressByIdService.js
import Address from "../../models/AddressModel.js";
import Customer from "../../models/CustomerModel.js";

const getAddressByIdService = async (id) => {
  try {
    return await Address.findByPk(id); // More efficient than findOne for primary key
  } catch (error) {
    console.error('Error in getAddressByIdService:', error);
    throw new Error(`Failed to fetch address: ${error.message}`);
  }
};
export default getAddressByIdService;