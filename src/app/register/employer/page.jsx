import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { imgMain } from '@/assets'
import { EmployerRegisterForm } from '@/features'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'

async function EmployerRegisterPage () {
  const session = await getServerSession(authOptions)
  if (session) redirect('/panel/jobs')

  return (
    <>
      <EmployerRegisterForm />
      <div className='hidden sm:block relative w-[min(90%,500px)] h-full max-h-[700px]'>
        <Image src={imgMain} alt='img' className='!w-[min(90%,300px)] mx-auto !max-h-[300px] hue-rotate-15 [transform:rotateY(180deg)]' fill />
      </div>
    </>
  )
}
export default EmployerRegisterPage
