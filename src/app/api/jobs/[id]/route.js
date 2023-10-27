import { conn } from '@/libs/mysql'
import { NextResponse } from 'next/server'

export const GET = async (_, { params }) => {
  const jobId = params.id
  const query = `
  SELECT  
  j.jobId, j.title, j.description, j.openings, j.seniority, j.jobMode, j.jobType, j.jobTime, j.status, j.createdAt, j.updatedAt, 
  em.employerId, em.name as employer, em.description as employerDescription, em.area as employerArea,
  u.userHandle
  FROM jobs j
  INNER JOIN employers em ON j.employerId = em.employerId
  INNER JOIN users u ON em.userId = u.userId 
  WHERE j.jobId = ?;`
  const [data] = await conn.query(query, [jobId])
  const dataFormated = {
    jobId: data.jobId,
    title: data.title,
    description: data.description,
    openings: data.openings,
    seniority: data.seniority,
    jobMode: data.jobMode,
    jobType: data.jobType,
    jobTime: data.jobTime,
    status: data.status,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    employer: {
      id: data.employerId,
      name: data.employer,
      description: data.employerDescription,
      area: data.employerArea,
      handle: data.userHandle
    }
  }

  if (data) { return NextResponse.json(dataFormated) }
  return NextResponse.json({
    message: 'Trabajo no existe'
  }, {
    status: 400
  })
}

export const PUT = async (req, { params }) => {
  try {
    const newDataJob = await req.json()
    const jobId = params.id
    const query = 'UPDATE jobs SET ? WHERE jobId=?'
    const reqDB = await conn.query(query, [newDataJob, jobId])

    if (reqDB.affectedRows > 0) {
      return NextResponse.json({
        ok: true,
        message: 'Trabajo actualizado',
        updatedRow: {
          jobId,
          ...newDataJob
        }
      })
    }
    return NextResponse.json({
      ok: false,
      message: 'No pudimos actualizar el trabajo'
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
