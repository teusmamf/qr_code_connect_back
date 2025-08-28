import { DataTypes } from "sequelize";
import { database } from "../config/database.js";
import Address from "./AddressModel.js";

const Customer = database.define('Customers', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('client', 'admin'),
        defaultValue: 'client',
        allowNull: false
    },
     id_address:{
        type:DataTypes.UUID,
        allowNull:true,
        references:{
            model:'Addresses',
            key:'id'
        },
        onDelete:"CASCADE"
    },
}, {
    timestamps: true,
    tableName: 'Customers'
});

Customer.hasOne(Address, {foreignKey:'id_address'});
export default Customer;
