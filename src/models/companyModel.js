import { DataTypes } from "sequelize";
import { database } from "../config/database.js";
import Customer from "./CustomerModel.js";
import Address from "./AddressModel.js";

const Company = database.define('Company', {
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,    
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cnpj:{
        type:DataTypes.STRING,
        allowNull:false
    },
    telefone:{
        type:DataTypes.STRING,
        allowNull:true
    },
    id_customer:{
        type:DataTypes.UUID,
        allowNull:true,
        references:{
            model:'Customers',
            key:'id'
        },
        onDelete:"CASCADE"
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
},{
    timestamps:true,
    tableName:'Companies'
})

Company.hasOne(Customer, {foreingKey:"id_customer"});
Company.hasOne(Address, {foreignKey:'id_address'});

export default Company;