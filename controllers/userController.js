const { users } = require('../models/users')

const getUsers = () => {
  return users
}

const getUser = (id) => {
  const idNumber = Number(id)
  const user = users.find( user => user.id === idNumber)
  return user
}


module.exports = {
  getUsers,
  getUser
}
