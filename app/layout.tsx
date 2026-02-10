import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Amal Jyothi College of Engineering',
  description: 'A leading engineering college committed to academic excellence and student development',
  keywords: 'engineering college, education, admissions, placements',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
