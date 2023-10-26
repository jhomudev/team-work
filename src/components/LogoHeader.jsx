import { logotipo } from '@/libs/media'
import Image from 'next/image'
import Link from 'next/link'

function LogoHeader () {
  return (
    <Link href='/' className='logo relative w-[140px] h-[35px]'>
      <Image src={logotipo} alt='logo team work' fill />
    </Link>
  )
}
export default LogoHeader
