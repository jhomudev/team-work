import RegisterForm from '@/features/RegisterForm'
import { imgMain } from '@/libs/media'
import Image from 'next/image'

const RegisterPage = () => {
  return (
    <div className='container-block h-[calc(100vh_-_80px)] py-10 flex gap-5'>
      <RegisterForm />
      <div className='hidden sm:block relative w-[min(90%,500px)] h-full max-h-[700px]'>
        <Image src={imgMain} alt='img' className='!w-[min(90%,300px)] mx-auto !max-h-[300px] hue-rotate-15 [transform:rotateY(180deg)]' fill />
      </div>
    </div>
  )
}
export default RegisterPage
