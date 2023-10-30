import { HeaderNav } from '@/components'
import RegisterProvider from '@/context/RegisterContext'

function RegisterLayout ({ children }) {
  return (
    <RegisterProvider>
      <HeaderNav />
      <div className='container-block min-h-[calc(100vh_-_80px)] py-10 flex gap-5'>
        {children}
      </div>
    </RegisterProvider>
  )
}
export default RegisterLayout
