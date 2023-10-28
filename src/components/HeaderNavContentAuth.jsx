'use client'
// import { Button, Form, Input, Modal, Space } from 'antd'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
// import { useRouter, useSearchParams } from 'next/navigation'
import LogoHeader from './LogoHeader'
// import updateURLWithParams from '@/libs/utils/updateURLWithParams'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Tooltip } from 'antd'

function HeaderNavContentAuth () {
  // const router = useRouter()
  // const searchParams = useSearchParams()
  const [showNavbar, setShowNavbar] = useState(false)

  // const handleSubmitForm = (data) => {
  //   const { keyword } = data
  //   router.push(`http://localhost:3000/panel/jobs?${updateURLWithParams(searchParams, {
  //     q: keyword
  //   })}`)
  // }

  const handleToggleBar = () => {
    setShowNavbar(prev => !prev)
  }

  return (
    <>
      <LogoHeader />
      {/* <Form onFinish={handleSubmitForm} className='w-[min(100%,400px)]'>
        <Form.Item name='keyword' rootClassName='!mb-0'>
          <Input.Search className='w-full' placeholder='Buscar empleos...' />
        </Form.Item>
      </Form> */}
      <nav>
        <ul className='hidden sm:flex items-center gap-5'>
          <li><Link className='text-gray-500 hover:text-blue-600 font-normal hover:font-medium transition ease-in-out delay-150' href='/'>Home</Link></li>
          <li><Link className='text-gray-500 hover:text-blue-600 font-normal hover:font-medium transition ease-in-out delay-150' href='/panel/jobs'>Trabajos</Link></li>
          <li><Link className='text-gray-500 hover:text-blue-600 font-normal hover:font-medium transition ease-in-out delay-150' href='/panel/employers'>Empleadores</Link></li>
          <li><Link className='text-gray-500 hover:text-blue-600 font-normal hover:font-medium transition ease-in-out delay-150' href='/panel/seekers'>Seekers</Link></li>
          {/* <li>
            <Button
              type='primary' danger
              onClick={() => {
                signOut()
              }}
            >Cerrar sesión
            </Button>
          </li> */}
        </ul>
        <ul className={`resposive absolute w-full ${showNavbar ? 'max-h-[30em] py-10' : 'max-h-0'} left-0 top-[80px] bg-white flex sm:hidden flex-col items-center gap-5 overflow-hidden shadow-md duration-500 ease-in-out transition-all`}>
          <li><Link className='text-gray-500 hover:text-blue-600 font-normal hover:font-medium transition ease-in-out delay-150' href='/'>Home</Link></li>
          <li><Link className='text-gray-500 hover:text-blue-600 font-normal hover:font-medium transition ease-in-out delay-150' href='/panel/jobs'>Trabajos</Link></li>
          <li><Link className='text-gray-500 hover:text-blue-600 font-normal hover:font-medium transition ease-in-out delay-150' href='/panel/employers'>Empleadores</Link></li>
          <li><Link className='text-gray-500 hover:text-blue-600 font-normal hover:font-medium transition ease-in-out delay-150' href='/panel/seekers'>Seekers</Link></li>
          <li>
            <button
              className='text-pink-600'
              onClick={() => {
                signOut()
              }}
            ><FontAwesomeIcon className='text-lg' icon={faArrowRightFromBracket} /> Cerrar sesión
            </button>
          </li>
        </ul>
      </nav>
      <button
        className='block sm:hidden text-xl text-gray-400 hover:text-gray-500 ml-auto'
        onClick={handleToggleBar}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <Tooltip
        title='Cerrar sesión'
        className='hidden sm:block !ml-auto'
        placement='left'
      >
        <button
          className='text-lg text-gray-300 hover:text-pink-600'
          onClick={() => {
            signOut()
          }}
        ><FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
      </Tooltip>
    </>

  )
}
export default HeaderNavContentAuth
