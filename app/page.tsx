'use client'

import { Button } from "./components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Input } from "./components/ui/input"
import Image from "next/image"
import Link from "next/link"
import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css'; // Cüzdan modal için gerekli stil
import MintNFT from "../MintNFT";

export function Page() {
  // Solana ağı için connection ayarı (devnet, mainnet-beta, testnet)
  const network = clusterApiUrl('devnet');

  // Kullanılacak cüzdan adaptörleri
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">TokenPlay</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-blue-600 hover:text-blue-800">Home</Link></li>
              <li><Link href="#" className="text-blue-600 hover:text-blue-800">Marketplace</Link></li>
              <li><Link href="#" className="text-blue-600 hover:text-blue-800">About</Link></li>
              <li><Link href="#" className="text-blue-600 hover:text-blue-800">Contact</Link></li>
              <li><ConnectionProvider endpoint={network}>
                <WalletProvider wallets={wallets} autoConnect>
                  <WalletModalProvider>
                      <WalletMultiButton />
                  </WalletModalProvider>
                </WalletProvider>
              </ConnectionProvider>
              </li>
              <li>
                <MintNFT/>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">Own a Piece of Sports History</h2>
              <p className="text-xl mb-6 text-gray-600">Collect and trade unique NFTs of your favorite athletes.</p>
              <Button size="lg">Explore NFTs</Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/assets/featured_athlete_image.png?height=400&width=400"
                alt="Featured Athlete"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Tokenize', 'Collect', 'Trade'].map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-600">{step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Featured Athletes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card key={item} className="overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Athlete ${item}`}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Athlete Name</h3>
                  <p className="text-sm text-gray-600 mb-2">Sport • Team</p>
                  <p className="text-lg font-bold text-blue-600">0.5 ETH</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">Buy Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">Be the first to know about new athlete NFTs and exclusive drops.</p>
          <div className="flex max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-grow mr-2 text-gray-800" />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">SportsNFT</h3>
              <p className="text-sm">Empowering fans to own a piece of sports history through blockchain technology.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="text-sm">
                <li className="mb-2"><Link href="#" className="hover:text-blue-300">Home</Link></li>
                <li className="mb-2"><Link href="#" className="hover:text-blue-300">Marketplace</Link></li>
                <li className="mb-2"><Link href="#" className="hover:text-blue-300">About Us</Link></li>
                <li className="mb-2"><Link href="#" className="hover:text-blue-300">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="text-sm">
                <li className="mb-2"><Link href="#" className="hover:text-blue-300">Terms of Service</Link></li>
                <li className="mb-2"><Link href="#" className="hover:text-blue-300">Privacy Policy</Link></li>
                <li className="mb-2"><Link href="#" className="hover:text-blue-300">Cookie Policy</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2023 SportsNFT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Page;