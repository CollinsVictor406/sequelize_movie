const router = require('express').Router()

const { createMovie } = require('../controller/movieController');


router.post('/Movie', createMovie);
// router.get('/movie/:id',getMovie)
// router.get('/movie',getAllMovie)

module.exports = router;