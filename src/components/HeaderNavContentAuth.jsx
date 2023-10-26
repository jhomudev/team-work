'use client'
import { Button, Form, Input } from 'antd'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import LogoHeader from './LogoHeader'
import updateURLWithParams from '@/libs/utils/updateURLWithParams'

function HeaderNavContentAuth () {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const handleSubmitForm = (data) => {
    const { keyword } = data
    router.push(`${pathname}?${updateURLWithParams(searchParams, {
      q: keyword
    })}`)
  }

  return (
    <>
      <LogoHeader />
      <Form onFinish={handleSubmitForm} className='w-[min(100%,400px)]'>
        <Form.Item name='keyword' rootClassName='!mb-0'>
          <Input.Search className='w-full' placeholder='Buscar empleos...' />
        </Form.Item>
      </Form>
      <nav className='ml-auto'>
        <ul className='flex items-center gap-5'>
          <li><Link className='text-gray-500 hover:text-blue-600 font-normal hover:font-medium transition ease-in-out delay-150' href='/'>Home</Link></li>
          <li><Link className='text-gray-500 hover:text-blue-600 font-normal hover:font-medium transition ease-in-out delay-150' href='/panel/jobs'>Trabajos</Link></li>
          <li><Link className='text-gray-500 hover:text-blue-600 font-normal hover:font-medium transition ease-in-out delay-150' href='/panel/employers'>Empleadores</Link></li>
          <li><Link className='text-gray-500 hover:text-blue-600 font-normal hover:font-medium transition ease-in-out delay-150' href='/panel/seekers'>Seekers</Link></li>
          <li>
            <Button
              type='primary' danger
              onClick={() => {
                signOut()
              }}
            >Cerrar sesión
            </Button>
          </li>
        </ul>
      </nav>
    </>

  )
}
export default HeaderNavContentAuth
