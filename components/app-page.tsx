'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800 font-montserrat">Own a Piece of Sports History</h2>
            <p className="text-xl mb-6 text-gray-600 font-inter">Collect and trade unique NFTs of your favorite athletes.</p>
            <Button size="lg" asChild>
              <Link href="/marketplace">Explore NFTs</Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/placeholder.svg?height=400&width=400" 
              alt="Featured Athlete" 
              width={400} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800 font-montserrat">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Tokenize', 'Collect', 'Trade'].map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600 font-montserrat">{step}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800 font-montserrat">Featured Athletes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="overflow-hidden">
              <Image 
                src={`/placeholder.svg?height=300&width=300`} 
                alt={`Athlete ${item}`} 
                width={300} 
                height={300} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 font-montserrat">Athlete Name</h3>
                <p className="text-sm text-gray-600 mb-2 font-inter">Sport • Team</p>
                <p className="text-lg font-bold text-blue-600 font-inter">0.5 ETH</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" asChild>
                  <Link href={`/marketplace/${item}`}>View NFT</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 font-montserrat">Stay Updated</h2>
        <p className="mb-6 font-inter">Be the first to know about new athlete NFTs and exclusive drops.</p>
        <div className="flex max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email" className="flex-grow mr-2 text-gray-800" />
          <Button variant="secondary">Subscribe</Button>
        </div>
      </section>
    </main>
  )
}