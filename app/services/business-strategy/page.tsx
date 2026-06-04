import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, Users, Briefcase } from "lucide-react"
import Logo from "@/components/Logo"

export const metadata = {
  title: "Business Strategy Services | K Vineeth Reddy & Co LLP",
  description:
    "Actionable business strategies to achieve long-term objectives and create sustainable competitive advantage for your organization.",
}

export default function BusinessStrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ca-darkBlue to-ca-purple py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-6">
                <Logo variant="light" size="medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Strategy Services</h1>
              <p className="text-xl text-white/90 mb-8">
                Actionable strategies to drive growth, create competitive advantage, and achieve your long-term business
                objectives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Business Strategy Services"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ca-darkBlue mb-4">Strategic Business Planning</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our business strategy services help organizations develop clear, actionable plans to achieve their vision
              and create sustainable competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ca-lightGray p-6 rounded-lg">
              <TrendingUp className="h-12 w-12 text-ca-purple mb-4" />
              <h3 className="text-xl font-bold text-ca-darkBlue mb-2">Growth Strategy</h3>
              <p className="text-gray-600 mb-4">
                Develop comprehensive strategies to drive sustainable business growth and market expansion.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Market opportunity assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Competitive positioning strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">New market entry planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-ca-lightGray p-6 rounded-lg">
              <Briefcase className="h-12 w-12 text-ca-purple mb-4" />
              <h3 className="text-xl font-bold text-ca-darkBlue mb-2">Business Model Innovation</h3>
              <p className="text-gray-600 mb-4">
                Reimagine your business model to create new value propositions and revenue streams.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Business model assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Value proposition development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Revenue model optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-ca-lightGray p-6 rounded-lg">
              <Users className="h-12 w-12 text-ca-purple mb-4" />
              <h3 className="text-xl font-bold text-ca-darkBlue mb-2">Organizational Strategy</h3>
              <p className="text-gray-600 mb-4">
                Align your organizational structure, culture, and capabilities with your strategic objectives.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Organizational design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Capability assessment and development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Culture transformation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ca-purple to-ca-darkBlue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business Strategy?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our business strategy services can help your organization achieve its goals
            and create sustainable competitive advantage.
          </p>
          <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-8 py-6 text-lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
