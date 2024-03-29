import { Bebas_Neue, Inter, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable:"--font-inter", })
const montserrat = Montserrat({ subsets: ['latin'], variable:"--font-montserrat" })
const bebas_neue = localFont({
  src:"/bebas_neue_font/BebasNeue-Regular.ttf",
  display:"swap"
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${bebas_neue.className}`}>{children}</body>
      {/* <body className={montserrat.className}>{children}</body> */}
      {/* <body className={bebas_neue.className}>{children}</body> */}
    </html>
  )
}
