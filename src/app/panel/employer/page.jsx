import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import JobsPerEmployerList from '@/features/JobsPerEmployerList'
import axios from 'axios'
import { getServerSession } from 'next-auth'

export const dynamic = 'force-dynamic'

const getJobs = async ({ employerId }) => {
  const resAPI = await axios('http://localhost:3000/api/jobs', {
    params: {
      'j.employerId': employerId,
      sort: 'DESC'
    }
  })
  const jobs = await resAPI.data
  return jobs.data
}

async function EmployerPanelPage () {
  const session = await getServerSession(authOptions)
  const { data } = session.user

  const jobs = await getJobs({ employerId: data.employerId })

  return (
    <JobsPerEmployerList jobs={jobs} />
  )
}
export default EmployerPanelPage
