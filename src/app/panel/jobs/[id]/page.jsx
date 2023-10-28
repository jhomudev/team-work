import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import AppButton from '@/features/AppButton'
import JobsRelatedList from '@/features/JobsRelatedList'
// import PostuleAsideCard from '@/features/PostuleAsideCard'
import { getLeftTime } from '@/libs/utils/dateFunctions'
import { userTypes } from '@/static/enums'
import { faClock, faHandPointUp } from '@fortawesome/free-regular-svg-icons'
import { faChair, faFileContract, faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Breadcrumb, Card, Divider, Flex, Tag } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import axios from 'axios'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

const getDataJob = async ({ jobId }) => {
  const req = await axios(`http://localhost:3000/api/jobs/${jobId}`)
  const data = await req.data
  return data
}

const verifyThereApplication = async ({ jobId, seekerId }) => {
  const req = await axios('http://localhost:3000/api/applications', {
    params: {
      'apps.seekerId': seekerId,
      'apps.jobId': jobId
    }
  })
  const data = await req.data
  return data.numRowsObtained > 0
}

async function JobPage ({ params }) {
  const jobId = params.id
  const job = await getDataJob({ jobId })
  const { user } = await getServerSession(authOptions)
  const alreadyApplied = await verifyThereApplication({ jobId, seekerId: user.data.seekerId })
  const isSeeker = user.data.type === userTypes.seeker

  return (
    <div className='flex gap-3 flex-col'>
      <Breadcrumb
        className='w-full'
        items={[
          {
            title: <Link href='/'>Home</Link>
          },
          {
            title: <Link href='/panel/jobs'>Bolsa de empleo</Link>
          },
          {
            title: job.title
          }
        ]}
      />
      <Card className='w-full'>
        <Flex justify='space-between' align='center'>
          <div className='grid'>
            <Flex align='center' gap={7}>
              <Title className='!text-xl !text-blue-600'>{job.title}</Title>
              {isSeeker && (alreadyApplied && <Tag color='green'>Ya aplicaste</Tag>)}
            </Flex>
            <Link href={`/employers/${job.employer.handle}`} className='text-sm text-pink-600'>{job.employer.name}</Link>
          </div>
          {
            isSeeker && <AppButton jobId={jobId} seekerId={user.data.seekerId} alreadyApplied={alreadyApplied} />
          }
        </Flex>
      </Card>
      <div className='flex gap-3 flex-col md:flex-row'>
        <main className='w-full'>
          <Card className='w-full'>
            <small className='text-gray-500'>Publicado {getLeftTime(job.createdAt)}</small>
            <Title level={3}>Descripción</Title>
            <Paragraph
              ellipsis={{
                rows: 5,
                expandable: true,
                symbol: 'Mostrar más'
              }}
            >
              {job.description}
            </Paragraph>
            <Divider orientationMargin={0} orientation='left'><Title level={4}>Detalles</Title></Divider>
            <ul className='w-[min(100%,600px)] grid gap-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
              <li className='flex items-center gap-2'><FontAwesomeIcon className='text-pink-600 w-5 h-5' icon={faPlaneArrival} /> {job.jobMode}</li>
              <li className='flex items-center gap-2'><FontAwesomeIcon className='text-pink-600 w-5 h-5' icon={faFileContract} /> {job.jobType}</li>
              <li className='flex items-center gap-2'><FontAwesomeIcon className='text-pink-600 w-5 h-5' icon={faClock} /> {job.jobTime}</li>
              <li className='flex items-center gap-2'><FontAwesomeIcon className='text-pink-600 w-5 h-5' icon={faHandPointUp} /> {job.seniority}</li>
              <li className='flex items-center gap-2'><FontAwesomeIcon className='text-pink-600 w-5 h-5' icon={faChair} /> {job.openings} vacantes</li>
            </ul>
          </Card>
          <Divider />
          <Card>
            <Title level={3}>Acerca de la empresa</Title>
            <Title level={4} className='!text-pink-600'>{job.employer.name}</Title>
            <Tag color='blue'>{job.employer.area}</Tag>
            <Divider />
            <Paragraph level={4}>{job.employer.description}</Paragraph>
          </Card>
          {/* <JobsRelatedList /> */}
        </main>
        <JobsRelatedList />
      </div>
    </div>
  )
}
export default JobPage
