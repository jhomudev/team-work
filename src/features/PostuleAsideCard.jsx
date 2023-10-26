'use client'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Form, Input } from 'antd'

function PostuleAsideCard () {
  return (
    <aside className='h-full flex-[1_0_300px]'>
      <Card className='w-full'>
        <p className='mb-2'>Recuerda que el sueldo bruto es el salario total sin las retenciones e impuestos.</p>
        <search>
          <Form>
            <Form.Item>
              <Input size='large' placeholder='Ingresa tu sueldo bruto pretendido' prefix={<FontAwesomeIcon className='text-gray-400' icon={faDollar} />} />
              <small>Éste campo solo acepta carácteres numéricos. Ver el salario promedio pretendido Bruto por área.</small>
            </Form.Item>
            <Button size='large' type='primary' className='w-full !bg-pink-600 text-white'>Postular</Button>
          </Form>
        </search>
      </Card>
    </aside>
  )
}
export default PostuleAsideCard
