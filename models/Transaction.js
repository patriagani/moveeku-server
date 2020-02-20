const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    user : { type: Schema.Types.ObjectId, ref: 'User' },
    movie : { type: Schema.Types.ObjectId, ref: 'Movie' },
    date: { type: Date, required: true, default: new Date()},
    playdate: { type: Date }
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction