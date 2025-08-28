import updateAddressService from "../services/AddressServices/updateAddressService.js";
import deleteAddressService from "../services/AddressServices/deleteAddressService.js";
import getAllAddressesService from "../services/AddressServices/getAllladdressesService.js";
import getAddressByIdService from "../services/AddressServices/getAllladdressesService.js";

const updateAddress = async (req, res) => {
    try {
        const addressId = req.params.id;
        const updatedData = req.body;

        const address = await updateAddressService(addressId, updatedData);
        res.status(200).json(address);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

const deleteAddress = async (req, res) => {
    try {
        const addressId = req.params.id;

        const result = await deleteAddressService(addressId);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};


// controllers/AddressController.js
const getAddressById = async (req, res) => {


  try {
    const { id } = req.query; // Now correctly getting from URL params
    console.log("id", req.params);
    
    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Address ID is required'
      });
    }

    // Use getAddressByIdService instead of getAllAddressesService
    const address = await getAddressByIdService(id);

    if (!address) {
      return res.status(404).json({
        success: false,
        message: 'Address not found'
      });
    }

    res.status(200).json({
      success: true,
      data: address
    });

  } catch (error) {
    console.error('Address controller error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching address',
      error: error.message
    });
  }
};


export {
    updateAddress,
    deleteAddress,
    getAddressById
};
