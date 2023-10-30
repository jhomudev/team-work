import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import JobsPerEmployerList from '@/features/JobsPerEmployerList'
// import { jobStates } from '@/static/enums'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card/* , Tabs  */ } from 'antd'
import axios from 'axios'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const getJobs = async ({ employerId }) => {
  const resAPI = await axios(`${process.env.API_URL}/jobs`, {
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
  // const itemsTab = [
  //   {
  //     key: jobStates.published,
  //     label: 'Publicados',
  //     children: <JobsPerEmployerList jobs={jobs} />
  //   },
  //   {
  //     key: jobStates.inReview,
  //     label: 'En evaluación',
  //     children: <JobsPerEmployerList jobs={jobs} />
  //   },
  //   {
  //     key: jobStates.closed,
  //     label: 'Cerrados',
  //     children: <JobsPerEmployerList jobs={jobs} />
  //   }
  // ]

  return (

    <>
      <Card
        className='flex flex-col'
        bodyStyle={{ display: 'flex', flexDirection: 'column' }}
        title={
          <div className='flex items-center justify-between gap-3'>
            <h2 className='text-lg font-medium text-gray-700'>Mis anuncios de empleo</h2>
            <Link href='/panel/employer/jobs/new'>
              <Button className='text-white' type='primary' icon={<FontAwesomeIcon className='w-3 h-3' icon={faPlus} />}>Nuevo</Button>
            </Link>
          </div>
        }
      >
        {/* <Tabs defaultActiveKey='1' items={itemsTab} /> */}
        <JobsPerEmployerList jobs={jobs} />
      </Card>
    </>
  )
}
export default EmployerPanelPage
