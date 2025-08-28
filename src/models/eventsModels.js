import { DataTypes} from "sequelize";
import { database } from "../config/database.js";
import Company from "./companyModel.js";
import Address from "./AddressModel.js";
import Customer from "./CustomerModel.js";


const Event = database.define('Events', {
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:true
    },
    date_time:{
        type:DataTypes.DATE,
        allowNull:false
    },
    id_company:{
        type:DataTypes.UUID,
        allowNull:true,
        references:{
            model:'Companies',
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
   
})

Event.hasOne(Company,{foreignKey:"id_company"});
Event.hasOne(Address, {foreignKey:'id_address'});


export default Event;