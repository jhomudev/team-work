import { RegisterContext } from '@/context/RegisterContext'
import { useContext } from 'react'

const useRegisterData = () => {
  const {
    registerData,
    setRegisterData
  } = useContext(RegisterContext)

  const updateRegisterData = (dataToAdd) => {
    setRegisterData(prev => {
      return {
        ...prev,
        ...dataToAdd
      }
    })
  }

  return {
    registerData,
    updateRegisterData
  }
}
export default useRegisterData
