import { HeaderNav } from '@/components'

function PanelLayout ({ children }) {
  return (
    <>
      <HeaderNav hasSession />
      <div className='container-block py-10'>
        {
          children
        }
      </div>
    </>
  )
}
export default PanelLayout
