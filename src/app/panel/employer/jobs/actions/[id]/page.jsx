import { Breadcrumb, Button, Card, Divider, Flex } from 'antd'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import axios from 'axios'
import EditJobForm from '@/features/EditJobForm'
import Link from 'next/link'

const getDataJob = async (jobId) => {
  const resAPI = await axios(`http://localhost:3000/api/jobs/${jobId}`)
  const jobData = await resAPI.data
  return jobData
}

async function ActionsJobPage ({ params }) {
  const jobId = params.id
  const job = await getDataJob(jobId)
  return (
    <Card>
      <Breadcrumb
        className='w-full'
        items={[
          {
            title: <Link href='/panel/employer'>Home</Link>
          },
          {
            title: <Link href={`/panel/employer/jobs/${jobId}`}>{job.title}</Link>
          },
          {
            title: 'Gestión de anuncio'
          }
        ]}
      />
      <Title level={3} className='!text-blue-500'>Gestión de empleo</Title>
      <Text>Gestiona las opciones del anuncio de empleo </Text>
      <Title level={4} className='!text-pink-500'>{job.title}</Title>
      <Title level={5}>Acciones rápidas</Title>
      <Flex gap={10}>
        <Button>Pasar a evaluación</Button>
        <Button danger>Finalizar anuncio</Button>
      </Flex>
      <Divider orientation='left' orientationMargin={0}><Title level={5}>Editar anuncio </Title></Divider>
      <EditJobForm dataJob={job} />

    </Card>
  )
}
export default ActionsJobPage
