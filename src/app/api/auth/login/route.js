import { authenticateCredentials } from '@/libs/auth'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

export const POST = async (req) => {
  const { email, password } = await req.json()
  const validate = await authenticateCredentials({ email, password })

  if (validate.success) {
    const data = validate.data
    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      ...data
    }, process.env.SECRET_KEY)

    const response = NextResponse.json({
      auth: {
        success: true,
        message: 'Auth credentials success',
        data,
        access: {
          route: '/panel/user'
        }
      }
    })
    response.cookies.set({
      httpOnly: true,
      name: 'tokenApp__teamWork',
      value: token,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: '/'
    })
    return response
  }
  return NextResponse.json({
    message: validate.message
  }, {
    status: 400
  })
}
