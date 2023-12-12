const mongoose = require('mongoose');
const ExpenseModel = require('../models/ExpenseModel');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        // await mongoose.connect(process.env.MONGO_URL)
        await mongoose.connect(process.env.MONGO_URL, {
            auth: {
                username: process.env.MONGO_INITDB_ROOT_USERNAME,
                password: process.env.MONGO_INITDB_ROOT_PASSWORD
            }
        });
        console.log('Db Connected')
        // Check if the Expense collection exists, and create it if not
        // const collections = await mongoose.connection.db.listCollections().toArray();
        // const expenseCollectionExists = collections.some(collection => collection.name === 'expenses');

        // if (!expenseCollectionExists) {
        //     await mongoose.connection.createCollection('expenses');
        //     console.log('Expense collection created');
        // }
        // else
        // {
        //     console.log('Expense collection already created');
        // }
    } catch (error) {
        console.log('DB Connection Error:', error);
    }
}

module.exports = {db}