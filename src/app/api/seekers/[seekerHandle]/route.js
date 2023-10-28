import { conn } from '@/libs/mysql'
import { NextResponse } from 'next/server'

export const GET = async (_, { params }) => {
  try {
    const seekerHandle = params.seekerHandle
    const query = `
    SELECT sek.seekerId ,sek.names ,sek.lastnames ,sek.description ,sek.area ,sek.title ,sek.userId ,sek.createdAt,sek.updatedAt, u.userHandle, u.email as userEmail
    FROM seekers sek
    INNER JOIN users u ON sek.userId=u.userId
    WHERE u.userHandle = ?`
    const [data] = await conn.query(query, [seekerHandle])

    if (data) {
      return NextResponse.json({
        seekerId: data.seekerId,
        names: data.names,
        lastnames: data.lastnames,
        description: data.description,
        area: data.area,
        title: data.title,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        user: {
          id: data.userId,
          handle: data.userHandle,
          email: data.userEmail
        }
      })
    }
    return NextResponse.json({
      ok: false,
      message: 'Seeker no encontrado'
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
    const seekerId = params.id
    const newDataSeeker = await req.json()
    const query = 'UPDATE seekers SET ? WHERE seekerId = ?'
    const reqDB = await conn.query(query, [newDataSeeker, seekerId])

    if (reqDB.affectedRows > 0) {
      return NextResponse.json({
        ok: true,
        message: 'Seeker actualizado',
        updatedRow: {
          seekerId,
          ...newDataSeeker
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
