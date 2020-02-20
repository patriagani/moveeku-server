const Transaction = require('../models/Transaction')

class TransactionController {

    static getTransaction(req, res) {
        Transaction.find({user: req.user._id})
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

    static updateTransaction(req, res) {
        Transaction.findOneAndUpdate({_id: req.params.transactionId}, req.body, {new: true})
          .then(function(movie) {
            res.status(200).json(movie)
          })
          .catch(function(error) {
            res.status(500).json({
              message: "Internal Server Error",
              error: error
            })
          })
    }

}

module.exports = TransactionController