const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    user : { type: Schema.Types.ObjectId, ref: 'User' },
    movie : { type: Schema.Types.ObjectId, ref: 'Movie' },
    transaction : { type: Schema.Types.ObjectId, ref: 'Transaction' },
    rating : { type: Number, required: true},
    review: { type: String, require: true},
    published: { type: Number, required: true, default: false},
    date: { type: Date, required: true, default: new Date()},
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review