'use client'
import { createContext, useState } from 'react'

export const RegisterContext = createContext()
const RegisterProvider = ({ children }) => {
  const [registerData, setRegisterData] = useState({})
  return (
    <RegisterContext.Provider value={{
      registerData,
      setRegisterData
    }}
    >
      {children}
    </RegisterContext.Provider>
  )
}
export default RegisterProvider
