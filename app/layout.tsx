import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'https://revos-ai.pl'),
  title: 'REVOS AI - Agencja Automatyzacji i AI',
  description: 'Skalujemy firmy B2B przez automatyzację procesów i AI. Audyt operacyjny, wdrożenia RevOps, Agenci AI. Bezpłatna konsultacja strategiczna.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'REVOS AI - Agencja Automatyzacji i AI',
    description: 'Skalujemy firmy B2B przez automatyzację procesów i AI.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" defer></script>
      </head>
      <body className={`${inter.variable} font-sans bg-[#0a0f1a] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
