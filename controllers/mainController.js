const controller = {}
import { UserRepository } from "../user-repository.js"

controller.landing = (req, res) => {
  res.render('landing.ejs')
}

controller.registro = (req, res) => {
  res.render('registro')
}

controller.registrar = (req, res) => {
  const { nombre, celular, email, pass, confirmPass } = req.body

  try {
    const id = UserRepository.create ({ nombre, celular, email, pass })
    res.redirect('/')
  } catch (error) {
      console.error(error.message)
  }
}

controller.login = (req, res) => {
  const { email, pass } = req.body
  res.send('AQUI HICIMOS LOGIN', email, pass)
  console.log(email, pass)
}

export { controller }