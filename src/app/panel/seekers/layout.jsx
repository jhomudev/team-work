import { SeekersList } from '@/features'
import { Breadcrumb, Card, Divider } from 'antd'
import Title from 'antd/es/typography/Title'
import axios from 'axios'
import Link from 'next/link'

const getSeekers = async () => {
  const resAPi = await axios(`${process.env.API_URL}/seekers`)
  const data = await resAPi.data
  return data
}

async function SeekersLayout ({ children }) {
  const { data: seekers } = await getSeekers()

  return (
    <>
      <Breadcrumb
        separator='>'
        className='w-full'
        items={[
          {
            title: <Link href='/panel/employer'>Home</Link>
          },
          {
            title: 'Seekers'
          }
        ]}
      /> <br />
      <div className='flex gap-5 flex-col-reverse md:flex-row'>
        <Card className='w-full md:w-[40%]'>
          <Title level={4}>Seekers found</Title>
          <Divider />
          <SeekersList seekers={seekers} />
        </Card>
        <main className='w-full md:w-[60%]'>
          <Card>
            {children}
          </Card>
        </main>
      </div>
    </>
  )
}
export default SeekersLayout
