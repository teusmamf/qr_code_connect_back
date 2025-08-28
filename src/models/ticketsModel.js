import { DataTypes, UUIDV4 } from "sequelize";
import { database } from "../config/database.js";
import Event from "./eventsModels.js";
import Category from "./categoryModel.js";
import Customer from "./CustomerModel.js";

const Ticket = database.define('Tickets', {
    id: {
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true,
    },
    validated: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    validatedAt: {
    type: DataTypes.DATE,
    allowNull: true
},
    available: {
        type: DataTypes.BOOLEAN,
        defaultValue:true
    },
    qr_code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    qr_code_image: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    id_event: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Events',
            key: 'id'
        },
        onDelete: "CASCADE"
    },
    id_category: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Categories',
            key: 'id'
        },
        onDelete: "CASCADE"
    },
    id_customer: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Customers',
            key: 'id'
        },
        onDelete: "CASCADE"
    }
});

Ticket.belongsTo(Event, { foreignKey: 'id_event' });
Ticket.belongsTo(Category, { foreignKey: 'id_category' }); 
Ticket.belongsTo(Customer, { foreignKey: 'id_customer' }); 

export default Ticket;