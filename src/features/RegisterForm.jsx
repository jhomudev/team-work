'use client'
import useRegisterData from '@/hooks/useRegisterData'
import { jobAreas } from '@/static/enums'
import { Button, Form, Input, Select, Steps, notification } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useEffect, useState } from 'react'
import { getDataOptions } from './FilterAsideJobs'
import { useForm } from 'antd/es/form/Form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
const configInput = {
  rules: [{ required: true, message: 'Complete este campo' }]
}

const RegisterFormPersonData = ({ changeNextStep }) => {
  const { updateRegisterData, registerData } = useRegisterData()
  const [form] = useForm()

  const handleSubmitForm = (formData) => {
    updateRegisterData(formData)
    changeNextStep()
  }

  useEffect(() => {
    form.setFieldsValue({
      names: registerData?.names,
      lastnames: registerData?.lastnames,
      phone: registerData?.phone,
      email: registerData?.email
    })
  }, [form, registerData])

  return (
    <Form
      form={form}
      layout='vertical'
      onFinish={handleSubmitForm}
    >
      <div className='flex gap-x-5 flex-wrap'>
        <Form.Item {...configInput} className='flex-[1_0_200px]' id='names' name='names' label='Nombres'>
          <Input size='large' placeholder='Ingresa tus nombres' />
        </Form.Item>
        <Form.Item {...configInput} className='flex-[1_0_200px]' name='lastnames' label='Apellidos'>
          <Input size='large' placeholder='Ingresa tus apellidos' />
        </Form.Item>
        {/* <Form.Item {...configInput} className='flex-[1_0_200px]' name='phone' label='Teléfono'>
          <Input size='large' placeholder='Ingresa tus teléfono' />
        </Form.Item> */}
        <Form.Item {...configInput} className='flex-[1_0_200px]' name='email' label='Email'>
          <Input size='large' type='email' placeholder='Ingresa tu correo electrónico' />
        </Form.Item>
      </div>
      <Form.Item className='w-full sm:w-min !ml-auto'>
        <Button size='large' type='primary' htmlType='submit'>Siguiente</Button>
      </Form.Item>
    </Form>
  )
}

const RegisterFormAbout = ({ changeNextStep }) => {
  const { updateRegisterData, registerData } = useRegisterData()
  const [form] = useForm()

  const handleSubmitForm = (formData) => {
    updateRegisterData(formData)
    changeNextStep()
  }
  const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

  useEffect(() => {
    form.setFieldsValue({
      title: registerData?.title,
      description: registerData?.description
    })
  }, [form, registerData])

  return (
    <Form
      form={form}
      layout='vertical'
      onFinish={handleSubmitForm}
    >
      <div>
        <Form.Item {...configInput} className='flex-[1_0_200px]' name='area' label='Área de trabajo'>
          <Select
            size='large'
            showSearch
            placeholder='Select a person'
            optionFilterProp='children'
            filterOption={filterOption}
            defaultValue={registerData.area}
            options={getDataOptions(jobAreas)}
          />
        </Form.Item>
        <Form.Item {...configInput} className='flex-[1_0_200px]' name='title' label='Título profesional'>
          <Input size='large' placeholder='Ingeniero se software, Administrador, etc' />
        </Form.Item>
        <Form.Item {...configInput} className='flex-[1_0_200px]' name='description' label='Descripción profesional'>
          <TextArea placeholder='Soy un ...' rows={4} autoSize={{ minRows: 2, maxRows: 6 }} />
        </Form.Item>
      </div>
      <Form.Item className='w-full sm:w-min !ml-auto'>
        <Button size='large' type='primary' htmlType='submit'>Siguiente</Button>
      </Form.Item>
    </Form>
  )
}

const RegisterFormAccount = () => {
  const { updateRegisterData, registerData } = useRegisterData()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [form] = useForm()

  const handleSubmitForm = async (formData) => {
    setLoading(true)
    updateRegisterData(formData)
    const reqAPI = await axios.post('/api/auth/register/seeker', registerData)
    const responseAPI = reqAPI.data
    setLoading(false)

    if (responseAPI.ok) {
      const responseNextAuth = await signIn('credentials', {
        email: responseAPI.data.email,
        password: responseAPI.data.password,
        redirect: false
      })
      if (responseNextAuth.error) {
        notification.error({
          message: 'No se pudo iniciar la sesión',
          description: 'No pudimos iniciar la sesión automaticamente, puede intentar iniciarla manualmente en la pagina de login.'
        })
        return
      }
      updateRegisterData({})
      router.replace('/panel/jobs')
      return
    }

    notification.error({
      message: 'No se pudo crear la cuenta',
      description: 'Lo sentimos, al aprecer ocurrió un error y no pudimos cerar la cuenta.'
    })
  }

  useEffect(() => {
    form.setFieldsValue({
      userHandle: registerData?.userHandle,
      password: registerData?.password,
      confirmPassword: registerData?.confirmPassword
    })
  }, [form, registerData])

  return (
    <Form
      form={form}
      layout='vertical'
      onFinish={handleSubmitForm}
    >
      <div className='flex gap-x-5 flex-wrap'>
        <Form.Item {...configInput} className='flex-[1_0_200px]' name='userHandle' label='Identificador de usuario'>
          <Input size='large' placeholder='josecarlos2003' />
        </Form.Item>
        <Form.Item {...configInput} className='flex-[1_0_200px]' name='password' label='Contraseña'>
          <Input.Password size='large' placeholder='Crea tu contraseña' />
        </Form.Item>
        <Form.Item {...configInput} className='flex-[1_0_200px]' name='confirmPassword' label='Confirmar contraseña'>
          <Input.Password size='large' placeholder='Vuelve a escribir tu contraseña' />
        </Form.Item>
      </div>
      <Form.Item className='w-full sm:w-min !ml-auto'>
        <Button size='large' type='primary' htmlType='submit' loading={loading} className='!bg-pink-600 !text-white'>Crear cuenta</Button>
      </Form.Item>
    </Form>
  )
}

const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [stepPassed, setStepPassed] = useState(0)
  const { registerData } = useRegisterData()
  const itemsSteps = [
    {
      title: 'Datos Personales',
      form: RegisterFormPersonData
    },
    {
      title: 'Sobre ti',
      form: RegisterFormAbout
    },
    {
      title: 'Cuenta',
      form: RegisterFormAccount
    }
  ]

  const handleChangeStep = (current) => {
    setCurrentStep(current)
    setStepPassed(current)
  }
  const changeNextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  const currentItemStep = itemsSteps[currentStep]
  const { form: FormStep } = currentItemStep

  useEffect(() => {
    console.log({ registerData })
    console.log({ stepPassed, currentStep })
  }, [registerData, stepPassed, currentStep])

  return (
    <div className='w-[min(100%,600px)]'>
      <h1 className='text-xl font-semibold text-gray-700'>Crea tu cuenta y encuentra tu empleo a tiempo</h1>
      <br />
      <Steps
        type='navigation'
        current={currentStep}
        items={itemsSteps}
        onChange={handleChangeStep}
      />
      <br /><br />
      <FormStep changeNextStep={changeNextStep} />
    </div>
  )
}
export default RegisterForm
