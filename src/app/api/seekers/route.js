import { conn } from '@/libs/mysql'
import getQueryParams from '@/libs/utils/getQueryParams'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  try {
    const queryParams = getQueryParams({
      URLSearchParams: req.nextUrl.searchParams,
      likeColumn: 'CONCAT(sek.names," ",sek.lastnames)',
      orderByColumn: 'sek.seekerId',
      paramsCols: ['area']
    })
    const { queryParamsComplete } = queryParams
    const data = await conn.query(`
    SELECT sek.seekerId ,sek.names ,sek.lastnames ,sek.description ,sek.area ,sek.title ,sek.userId ,sek.createdAt,sek.updatedAt, u.userHandle, u.email as userEmail
    FROM seekers sek
    INNER JOIN users u ON sek.userId=u.userId
    ${queryParamsComplete}`)

    const [totalSeekers] = await conn.query('SELECT COUNT(seekerId) as totalSeekers FROM seekers')
    const dataFormated = data.map(seeker => ({
      seekerId: seeker.seekerId,
      names: seeker.names,
      lastnames: seeker.lastnames,
      description: seeker.description,
      area: seeker.area,
      title: seeker.title,
      createdAt: seeker.createdAt,
      updatedAt: seeker.updatedAt,
      user: {
        id: seeker.userId,
        handle: seeker.userHandle,
        email: seeker.userEmail
      }
    }))
    return NextResponse.json({
      data: dataFormated,
      numRowsObtained: data.length,
      ...totalSeekers
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
    const dataSeeker = await req.json()

    const { names, lastnames, description, area, title, userId } = dataSeeker
    const reqDB = await conn.query('INSERT INTO seekers SET ?', {
      names, lastnames, description, area, title, userId
    })
    if (reqDB.affectedRows > 0) {
      return NextResponse.json({
        ok: true,
        message: 'Seeker creado',
        insertedRow: {
          seekerId: reqDB.insertId,
          names,
          lastnames,
          description,
          area,
          title,
          userId
        }
      })
    }
    return NextResponse.json({
      ok: false,
      message: 'No se pudo crear el trabajo'
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
