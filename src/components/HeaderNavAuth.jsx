import { logotipo } from '@/libs/media'
import Image from 'next/image'

const HeaderNavAuth = () => {
  return (
    <div className='w-full h-[80px]'>
      <header className='container-block flex items-center justify-between'>
        <div className='logo relative w-20 h-[30px]'>
          <Image src={logotipo} alt='logo team work' fill />
        </div>
        <nav>
          <ul className='flex items-center gap-3'>
            <li>
              hola
            </li>
            <li>
              asas
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
export default HeaderNavAuth
