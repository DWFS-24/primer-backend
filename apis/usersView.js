const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')

const { userController } = require('../controllers')

const {
  getUsers,
  getUser
} = userController

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - lastName
 *         - email
 *         - typeUser
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of User
 *         lastName:
 *           type: string
 *           description: The last name of user
 *         email:
 *           type: string
 *           description: Email user
 *         typeUser:
 *           type: string
 *           description: Type user
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the user was added
 *       example:
 *         id: 2
 *         name: Alfredo
 *         lastName: Noriega
 *         finished: admin
 *         createdAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The users managing API
 * /users:
 *   get:
 *     summary: get list users
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Get List Users.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * /users/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 *
 */


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