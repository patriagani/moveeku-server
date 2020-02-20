const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    admin : { type: Schema.Types.ObjectId, ref: 'User' },
    title : { type: String, required: true},
    data: { type: Object, require: true},
    price: { type: Number, required: true, default: 1000},
    watchlink: { type: String, required: true},
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie