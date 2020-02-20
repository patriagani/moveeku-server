const express = require('express')
const router = express.Router()
const ReviewController = require('../controllers/ReviewController')
const auth = require('../middlewares/auth')

router.post('/', auth, ReviewController.createReview)

router.patch('/:reviewId', auth, ReviewController.updateReview)

router.get('/movie/:movieId', ReviewController.getMovieReviews)

router.get('/user/:userId', ReviewController.getUserReviews)

module.exports = router