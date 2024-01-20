const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola Mundo')
})

app.get('/saludo', (req, res) => {
  res.send('Hola, ¡bienvenido a la ruta de saludo!')
})

app.get('/usuarios', (req, res) => {
  const usuarios = ['Usuario1', 'Usuario2', 'Usuario3'];
  res.json(usuarios)
})

app.get('/producto/:id', (req, res) => {
  const productId = req.params.id
  res.send(`Información del producto con ID ${productId}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})