import { conn } from '@/libs/mysql'
import { NextResponse } from 'next/server'

export const POST = async (req) => {
  try {
    const data = await req.json()
    const { userHandle, email, password, type } = data
    const query = 'INSERT INTO users SET ?'
    const reqDB = await conn.query(query, { userHandle, email, password, type })

    if (reqDB.affectedRows > 0) {
      return NextResponse.json({
        success: true,
        message: 'Usuario creado',
        insertedRow: {
          userId: reqDB.insertId,
          userHandle,
          email,
          password,
          type
        }
      })
    }

    return NextResponse.json({
      success: false,
      message: 'Usuario no se pudo crear'
    }, {
      status: 400
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Algo no ocurrió bien',
      error
    }, {
      status: 400
    })
  }
}
