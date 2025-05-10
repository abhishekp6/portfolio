import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abhishek Pandey - Software Engineer',
  description: 'Software Engineer specializing in full-stack development. Experience with React, TypeScript, Node.js, and cloud technologies.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'TypeScript', 'Node.js', 'AWS'],
  authors: [{ name: 'Abhishek Pandey' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhishek-pandey.com',
    siteName: 'Abhishek Pandey Portfolio',
    title: 'Abhishek Pandey - Software Engineer',
    description: 'Software Engineer specializing in full-stack development',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
