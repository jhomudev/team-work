import { bgPortada } from '@/libs/media'
import { Button, Flex, Space } from 'antd'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { authOptions } from './api/auth/[...nextauth]/route'
import Title from 'antd/es/typography/Title'
import Paragraph from 'antd/es/typography/Paragraph'
import { HeaderNav } from '@/components'

async function HomePage () {
  const session = await getServerSession(authOptions)
  if (session) redirect('/panel')

  return (
    <>
      <HeaderNav />
      <div
        className='relative h-[80vh] min-h-[30rem] flex bg-pink-800 bg-no-repeat bg-fixed after:content-[""] after:bg-black/40 after:absolute after:top-0 after:left-0 after:w-full after:h-full'
        style={{
          backgroundImage: `url(${bgPortada.src})`
        }}
      >
        <Flex
          vertical
          align='center'
          justify='center'
          gap={10}
          className='container-block relative z-10 py-10 text-center text-white w-[min(100%,500px)]'
        >
          <Title className='!text-white'>Bienvenido a <strong className='text-blue-500 font-bold'>TeamWork</strong></Title>
          <Paragraph className='text-lg mb-4 !text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo ex non saepe, numquam quos consequatur quia rerum aliquam deserunt!</Paragraph>
          <Space direction='horizontal' size='large'>
            <Link href='/login'>
              <Button size='large' type='primary' className='!bg-pink-600 !text-white'>Busco trabajo</Button>
            </Link>
            <Link href='register/employer'>
              <Button size='large'>Busco personal</Button>
            </Link>
          </Space>
          {/* <div className='w-[min(100%,400px)] sm:w-[clamp(200px,40%,400px)]'>
            <Flex vertical align='center' justify='center' gap={10}>
              <h1 className='text-3xl font-semibold text-blue-400'>Encuentra tu trabajo ideal</h1>
              <h2 className='text-lg font-medium text-blue-950'>Ayacucho - Perú</h2>
              <SearchJobForm />
            </Flex>
          </div>
          <div className='relative w-[min(100%,400px)] min-w-[200px] h-full min-h-[200px]'>
            <Image className='max-w-[350px] mx-auto object-fill' src={imgGirlsStudy} alt='girls image' fill />
          </div> */}
        </Flex>
      </div>
    </>
  )
}

export default HomePage
