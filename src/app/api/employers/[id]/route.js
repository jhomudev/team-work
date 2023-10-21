import { conn } from '@/libs/mysql'
import { NextResponse } from 'next/server'

export const GET = async (_, { params }) => {
  try {
    const employerId = params.id
    const query = `
    SELECT em.employerId ,em.name ,em.description, em.area, em.userId , em.createdAt, em.updatedAt, u.userHandle, u.email as userEmail
    FROM employers em
    INNER JOIN users u ON em.userId=u.userId
    WHERE employerId = ?`
    const [data] = await conn.query(query, [employerId])

    if (data) {
      return NextResponse.json({
        employerId: data.employerId,
        name: data.name,
        description: data.description,
        area: data.area,
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
      success: false,
      message: 'Employer no encontrado'
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

export const PUT = async (req, { params }) => {
  try {
    const employerId = params.id
    const newDataemployer = await req.json()
    const query = 'UPDATE employers SET ? WHERE employerId = ?'
    const reqDB = await conn.query(query, [newDataemployer, employerId])

    if (reqDB.affectedRows > 0) {
      return NextResponse.json({
        success: true,
        message: 'Employer actualizado',
        updatedRow: {
          employerId,
          ...newDataemployer
        }
      })
    }

    return NextResponse.json({
      success: false,
      message: 'Employer no se pudo actualizarr'
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
