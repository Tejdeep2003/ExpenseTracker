const ExpenseSchema= require("../models/ExpenseModel")
const logger = require("../logger");

exports.addExpense = async (req, res) => {
    const {title, amount, category, description, date}  = req.body

    const income = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if(!title || !category || !description || !date){
            logger.error('Validation failed: All fields are required!');
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            logger.error('Validation failed: Amount must be a positive number!');
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        logger.info('Expense Added');
        res.status(200).json({message: 'Expense Added'}) 
    } catch (error) {
        logger.error('Server Error:', error);
        res.status(500).json({message: 'Server Error'})
    }
    logger.info('Expense:', income);
    console.log(income)
}

exports.getExpense = async(req, res)  => {
    try {
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        logger.info('Get Expense successful');
        res.status(200).json(incomes)
    } catch (error) {
        logger.error('Server Error:', error);
        res.status(500).json({message: 'Server Error updated one'})
    }
}


exports.deleteExpense = async(req, res)  => {
    const {id} = req.params;
    console.log(req.params);
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server Error'})
        })
}