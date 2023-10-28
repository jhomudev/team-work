'use client'
// import { DEFAULT_PARAMS } from '@/libs/utils/getQueryParams'
import { Avatar, List } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Link from 'next/link'

function SeekersList ({ seekers }) {
  // const hasSeekers = seekers.length > 0
  return (
    <List
      pagination={{
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 5 /* DEFAULT_PARAMS.rowsPerPage */
      }}
      itemLayout='horizontal'
      dataSource={seekers}
      renderItem={(seeker, _index) => (
        <List.Item className='!flex !flex-col'>
          <List.Item.Meta
            className='!w-full'
            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${seeker.user.handle}`} />}
            title={<Link className='!text-pink-600 !font-medium' href={`/panel/seekers/${seeker.user.handle}`}>{seeker.names} {seeker.lastnames}</Link>}
            description={seeker.title}
          />
          <Paragraph
            ellipsis={{
              rows: 2
            }}
          >
            {seeker.description}
          </Paragraph>
        </List.Item>
      )}
    />
  )
}
export default SeekersList
