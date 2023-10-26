// import { getLeftTime } from '@/libs/utils/dateFunctions'
import { Card } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Text from 'antd/es/typography/Text'
import Link from 'next/link'

function JobsRelatedList () {
  return (
    <section>
      <h2 className='text-lg font-medium text-gray-700 mb-3'>Trabajos relacionados</h2>
      <ul>
        <li>
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
        </li>
      </ul>
    </section>
  )
}
export default JobsRelatedList
