import Company from '../../models/companyModel.js';
import Address from '../../models/AddressModel.js';



const createCompanyService = async (companyData) => {

    
    const {customerId,address,...restCompanyData} = companyData;
    console.log("ESTOU ACESSANDO O CUSTOMER ID CORRETAMENTE?",customerId);
    
    const createAddress = await Address.create({
        ...address,
        id_customer:customerId
    })

    return await Company.create({
        ...restCompanyData,
        id_customer:customerId,
        id_address: createAddress.id
    })


}


export default createCompanyService;