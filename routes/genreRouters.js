const router = require('express').Router()
const { createGenre } = require('../controller/genrecontroller')
router.post('/Genre',createGenre)
// router.get('/Genre/:id',getGenre)
// router.get('/Genre',getAllGenre)

module.exports = router;