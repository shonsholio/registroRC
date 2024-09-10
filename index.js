import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { router } from './routes/main.js'

const app = express()
const _filename = fileURLToPath(import.meta.url);
const __dirname = dirname(_filename)

dotenv.config({ path: './config.env' })

mongoose.connect(process.env.MONGODB_URI)
  .then(connection => {
    console.log('Tamos mongueaos')
  })
  .catch('ERROR conectando a Mongo')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views' ))

app.use('/', router)

app.listen(app.get('port'), () => {
  console.log('INICIAMOS')
})