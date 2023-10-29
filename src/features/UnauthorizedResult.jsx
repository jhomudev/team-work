import { Button, Result } from 'antd'
import Link from 'next/link'

function UnauthorizedResult () {
  return (
    <Result
      status='403'
      title='403'
      subTitle='Lo sentimos, no estás autorizado para acceder a esat página.'
      extra={<Link href='/panel'><Button type='primary'>Ir al inicio</Button></Link>}
    />
  )
}
export default UnauthorizedResult
