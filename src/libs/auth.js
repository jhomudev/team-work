import { conn } from './mysql'

export const authenticateCredentials = async ({ email, password }) => {
  const req = await conn.query('SELECT idName, email, names, lastnames, title FROM users WHERE email = ? AND password = ?', [email, password])
  const userFound = JSON.parse(JSON.stringify(req))

  if (userFound.length > 0) {
    return {
      success: true,
      data: userFound[0],
      message: 'Usuario encontrado'
    }
  }
  return {
    success: false,
    data: null,
    message: 'No hay usuarios que coincidan con las credenciales'
  }
}
