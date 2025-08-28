import { DataTypes } from "sequelize";
import { database } from "../config/database.js";
import Event from "./eventsModels.js";

const Category = database.define('Categories', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT, 
        allowNull: false
    },
    number_tickes:{
       type:DataTypes.INTEGER,
        allowNull:false
    },
    id_event:{
        type:DataTypes.UUID,
        allowNull:true,
        references:{
            model:'Events',
            key:'id'
        },
        onDelete:"CASCADE"
    },
}, {
    timestamps: false 
});


Category.belongsTo(Event,{foreignKey:"id_event"});

export default Category;