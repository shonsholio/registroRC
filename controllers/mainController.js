const controller = {}

controller.landing = (req, res) => {
  res.render('landing.ejs')
}

controller.registro = (req, res) => {
  res.render('registro')
}

controller.login = (req, res) => {
  const { email, pass } = req.body
  res.send('AQUI HICIMOS LOGIN', email, pass)
  console.log(email, pass)
}

export { controller }