const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const { productsController } = require('../controllers')
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = productsController

// create application/json parser
const jsonParser = bodyParser.json()

router.get('/productos', (req, res) => {
  const products = getProducts()
  res.json(products)
})
router.get('/producto/:id', (req, res) => {
  const id = Number(req.params.id)
  const product = getProduct(id)
  res.json(product)
})

router.post('/productos', jsonParser, (req, res) => {
  const nuevoProducto = req.body
  const newList = createProduct(nuevoProducto)
  res.status(201).json(newList)
})

router.put('/productos/:id', jsonParser, (req, res) => {
  const id = Number(req.params.id)

  const products = updateProduct(id, req.body)
  res.send(products)
  // res.status(404).json({ error: 'Producto no encontrado' });
})

router.delete('/productos/:id', (req, res) => {
  const id = Number(req.params.id)
  const newProducts = deleteProduct(id)

  res.json({ message: `El producto con el id: ${id}, fue eliminado correctamente`, data: newProducts })
})

module.exports = router