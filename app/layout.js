// app/layout.js
import { Instrument_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/src/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['600','700'],          // Only SemiBold to save bundle size
  variable: '--font-title',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],   // Regular and Medium
  variable: '--font-body',
  display: 'swap',
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Nahuel Bello',
  description: 'My CV as a Software Developer',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${instrument.variable}
        ${jakarta.variable}
        ${geistSans.variable}
        ${geistMono.variable}
      `}
    >
      {/* Required by Next.js App Router */}
      <head />
      <body className="bg-gray-100 text-black">
        {children}
        <Analytics />
      </body>
    </html>
  )
}