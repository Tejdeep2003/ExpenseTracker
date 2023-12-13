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
    } catch (error) {
        console.log('DB Connection Error:', error);
    }
}

module.exports = {db}