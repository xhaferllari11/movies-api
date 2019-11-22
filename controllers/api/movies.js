var Movie = require('../../models/movie');
var Performer = require('../../models/performer');

function index(req, res, next) {
    Movie.find({}).populate('cast')
        .exec(function (e, movies) {
            res.status(201).json(movies);
        });
}

function show(req, res, next) {
    Movie.findById(req.params.movieId)
        .populate('cast')
        .exec(function (e, m) {
            res.status(201).json(m);
        })
}

function newMovie(req, res, next) {
    Movie.create(req.body, function (err, movie) {
        if (err) {
            console.log(err);
        } else {
            res.status(201).end();
        }
    });
}

function put(req, res, next) {
    Movie.findByIdAndUpdate(
        req.params.movieId,
        req.body,
        function (e, m) {
            if (e) { console.log(e) };
            res.json(m);
        })
}

function deleteMovie(req, res, next) {
    Movie.findOneAndDelete(
        { _id: req.params.movieId },
        function (e, m) {
            res.json(m);
        })
}

module.exports = {
    index,
    show,
    new: newMovie,
    put,
    delete: deleteMovie
};
