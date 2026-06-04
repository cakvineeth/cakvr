import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Business Valuation Services | K Vineeth Reddy & Co LLP",
  description: "Professional business valuation services for mergers, acquisitions, and financial reporting",
}

export default function BusinessValuationServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-ca-darkBlue to-ca-purple py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Business Valuation Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Business Valuation Services</h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive valuation services tailored to your business needs and growth stage.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">Comprehensive Valuation Services</h2>
            <p className="text-gray-700 mb-6">
              Our valuation services cover all your needs under one roof. Our team understands the business thoroughly,
              analyses the historical financial statements in depth, researches the industry and regulatory trends and
              analyses its growth potential.
            </p>
            <p className="text-gray-700">
              Using our experience, we are able to develop valuation metrics and indices that are tailored specifically
              to the stage of development of a business. As a result, it provides insight into how to derive "fair
              value" using relevant valuation methodologies.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Business Valuation Services"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Our Valuation Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black text-black text-black text-black text-black">
                Thorough Analysis
              </h3>
              <p className="text-gray-600">
                We conduct a thorough analysis of your business, including financial statements, industry trends, and
                growth potential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Tailored Methodologies</h3>
              <p className="text-gray-600">
                We use valuation methodologies that are specifically tailored to your business's stage of development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Comprehensive Reporting</h3>
              <p className="text-gray-600">
                Our deliverables include detailed reports that provide clear insights into your business's fair value.
              </p>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div>
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">
            Applications of Our Valuation Services
          </h2>
          <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Among other purposes, our deliverables may be used in internal management reviews, mergers & acquisitions,
            financial reporting, regulatory purposes, dispute settlement, and other relevant purposes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-black">Mergers & Acquisitions</h3>
              <p className="text-gray-600">
                Accurate valuations for businesses involved in mergers, acquisitions, or divestitures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-black">Financial Reporting</h3>
              <p className="text-gray-600">
                Valuations for financial reporting purposes, including purchase price allocations and impairment
                testing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-black">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Valuations to meet regulatory requirements and ensure compliance with applicable laws.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-black">Dispute Resolution</h3>
              <p className="text-gray-600">
                Expert valuation services for dispute resolution, litigation support, and settlement negotiations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ca-darkBlue/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">Get a Professional Valuation</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Whether you're planning for a merger, acquisition, financial reporting, or dispute resolution, our expert
            valuation services provide the insights you need to make informed decisions.
          </p>
          <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-6 py-6 rounded-md" asChild>
            <Link href="/contact">
              Request a Valuation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
