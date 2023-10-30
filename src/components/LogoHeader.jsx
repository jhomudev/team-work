import { logotipo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'

function LogoHeader () {
  return (
    <Link href='/' className='relative w-40 min-w-[150px] h-[35px]'>
      <Image src={logotipo} alt='logo team work' fill />
    </Link>
  )
}
export default LogoHeader
