import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { HeaderNav } from '@/components'
import { LoginForm } from '@/features'
import { imgMain } from '@/assets'

async function LoginPage () {
  const session = await getServerSession(authOptions)
  if (session) redirect('/panel/jobs')

  return (
    <>
      <HeaderNav />
      <div className='container-block h-[calc(100vh_-_80px)] py-10 flex flex-col-reverse sm:flex-row gap-10 items-center justify-center sm:justify-between'>
        <LoginForm />
        <div className='hidden sm:block relative w-[min(90%,500px)] h-full max-h-[700px]'>
          <Image src={imgMain} alt='img' className='!w-[min(90%,300px)] m-auto !max-h-[300px] hue-rotate-15 [transform:rotateY(180deg)]' fill />
        </div>
      </div>
    </>
  )
}

export default LoginPage
