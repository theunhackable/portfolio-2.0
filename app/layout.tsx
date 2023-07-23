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
    <html lang="en">
      <body className='bg-light-e dark:bg-dark-2 font-inter scroll-smooth'>
          <Provider>
            {children}
          </Provider>
        
      </body>
        
    </html>
  )
}
