'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { Button, Form, Input, Select, Steps, notification } from 'antd'
import { useForm } from 'antd/es/form/Form'
import useRegisterData from '@/hooks/useRegisterData'
import { RULES_INPUT_ANT, filterOption } from '@/libs/ant'
import { JOB_OPTIONS } from '@/libs/utils/contants'
import Title from 'antd/es/typography/Title'

function RegisterFormEmployerData ({ changeNextStep }) {
  const { updateRegisterData, registerData } = useRegisterData()
  const [form] = useForm()

  const handleChangeValuesForm = (changedValues, _allValues) => {
    updateRegisterData(changedValues)
  }

  useEffect(() => {
    form.setFieldsValue({
      name: registerData?.name,
      email: registerData?.email,
      description: registerData?.description
    })
  }, [form, registerData])

  return (
    <Form
      scrollToFirstError
      form={form}
      layout='vertical'
      onValuesChange={handleChangeValuesForm}
      onFinish={() => { changeNextStep() }}
    >
      <div className='flex gap-x-5 flex-wrap'>
        <Form.Item rules={[RULES_INPUT_ANT.required]} className='flex-[1_0_200px]' name='name' label='Nombre'>
          <Input size='large' placeholder='Ingresa el nombre de tu empresa' />
        </Form.Item>
        <Form.Item rules={[RULES_INPUT_ANT.email, RULES_INPUT_ANT.required]} className='flex-[1_0_200px]' name='email' label='Email'>
          <Input size='large' type='email' placeholder='Correo electrónico de la empresa' />
        </Form.Item>
        <Form.Item rules={[RULES_INPUT_ANT.required]} className='flex-[1_0_200px]' name='area' label='Área de trabajo'>
          <Select
            size='large'
            showSearch
            placeholder='Selecciona un área'
            optionFilterProp='children'
            filterOption={filterOption}
            defaultValue={registerData.area}
            options={JOB_OPTIONS.areas}
          />
        </Form.Item>
        <Form.Item rules={[RULES_INPUT_ANT.required]} className='w-full' name='description' label='Descripción empresarial'>
          <Input.TextArea placeholder='Somos un empresa....' autoSize={{ minRows: 4, maxRows: 7 }} />
        </Form.Item>
      </div>
      <Form.Item className='w-full sm:w-min !ml-auto'>
        <Button size='large' type='primary' htmlType='submit'>Siguiente</Button>
      </Form.Item>
    </Form>
  )
}

function RegisterFormAccount () {
  const { updateRegisterData, registerData } = useRegisterData()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [form] = useForm()

  const handleChangeValuesForm = (changedValues, _allValues) => {
    updateRegisterData(changedValues)
  }

  const handleSubmitForm = async () => {
    setLoading(true)
    const reqAPI = await axios.post('/api/auth/register/employer', registerData)
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
      scrollToFirstError
      form={form}
      layout='vertical'
      onValuesChange={handleChangeValuesForm}
      onFinish={handleSubmitForm}
    >
      <div className='flex gap-x-5 flex-wrap'>
        <Form.Item
          rules={[RULES_INPUT_ANT.required, {
            pattern: '^[A-Za-z0-9]*$',
            message: 'Solo se aceptan mayusculas, minusculas, números, No espacios o carácteres especiales'
          }]}
          hasFeedback
          className='flex-[1_0_200px]'
          name='userHandle'
          label='Identificador de usuario'
        >
          <Input size='large' placeholder='josecarlos2003' />
        </Form.Item>
        <Form.Item rules={[RULES_INPUT_ANT.required]} className='flex-[1_0_200px]' name='password' label='Contraseña' hasFeedback>
          <Input.Password size='large' placeholder='Crea tu contraseña' />
        </Form.Item>
        <Form.Item rules={RULES_INPUT_ANT.confirmPassword} dependencies={['password']} hasFeedback className='flex-[1_0_200px]' name='confirmPassword' label='Confirmar contraseña'>
          <Input.Password size='large' placeholder='Vuelve a escribir tu contraseña' />
        </Form.Item>
      </div>
      <Form.Item className='w-full sm:w-min !ml-auto'>
        <Button size='large' type='primary' htmlType='submit' loading={loading} className='!bg-pink-600 !text-white'>Crear cuenta</Button>
      </Form.Item>
    </Form>
  )
}

function EmployerRegisterForm () {
  const [currentStep, setCurrentStep] = useState(0)
  const { registerData } = useRegisterData()

  const itemsSteps = [
    {
      title: 'Datos de la empresa',
      form: RegisterFormEmployerData
    },
    {
      title: 'Cuenta',
      disabled: !(registerData.name && registerData.area && registerData.email && registerData.description),
      form: RegisterFormAccount
    }
  ]

  const handleChangeStep = (current) => {
    setCurrentStep(current)
  }
  const changeNextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  const currentItemStep = itemsSteps[currentStep]
  const { form: FormStep } = currentItemStep

  return (
    <div className='w-[min(100%,600px)]'>
      <Title className='!text-2xl !text-gray-700'>Crea tu cuenta y encuentra a los mejores profesionales para tu negocio.</Title>
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
export default EmployerRegisterForm
