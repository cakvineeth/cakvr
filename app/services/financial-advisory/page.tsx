import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, BarChart3, LineChart, Shield } from "lucide-react"
import Logo from "@/components/Logo"

export const metadata = {
  title: "Financial Advisory Services | K Vineeth Reddy & Co LLP",
  description:
    "Comprehensive financial advisory services to optimize performance, manage risks, and ensure long-term stability for your business.",
}

export default function FinancialAdvisoryPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Advisory Services</h1>
              <p className="text-xl text-white/90 mb-8">
                Expert financial guidance to optimize performance, manage risks, and ensure long-term stability for your
                business.
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
                  src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Financial Advisory Services"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ca-darkBlue mb-4">Comprehensive Financial Advisory</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our financial advisory services are designed to help businesses make informed financial decisions,
              optimize performance, and achieve long-term stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ca-lightGray p-6 rounded-lg">
              <BarChart3 className="h-12 w-12 text-ca-purple mb-4" />
              <h3 className="text-xl font-bold text-ca-darkBlue mb-2">Financial Planning</h3>
              <p className="text-gray-600 mb-4">
                Develop comprehensive financial plans aligned with your business goals and objectives.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Cash flow forecasting and management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Budget development and monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Financial goal setting and tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-ca-lightGray p-6 rounded-lg">
              <LineChart className="h-12 w-12 text-ca-purple mb-4" />
              <h3 className="text-xl font-bold text-ca-darkBlue mb-2">Financial Analysis</h3>
              <p className="text-gray-600 mb-4">
                In-depth analysis of financial data to drive strategic decision-making and performance improvement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Profitability and margin analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Financial ratio analysis and benchmarking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Trend analysis and performance tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-ca-lightGray p-6 rounded-lg">
              <Shield className="h-12 w-12 text-ca-purple mb-4" />
              <h3 className="text-xl font-bold text-ca-darkBlue mb-2">Risk Management</h3>
              <p className="text-gray-600 mb-4">
                Identify, assess, and mitigate financial risks to protect your business and ensure continuity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Financial risk assessment and monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Risk mitigation strategy development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Business continuity planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ca-purple to-ca-darkBlue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Financial Performance?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our financial advisory services can help your business achieve its financial
            goals.
          </p>
          <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-8 py-6 text-lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
