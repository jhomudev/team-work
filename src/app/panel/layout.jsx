import HeaderNav from '@/components/HeaderNav'

function PanelLayout ({ children }) {
  return (
    <div>
      <HeaderNav hasSession />
      <div className='container-block py-10'>
        {
          children
        }
      </div>
    </div>
  )
}
export default PanelLayout
