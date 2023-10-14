import { Card } from 'antd'
import Link from 'next/link'

const JobCard = ({ job }) => {
  return (
    <Link href={`/jobs/${job.id}`}>
      <Card type='inner' title={job.titleJob}>
        <span>{job.enterprise} - {job.createdAt}</span>
        <p className='text-sm line-clamp-2'>{job.description}</p>
      </Card>
    </Link>
  )
}
export default JobCard
