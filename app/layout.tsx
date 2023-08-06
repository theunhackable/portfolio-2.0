import './globals.css'
import type { Metadata } from 'next'
import Provider from './Providers'
export const metadata: Metadata = {
  title: 'SRSP',
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body>
          <Provider>
            {children}
          </Provider>
        
      </body>
        
    </html>
  )
}
