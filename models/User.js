const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, index: { unique: true } },
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    balance: {type: Number, default: 10000},
    role: {type: String, defaul: 'user'} 
})

const User = mongoose.model('User', userSchema)

module.exports = User