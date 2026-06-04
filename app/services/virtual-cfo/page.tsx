import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, PieChart, LineChart, TrendingUp, CheckCircle, Users, Building } from "lucide-react"

export const metadata = {
  title: "Virtual CFO Services | K Vineeth Reddy & Co LLP",
  description: "Professional Virtual CFO services to help your business with financial strategy, reporting, and growth",
}

export default function VirtualCFOPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/collaborative-finance-review.png')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Virtual CFO Services</h1>
            <p className="text-xl md:text-2xl mb-8">
              Virtual CFO is one of the well known practice in the industry today
            </p>
            <p className="text-lg mb-8 text-gray-100">
              Improved efficiency, providing pleasant customer experience coupled with best practised & service
              standards available around the world. Our skilled staff, combined with our experience ensures best Virtual
              CFO services for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Company Name Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">K VINEETH REDDY & CO LLP</h2>
            <div className="mt-2 mb-6 flex justify-center">
              <div className="h-1 w-24 bg-orange-500 rounded"></div>
            </div>
            <p className="text-xl text-gray-600">Virtual CFO Services</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Financial Leadership</h2>
              <p className="text-lg text-gray-600 mb-6">
                A CFO fills a vital role in crafting a winning strategy by bringing in his industry experience and a
                fresh perspective to the business. We bring a wide array of financial services that are completely
                customizable and fit your business needs and demands. Our virtual CFO experts can partner with you in
                achieving your business goals.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team has worked with diverse businesses — simplifying financial analysis and decision making,
                maximizing profitability, overcome financial challenges, and prepare for your business growth. With
                years of experience and the right skill set, our virtual CFO consultants help take your business to the
                next level.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-ca-purple hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/strategic-finance-discussion.png"
                  alt="Virtual CFO Services"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Virtual CFO Services</h2>
            <div className="mt-2 mb-6 flex justify-center">
              <div className="h-1 w-24 bg-orange-500 rounded"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial leadership tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cashflow Management */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cashflow Management</h3>
                <p className="text-gray-600 mb-4">
                  Our outsourced CFO solutions dive deep into your processes, analyze assets and liabilities, reduce
                  liquidity issues, enforce credit risk management, and ensure the best operational practices.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cash flow forecasting and planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Working capital optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Credit risk assessment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Investor Relationship & Reporting */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Investor Relationship & Reporting</h3>
                <p className="text-gray-600 mb-4">
                  Our Virtual CFOs execute a detailed analysis of your company's operations and financial statements to
                  current and potential shareholders and provide up-to-date information as part of the best standards of
                  corporate governance.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Financial statement preparation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Investor presentations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Stakeholder communication</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Internal Controls */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Internal Controls</h3>
                <p className="text-gray-600 mb-4">
                  Our Virtual CFO experts work closely with your business in customizing various controls based on the
                  size and stage of your company, with adequate & critical control systems and policies.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Financial policy development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Risk assessment and mitigation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Compliance monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Benefits of Our Virtual CFO Services</h2>
            <div className="mt-2 mb-6 flex justify-center">
              <div className="h-1 w-24 bg-orange-500 rounded"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Why businesses choose our Virtual CFO services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cost-Effective */}
            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-500">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cost-Effective</h3>
              <p className="text-gray-600">
                Significantly lower cost than hiring a full-time CFO while getting the same expertise and benefits.
              </p>
            </div>

            {/* Scalable Services */}
            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-purple-500">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Services</h3>
              <p className="text-gray-600">
                Flexible engagement models that can scale up or down based on your business needs and growth stage.
              </p>
            </div>

            {/* Industry Expertise */}
            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-green-500">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Expertise</h3>
              <p className="text-gray-600">
                Access to professionals with diverse industry experience and specialized financial knowledge.
              </p>
            </div>

            {/* Strategic Focus */}
            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-orange-500">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <PieChart className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Focus</h3>
              <p className="text-gray-600">
                Allows business owners to focus on core operations while financial strategy is handled by experts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Virtual CFO Process</h2>
            <div className="mt-2 mb-6 flex justify-center">
              <div className="h-1 w-24 bg-orange-500 rounded"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we implement our Virtual CFO services for your business
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-0">
              {/* Step 1 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right pr-8 md:pr-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Assessment</h3>
                  <p className="text-gray-600">
                    We conduct a comprehensive assessment of your current financial processes, systems, and needs to
                    identify areas for improvement.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-10 h-10 rounded-full bg-ca-purple text-white flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:pl-12"></div>
              </div>

              {/* Step 2 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right pr-8 md:pr-12 md:order-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Planning</h3>
                  <p className="text-gray-600">
                    We develop a customized financial strategy and implementation plan tailored to your business goals
                    and challenges.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-10 h-10 rounded-full bg-ca-purple text-white flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:pl-12 md:order-1"></div>
              </div>

              {/* Step 3 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right pr-8 md:pr-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Implementation</h3>
                  <p className="text-gray-600">
                    We execute the financial strategy, implement new systems and processes, and provide ongoing support
                    and guidance.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-10 h-10 rounded-full bg-ca-purple text-white flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:pl-12"></div>
              </div>

              {/* Step 4 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right pr-8 md:pr-12 md:order-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. Monitoring & Optimization</h3>
                  <p className="text-gray-600">
                    We continuously monitor performance, provide regular reporting, and make adjustments to optimize
                    financial outcomes.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-10 h-10 rounded-full bg-ca-purple text-white flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:pl-12 md:order-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Story */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-xl">
            <div className="md:grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="uppercase tracking-wide text-sm text-ca-purple font-semibold mb-2">Success Story</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  How We Helped a Tech Startup Optimize Their Finances
                </h3>
                <p className="text-gray-600 mb-6">
                  A growing tech startup was struggling with cash flow management and financial planning. Our Virtual
                  CFO services helped them implement robust financial systems, optimize their cash flow, and secure
                  additional funding for growth.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white px-4 py-2 rounded-full text-ca-purple font-medium shadow-sm">
                    40% Cost Reduction
                  </div>
                  <div className="bg-white px-4 py-2 rounded-full text-ca-purple font-medium shadow-sm">
                    25% Profit Increase
                  </div>
                  <div className="bg-white px-4 py-2 rounded-full text-ca-purple font-medium shadow-sm">
                    $2M in New Funding
                  </div>
                </div>
                <div className="italic text-gray-600 border-l-4 border-ca-purple pl-4">
                  "The Virtual CFO services from K Vineeth Reddy & Co LLP transformed our financial operations. We now
                  have clarity, control, and confidence in our financial future."
                </div>
              </div>
              <div className="md:h-auto">
                <Image
                  src="/upward-trend-infographic.png"
                  alt="Success Story"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We are Connected All Time to Help Your Business! We understand the importance of approaching each work
              integrally and believe in the power of simple and easy communication.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-900 focus:ring-white"
            >
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
