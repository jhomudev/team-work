import EmployersList from '@/features/EmployersList'
import { Breadcrumb, Card, Divider } from 'antd'
import Title from 'antd/es/typography/Title'
import axios from 'axios'
import Link from 'next/link'

const getEmployers = async () => {
  const resAPi = await axios(`${process.env.API_URL}/employers`)
  const data = await resAPi.data
  return data
}

async function EmployersLayout ({ children }) {
  const { data: employers } = await getEmployers()

  return (
    <>
      <Breadcrumb
        separator='>'
        className='w-full'
        items={[
          {
            title: <Link href='/panel/employer'>Home</Link>
          },
          {
            title: 'Empresas'
          }
        ]}
      /> <br />
      <div className='flex gap-5 flex-col-reverse md:flex-row'>
        <Card className='w-full md:w-[40%]'>
          <Title level={4}>Empresas</Title>
          <Divider />
          <EmployersList employers={employers} />
        </Card>
        <main className='w-full md:w-[60%]'>
          <Card>
            {children}
          </Card>
        </main>
      </div>
    </>
  )
}
export default EmployersLayout
