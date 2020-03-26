const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const port = process.env.PORT || 3000

//Connect mongodb via mongoose
mongoose.connect('mongodb://localhost/moveeku');

//dotenv config
require('dotenv').config()

//Routes
const indexRoute = require('./routes/index')
const userRoute = require('./routes/users')
const movieRoute = require('./routes/movies')
const transactionRoute = require('./routes/transactions')
const reviewRoute = require('./routes/reviews')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Cors
const corsOptions = {
    exposedHeaders: 'x-auth-token',
  };
app.use(cors(corsOptions))

app.use('/', indexRoute)
app.use('/users', userRoute)
app.use('/movies', movieRoute)
app.use('/transactions', transactionRoute)
app.use('/reviews', reviewRoute)

app.listen(port, function(){
    console.log('connected to port ' + port)
})