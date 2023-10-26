import { conn } from '@/libs/mysql'
import { userTypes } from '@/static/enums'
import { NextResponse } from 'next/server'

export const POST = async (req) => {
  try {
    const type = userTypes.seeker
    const {
    // user data
      email, password, userHandle,
      // employer data
      name, description, area
    } = await req.json()
    // create user
    const resDBUser = await conn.query('INSERT INTO users SET ?', {
      email, password, type, userHandle
    })

    if (resDBUser.insertId) {
      const userId = resDBUser.insertId
      const resDBEntity = await conn.query('INSERT INTO employers SET ?', { name, description, area, userId })

      if (resDBEntity.insertId) {
        return NextResponse.json({
          ok: true,
          message: 'Cuenta de empresa creada',
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
