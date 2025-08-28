import Customer from './CustomerModel.js';
import Address from './AddressModel.js';

export const associateModels = () => {
  Customer.hasOne(Address, { foreignKey: 'id_customer', onDelete: 'CASCADE' });
  Address.belongsTo(Customer, { foreignKey: 'id_customer' });
};