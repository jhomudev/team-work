'use client'
import { colorStatus } from '@/libs/ant'
import { getLeftTime } from '@/libs/utils/dateFunctions'
import { Badge, Card, Empty, Flex, Space } from 'antd'
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
            <Badge.Ribbon text={job.status} color={colorStatus[job.status]}>
              <Card hoverable>
                <Flex align='center' justify='space-between'>
                  <Text className='font-semibold !text-blue-500'>{job.title}</Text>
                  {/* <Tag color={colorStatus[job.status]}>{job.status}</Tag> */}
                </Flex>
                <small>Publicado {getLeftTime(job.createdAt)}</small>
                <Paragraph ellipsis={{
                  expandable: false,
                  rows: 2
                }}
                >{job.description}
                </Paragraph>
              </Card>
            </Badge.Ribbon>
          </Link>
        ))
      }
    </Space>
  )
}

function JobsPerEmployerList ({ jobs }) {
  const areThereJobs = jobs.length > 0

  return areThereJobs
    ? <JobsList jobs={jobs} />
    : <Empty
        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
        imageStyle={{ height: 60 }}
        rootClassName='flex-1 w-full min-h-[200px] flex flex-col items-center justify-center bg-white rounded-lg'
        description={<Text type='secondary'> Aún no has publicado puestos de trabajos. </Text>}
      />
}

export default JobsPerEmployerList
