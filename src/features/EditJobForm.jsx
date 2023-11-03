'use client'
import { Button, Form, Input, InputNumber, Modal, Select, message } from 'antd'
import { RULES_INPUT_ANT, filterOption } from '@/libs/ant'
import { JOB_OPTIONS } from '@/libs/utils/contants'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'antd/es/form/Form'

function EditJobForm ({ dataJob }) {
  const { title, jobMode, jobType, jobTime, seniority, openings, description } = dataJob
  const router = useRouter()
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [dataForm, setDataForm] = useState({})
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [form] = useForm()

  const handleSubmitForm = async () => {
    try {
      setConfirmLoading(true)
      const resAPI = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${dataJob.jobId}`, dataForm)
      const dataResponse = await resAPI.data
      setConfirmLoading(false)
      setOpenConfirmModal(false)

      if (dataResponse.ok) {
        message.success('Anuncio de empleo actualiozado exitosamente.')
        router.push(`/panel/employer/jobs/${dataJob.jobId}`)
        return
      }
      message.error('No pudimos actualizar el anuncio de empleo.')
    } catch (error) {
      setConfirmLoading(false)
      setOpenConfirmModal(false)
      throw new Error(error.message)
    }
  }

  useEffect(() => {
    setDataForm({ title, jobMode, jobType, jobTime, seniority, openings, description })
    form.setFieldsValue({
      title,
      jobMode,
      jobType,
      jobTime,
      seniority,
      openings,
      description
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form])

  return (
    <Form
      form={form}
      layout='vertical'
      requiredMark
      scrollToFirstError
      onValuesChange={(_changedValues, allValues) => { setDataForm(allValues) }}
      onFinish={() => { setOpenConfirmModal(true) }}
    >
      <Form.Item rules={[RULES_INPUT_ANT.required]} label='Título' name='title'>
        <Input size='large' placeholder='Escriba el título del empleo' />
      </Form.Item>
      <Form.Item rules={[RULES_INPUT_ANT.required]} name='jobMode' label='Modalidad'>
        <Select
          size='large'
          className='w-full'
          showSearch
          placeholder='Modalidad de trabajo'
          optionFilterProp='children'
          filterOption={filterOption}
          options={JOB_OPTIONS.modes}
        />
      </Form.Item>
      <Form.Item rules={[RULES_INPUT_ANT.required]} name='jobType' label='Tipo'>
        <Select
          size='large'
          className='w-full'
          showSearch
          placeholder='Tipo de trabajo'
          optionFilterProp='children'
          filterOption={filterOption}
          options={JOB_OPTIONS.types}
        />
      </Form.Item>
      <Form.Item rules={[RULES_INPUT_ANT.required]} name='jobTime' label='Tiempo o turno'>
        <Select
          size='large'
          className='w-full'
          showSearch
          placeholder='Tiempo o Turno de trabajo'
          optionFilterProp='children'
          filterOption={filterOption}
          options={JOB_OPTIONS.time}
        />
      </Form.Item>
      <Form.Item rules={[RULES_INPUT_ANT.required]} name='seniority' label='Seniority'>
        <Select
          size='large'
          className='w-full'
          showSearch
          placeholder='Nivel de experiencia'
          optionFilterProp='children'
          filterOption={filterOption}
          options={JOB_OPTIONS.seniority}
        />
      </Form.Item>
      <Form.Item rules={[RULES_INPUT_ANT.required, RULES_INPUT_ANT.number]} label='Vacantes' name='openings'>
        <InputNumber className='!w-full' size='large' min={1} max={10} placeholder='Vacantes disponibles' />
      </Form.Item>
      <Form.Item rules={[RULES_INPUT_ANT.required]} label='Descripción' name='description'>
        <Input.TextArea size='large' placeholder='Describa el puesto' autoSize={{ minRows: 4, maxRows: 7 }} />
      </Form.Item>
      <Form.Item label=' '>
        <Button type='primary' htmlType='submit' className='!text-white !bg-pink-600' size='large'>Actualizar anuncio</Button>
      </Form.Item>
      <Modal
        title='Confirmación'
        open={openConfirmModal}
        onOk={handleSubmitForm}
        confirmLoading={confirmLoading}
        onCancel={() => { setOpenConfirmModal(false) }}
      >
        <p>¿Está seguro de modificar este anuncio de empleo?</p>
      </Modal>
    </Form>
  )
}
export default EditJobForm
