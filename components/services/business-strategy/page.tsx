import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Business Strategy - Caerus",
  description:
    "Unlock your business potential with our expert business strategy services. We help you define your goals, identify opportunities, and create a roadmap for success.",
}

const BusinessStrategyPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Business Strategy</h1>
      <p className="text-lg mb-8">
        We help businesses of all sizes develop and implement effective strategies to achieve their goals. Our team of
        experienced consultants will work with you to understand your business, identify opportunities, and create a
        roadmap for success.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
        <ul className="list-disc list-inside">
          <li>Market Analysis</li>
          <li>Competitive Analysis</li>
          <li>Strategic Planning</li>
          <li>Financial Modeling</li>
          <li>Implementation Support</li>
        </ul>
      </div>

      <div className="text-center">
        <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-8 py-6 text-lg" asChild>
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </div>
    </div>
  )
}

export default BusinessStrategyPage
