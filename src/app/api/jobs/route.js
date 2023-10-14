import { conn } from '@/libs/mysql'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  const data = await conn.query(`
  SELECT j.id, j.idName,j.titleJob, j.description, j.createdAt, e.name AS enterprise FROM jobs j 
  INNER JOIN enterprises e 
  ON j.enterpriseId=e.id`)
  const jobs = JSON.parse(JSON.stringify(data))

  return NextResponse.json(jobs)
}
