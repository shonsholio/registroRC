import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { router } from './routes/main.js'

const app = express()
const _filename = fileURLToPath(import.meta.url);
const __dirname = dirname(_filename)

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views' ))

app.use('/', router)

app.listen(app.get('port'), () => {
  console.log('INICIAMOS')
})