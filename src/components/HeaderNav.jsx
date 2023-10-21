import HeaderNavContentAuth from './HeaderNavContentAuth'
import HeaderNavContentNoAuth from './HeaderNavContentNoAuth'

const HeaderNav = ({ hasSession = false }) => {
  return (
    <div className='w-full h-[80px] bg-white shadow-sm grid place-items-center'>
      <header className='container-block flex items-center gap-5'>
        {
          hasSession
            ? <HeaderNavContentAuth />
            : <HeaderNavContentNoAuth />
        }
      </header>
    </div>
  )
}
export default HeaderNav
