import { Breadcrumb, Card, Divider } from 'antd'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import Link from 'next/link'
import { NewJobForm } from '@/features'

async function NewJobPage () {
  return (
    <Card>
      <Breadcrumb
        separator='>'
        className='w-full'
        items={[
          {
            title: <Link href='/panel/employer'>Home</Link>
          },
          {
            title: 'Crear nuevo'
          }
        ]}
      />
      <Title className='!text-blue-600'>Crear anuncio de empleo</Title>
      <Text type='secondary'>Los anuncios que cree se publicarán en la bolsa de empleo automaticamente.</Text>
      <Divider />
      <NewJobForm />
    </Card>
  )
}
export default NewJobPage
