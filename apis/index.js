const express = require('express')
const router = express.Router()
const products = require('./productsView')
const users = require('./usersView')



router.use('/products', products)
router.use('/users', users)

module.exports = router