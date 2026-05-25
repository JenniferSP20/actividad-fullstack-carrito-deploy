const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  'carrito_db',
  'jenni',
  '1234',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)

module.exports = sequelize