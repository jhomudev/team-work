import { searchIlustration } from '@/libs/media'
import { Button, Result } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

function SeekersPage () {
  return (
    <Result
      icon={
        <>
          <Image className='mx-auto' src={searchIlustration} alt='ilustration search' width={200} height={200} />
        </>
      }
      title='¿Buscando personal para tu siguiente meta?'
      subTitle='En Team Work, encontrarás talentos excepcionales que se adapten a las necesidades de tu equipo. Simplificamos la búsqueda de personas altamente calificadas para tu empresa.'
      extra={
        <Link href='/panel'>
          <Button type='primary' key='console'>
            Ir al inicio
          </Button>
        </Link>
      }
    />
  )
}
export default SeekersPage
