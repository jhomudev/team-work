import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { userTypes } from '@/static/enums'
import { Card, Image } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

async function EmployerPanelLayout ({ children }) {
  const session = await getServerSession(authOptions)
  const { data } = session.user
  if (data.type === userTypes.seeker) redirect('/panel')

  return (
    <section className='w-full flex flex-wrap gap-5'>
      <Card className='w-full'>
        <Title className='!text-gray-500 !text-xl'>Bienvenido a tu panel de empresa</Title>
        <Text className='!text-lg text-blue-600'>Hola <Text strong className='!text-pink-500 uppercase'>{data.name}</Text></Text>
        <Paragraph>
          Gestiona todas tus publicaiones de puestos de tabajo, haz seguimiento a los puestos publicados y
          a las postulaciones de los interesados.
        </Paragraph>
      </Card>
      <aside className='flex-[1_0_250px] '>
        <Card className='text-center' bodyStyle={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <Image style={{ borderRadius: '50%' }} src='https://unavatar.io/team' alt='perfil user' />
          <Text strong className='uppercase !text-pink-600' rootClassName=''>{data.name}</Text>
          <Paragraph type='secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ut distinctio voluptates excepturi. Fugit, perspiciatis!</Paragraph>
        </Card>
      </aside>
      <main className='flex-[4_0_400px] '>
        {children}
      </main>
    </section>
  )
}
export default EmployerPanelLayout
