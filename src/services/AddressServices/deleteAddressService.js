import Address from "../../models/AddressModel.js";

const deleteAddressService = async (id, transaction = null) => {
    const address = await Address.findByPk(id);
    if (!address) {
        throw new Error("Address not found");
    }

    await address.destroy({ transaction });
    return { message: "Address deleted successfully" };
};

export default deleteAddressService;
