import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PropCode - Understand What You Can Build on Your Property',
  description: 'Helping Culpeper, VA homeowners discover their property\'s building potential',
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
