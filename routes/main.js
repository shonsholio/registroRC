import express from 'express'
const router = express.Router()
import { controller } from '../controllers/mainController.js'

router.get('/admin', controller.admin)
router.get('/adminUsers', controller.adminUsers)

router.get('/', controller.landing)

router.get('/registro', controller.registro)
router.get('/didit', controller.didit)

router.post('/registrar', controller.registrar)
router.post('/deleteUser', controller.delUser)

router.post('/login', controller.login)

export { router }