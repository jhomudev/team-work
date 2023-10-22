import { conn } from '@/libs/mysql'
import { userTypes } from '@/static/enums'
import { NextResponse } from 'next/server'

export const POST = async (req) => {
  try {
    const type = userTypes.seeker
    const {
    // user data
      email, password, userHandle,
      // seeker data
      names, lastnames, description, area, title
    } = await req.json()
    // create user
    const resDBUser = await conn.query('INSERT INTO users SET ?', {
      email, password, type, userHandle
    })

    if (resDBUser.insertId) {
      const userId = resDBUser.insertId
      const resDBEntity = await conn.query('INSERT INTO seekers SET ?', { names, lastnames, description, area, title, userId })

      if (resDBEntity.insertId) {
        return NextResponse.json({
          ok: true,
          message: 'Cuenta de trabajador creada',
          data: {
            email, password, type, userHandle
          }
        })
      }
    }

    return NextResponse.json({
      ok: false,
      message: 'Cuenta no se pudo crear'
    })
  } catch (error) {
    return NextResponse.json({
      ok: false,
      message: 'Algo no ocurrió bien',
      error
    }, {
      status: 400
    })
  }
}
