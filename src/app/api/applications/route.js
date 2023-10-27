import { conn } from '@/libs/mysql'
import getQueryParams from '@/libs/utils/getQueryParams'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  try {
    const queryParams = getQueryParams({
      URLSearchParams: req.nextUrl.searchParams,
      orderByColumn: 'apps.status',
      paramsCols: ['apps.jobId', 'apps.seekerId', 'apps.status']
    })
    const { queryParamsComplete } = queryParams
    const data = await conn.query(`
    SELECT 
      apps.jobId, apps.seekerId, apps.status, apps.createdAt, apps.updatedAt,
      j.title as jobTitle, j.description as jobDescription, j.status as jobStatus,
    CONCAT(seek.names ," ", seek.lastnames) as seeker, seek.seekerId, seek.title as seekerTitle
    FROM applications apps
    INNER JOIN jobs j ON apps.jobId=j.jobId
    INNER JOIN seekers seek ON apps.seekerId=seek.seekerId
    ${queryParamsComplete};`)

    const [totalApplications] = await conn.query('SELECT COUNT(jobId) as totalApplications FROM applications')

    const dataFormated = data.map(application => ({
      status: application.status,
      createdAt: application.createdAt,
      updatedAt: application.updatedAt,
      job: {
        id: application.jobId,
        title: application.jobTitle,
        description: application.jobDescription,
        status: application.jobStatus
      },
      seeker: {
        id: application.seekerId,
        names: application.seeker,
        title: application.seekerTitle
      }
    }))
    return NextResponse.json({
      data: dataFormated,
      numRowsObtained: data.length,
      ...totalApplications
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
    const dataApplication = await req.json()

    const { jobId, seekerId } = dataApplication
    const reqDB = await conn.query('INSERT INTO applications SET ?', {
      jobId, seekerId
    })
    if (reqDB.affectedRows > 0) {
      return NextResponse.json({
        ok: true,
        message: 'Aplicación a puesto realizada',
        insertedRow: {
          jobId,
          seekerId
        }
      })
    }
    return NextResponse.json({
      ok: false,
      message: 'No se pudo registrar la aplicación al puesto'
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

export const DELETE = async (req) => {
  try {
    const dataApplication = await req.json()
    const { jobId, seekerId } = dataApplication
    const reqDB = await conn.query('DELETE FROM applications WHERE jobId = ? AND seekerId = ?', [jobId, seekerId])
    if (reqDB.affectedRows > 0) {
      return NextResponse.json({
        ok: true,
        message: 'Aplicación eliminada',
        deletedRow: {
          jobId,
          seekerId
        }
      })
    }
    return NextResponse.json({
      ok: false,
      message: 'No se pudo eliminar la aplicación'
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
