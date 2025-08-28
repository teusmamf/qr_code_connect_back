import Address from "../../models/AddressModel.js";
import Event from "../../models/eventsModels.js";




const createEventService = async(EventData) => {
    const {companyId,address,customerId, ...restEventData} = EventData;

    console.log("LOGANDO DATA EVENT", EventData);
    
    const createAddress = await Address.create({
        ...address,
        id_customer:customerId
    })

    return await Event.create({
        ...restEventData,
        id_company:companyId,
        id_address: createAddress.id
    })
}


export default createEventService;