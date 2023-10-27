// import { getLeftTime } from '@/libs/utils/dateFunctions'
import { Card, Space } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Text from 'antd/es/typography/Text'
import Title from 'antd/es/typography/Title'
import Link from 'next/link'

function JobsRelatedList () {
  return (
    <aside className='flex-[1_0_130px]'>
      <Title level={4} className='!text-gray-700'>Trabajos relacionados</Title>
      <Space direction='vertical'>
        <Link href='/panel/jobs/1'>
          <Card hoverable>
            <Text strong className='font-semibold !text-blue-500'>Titulo del tarbajo</Text><br />
            <small>
              <span className='font-semibold text-slate-800'>Enbter Inc.</span>&nbsp;-&nbsp;
              Publicado 3 dias
              {/* Publicado {getLeftTime(job.createdAt)} */}
            </small>
            <Paragraph ellipsis={{
              rows: 2,
              expandable: false
            }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quaerat. Rem sapiente, similique ea perferendis reiciendis fuga, pariatur distinctio explicabo rerum dolorem nostrum sed expedita esse odio accusantium nobis modi.
            </Paragraph>
          </Card>
        </Link>
      </Space>
    </aside>
  )
}
export default JobsRelatedList
