import { DataTypes } from "sequelize";
import { database } from "../config/database.js";


const Transaction = database.define('Transactions', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    value:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    purchase:{
        type:DataTypes.STRING
    }
})

export default Transaction;