'use client'
import { Button, Form, Input } from 'antd'

const RegisterForm = () => {
  const configInput = {
    rules: [{ required: true, message: 'Complete este campo' }]
  }

  const handleSubmitForm = (formData) => {
    console.log(formData)
  }
  return (
    <div className='w-[min(100%,600px)]'>
      <h1 className='text-xl font-semibold text-gray-700'>Crea tu cuenta y encuentra tu empleo a tiempo</h1>
      <br />
      <Form
        layout='vertical'
        onFinish={handleSubmitForm}
      >
        <div className='flex gap-x-5 flex-wrap'>
          <Form.Item {...configInput} className='flex-[1_0_200px]' name='names' label='Nombres'>
            <Input size='large' placeholder='Ingresa tus nombres' />
          </Form.Item>
          <Form.Item {...configInput} className='flex-[1_0_200px]' name='lastnames' label='Apellidos'>
            <Input size='large' placeholder='Ingresa tus apellidos' />
          </Form.Item>
          <Form.Item {...configInput} className='flex-[1_0_200px]' name='phone' label='Teléfono'>
            <Input size='large' placeholder='Ingresa tus teléfono' />
          </Form.Item>
          <Form.Item {...configInput} className='flex-[1_0_200px]' name='email' label='Email'>
            <Input size='large' type='email' placeholder='Ingresa tu correo electrónico' />
          </Form.Item>
          <Form.Item {...configInput} className='flex-[1_0_200px]' name='password' label='Contraseña'>
            <Input.Password size='large' placeholder='Crea tu contraseña' />
          </Form.Item>
        </div>
        <Form.Item className='flex-[1_0_300px]'>
          <Button size='large' type='primary' htmlType='submit'>Crear cuenta</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default RegisterForm
