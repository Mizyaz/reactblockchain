import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import Link from 'next/link'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata = {
  title: 'TokenPlay - Own a Piece of Sports History',
  description: 'Collect and trade unique NFTs of your favorite athletes.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            {/* Changed from <h1> to <div> to maintain a single <h1> per page */}
            <div className="text-3xl font-bold text-blue-600 font-montserrat">TokenPlay</div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800 font-inter">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="text-blue-600 hover:text-blue-800 font-inter">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-blue-600 hover:text-blue-800 font-inter">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-inter">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {children}

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-4 font-montserrat">TokenPlay</h3>
                <p className="text-sm font-inter">Empowering fans to own a piece of sports history through blockchain technology.</p>
              </div>
              <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <h4 className="text-lg font-semibold mb-4 font-montserrat">Quick Links</h4>
                <ul className="text-sm font-inter">
                  <li className="mb-2">
                    <Link href="/" className="hover:text-blue-300">
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/marketplace" className="hover:text-blue-300">
                      Marketplace
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/about" className="hover:text-blue-300">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/contact" className="hover:text-blue-300">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <h4 className="text-lg font-semibold mb-4 font-montserrat">Legal</h4>
                <ul className="text-sm font-inter">
                  <li className="mb-2">
                    <Link href="/terms" className="hover:text-blue-300">
                      Terms of Service
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/privacy" className="hover:text-blue-300">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/cookies" className="hover:text-blue-300">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4">
                <h4 className="text-lg font-semibold mb-4 font-montserrat">Connect With Us</h4>
                <div className="flex space-x-4">
                  {/* Add social media icons here */}
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-sm font-inter">
              <p>&copy; 2023 TokenPlay. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}