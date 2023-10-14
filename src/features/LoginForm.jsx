'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form, Input } from 'antd'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const router = useRouter()
  const handleSubmitForm = async (values) => {
    const req = await axios.post('/api/auth/login', values)
    const res = await req.data
    if (res.auth.success) router.push(res.auth.access.route)
  }
  return (
    <div className='w-[min(100%,400px)]'>
      <h1 className='text-xl text-gray-600 font-semibold'>Ingrese a su cuenta</h1><br />
      <Form
        onFinish={handleSubmitForm}
        layout='vertical'
      >
        <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Complete este campo' }]}>
          <Input
            size='large'
            prefix={
              <FontAwesomeIcon
                className='text-gray-400'
                width={12}
                height={12}
                icon={faUser}
              />
              }
            placeholder='Ingrese su email'
          />
        </Form.Item>
        <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Complete este campo' }]}>
          <Input.Password
            size='large'
            prefix={
              <FontAwesomeIcon
                className='text-gray-400'
                width={12}
                height={12}
                icon={faLock}
              />
            }
            placeholder='Ingrese su contraseña'
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType='submit'
            size='large'
            type='primary'
            className='w-full'
          >
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default LoginForm
