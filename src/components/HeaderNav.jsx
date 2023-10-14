import { logotipo } from '@/libs/media'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

const HeaderNav = () => {
  return (
    <div className='w-full h-[80px] grid place-items-center'>
      <header className='container-block flex items-center justify-between'>
        <div className='logo relative w-[140px] h-[35px]'>
          <Image src={logotipo} alt='logo team work' fill />
        </div>
        <nav>
          <ul className='flex items-center gap-3'>
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
      </header>
    </div>
  )
}
export default HeaderNav
