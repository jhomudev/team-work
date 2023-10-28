import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { userTypes } from '@/static/enums'

async function PanelPage () {
  const session = await getServerSession(authOptions)

  if (session.user.data.type === userTypes.employer) {
    console.log('es employer')
    redirect('/panel/employer')
    return
  }
  console.log('es seeker')

  redirect('/panel/jobs')
}
export default PanelPage
