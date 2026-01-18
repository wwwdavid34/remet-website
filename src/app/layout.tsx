import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Remet - Remember Every Face',
  description: 'Remet helps people with face blindness (prosopagnosia) recognize and remember the people in their lives through intelligent face matching and spaced repetition training.',
  keywords: 'face blindness, prosopagnosia, face recognition, memory training, assistive technology, iOS app',
  openGraph: {
    title: 'Remet - Remember Every Face',
    description: 'The assistive app designed for people with prosopagnosia. Build lasting memories of the people who matter most.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
