import { Button } from 'antd'
import Link from 'next/link'
import LogoHeader from './LogoHeader'

function HeaderNavContentNoAuth () {
  return (
    <>
      <LogoHeader />
      <nav className=' ml-auto'>
        <ul className='flex items-center gap-3'>
          <li>
            <Link href='/login'>
              {/* Ingresar */}
              <Button type='primary'>Ingresar</Button>
            </Link>
          </li>
          <li>
            <Link href='/register/seeker'>
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
