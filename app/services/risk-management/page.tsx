import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Shield, AlertTriangle, TrendingUp, BarChart4 } from "lucide-react"

export const metadata: Metadata = {
  title: "Risk Management Services | K Vineeth Reddy & Co LLP",
  description: "Identify, assess, and mitigate risks to protect your business and ensure continuity.",
}

export default function RiskManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Risk Management Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Risk Management</h1>
            <p className="text-xl md:text-2xl mb-8">
              Identify, assess, and mitigate risks to protect your business and ensure continuity.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Risk Management Solutions</h2>

            <div className="prose prose-lg max-w-none">
              <p>
                In today's complex business environment, effective risk management is crucial for protecting your
                organization from threats and ensuring business continuity. Our risk management services help you
                identify, assess, and mitigate risks across all aspects of your business.
              </p>

              <p>
                We take a proactive approach to risk management, helping you not only protect against potential threats
                but also identify opportunities that can arise from well-managed risks.
              </p>

              <h3>Our Risk Management Services Include:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500 flex">
                  <AlertTriangle className="h-10 w-10 text-red-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Risk Assessment</h4>
                    <p className="text-gray-600">
                      Comprehensive evaluation of potential risks facing your organization
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 flex">
                  <Shield className="h-10 w-10 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Risk Mitigation</h4>
                    <p className="text-gray-600">Strategies and controls to reduce the impact of identified risks</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 flex">
                  <TrendingUp className="h-10 w-10 text-green-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Business Continuity</h4>
                    <p className="text-gray-600">Planning to ensure operations continue during disruptions</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500 flex">
                  <BarChart4 className="h-10 w-10 text-purple-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Risk Monitoring</h4>
                    <p className="text-gray-600">Ongoing evaluation of risk management effectiveness</p>
                  </div>
                </div>
              </div>

              <h3>Why Choose Our Risk Management Services?</h3>

              <ul>
                <li>Experienced risk management professionals with industry-specific knowledge</li>
                <li>Customized approach tailored to your organization's unique risk profile</li>
                <li>Integration of risk management with your overall business strategy</li>
                <li>Practical solutions that balance risk mitigation with business objectives</li>
                <li>Ongoing support to adapt to evolving risk landscapes</li>
              </ul>

              <p>
                Partner with us to develop a robust risk management framework that protects your business while enabling
                sustainable growth.
              </p>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-8 shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Risk Management Process</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Identify</h4>
                    <p className="text-gray-600">Recognize potential risks across your organization</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Assess</h4>
                    <p className="text-gray-600">Evaluate likelihood and potential impact of each risk</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Mitigate</h4>
                    <p className="text-gray-600">Develop and implement risk reduction strategies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Monitor</h4>
                    <p className="text-gray-600">Continuously track and reassess risk management effectiveness</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Protect Your Business</h3>
              <p className="mb-6">
                Schedule a risk assessment consultation with our experts to identify vulnerabilities in your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Categories Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Risk Categories We Address</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Risks</h3>
              <p className="text-gray-600">
                Risks related to business decisions, market changes, and competitive threats
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Operational Risks</h3>
              <p className="text-gray-600">Risks arising from internal processes, systems, and human factors</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Risks</h3>
              <p className="text-gray-600">
                Risks related to financial management, market volatility, and credit exposure
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <BarChart4 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance Risks</h3>
              <p className="text-gray-600">Risks associated with legal and regulatory requirements</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Strengthen Your Risk Management?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Partner with us to develop a comprehensive risk management strategy that protects your business and supports
            your long-term objectives.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
          >
            Schedule a Risk Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
