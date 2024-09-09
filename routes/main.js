import express from 'express'
const router = express.Router()

router.get('/', (req,res) => {
  res.render('landing.ejs')
})

export { router }