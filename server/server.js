const app = require('./src/app')
const sequelize = require('./src/config/Database')


// IMPORTAR MODELO
require('./src/models/Product')

const PORT = 3000

async function main() {

  try {

    await sequelize.authenticate()

    console.log('Base de datos conectada')

    // CREAR TABLAS
    await sequelize.sync({ alter: true })

    console.log('Tablas sincronizadas')

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`)
    })

  } catch (error) {
    console.log(error)
  }

}

main()