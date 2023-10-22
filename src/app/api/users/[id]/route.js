import { conn } from '@/libs/mysql'
import { NextResponse } from 'next/server'

export const GET = async (_, { params }) => {
  try {
    const userId = params.id
    const query = 'SELECT userId, userHandle, email, password, type, createdAt, updatedAt FROM users WHERE userId = ?'
    const [data] = await conn.query(query, [userId])

    if (data) return NextResponse.json(data)
    return NextResponse.json({
      ok: false,
      message: 'Usuario no encontrado'
    }, {
      status: 400
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

export const PUT = async (req, { params }) => {
  try {
    const userId = params.id
    const newDataUser = await req.json()
    const query = 'UPDATE users SET ? WHERE userId = ?'
    const reqDB = await conn.query(query, [newDataUser, userId])

    if (reqDB.affectedRows > 0) {
      return NextResponse.json({
        ok: true,
        message: 'Usuario actualizado',
        updatedRow: {
          userId,
          ...newDataUser
        }
      })
    }

    return NextResponse.json({
      ok: false,
      message: 'Usuario no se pudo actualizarr'
    }, {
      status: 400
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
