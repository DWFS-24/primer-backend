const express = require('express')
const app = express()
// const dotenv = require('dotenv');
const port = 3000
const router = require('./apis/productsView')

// dotenv.config()

// const port = process.env.PORT || 4000

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})