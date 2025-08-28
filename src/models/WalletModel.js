import { DataTypes } from "sequelize";
import { database } from "../config/database.js";
import Customer from "./CustomerModel.js";

const Wallet = database.define('Wallets', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    balance: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    id_customer: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Customers',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
}, {
    timestamps: true,
    tableName: 'Wallets'
});

Customer.hasOne(Wallet, { foreignKey: 'id_customer' });
Wallet.belongsTo(Customer, { foreignKey: 'id_customer' });

export default Wallet;