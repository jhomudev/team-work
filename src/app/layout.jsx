import './globals.css'
import StyledComponentsRegistry from '@/context/AntRegistry'
import SessionAuthProvider from '@/context/SessionProvider'
import { ConfigProvider } from 'antd'
// import { Raleway } from 'next/font/google'

// const raleway = Raleway({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '800', '900']
// })

export const metadata = {
  title: 'TeamWork',
  description: 'Plataforma de trabajo'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='w-full min-h-screen bg-gray-100'>
          <StyledComponentsRegistry>
            <ConfigProvider theme={{
              token: {
                // fontFamily: raleway.style.fontFamily
              }
            }}
            >
              <SessionAuthProvider>
                {children}
              </SessionAuthProvider>
            </ConfigProvider>
          </StyledComponentsRegistry>
        </div>
      </body>
    </html>
  )
}
