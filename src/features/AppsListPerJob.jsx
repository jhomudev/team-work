import { Button, Card, Empty } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Text from 'antd/es/typography/Text'
import Link from 'next/link'

function ListApplications ({ applications }) {
  return (
    <ul className='grid gap-5 grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))]'>
      {
        applications.map(app => (
          <li key={app.seeker.id}>
            <Card bodyStyle={{ display: 'flex', flexDirection: 'column' }}>
              <Text strong className='!text-blue-500'>{app.seeker.names}</Text>
              <Paragraph
                type='secondary' ellipsis={{
                  rows: 1,
                  expandable: false
                }}
              >{app.seeker.title}
              </Paragraph>
              <Link href={`panel/seekers/${app.seeker.id}`} className='mt-2 ml-auto'>
                <Button className='!bg-pink-500 !text-white' danger>Ver perfil</Button>
              </Link>
            </Card>
          </li>
        ))
      }
    </ul>
  )
}

function AppsListPerJob ({ applicationsData }) {
  const { data, numRowsObtained } = applicationsData
  const hasApplications = numRowsObtained > 0

  return (
    <div className=''>
      <Paragraph type='secondary'>Total aplicaciones : <Text strong type='secondary'>{numRowsObtained}</Text></Paragraph>
      {
        hasApplications
          ? <ListApplications applications={data} />
          : <Empty
              image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
              imageStyle={{ height: 60 }}
              rootClassName='flex-1 w-full min-h-[200px] flex flex-col items-center justify-center bg-white rounded-lg'
              description={<Text type='secondary'> Aún no hay applicaiones a este puesto. </Text>}
            />
      }
    </div>
  )
}
export default AppsListPerJob
