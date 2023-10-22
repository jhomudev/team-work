import { conn } from './mysql'

export const authenticateCredentials = async ({ email, password }) => {
  const [userFound] = await conn.query('SELECT userId, userHandle ,email, type FROM users WHERE email = ? AND password = ?', [email, password])

  if (userFound) {
    return {
      ok: true,
      data: userFound,
      message: 'Usuario encontrado'
    }
  }
  return {
    ok: false,
    data: null,
    message: 'No hay usuarios que coincidan con las credenciales'
  }
}
