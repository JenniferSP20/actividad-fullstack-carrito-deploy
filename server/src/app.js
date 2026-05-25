const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./docs/swagger')

const productRoutes = require('./routes/productRoutes')

const app = express()

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())

app.use(
  '/api/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
)

app.get('/', (req, res) => {
  res.json({
    message: 'Backend funcionando'
  })
})

// RUTAS PRODUCTOS
app.use('/api/products', productRoutes)


module.exports = app