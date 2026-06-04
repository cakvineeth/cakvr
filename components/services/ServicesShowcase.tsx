import type React from "react"
import { Button } from "@/components/ui/button"

interface Service {
  title: string
  description: string
  image: string
}

interface ServicesShowcaseProps {
  services: Service[]
}

const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <img
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-700 mb-4">{service.description}</p>
          <div className="flex items-center">
            <Button className="bg-ca-purple hover:bg-ca-lightPurple text-white">Learn More</Button>
            <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white ml-3" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServicesShowcase
