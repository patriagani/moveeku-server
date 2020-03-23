const Transaction = require('../models/Transaction')
const Review = require('../models/Review')

class TransactionController {

    static getTransactions(req, res) {
        Transaction.find({user: req.user._id}).populate('movie')
            .then(function(movies) {
                res.status(200).json(movies)
            })
            .catch(function(error) {
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static getTransaction(req, res) {
      Transaction.findOne({_id: req.params.transactionId}).populate('movie')
            .then(function(movie) {
              res.status(200).json(movie)
            })
            .catch(function(error) {
              res.status(500).json({
                message: "Internal Server Error",
                error: error.message
              })
            })
  }

    static createTransaction(req, res) {

        let obj = {
          user: req.user._id,
          movie: req.body.movie,
          rating: 0,
          Review: "",
        }

        let obj1 = {
            user: req.user._id,
            movie: req.body.movie,
          }

        Review.create(obj)
            .then((review) => {
                obj1.review = review._id
                return Transaction.create(obj1)
            })
            .then((transaction) => {
                res.status(200).json(transaction)
            })
            .catch(function(error){
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static updateTransaction(req, res) {
      Transaction.findOne({_id: req.params.transactionId})
        .then(function(movie) {
          if(movie.playdate == undefined) {
            return Transaction.findOneAndUpdate({_id: req.params.transactionId}, req.body, {new: true})
          }
          else{
            res.status(200).json(movie)
          }
        })
        .then(function(movie) {
          res.status(200).json(movie)
        })
        .catch(function(error) {
          res.status(500).json({
            message: "Internal Server Error",
            error: error.message
          })
        })
    }

}

module.exports = TransactionController