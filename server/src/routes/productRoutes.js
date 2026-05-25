const express = require('express')

const router = express.Router()

const { body } = require('express-validator')

const {
  getProducts,
  createProduct
} = require('../controllers/productController')

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtener productos
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get('/', getProducts)

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Crear producto
 *     responses:
 *       201:
 *         description: Producto creado
 */
router.post(
  '/',
  [
    body('name')
      .notEmpty()
      .withMessage('El nombre es obligatorio'),

    body('price')
      .isNumeric()
      .withMessage('El precio debe ser numérico'),

    body('stock')
      .isNumeric()
      .withMessage('El stock debe ser numérico')
  ],
  createProduct
)

module.exports = router
