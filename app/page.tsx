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
import '@solana/wallet-adapter-react-ui/styles.css';

import MintNFT from "../MintNFT";
import lebronImage from './assets/lebron.jpg';
import ronaldoImage from './assets/ronaldo.jpg';
import serenaImage from './assets/serena.jpg';
import bradyImage from './assets/brady.jpg';
import nftImage from './assets/nft_image.png';
import featuredAthleteImage from './assets/featured_athlete_image.png';
import tokenplayImage from './assets/tp1.png';
import { token } from "@project-serum/anchor/dist/cjs/utils"

export function Page() {
  const network = clusterApiUrl('devnet');
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
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
                      src={tokenplayImage}
                      alt="Tokenplay"
                      width={650}
                      height={650}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: 'Tokenize', description: 'Convert real-world sports moments into unique digital assets on the blockchain.' },
                    { title: 'Collect', description: 'Build your collection of rare and valuable sports NFTs from your favorite athletes.' },
                    { title: 'Trade', description: 'Buy, sell, and exchange your NFTs in our secure marketplace.' }
                  ].map((step, index) => (
                    <Card key={index} className="text-center">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-600">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Featured Athletes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: 'LeBron James', sport: 'Basketball', team: 'LA Lakers', price: '2.5 SOL', image: lebronImage },
                    { name: 'Cristiano Ronaldo', sport: 'Soccer', team: 'Al Nassr', price: '3.0 SOL', image: ronaldoImage },
                    { name: 'Serena Williams', sport: 'Tennis', team: 'N/A', price: '1.8 SOL', image: serenaImage },
                    { name: 'Tom Brady', sport: 'Football', team: 'Retired', price: '2.2 SOL', image: bradyImage },
                  ].map((athlete, index) => (
                    <Card key={index} className="overflow-hidden">
                      <Image
                        src={athlete.image}
                        alt={athlete.name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{athlete.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{athlete.sport} • {athlete.team}</p>
                        <p className="text-lg font-bold text-blue-600">{athlete.price}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full">Buy Now</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="bg-blue-300 text-white rounded-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="mb-6">Be the first to know about new athlete NFTs and exclusive drops.</p>
                <div className="flex max-w-md mx-auto">
                  <Input type="email" placeholder="Enter your email" className="flex-grow mr-2 text-gray-800" />
                  <Button variant="secondary">Subscribe</Button>
                </div>
              </section>

              <section className="mt-16 text-center">
                <h2 className="text-3xl font-bold mb-8 text-blue-800">Mint Your Own NFT</h2>
                <WalletMultiButton/>
              </section>
            </main>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default Page;