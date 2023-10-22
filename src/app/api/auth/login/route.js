import { authenticateCredentials } from '@/libs/auth'
// import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

export const POST = async (req) => {
  const { email, password } = await req.json()
  const auth = await authenticateCredentials({ email, password })
  const { data, message, ok } = auth

  if (auth.ok) {
    return NextResponse.json({
      ok,
      message,
      data
    })
  }
  return NextResponse.json({
    ok,
    message
  }/* , {
    status: 400
  } */)
}
