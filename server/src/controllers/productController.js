const Product = require('../models/Product')
const productSchema = require('../schemas/productSchema')

const { validationResult } = require('express-validator')

// OBTENER PRODUCTOS
const getProducts = async (req, res) => {

  try {

    const products = await Product.findAll()

    res.json(products)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}

// CREAR PRODUCTO
const createProduct = async (req, res) => {

  const errors = validationResult(req)

  if (!errors.isEmpty()) {

    return res.status(400).json({
      errors: errors.array()
    })

  }

  const result = productSchema.safeParse(req.body)

  if (!result.success) {

    return res.status(400).json({
      errors: result.error.errors
    })

  }

  try {

    const product = await Product.create(req.body)

    res.status(201).json(product)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}
module.exports = {
  getProducts,
  createProduct
}