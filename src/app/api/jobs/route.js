import { conn } from '@/libs/mysql'
import getQueryParams from '@/libs/utils/getQueryParams'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  try {
    const queryParams = getQueryParams({
      URLSearchParams: req.nextUrl.searchParams,
      likeColumn: 'j.title',
      paramsCols: ['seniority', 'jobMode', 'jobtype', 'jobTime'],
      orderByColumn: 'j.jobId'
    })
    const { queryParamsComplete, queryParamsNoLimit } = queryParams
    const query = `
    SELECT  
      j.jobId, j.title, j.description, j.openings, j.seniority, j.jobMode, j.jobType, j.jobTime, j.status, j.createdAt, j.updatedAt, 
      em.employerId, em.name as employer,
      u.userHandle
    FROM jobs j
    INNER JOIN employers em ON j.employerId = em.employerId
    INNER JOIN users u ON em.userId=u.userId
    ${queryParamsComplete}
    `
    const data = await conn.query(query)
    const dataFormated = data.map(job => ({
      jobId: job.jobId,
      title: job.title,
      description: job.description,
      openings: job.openings,
      seniority: job.seniority,
      jobMode: job.jobMode,
      jobType: job.jobType,
      jobTime: job.jobTime,
      status: job.status,
      createdAt: job.createdAt,
      updatedAt: job.updatedAt,
      employer: {
        id: job.employerId,
        name: job.employer,
        handle: job.userHandle
      }
    }))

    const [totalJobs] = await conn.query(`
    SELECT COUNT(j.jobId) as totalJobs 
    FROM jobs j
    INNER JOIN employers em ON j.employerId = em.employerId
    ${queryParamsNoLimit};`)
    const [totalGlobalJobs] = await conn.query('SELECT COUNT(jobId) as totalGlobalJobs FROM jobs')

    return NextResponse.json({
      data: dataFormated,
      numRowsObtained: data.length,
      ...totalJobs,
      ...totalGlobalJobs
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
    const dataJob = await req.json()

    const { title, description, openings, seniority, jobMode, jobType, jobTime, status, employerId } = dataJob
    const reqDB = await conn.query('INSERT INTO jobs SET ?', {
      title,
      description,
      openings,
      seniority,
      jobMode,
      jobType,
      jobTime,
      status,
      employerId
    })
    if (reqDB.affectedRows > 0) {
      return NextResponse.json({
        ok: true,
        message: 'Trabajo creado',
        insertedRow: {
          jobId: reqDB.insertId,
          title,
          description,
          openings,
          seniority,
          jobMode,
          jobType,
          jobTime,
          status,
          employerId
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
