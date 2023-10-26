import { Button, Result } from 'antd'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { authOptions } from './api/auth/[...nextauth]/route'
import HeaderNav from '@/components/HeaderNav'

async function NotFoundPage () {
  const session = await getServerSession(authOptions)
  return (
    <>
      <HeaderNav hasSession={!!session} />
      <main className='h-[calc(100vh_-_80px)] flex flex-col items-center justify-center'>
        <Result
          status='404'
          title='404'
          subTitle='Lo sentimos, la página que visitaste no existe.'
          extra={<Link href='/'><Button type='primary'>Back Home</Button></Link>}
        />
      </main>
    </>
  )
}
export default NotFoundPage
