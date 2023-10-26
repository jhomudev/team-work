import { formatDate } from '@/libs/utils/dateFunctions'
import { Card } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Text from 'antd/es/typography/Text'
import Link from 'next/link'

function JobCard ({ job }) {
  return (
    <Link href={`/panel/jobs/${job.jobId}`} className='h-full flex'>
      <Card
        hoverable
        className='flex-1'
        type='inner'
        title={<Text strong className='!text-pink-500'>{job.title}</Text>}
      >
        <small>
          <span className='font-semibold text-blue-500'>{job.employer.name}</span>&nbsp;&nbsp;
          {formatDate(job.createdAt)}
        </small>
        <Paragraph
          className='!text-gray-600'
          ellipsis={{
            rows: 2,
            expandable: false
          }}
        >{job.description}
        </Paragraph>
      </Card>
    </Link>
  )
}
export default JobCard
