const app = require('./src/app')
const sequelize = require('./src/config/Database')

// IMPORTAR MODELO
require('./src/models/Product')

const PORT = process.env.PORT || 3000

async function main() {

  try {

    await sequelize.authenticate()

    console.log('Base de datos conectada')

    // CREAR TABLAS
    await sequelize.sync({ alter: true })

    console.log('Tablas sincronizadas')

  } catch (error) {

    console.log('Error de conexión DB:')
    console.log(error.message)

  }

  // EL SERVIDOR SIEMPRE INICIA
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
  })

}

main()