import express from 'express'
const router = express.Router()
import { controller } from '../controllers/mainController.js'

router.get('/', controller.landing)
router.get('/registro', controller.registro)


router.post('/login', controller.login)


export { router }