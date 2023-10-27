/* eslint-disable react/jsx-indent */
'use client'

import { Button, notification } from 'antd'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const ApplyToJob = async ({ jobId, seekerId }) => {
  const resAPI = await axios.post('http://localhost:3000/api/applications', {
    jobId, seekerId
  })
  const response = await resAPI.data

  return response
}

const cancelJobApplication = async ({ jobId, seekerId }) => {
  const resAPI = await axios.delete('http://localhost:3000/api/applications', {
    data: { jobId, seekerId }
  })
  const response = await resAPI.data

  return response
}

function AppButton ({ jobId, seekerId, alreadyApplied }) {
  const router = useRouter()
  const handleCLickApp = async () => {
    if (alreadyApplied) {
      const responseCancel = await cancelJobApplication({ jobId, seekerId })
      if (responseCancel.ok) {
        notification.success({
          message: 'Aplicación cancelada',
          description: 'Tu aplicación al puesto se ha cancelado con éxito.'
        })
        router.refresh()
        return
      }
      notification.error({
        message: 'Upps...',
        description: 'No pudimos cancelar tu aplicación. Por favor, intentalo de nuevo.'
      })
      return
    }

    const responseApply = await ApplyToJob({ jobId, seekerId })
    if (responseApply.ok) {
      notification.success({
        message: 'Aplicación realizada',
        description: 'Tu aplicación al puesto se ha realizado con éxito.'
      })
      router.refresh()
      return
    }
    notification.error({
      message: 'Aplicación no realizada',
      description: 'No pudimos registrar tu la aplicación. Por favor, intentalo de nuevo.'
    })
  }

  return (
    <>
      {
        alreadyApplied
          ? <Button
              shape='round'
              size='large'
              danger
              onClick={handleCLickApp}
            >
            Cancelar aplicación
            </Button>
          : <Button
              shape='round'
              size='large'
              className='!bg-pink-600 !text-white'
              danger
              onClick={handleCLickApp}
            >
            Aplicar al puesto
            </Button>
      }
    </>
  )
}
export default AppButton
