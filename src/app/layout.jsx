import StyledComponentsRegistry from '@/libs/AntRegistry'
import './globals.css'
import { Inter } from 'next/font/google'
import HeaderNav from '@/components/HeaderNav'
import HeaderNavApp from '@/components/HeaderNavApp'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TeamWork',
  description: 'PLataforma de trabajo'
}

export default function RootLayout ({ children }) {
  const isSession = false
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='w-full min-h-screen bg-gray-100'>
          {
            isSession ? <HeaderNavApp /> : <HeaderNav />
          }
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
      </body>
    </html>
  )
}
