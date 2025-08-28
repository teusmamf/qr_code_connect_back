import { Sequelize } from 'sequelize';

export const database = new Sequelize('postgres', 'postgres', 'qrConnect2025', {
    host: 'databaseqrconnect.cpgmqacmqimg.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // apenas para testes
        }
    }
});

// export const database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: 'postgres'
// });

export async function verifyConnectionDatabase() {
    try {
        await database.authenticate();
        console.log('Connection to the database has been established successfully.');

        await database.sync(); // creates the tables by deleting the data
        console.log('🗃️☑️ Create tables!');

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    };
};
