'use client'

import { useSession } from 'next-auth/react'

function UserInfo () {
  const { data: session } = useSession()
  return (
    <div>
      {
        JSON.stringify(session)
      }
    </div>
  )
}
export default UserInfo
