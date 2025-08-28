import Address from "../../models/AddressModel.js";

const createAddressService = async (addressData, customerId, transaction) => {
    return await Address.create({
        ...addressData,
        id_customer: customerId 
    }, { transaction });
};

export default createAddressService;