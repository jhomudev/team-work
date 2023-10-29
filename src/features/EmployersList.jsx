'use client'
// import { DEFAULT_PARAMS } from '@/libs/utils/getQueryParams'
import { Avatar, List } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Link from 'next/link'

function EmployersList ({ employers }) {
  // const hasemployers = employers.length > 0
  return (
    <List
      pagination={{
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 5 /* DEFAULT_PARAMS.rowsPerPage */
      }}
      itemLayout='horizontal'
      dataSource={employers}
      renderItem={(employer, _index) => (
        <List.Item className='!flex !flex-col'>
          <List.Item.Meta
            className='!w-full'
            avatar={<Avatar src={`https://unavatar.io/${employer.user.handle}`} />}
            title={<Link className='!text-blue-600 !font-medium' href={`/panel/employers/${employer.user.handle}`}>{employer.name}</Link>}
            description={employer.area}
          />
          <Paragraph
            ellipsis={{
              rows: 2
            }}
          >
            {employer.description}
          </Paragraph>
        </List.Item>
      )}
    />
  )
}
export default EmployersList
