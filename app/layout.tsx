import { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abhishek Pandey | Software Engineer',
  description: 'Software Engineer specialising in full-stack development. Currently building gamification at Nykaa. TypeScript, React, Node.js, AWS.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'TypeScript', 'Node.js', 'AWS'],
  authors: [{ name: 'Abhishek Pandey' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.abhishekpandey.tech',
    siteName: 'Abhishek Pandey',
    title: 'Abhishek Pandey | Software Engineer',
    description: 'Software Engineer specialising in full-stack development',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
        {children}
      </body>
    </html>
  )
}
