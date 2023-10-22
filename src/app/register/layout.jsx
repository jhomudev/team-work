import RegisterProvider from '@/context/RegisterContext'

const RegisterLayout = ({ children }) => {
  return (
    <RegisterProvider>
      {children}
    </RegisterProvider>
  )
}
export default RegisterLayout
