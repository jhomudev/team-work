import HeaderNav from '@/components/HeaderNav'
import SearchJobForm from '@/features/SearchJobForm'
import { imgGirlsStudy } from '@/libs/media'
import { Flex } from 'antd'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { authOptions } from './api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default function Homepage () {
  const session = getServerSession(authOptions)
  if (session) redirect('/panel/jobs')

  return (
    <>
      <HeaderNav />
      <div className='min-h-[30rem] flex bg-gradient-to-b to-pink-300 from-slate-300'>
        <Flex className='container-block py-10 flex-col sm:flex-row' align='center' justify='center' gap={20}>
          <div className='w-[min(100%,400px)] sm:w-[clamp(200px,40%,400px)]'>
            <Flex vertical align='center' justify='center' gap={10}>
              <h1 className='text-3xl font-semibold text-blue-400'>Encuentra tu trabajo ideal</h1>
              <h2 className='text-lg font-medium text-blue-950'>Ayacucho - Perú</h2>
              <SearchJobForm />
            </Flex>
          </div>
          <div className='relative w-[min(100%,400px)] min-w-[200px] h-full min-h-[200px]'>
            <Image className='max-w-[350px] mx-auto object-fill' src={imgGirlsStudy} alt='girls image' fill />
          </div>
        </Flex>
      </div>
    </>
  )
}
