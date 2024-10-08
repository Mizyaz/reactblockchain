import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import Image from "next/image"

export default function About() {
  return (
    <main className="container mx-auto px-4  py-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-800 font-montserrat">About SportsNFT</h1>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <Image 
            src="/placeholder.svg?height=400&width=600" 
            alt="About SportsNFT" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 font-montserrat">Our Mission</h2>
          <p className="mb-4 font-inter">At SportsNFT, we're passionate about bringing fans closer to their favorite athletes through the power of blockchain technology. Our platform allows sports enthusiasts to own, collect, and trade unique digital assets representing memorable moments in sports history.</p>
          <p className="font-inter">We believe in the future of digital ownership and aim to create a vibrant marketplace where fans, athletes, and teams can connect in new and exciting ways.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-blue-800 font-montserrat">Why Choose SportsNFT?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {['Authenticity', 'Community', 'Innovation'].map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-600 font-montserrat">{feature}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-6 text-blue-800 font-montserrat">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {['CEO', 'CTO', 'Head of Marketing', 'Lead Designer'].map((role, index) => (
          <Card key={index}>
            <CardContent className="p-4 text-center">
              <Image 
                src={`/placeholder.svg?height=150&width=150`} 
                alt={`Team Member ${index + 1}`} 
                width={150} 
                height={150} 
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-1 font-montserrat">John Doe</h3>
              <p className="text-sm text-gray-600 font-inter">{role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}