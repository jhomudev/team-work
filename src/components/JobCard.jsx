import { formatDate } from '@/libs/utils/dateFunctions'
import { Card } from 'antd'
import Link from 'next/link'

const JobCard = ({ job }) => {
  return (
    <Link href={`/panel/jobs/${job.jobId}`} className='h-full flex'>
      <Card
        hoverable
        className='flex-1'
        type='inner'
        title={<strong className='font-semibold text-pink-500'>{job.title}</strong>}
      >
        <small>
          <span className='font-semibold text-blue-500'>{job.employer.name}</span>&nbsp;&nbsp;
          {formatDate(job.createdAt)}
        </small>
        <p className='text-sm text-gray-600 line-clamp-2'>{job.description}</p>
      </Card>
    </Link>
  )
}
export default JobCard
