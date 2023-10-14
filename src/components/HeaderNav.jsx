'use client'
import { useSession } from 'next-auth/react'
import HeaderNavAuth from './HeaderNavAuth'
import HeaderNavNoAuth from './HeaderNavNoAuth'

const HeaderNav = () => {
  const { data: session/* , status */ } = useSession()
  // if (status === 'loading') {
  //   return <p>Loading...</p>
  // }

  return session
    ? <HeaderNavAuth />
    : <HeaderNavNoAuth />
}
export default HeaderNav
