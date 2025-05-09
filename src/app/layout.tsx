import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import LanguageSelector from '@/components/ui/language-selector'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your MVP App',
  description: 'Accessible, multilingual, and notification-rich MVP application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" aria-label="App Root" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col`}
        style={{ minHeight: '100vh' }}
      >
        <header
          className="w-full shadow-md z-50 bg-gradient-to-r from-blue-500 to-purple-600"
          role="banner"
        >
          <nav
            className="container mx-auto flex flex-row items-center justify-between py-4 px-6"
            aria-label="Main Navigation"
          >
            <Link
              href="/"
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              aria-label="Homepage"
            >
              <Image
                src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&w=64&h=64"
                alt="App Logo"
                width={40}
                height={40}
                className="rounded-full shadow"
                priority
              />
              <span className="font-bold text-lg text-white tracking-wide">
                MVP App
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <LanguageSelector />
              {/* Append AuthButton and other nav items here */}
            </div>
          </nav>
        </header>
        <main
          id="main-content"
          className="container mx-auto flex-1 py-8 px-4 sm:px-6 focus:outline-none"
          tabIndex={-1}
          aria-labelledby="main-content"
        >
          {children}
        </main>
        <footer
          className="w-full bg-gray-50 border-t text-gray-500 text-center py-4 text-sm"
          role="contentinfo"
        >
          <span>
            &copy; {new Date().getFullYear()} MVP App. All rights reserved.
          </span>
        </footer>
      </body>
    </html>
  )
}
