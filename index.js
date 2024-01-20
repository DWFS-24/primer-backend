const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')


// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

let products = [
  {
    id:1,
    name: 'Jeans',
    price: '30usd'
  },
  {
    id:2,
    name: 'Tennis',
    price: '30usd'
  },
  {
    id:3,
    name: 'Jacket',
    price: '30usd'
  },
  {
    id:4,
    name: 'T-shirt',
    price: '30usd'
  },
]

app.get('/productos', (req, res) => {
  res.json(products)
})
app.get('/producto/:id', (req, res) => {
  const id = Number(req.params.id)
  const product = products.find(product => product.id === id)
  res.json(product)
})

app.post('/productos', jsonParser, (req, res) => {
  const nuevoProducto = req.body
  console.log(req)
  nuevoProducto.id = products.length + 1
  products.push(nuevoProducto)
  res.status(201).json(nuevoProducto)
})

app.put('/productos/:id', jsonParser, (req, res) => {
  const id = Number(req.params.id)
  const index = products.findIndex(p => p.id === id);

  if(index !== -1) {
    products[index] = {...products[index], ...req.body}
    res.json(products[index])
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
})

app.delete('/productos/:id', (req, res) => {
  const id = Number(req.params.id)
  products = products.filter(p => p.id !== id)

  res.json({ message: `El producto con el id: ${id}, fue eliminado correctamente`, data: products })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})