import Title from 'antd/es/typography/Title'
// import Text from 'antd/es/typography/Text'
import Paragraph from 'antd/es/typography/Paragraph'
import { Flex, Tag } from 'antd'
import axios from 'axios'
import Avatar from 'antd/es/avatar/avatar'

const getDataEmployer = async (handle) => {
  const resAPI = await axios(`${process.env.API_URL}/employers/${handle}`)
  const data = await resAPI.data
  return data
}

async function EmployerPage ({ params }) {
  const handle = params.handle
  const employer = await getDataEmployer(handle)

  return (
    <>
      <Flex gap={20} wrap='wrap' align='center'>
        <Avatar shape='square' size={164} src={`https://unavatar.io/${handle}`} />
        <div>
          <Title className='!text-pink-600'>{employer.name}</Title>
          {/* <Text strong className='!text-blue-500'>{employer.title}</Text><br /> */}
        </div>
      </Flex>
      <br />
      <Title level={3}>Área de trabajo</Title>
      <Tag color='geekblue'>{employer.area}</Tag><br /> <br />
      <Title level={3}>Descripción empresarial</Title>
      <Paragraph
        ellipsis={{
          rows: 5,
          expandable: true,
          symbol: 'Mostrar más'
        }}
      >
        {employer.description}
      </Paragraph>
    </>
  )
}
export default EmployerPage
