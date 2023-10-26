import { userTypes } from '@/static/enums'
import { conn } from './mysql'

export const authenticateCredentials = async ({ email, password }) => {
  const [userFound] = await conn.query('SELECT userId, userHandle ,email, type FROM users WHERE email = ? AND password = ?', [email, password])

  if (userFound) {
    const queryPerEmployer = `SELECT employerId, name FROM employers WHERE userId = ${userFound.userId}`
    const queryPerSeeker = `SELECT seekerId, names, lastnames FROM seekers WHERE userId = ${userFound.userId}`
    const queryToPass = userFound.type === userTypes.employer ? queryPerEmployer : queryPerSeeker
    const [dataToPass] = await conn.query(queryToPass)
    return {
      ok: true,
      data: { ...userFound, ...dataToPass },
      message: 'Usuario encontrado'
    }
  }
  return {
    ok: false,
    data: null,
    message: 'No hay usuarios que coincidan con las credenciales'
  }
}
