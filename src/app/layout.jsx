import './globals.css'
import StyledComponentsRegistry from '@/context/AntRegistry'
import { Inter } from 'next/font/google'
import SessionAuthProvider from '@/context/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TeamWork',
  description: 'Plataforma de trabajo'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='w-full min-h-screen bg-gray-100'>
          <StyledComponentsRegistry>
            <SessionAuthProvider>
              {children}
            </SessionAuthProvider>
          </StyledComponentsRegistry>
        </div>
      </body>
    </html>
  )
}
