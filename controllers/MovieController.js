const Movie = require('../models/Movie')
const axios = require('axios')
const omdbapiURL = 'http://www.omdbapi.com/?i='
const omdbapiKey = process.env.omdbapikey

class MovieController {

    static getMovies(req, res) {
        Movie.find()
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

    static createMovie(req, res) {

        let obj = {
            admin : req.user._id,
            price: req.body.price,
            watchlink: req.body.watchlink
        }

        axios.get(`${omdbapiURL}${req.params.imdbid}${omdbapiKey}`)
            .then(function(movie) {
                obj.data = movie
                obj.data = movie.Title
                return Movie.create(obj)
            })
            .then(function(movie) {
                res.status(200).json(movie)
            })
            .catch(function(error){
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static getMovie(req, res) {
        Movie.findById(req.params.movieId)
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

    static updateMovie(req, res) {
        Movie.findOneAndUpdate({_id: req.params.movieId}, req.body, {new: true})
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

    static deleteMovie(req, res) {
        Movie.deleteOne({_id: req.params.movieId})
            .then(function(status) {
                if (status.deletedCount == 0) {
                    throw new Error("Cannot find movie id")
                }
                res.status(200).json(status)
            })
            .catch(function(error) {
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

}

module.exports = MovieController