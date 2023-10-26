'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form, Input, notification } from 'antd'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Title from 'antd/es/typography/Title'

function LoginForm () {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmitForm = async (values) => {
    setLoading(true)
    const { email, password } = values
    const responseNextAuth = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/panel'
    })
    if (responseNextAuth.error) {
      setLoading(false)
      notification.error({
        message: 'Credenciales incorrectas',
        description: 'No encontramos un usuario con las credenciales que puso. Verifique sus credenciales'
      })
      return
    }

    router.replace('/panel')
  }

  return (
    <div className='w-[min(100%,400px)]'>
      <Title className='!text-2xl !text-gray-600'>Ingrese a su cuenta</Title><br />
      <Form
        requiredMark={false}
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
            loading={loading}
          >
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default LoginForm
