var express = require('express');
var router = express.Router();
var apiMoviesCtrl = require('../controllers/api/movies');

router.get('/api/movies', apiMoviesCtrl.index)
router.get('/api/movies/:movieId', apiMoviesCtrl.show)
router.post('/api/movies', apiMoviesCtrl.new)
router.put('/api/movies/:movieId', apiMoviesCtrl.put)
router.delete('/api/movies/:movieId', apiMoviesCtrl.delete);

module.exports = router;