import { getLeftTime } from '@/libs/utils/dateFunctions'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Empty, Space } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Text from 'antd/es/typography/Text'
import Link from 'next/link'

// This JobList is show to employer is loged, are the employer published jobs
function JobsList ({ jobs }) {
  return (
    <Space className='w-full' direction='vertical'>
      {
        jobs.map(job => (
          <Link href={`/panel/employer/jobs/${job.jobId}`} key={job.jobId}>
            <Card hoverable>
              <Text className='font-semibold !text-blue-500'>{job.title}</Text><br />
              <small>Publicado {getLeftTime(job.createdAt)}</small>
              <Paragraph className='text-sm text-gray-600 line-clamp-2'>{job.description}</Paragraph>
            </Card>
          </Link>
        ))
      }
    </Space>
  )
}

function JobsPerEmployerList ({ jobs }) {
  const areThereJobs = jobs.length > 0

  return (
    <Card
      className='flex flex-col'
      bodyStyle={{ display: 'flex', flexDirection: 'column' }}
      title={
        <div className='flex items-center gap-3'>
          <h2 className='text-lg font-medium text-gray-700'>Trabajos publicados</h2>
          <Link href='/panel/employer/jobs/new' className='ml-auto'>
            <Button className='text-white' type='primary' icon={<FontAwesomeIcon className='w-3 h-3' icon={faPlus} />}>Nuevo</Button>
          </Link>
        </div>
      }
    >
      {
          areThereJobs
            ? <JobsList jobs={jobs} />
            : <Empty
                image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                imageStyle={{ height: 60 }}
                rootClassName='flex-1 w-full min-h-[200px] flex flex-col items-center justify-center bg-white rounded-lg'
                description={<Text type='secondary'> Aún no has publicado puestos de trabajos. </Text>}
              />
        }
    </Card>
  )
}

export default JobsPerEmployerList
