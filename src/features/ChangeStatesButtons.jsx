'use client'
import { jobStates } from '@/static/enums'
import { Button, Flex, Modal, message } from 'antd'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const changeStateJob = async (jobId, status) => {
  const resAPI = await axios.put(`http://localhost:3000/api/jobs/${jobId}`, {
    status
  })
  const response = await resAPI.data
  return response
}

function ChangeStatesButtons ({ jobData }) {
  const { jobId, status } = jobData
  const router = useRouter()
  const [statusToPush, setStatusToPush] = useState(status)
  const [openModal, setOpenModal] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const handleChangeState = (status) => {
    setOpenModal(true)
    setStatusToPush(status)
  }

  const handleConfirmModal = async () => {
    setConfirmLoading(true)
    const { ok } = await changeStateJob(jobId, statusToPush)
    setConfirmLoading(false)
    setOpenModal(false)
    if (ok) {
      message.success('Estado actualizado')
      router.refresh()
      return
    }
    message.error('No se pudo actualizar el estado')
  }

  return (
    <>
      <Flex gap={10}>
        <Button disabled={status === jobStates.inReview || status === jobStates.closed} onClick={() => handleChangeState(jobStates.inReview)}>Pasar a evaluación</Button>
        <Button disabled={status === jobStates.closed} onClick={() => handleChangeState(jobStates.closed)} danger>Finalizar anuncio</Button>
      </Flex>
      <Modal
        title='Confirmación'
        open={openModal}
        onOk={handleConfirmModal}
        confirmLoading={confirmLoading}
        onCancel={() => { setOpenModal(false) }}
        okText='Confirmar'
      >
        <p>¿Estas seguro de realizar esta acción?</p>
      </Modal>
    </>
  )
}
export default ChangeStatesButtons
