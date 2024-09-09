import express from 'express'
const router = express.Router()
import { controller } from '../controllers/mainController.js'

router.get('/', controller.landing)

export { router }