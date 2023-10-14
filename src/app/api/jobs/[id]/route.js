import { conn } from '@/libs/mysql'
import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
  const id = params.id
  const query = `SELECT j.id, j.idName,j.titleJob, j.description, j.createdAt, e.name AS enterprise FROM jobs j 
  INNER JOIN enterprises e 
  ON j.enterpriseId=e.id WHERE j.id = ?`
  const data = await conn.query(query, [id])

  if (data.length > 0) { return NextResponse.json(data[0]) }
  return NextResponse.json({
    message: 'Trabajo no existe'
  }, {
    status: 400
  })
}
