const IncomeSchema= require("../models/IncomeModel");
const logger = require("../logger");

exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date}  = req.body

    const income = IncomeSchema({
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
        logger.info('Income Added');
        res.status(200).json({message: 'Income Added'})
    } catch (error) {
        logger.error('Server Error:', error);
        res.status(500).json({message: 'Server Error'})
    }
    logger.info('Income:', income);
    console.log(income)
}

exports.getIncomes = async(req, res)  => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        logger.info('Get Incomes successful');
        res.status(200).json(incomes)
    } catch (error) {
        logger.error('Server Error:', error);
        res.status(500).json({message: 'Server Error updated one'})
    }
}


exports.deleteIncome = async(req, res)  => {
    const {id} = req.params;
    logger.info('Deleting Income:', id);
    console.log(req.params);
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            logger.info('Income Deleted');
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) => {
            logger.error('Server Error:', error);
            res.status(500).json({message: 'Server Error updated one'})
        })
}