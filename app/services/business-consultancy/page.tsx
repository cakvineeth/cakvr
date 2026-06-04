import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Briefcase,
  Lightbulb,
  TrendingUp,
  FileText,
  BarChart4,
  Users,
  MessageSquare,
  BookOpen,
  Building,
} from "lucide-react"

export const metadata = {
  title: "Business Consultancy Services | K Vineeth Reddy & Co LLP",
  description: "Leveraging your business with our consultancy solutions",
}

export default function BusinessConsultancyServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-ca-darkBlue to-ca-purple py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Business Consultancy Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Consultancy Services</h1>
            <p className="text-xl text-white/90 mb-8">Leveraging your business with our consultancy solutions</p>
            <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-6 py-6 rounded-md" asChild>
              <Link href="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Name Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ca-darkBlue">K VINEETH REDDY & CO LLP</h2>
          <div className="w-24 h-1 bg-ca-orange mx-auto my-4"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your trusted partner for comprehensive business consultancy services
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">Business Consultancy</h2>
            <p className="text-gray-700 mb-6">
              As an entrepreneur, you are unaware of all the compliances and norms applicable to your business. We
              understand your plight. We are startup consultants that help on all your needs. We are your CA for your
              start-up.
            </p>
            <p className="text-gray-700 mb-6">
              <span className="font-semibold">
                Enabling you to focus on your core business, while we take care of the rest.
              </span>
              We assist you at every step of the way. Our team focuses on identifying the right areas to focus on,
              reconfiguring the organization and building the right capability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-ca-purple hover:bg-ca-purple/90 text-white" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button variant="outline" className="border-ca-purple text-ca-purple hover:bg-ca-purple/10" asChild>
                <Link href="/about">Learn About Our Team</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Business Consultancy Services"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Client Centric</h3>
              <p className="text-gray-600">
                We put our clients at the center of everything we do, ensuring that our solutions are tailored to your
                specific needs and challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Competent Team</h3>
              <p className="text-gray-600">
                Our team of experts brings years of experience and specialized knowledge to help you navigate complex
                business challenges and opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Passion for Results</h3>
              <p className="text-gray-600">
                We are committed to delivering measurable results that help your business grow, improve efficiency, and
                increase profitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ca-darkBlue mb-4">Services</h2>
            <p className="text-xl text-gray-700">What we do</p>
            <div className="w-24 h-1 bg-ca-orange mx-auto my-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Leveraging your business with our smart operational solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-orange/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-ca-orange h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ca-darkBlue">Corporate Compliances</h3>
              <p className="text-gray-600">
                We ensure that all the compliances pertaining to your business are timely & duly complied with,
                safeguarding the company from any legal contingencies.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Regulatory compliance management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Statutory filing assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Legal risk mitigation</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-orange/10 rounded-full flex items-center justify-center mb-4">
                <BarChart4 className="text-ca-orange h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ca-darkBlue">Virtual CFO Services</h3>
              <p className="text-gray-600">
                As a virtual CFO of your Company, we ensure that all your accounting records and statutory compliances
                are up to date and in consonance with the laws.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Financial strategy development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cash flow management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Financial reporting & analysis</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-orange/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-ca-orange h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ca-darkBlue">HR & Payroll Services</h3>
              <p className="text-gray-600">
                We assist your business with efficient management of HR & Payroll. With a faster flow of information,
                you will always be in control of the process events while still focusing on core business functions.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Payroll processing & management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">HR policy development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Statutory compliance management</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-orange/10 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="text-ca-orange h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ca-darkBlue">Handling Appeals</h3>
              <p className="text-gray-600">
                As your consultant, we even handle any objections or other tax related contingencies that may come your
                way. We represent your business & handle all the appeals & notices for your business.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tax notice representation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Appeal preparation & filing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Legal documentation support</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-orange/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-ca-orange h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ca-darkBlue">Outsourced Accounting Services</h3>
              <p className="text-gray-600">
                A wide variety of activities are involved, such as but not limited to bookkeeping services, preparation
                of financial reports, payroll services, timely MIS reports for smooth decision making, and managing
                receivables and payables.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bookkeeping & reconciliation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Financial statement preparation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Accounts receivable/payable management</span>
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-orange/10 rounded-full flex items-center justify-center mb-4">
                <Building className="text-ca-orange h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ca-darkBlue">Business Execution & Setup</h3>
              <p className="text-gray-600">
                We work with clients throughout their journey to establish thriving sustainable businesses. We develop
                intellectual capital to provide nuanced perspectives on complex topics.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Business entity formation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Operational process setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Business strategy implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Processes Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">When You Make it</h2>
            <h3 className="text-xl font-semibold text-ca-purple mb-4">DEVELOPING FINANCIAL PROCESSES AND PROCEDURES</h3>
            <p className="text-gray-700 mb-6">
              We help you establish robust financial processes and procedures that ensure accuracy, compliance, and
              efficiency in your financial operations. Our team works closely with you to develop customized solutions
              that meet your specific business needs.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-ca-orange h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-black">Financial Policy Development</span>
                  <p className="text-gray-600">
                    We create comprehensive financial policies tailored to your business needs.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-ca-orange h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-black">Process Documentation</span>
                  <p className="text-gray-600">
                    We document all financial processes for consistency and training purposes.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-ca-orange h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-black">Internal Controls Implementation</span>
                  <p className="text-gray-600">We establish effective internal controls to safeguard your assets.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Financial Processes and Procedures"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ca-darkBlue to-ca-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Request for a Callback</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Want to know more about our business consultancy services? Contact us and our team will get back to you
            within 24 hours.
          </p>
          <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-8 py-6 rounded-md text-lg" asChild>
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-ca-darkBlue mb-6 text-center">Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.mca.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-ca-darkBlue font-medium rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              MCA
            </a>
            <a
              href="https://www.gst.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-ca-darkBlue font-medium rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              GST
            </a>
            <a
              href="https://www.icai.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-ca-darkBlue font-medium rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              ICAI
            </a>
            <a
              href="https://www.incometax.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-ca-darkBlue font-medium rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              Income Tax
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
