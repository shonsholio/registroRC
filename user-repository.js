import mongoose, { mongo } from "mongoose";
import crypto, { checkPrimeSync } from 'crypto';
import bcrypt from 'bcryptjs'

const UserScheme = new mongoose.Schema({
  _id: { type: String, required: true },
  nombre: { type: String, required: true },
  celular: { type: String, required: true },
  email: { type: String, required: true },
  apto: { type: String, required: true },
  pass: { type: String, required: true }
})

const host = mongoose.model('host', UserScheme)
export default host

export class UserRepository {

  static create ({ nombre, celular, email, apto, pass }) {
    const id = crypto.randomUUID()
    const hashedPass = bcrypt.hashSync(pass, 4)

    host.create({
      _id: id,
      nombre,
      celular,
      apto,
      email,
      pass: hashedPass
    })
  }
  
}

export class VerificaUsuario {

  static verifica ({ email, pass }) {
    
  }

}
