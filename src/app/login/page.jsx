import Image from 'next/image'
import { imgMain } from '@/libs/media'
import LoginForm from '@/features/LoginForm'
// import { useState } from 'react'
// import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

const LoginPage = () => {
  return (
    <div className='container-block h-[calc(100vh_-_80px)] py-10 flex flex-col-reverse sm:flex-row gap-10 items-center justify-center sm:justify-between'>
      <LoginForm />
      <div className='hidden sm:block relative w-[min(90%,500px)] h-full max-h-[700px]'>
        <Image src={imgMain} alt='img' className='!w-[min(90%,300px)] m-auto !max-h-[300px] hue-rotate-15 [transform:rotateY(180deg)]' fill />
      </div>
    </div>
  )
}
export default LoginPage
