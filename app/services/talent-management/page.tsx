import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Users, Award, Target, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Talent Management Services | K Vineeth Reddy & Co LLP",
  description: "Strategies to attract, develop, and retain high-performing talent for organizational success.",
}

export default function TalentManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-teal-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Talent Management Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Talent Management</h1>
            <p className="text-xl md:text-2xl mb-8">
              Strategies to attract, develop, and retain high-performing talent for organizational success.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Talent Management Solutions</h2>

            <div className="prose prose-lg max-w-none">
              <p>
                In today's competitive business environment, your people are your greatest asset. Our talent management
                services help you build and maintain a high-performing workforce that drives organizational success.
              </p>

              <p>
                We take a holistic approach to talent management, addressing the entire employee lifecycle from
                recruitment and onboarding to development, retention, and succession planning.
              </p>

              <h3>Our Talent Management Services Include:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 flex">
                  <Users className="h-10 w-10 text-green-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Talent Acquisition</h4>
                    <p className="text-gray-600">Strategic recruitment to attract top talent aligned with your needs</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500 flex">
                  <Award className="h-10 w-10 text-teal-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Performance Management</h4>
                    <p className="text-gray-600">Systems to evaluate, develop, and reward employee performance</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 flex">
                  <Target className="h-10 w-10 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Learning & Development</h4>
                    <p className="text-gray-600">Programs to enhance skills and prepare employees for future roles</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500 flex">
                  <BarChart className="h-10 w-10 text-indigo-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Succession Planning</h4>
                    <p className="text-gray-600">Strategies to identify and develop future leaders</p>
                  </div>
                </div>
              </div>

              <h3>Why Choose Our Talent Management Services?</h3>

              <ul>
                <li>Experienced HR professionals with deep industry knowledge</li>
                <li>Customized solutions tailored to your organization's unique needs</li>
                <li>Data-driven approach to talent decisions</li>
                <li>Focus on aligning talent strategy with business objectives</li>
                <li>Ongoing support to adapt to changing workforce dynamics</li>
              </ul>

              <p>Partner with us to build a talented, engaged workforce that drives your organization's success.</p>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-8 shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Talent Management Approach</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Assess</h4>
                    <p className="text-gray-600">Evaluate current talent capabilities and future needs</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Align</h4>
                    <p className="text-gray-600">Connect talent strategy with business objectives</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Develop</h4>
                    <p className="text-gray-600">Implement programs to enhance employee capabilities</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Optimize</h4>
                    <p className="text-gray-600">Continuously improve talent management practices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-teal-700 rounded-xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Elevate Your Workforce</h3>
              <p className="mb-6">
                Schedule a consultation with our talent management experts to discuss your organization's needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-green-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Benefits of Strategic Talent Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Improved Performance</h3>
              <p className="text-gray-600">
                Enhance individual and organizational productivity through strategic talent management
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Higher Retention</h3>
              <p className="text-gray-600">
                Reduce turnover by creating engaging development opportunities for employees
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Future-Ready Workforce</h3>
              <p className="text-gray-600">
                Develop the skills and capabilities needed to meet future business challenges
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-800 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Talent Management?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Partner with us to develop a comprehensive talent strategy that attracts, develops, and retains the people
            who will drive your organization's success.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
