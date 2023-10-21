import { conn } from '@/libs/mysql'
import getQueryParams from '@/libs/utils/getQueryParams'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  try {
    const queryParams = getQueryParams({
      URLSearchParams: req.nextUrl.searchParams,
      likeColumn: 'em.name',
      orderByColumn: 'em.employerId',
      paramsCols: ['area']
    })
    const { queryParamsComplete } = queryParams
    const data = await conn.query(`
    SELECT em.employerId ,em.name ,em.description, em.area, em.userId , em.createdAt, em.updatedAt, u.userHandle, u.email as userEmail
    FROM employers em
    INNER JOIN users u ON em.userId = u.userId
    ${queryParamsComplete}`)

    const [totalEmployers] = await conn.query('SELECT COUNT(employerId) as totalEmployers FROM employers')

    const dataFormated = data.map(employer => ({
      employerId: employer.employerId,
      name: employer.name,
      description: employer.description,
      area: employer.area,
      createdAt: employer.createdAt,
      updatedAt: employer.updatedAt,
      user: {
        id: employer.userId,
        handle: employer.userHandle,
        email: employer.userEmail
      }
    }))
    return NextResponse.json({
      data: dataFormated,
      numRowsObtained: data.length,
      ...totalEmployers
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

export const POST = async (req) => {
  try {
    const dataemployer = await req.json()

    const { name, description, area, userId } = dataemployer
    const reqDB = await conn.query('INSERT INTO employers SET ?', {
      name, description, area, userId
    })
    if (reqDB.affectedRows > 0) {
      return NextResponse.json({
        ok: true,
        message: 'Employer creado',
        insertedRow: {
          employerId: reqDB.insertId,
          name,
          description,
          area,
          userId
        }
      })
    }
    return NextResponse.json({
      ok: false,
      message: 'No se pudo crear el employer'
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
