const request = require('supertest')

const app = require('../src/app')

describe('Rutas de productos', () => {

  test('GET /api/products debe responder 200', async () => {

    const response = await request(app)
      .get('/api/products')

    expect(response.statusCode).toBe(200)

  })

  test('POST /api/products debe crear producto', async () => {

    const newProduct = {

      name: 'Test Product',
      category: 'Test',
      price: 100,
      stock: 5,
      image: 'test.jpg'

    }

    const response = await request(app)
      .post('/api/products')
      .send(newProduct)

    expect(response.statusCode).toBe(201)

  })

})