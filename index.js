const express = require('express')
const app = express()
const dotenv = require('dotenv');
const swagger = require("./swagger")
// const port = 3000
const router = require('./apis')

dotenv.config()

const port = process.env.PORT || 4000

app.use(express.json())
app.use('/api/v1', router)


app.get('/', (req, res) => {
  res.send({
    message: 'hola mundo'
  })
})

swagger(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})