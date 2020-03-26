const Review = require('../models/Review')

class ReviewController {

    static getMovieReviews(req, res) {
        Review.find({movie: req.params.movieId, published: true}).populate('user')
            .then(function(reviews) {
                res.status(200).json(reviews)
            })
            .catch(function(error) {
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static getReview(req, res) {
        Review.findOne({_id: req.params.reviewId}).populate('movie')
            .then(function(review) {
                res.status(200).json(review)
            })
            .catch(function(error) {
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static createReview(req, res) {

        let obj = {
            user : req.user._id,
            movie : req.body.movie,
            transaction : req.body.transaction,
            rating : req.body.rating,
            review: req.body.review
        }

        Review.create(obj)
            .then(function(review) {
                res.status(200).json(review)
            })
            .catch(function(error){
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static updateReview(req, res) {
        Review.findOneAndUpdate({_id: req.params.reviewId}, req.body, {new: true})
          .then(function(review) {
            res.status(200).json(review)
          })
          .catch(function(error) {
            res.status(500).json({
              message: "Internal Server Error",
              error: error
            })
          })
    }

}

module.exports = ReviewController