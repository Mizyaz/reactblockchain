import { Button } from "../components/ui/button"
import { Card, CardContent, CardFooter } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import Image from "next/image"
import Link from "next/link"

export default function Marketplace() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-800 font-montserrat">NFT Marketplace</h1>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <Input placeholder="Search athletes..." className="flex-grow" />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sport" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="football">Football</SelectItem>
            <SelectItem value="basketball">Basketball</SelectItem>
            <SelectItem value="tennis">Tennis</SelectItem>
            <SelectItem value="soccer">Soccer</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low-to-high">Low to High</SelectItem>
            <SelectItem value="high-to-low">High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

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
    </main>
  )
}

