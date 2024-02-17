import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { userTypes } from '@/static/enums'

async function PanelPage () {
  const session = await getServerSession(authOptions)
  if (session.user.type === userTypes.employer) {
    redirect('/panel/employer')
  }

  redirect('/panel/jobs')
}
export default PanelPage
