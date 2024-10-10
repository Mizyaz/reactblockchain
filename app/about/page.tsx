import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-800 font-montserrat">About TokenPlay</h1>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 font-montserrat">Our Mission</h2>
          <p className="mb-4 font-inter">At TokenPlay, we're passionate about bringing fans closer to their favorite athletes through the power of blockchain technology. Our platform allows sports enthusiasts to own, collect, and trade unique digital assets representing memorable moments in sports history.</p>
          <p className="font-inter">We believe in the future of digital ownership and aim to create a vibrant marketplace where fans, athletes, and teams can connect in new and exciting ways.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-blue-800 font-montserrat">Why Choose TokenPlay?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {['Authenticity', 'Community', 'Innovation'].map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-600 font-montserrat">{feature}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-inter">TokenPlay is dedicated to providing a secure and engaging platform for sports fans. We prioritize user experience, ensuring that every interaction is seamless and enjoyable.</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-6 text-blue-800 font-montserrat">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {['İslam Güven', 'Barlas Şen', 'Kerem Kaya', 'Nebi Peker'].map((member, index) => (
          <Card key={index}>
            <CardContent className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-1 font-montserrat">{member}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}