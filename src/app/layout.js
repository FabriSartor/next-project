import './globals.css'
import { Inter } from 'next/font/google'
import HeaderComponent from './Shader componen/HeaderComponen'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Mercado Libre Argentina',
  description: 'Generated by Fabri'
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <link rel='icon' href='../../public/favicon.ico'></link>
      <body className={inter.className}>
      
        <HeaderComponent />

        <main className='max-w-screen-2xl mx-auto pt-0'>
          {children}
        </main>
      </body>
    </html>
  )
}
