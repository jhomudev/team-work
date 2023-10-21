import { authenticateCredentials } from '@/libs/auth'
// import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

export const POST = async (req) => {
  const { email, password } = await req.json()
  const auth = await authenticateCredentials({ email, password })
  const { data, message, success } = auth

  if (auth.success) {
    return NextResponse.json({
      success,
      message,
      data
    })
  }
  return NextResponse.json({
    success,
    message
  }/* , {
    status: 400
  } */)
}
