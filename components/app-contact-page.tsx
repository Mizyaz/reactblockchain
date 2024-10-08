'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-800 font-montserrat">Contact Us</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600 font-montserrat">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-semibold font-inter">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-semibold font-inter">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-semibold font-inter">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={4} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="md:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600 font-montserrat">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 font-inter">
                <p><strong>Address:</strong> 123 Sports Street, Athlete City, AC 12345</p>
                <p><strong>Email:</strong> info@sportsnft.com</p>
                <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                <p><strong>Hours:</strong> Monday - Friday, 9am - 5pm EST</p>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600 font-montserrat">FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 font-inter">
                <div>
                  <h3 className="font-semibold mb-1">How do I purchase an NFT?</h3>
                  <p className="text-sm text-gray-600">To purchase an NFT, you need to connect your wallet and have sufficient funds. Browse our marketplace and click "Buy Now" on the NFT you want.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">What cryptocurrencies do you accept?</h3>
                  <p className="text-sm text-gray-600">We currently accept Ethereum (ETH) for all transactions on our platform.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">How can I sell my NFT?</h3>
                  <p className="text-sm text-gray-600">To sell your NFT, go to your profile, select the NFT you want to sell, set a price, and list it on our marketplace.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}