import Ticket from "../../models/ticketsModel.js";
import qrcode from 'qrcode';

const CreateTicketService = async (ticketData, numberTickets) => {
    const { categoryId, eventId, ...restTicketData } = ticketData;
    const tickets = [];

    for (let i = 0; i < numberTickets; i++) {
        // First create the ticket to get its auto-generated ID
        const ticket = await Ticket.create({
            ...restTicketData,
            qr_code: `TICKET-${eventId.slice(0, 8)}-${categoryId.slice(0, 4)}-${i}`,
            id_event: eventId,
            id_category: categoryId,
            // Initialize with empty QR image, we'll update it
            qr_code_image: '' 
        });

        // Now prepare QR data including the ticket's database ID
        const qrCodeData = JSON.stringify({
            ticketId: ticket.id,  // This is the auto-generated ID from the database
            eventId: ticket.id_event,
            categoryId: ticket.id_category,
            ticketCode: ticket.qr_code,
            createdAt: new Date().toISOString()
        });

        // Generate QR code image with the complete data
        const qrCodeImage = await qrcode.toDataURL(qrCodeData);

        // Update the ticket with the generated QR code image
        await ticket.update({ qr_code_image: qrCodeImage });

        tickets.push(ticket);
    }

    return tickets;
};

export default CreateTicketService;