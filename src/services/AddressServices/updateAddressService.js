import Address from "../../models/AddressModel.js";

const updateAddressService = async (id, updatedData, transaction = null) => {
    const address = await Address.findByPk(id);
    if(!address) {
        throw Error('Address not found');
    };

    await address.update(updatedData, { transaction });
    return address;
};

export default updateAddressService;