import { getLeftTime } from '@/libs/utils/dateFunctions'
import { faClock, faHandPointUp } from '@fortawesome/free-regular-svg-icons'
import { faChair, faFileContract, faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Breadcrumb, Card, Divider, Flex } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import axios from 'axios'
import Link from 'next/link'
import AppsListPerJob from '@/features/AppsListPerJob'

const getDataJob = async (jobId) => {
  const resAPI = await axios(`http://localhost:3000/api/jobs/${jobId}`)
  const jobData = await resAPI.data
  return jobData
}

const getApplications = async (jobId) => {
  const resAPI = await axios('http://localhost:3000/api/applications', {
    params: {
      'apps.jobId': jobId,
      rowsPerPage: 1000
    }
  })
  const applicationsData = await resAPI.data
  const { data, numRowsObtained } = applicationsData

  return {
    data,
    numRowsObtained
  }
}

const JobEmployerPage = async ({ params }) => {
  const jobId = params.id
  const job = await getDataJob(jobId)
  const applicationsData = await getApplications(jobId)

  return (
    <Flex gap={10} vertical>
      <Card className='w-full'>
        <Breadcrumb
          className='w-full'
          items={[
            {
              title: <Link href='/panel/employer'>Home</Link>
            },
            {
              title: job.title
            }
          ]}
        />
        <Title className='!text-blue-600'>{job.title}</Title>
        <small className='text-gray-500'>Publicado {getLeftTime(job.createdAt)}</small>
        <Title level={3}>Descripción</Title>
        <Paragraph
          ellipsis={{
            rows: 5,
            expandable: true,
            symbol: 'Mostrar mas'
          }}
        >
          {job.description}
        </Paragraph>
        <Divider orientationMargin={0} orientation='left'><Title level={4}>Detalles</Title></Divider>
        <ul className='w-[min(100%,600px)] grid gap-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
          <li className='flex items-center gap-2'><FontAwesomeIcon className='text-pink-600 w-3 h-3' icon={faPlaneArrival} /> {job.jobMode}</li>
          <li className='flex items-center gap-2'><FontAwesomeIcon className='text-pink-600 w-3 h-3' icon={faFileContract} /> {job.jobType}</li>
          <li className='flex items-center gap-2'><FontAwesomeIcon className='text-pink-600 w-3 h-3' icon={faClock} /> {job.jobTime}</li>
          <li className='flex items-center gap-2'><FontAwesomeIcon className='text-pink-600 w-3 h-3' icon={faHandPointUp} /> {job.seniority}</li>
          <li className='flex items-center gap-2'><FontAwesomeIcon className='text-pink-600 w-3 h-3' icon={faChair} /> {job.openings} vacantes</li>
        </ul>
      </Card>
      <Card>
        <Title level={3}>Aplicaciones al puesto</Title>
        <Text type='secondary'>Aquí apareceran  las aplicaciones o postulaciones al puesto.</Text>
        <AppsListPerJob applicationsData={applicationsData} />
      </Card>
    </Flex>
  )
}
export default JobEmployerPage
