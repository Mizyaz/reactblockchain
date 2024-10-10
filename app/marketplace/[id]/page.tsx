import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import Image from "next/image"
import nftImage from '../../assets/nft_image.png';


export default function NFTPage({ params }: { params: { id: string } }) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image 
            src={nftImage} 
            alt={`Athlete ${params.id}`} 
            width={600} 
            height={600} 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-blue-800 font-montserrat">Athlete Name #{params.id}</h1>
          <p className="text-xl mb-4 text-gray-600 font-inter">Sport • Team</p>
          <p className="text-3xl font-bold mb-6 text-blue-600 font-inter">0.5 ETH</p>
          <Button size="lg" className="w-full mb-6">Buy Now</Button>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-2xl font-bold mb-4 font-montserrat">NFT Details</h2>
              <p className="mb-2 font-inter"><strong>Token ID:</strong> {params.id}</p>
              <p className="mb-2 font-inter"><strong>Contract Address:</strong> 0x1234...5678</p>
              <p className="mb-2 font-inter"><strong>Blockchain:</strong> Ethereum</p>
              <p className="mb-6 font-inter"><strong>Created:</strong> June 1, 2023</p>
              <h3 className="text-xl font-bold mb-2 font-montserrat">Description</h3>
              <p className="font-inter">This unique NFT represents a digital collectible of [Athlete Name]. Own a piece of sports history and show your support for your favorite athlete.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}