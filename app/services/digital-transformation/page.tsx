import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Digital Transformation Services | K Vineeth Reddy & Co LLP",
  description: "Navigate your digital journey with strategies that leverage technology for competitive advantage.",
}

export default function DigitalTransformationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Digital Transformation Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Transformation</h1>
            <p className="text-xl md:text-2xl mb-8">
              Navigate your digital journey with strategies that leverage technology for competitive advantage.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-purple-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Business for the Digital Age</h2>

            <div className="prose prose-lg max-w-none">
              <p>
                In today's rapidly evolving business landscape, digital transformation is no longer optional—it's
                essential for survival and growth. Our digital transformation services help organizations leverage
                technology to improve operations, enhance customer experiences, and create new business models.
              </p>

              <p>
                We take a holistic approach to digital transformation, ensuring that technology investments align with
                your business objectives and deliver measurable value.
              </p>

              <h3>Our Digital Transformation Services Include:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h4 className="font-semibold text-lg mb-2">Digital Strategy Development</h4>
                  <p className="text-gray-600">Create a comprehensive roadmap for your digital journey</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                  <h4 className="font-semibold text-lg mb-2">Technology Assessment</h4>
                  <p className="text-gray-600">Evaluate and select the right technologies for your needs</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
                  <h4 className="font-semibold text-lg mb-2">Process Automation</h4>
                  <p className="text-gray-600">Streamline operations with intelligent automation solutions</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h4 className="font-semibold text-lg mb-2">Data Analytics</h4>
                  <p className="text-gray-600">Unlock insights from your data to drive better decisions</p>
                </div>
              </div>

              <h3>Why Choose Our Digital Transformation Services?</h3>

              <ul>
                <li>Experienced consultants with expertise in both business and technology</li>
                <li>Practical, results-oriented approach focused on business outcomes</li>
                <li>Vendor-agnostic recommendations based on your specific needs</li>
                <li>Emphasis on people and process, not just technology</li>
                <li>Ongoing support throughout your digital journey</li>
              </ul>

              <p>
                Partner with us to navigate the complexities of digital transformation and position your organization
                for success in the digital age.
              </p>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-8 shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Approach</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Assess</h4>
                    <p className="text-gray-600">Evaluate your current digital maturity and capabilities</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Plan</h4>
                    <p className="text-gray-600">Develop a strategic roadmap aligned with business goals</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Implement</h4>
                    <p className="text-gray-600">Execute initiatives with agile methodology</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Optimize</h4>
                    <p className="text-gray-600">Continuously improve based on outcomes and feedback</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-blue-700 rounded-xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Ready to Transform?</h3>
              <p className="mb-6">
                Schedule a consultation with our digital transformation experts to discuss your needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-purple-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 w-full relative">
                <Image src="/placeholder.svg?height=400&width=600" alt="Case Study 1" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing Company</h3>
                <p className="text-gray-600 mb-4">
                  Implemented IoT solutions that increased production efficiency by 35%
                </p>
                <Link href="#" className="text-ca-purple hover:text-ca-orange font-medium inline-flex items-center">
                  Read Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 w-full relative">
                <Image src="/placeholder.svg?height=400&width=600" alt="Case Study 2" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Retail Chain</h3>
                <p className="text-gray-600 mb-4">
                  Digital customer experience transformation resulting in 28% sales growth
                </p>
                <Link href="#" className="text-ca-purple hover:text-ca-orange font-medium inline-flex items-center">
                  Read Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 w-full relative">
                <Image src="/placeholder.svg?height=400&width=600" alt="Case Study 3" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Services</h3>
                <p className="text-gray-600 mb-4">
                  Cloud migration and process automation reducing operational costs by 40%
                </p>
                <Link href="#" className="text-ca-purple hover:text-ca-orange font-medium inline-flex items-center">
                  Read Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Digital Transformation Journey?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Partner with us to navigate the complexities of digital transformation and position your organization for
            success in the digital age.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-purple-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
