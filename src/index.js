import 'dotenv/config'
import express from 'express'
import ejs from 'ejs'
import { dirname, join } from 'path' //permite crear rutas absolutas  
import { fileURLToPath } from 'url'

import indexRoutes from './routes/index.js'

const PORT = process.env.PORT || 5001
const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url)) //rutas absoluta

app.set('views', join(__dirname, 'views')) //ruta del directorio de las vista
app.set('view engine', 'ejs') //Motor de vistas o plantillas
app.use(indexRoutes) //para utilizar los Endpoints
app.use(express.static(join(__dirname, 'public')))

//Estado del SERVIDOR//
app.listen(PORT, () => console.log(`Application is running on http://localhost:${PORT}`))
