const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')

const { userController } = require('../controllers')

const {
  getUsers,
  getUser
} = userController


router.get('/', (req, res) => {
  const users = getUsers()
  res.json(users)
})
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const user = getUser(id)
  res.json(user)
})

module.exports = router