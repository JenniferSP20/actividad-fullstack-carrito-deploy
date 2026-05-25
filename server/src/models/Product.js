const { DataTypes } = require('sequelize')
const sequelize = require('../config/Database')

const Product = sequelize.define('Product', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  category: {
    type: DataTypes.STRING,
    allowNull: false
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  image: {
    type: DataTypes.STRING,
    allowNull: false
  },

  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 10
  }

})

module.exports = Product