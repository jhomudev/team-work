import { searchIlustration } from '@/libs/media'
import { Button, Result } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

function page () {
  return (
    <Result
      icon={
        <>
          <Image className='mx-auto' src={searchIlustration} alt='ilustration search' width={200} height={200} />
        </>
      }
      title='¿Estas en búsqueda de empresas para el trabajo?'
      subTitle='En Team Work, descubrirás un abanico de oportunidades laborales que se ajustan a tus habilidades y aspiraciones. Abre las puertas a un mundo de posibilidades profesionales.'
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
export default page
