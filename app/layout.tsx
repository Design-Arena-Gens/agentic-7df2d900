import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ved Vyas Prophecy | वेद व्यास की भविष्यवाणी',
  description: 'महर्षि वेद व्यास की भविष्यवाणी - एक समय आएगा जब मनुष्य दानवों से भी अधिक पापी होंगे',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
