import { Breadcrumb, Card, Divider, Tag } from 'antd'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import axios from 'axios'
import EditJobForm from '@/features/EditJobForm'
import Link from 'next/link'
import { colorStatus } from '@/libs/ant'
import ChangeStatesButtons from '@/features/ChangeStatesButtons'

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
        separator='>'
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
      <Text>Estado del anuncio: <Tag color={colorStatus[job.status]}>{job.status}</Tag></Text>
      <Title level={5}>Acciones rápidas</Title>
      <ChangeStatesButtons jobData={job} />
      <Divider orientation='left' orientationMargin={0}><Title level={5}>Editar anuncio </Title></Divider>
      <EditJobForm dataJob={job} />
    </Card>
  )
}
export default ActionsJobPage
