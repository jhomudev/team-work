import { logotipo } from '@/libs/media'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

const HeaderNavContentNoAuth = () => {
  return (
    <>
      <div className='logo relative w-[140px] h-[35px]'>
        <Image src={logotipo} alt='logo team work' fill />
      </div>
      <nav>
        <ul className='flex items-center gap-3 ml-auto'>
          <li>
            <Link href='/login'>
              {/* Ingresar */}
              <Button type='primary'>Ingresar</Button>
            </Link>
          </li>
          <li>
            <Link href='/register'>
              {/* Crear cuenta */}
              <Button type='dashed'>Crear cuenta</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default HeaderNavContentNoAuth
