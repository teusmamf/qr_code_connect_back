import Ticket from "../../models/ticketsModel.js";
import Customer from "../../models/CustomerModel.js";



const PurchaseTicketService = async (ticketId, customerId) => {
    try {
        const ticket = await Ticket.findOne({
            where:{
                id:ticketId,
                available:true
            }
        });

        if(!ticket){
            throw new Error("Ticket already purchased");
        }

        const customer = await Customer(customerId);
        if(!customer){
            throw new Error("Customer not found");
        }

        await ticket.update({
            id_customer:customerId,
            available:false
        });

        return{
            message:"Compra realizada com sucesso",
            ticket:await Ticket.findByPk(ticketId, {
                include:["Event", "Category","Customer"]
            })
        };

    } catch (error) {
            throw new Error("Errror to proccess purchase", error.message)
    }
}


export default PurchaseTicketService;