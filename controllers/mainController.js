const controller = {}
import host, { UserRepository, VerificaUsuario } from "../user-repository.js"

controller.landing = (req, res) => {
  res.render('landing.ejs')
}

controller.didit = (req, res) => {
  res.render('exitoso.ejs')
}

controller.registro = (req, res) => {
  res.render('registro')
}

controller.registrar = (req, res) => {
  const { nombre, celular, email, apto, pass, confirmPass } = req.body

  if (pass === confirmPass) {
    try {
      const id = UserRepository.create ({ nombre, celular, email, apto, pass })
      res.redirect('/didit')
    } catch (error) {
        console.error(error.message)
    }
  } else {
    //PENDIENTEEEE -- AQUI QUIERO QUE ME MUESTRE UN MENSAJE DE ERROR PERSONALIZADO EN PANTALLA
    res.redirect('/registro')
  }

}

controller.login = async (req, res) => {
  const { email, pass } = req.body
  
  try {
    const verifica = await host.find({ email: email })
    console.log(verifica.length)
    console.log(verifica)

    if (verifica.length === 1) {
      res.send('LISTO YA LO ENCONTRAMOS')
    } else {
      res.send('USUARIO NO EXISTE')
    }

  } catch {
  } 

}

controller.admin = (req, res) => {
  res.render('admin')
}

controller.adminUsers = async (req, res) => {
  try {
    const data = await host.find({})
    res.render('adminUsers.ejs', {
      data: data
    })

  } catch {

  }
}

controller.delUser = (req, res) => {
  const oper = req.query.id

  try {
    host.deleteOne({ _id: oper })
    .then(result => {
      res.redirect('/adminUsers')
    })

  } catch {

  }
}

export { controller }