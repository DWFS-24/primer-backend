const productsModel = require('../models/products')


const getProducts = () => {
  return productsModel
}

const getProduct = (id) => {
  const product = productsModel.products.find(product => product.id === id)
  return product
}

const createProduct = (body) => {
  body.id = productsModel.products.length + 1
  console.log(body)
  console.log(productsModel)
  const productos = productsModel.products
  productos.push(body)
  return productsModel
}

const updateProduct = (id, body) => {
  const products = productsModel.products
  const index = products.findIndex(p => p.id === id);
  products[index] = {...products[index], ...body}
  return products
}

const deleteProduct = (id) => {
  const products = productsModel.products.filter(p => p.id !== id)
  return products
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}