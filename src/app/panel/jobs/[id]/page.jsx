import JobsRelatedList from '@/features/JobsRelatedList'
import PostuleAsideCard from '@/features/PostuleAsideCard'
import { getLeftTime } from '@/libs/utils/dateFunctions'
import { faClock, faHandPointUp } from '@fortawesome/free-regular-svg-icons'
import { faChair, faFileContract, faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Breadcrumb, Card, Divider } from 'antd'
import axios from 'axios'
import Link from 'next/link'

const getDataJob = async ({ id }) => {
  const req = await axios(`http://localhost:3000/api/jobs/${id}`)
  const data = await req.data
  return data
}
const page = async ({ params }) => {
  const id = params.id
  const job = await getDataJob({ id })
  return (
    <div className='flex gap-3 flex-wrap'>
      <Breadcrumb
        className='w-full'
        items={[
          {
            title: <Link href='/'>Home</Link>
          },
          {
            title: <Link href='/panel/jobs'>Trabajos</Link>
          },
          {
            title: job.title
          }
        ]}
      />
      <Card className='w-full'>
        <div className='grid'>
          <h1 className='text-blue-600 text-lg font-semibold'>{job.title}</h1>
          <Link href={`/employers/${job.employer.handle}`} className='text-sm text-pink-600'>{job.employer.name}</Link>
        </div>
        {/* botones de acciones */}
      </Card>
      <main className='flex-[2_0_600px]'>
        <Card className='w-full'>
          <small className='text-gray-500'>Publicado {getLeftTime(job.createdAt)}</small>
          <h2 className='text-lg font-medium'>Descripción</h2>
          <p>{job.description}</p>
          <Divider orientationMargin={0} orientation='left'>Detalles</Divider>
          <ul className='w-[min(100%,600px)] grid gap-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
            <li className='flex items-center gap-2'><FontAwesomeIcon className='text-lg text-pink-600' size='1x' icon={faPlaneArrival} /> {job.jobMode}</li>
            <li className='flex items-center gap-2'><FontAwesomeIcon className='text-lg text-pink-600' size='1x' icon={faFileContract} /> {job.jobType}</li>
            <li className='flex items-center gap-2'><FontAwesomeIcon className='text-lg text-pink-600' size='1x' icon={faClock} /> {job.jobTime}</li>
            <li className='flex items-center gap-2'><FontAwesomeIcon className='text-lg text-pink-600' size='1x' icon={faHandPointUp} /> {job.seniority}</li>
            <li className='flex items-center gap-2'><FontAwesomeIcon className='text-lg text-pink-600' size='1x' icon={faChair} /> {job.openings} vacantes</li>
          </ul>
        </Card>
        <Divider />
        <JobsRelatedList />
      </main>
      <PostuleAsideCard />
    </div>
  )
}
export default page
