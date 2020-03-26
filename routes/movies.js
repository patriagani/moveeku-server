const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/MovieController')
const authadmin = require('../middlewares/authadmin')

router.get('/', MovieController.getMovies)

router.post('/', authadmin, MovieController.createMovie)

router.get('/:movieId', MovieController.getMovie)

router.patch('/:movieId', authadmin, MovieController.updateMovie)

router.delete('/:movieId', authadmin, MovieController.deleteMovie)

router.get('/genre/:genre', MovieController.getMovieByGenre)


module.exports = router