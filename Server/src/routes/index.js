const express = require('express')
const router = express.Router()

const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const postUser = require('../controllers/postUser')
const deleteFav  = require('../controllers/deleteFav')
const postFav = require('../controllers/postFav')

router.get('/character/:id', getCharById)

router.get('/login', login)
router.post('/login', postUser)

router.delete('/fav/:id', deleteFav)
router.post('/fav', postFav)


module.exports = router

