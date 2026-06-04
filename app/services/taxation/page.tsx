import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, Shield, Clock, Award } from "lucide-react"

export const metadata = {
  title: "Taxation Services | K Vineeth Reddy & Co LLP",
  description: "Comprehensive direct and indirect tax services to keep your business compliant",
}

export default function TaxationServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-ca-darkBlue to-ca-purple py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Taxation Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Taxation Services</h1>
            <p className="text-xl text-white/90 mb-8">
              We help to get Solutions! Comprehensive tax solutions to keep your business compliant and up-to-date with
              the latest tax reforms.
            </p>
          </div>
        </div>
      </section>

      {/* Company Name Section */}
      <section className="py-10 bg-gradient-to-r from-ca-darkBlue/5 to-ca-purple/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-ca-darkBlue">K VINEETH REDDY & CO LLP</h2>
          <div className="w-24 h-1 bg-ca-orange mx-auto my-4"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">Expert Tax Solutions for Businesses and Individuals</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">Expert Tax Solutions</h2>
            <p className="text-gray-700 mb-6">
              The tax laws govern every type of entity, whether it is a corporation or a proprietorship. Taxation is one
              of our specialties, whether it is income tax or GST returns. No matter if it is a startup or a
              multinational company, or an Indian or foreign company, every entity is subject to taxation regulations.
            </p>
            <p className="text-gray-700 mb-6">
              As a leading consultant we keep you up to date on the latest direct & indirect tax reforms, we suggest
              changes to be made in the tax compliances to ensure that your firm is compliant.
            </p>
            <p className="text-gray-700">
              As tax consultants, we help you respond quickly to tax scrutiny & assessments. Our team makes sure that
              all refund requests are submitted within the specified time frame and that they are processed effectively.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Taxation Services"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Dedicated Consultation</h3>
              <p className="text-gray-600">
                We offer customized services to our clients as their tax advisor with a long-term vision in line with
                client needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Due Compliance</h3>
              <p className="text-gray-600">
                As a tax advisor, we ensure that due filings are done in order to avoid any hefty penalties. We make
                sure the client is always compliant.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Proactive Approach</h3>
              <p className="text-gray-600">
                We take a proactive approach to tax planning, helping you anticipate and prepare for tax obligations
                before they arise.
              </p>
            </div>
          </div>
        </div>

        {/* Tax Process */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Our Tax Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-ca-orange text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Assessment</h3>
              <p className="text-gray-600">Evaluate your current tax situation and identify opportunities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ca-orange text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Planning</h3>
              <p className="text-gray-600">Develop a strategic tax plan tailored to your specific needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ca-orange text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Implementation</h3>
              <p className="text-gray-600">Execute the tax strategy with precision and attention to detail</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ca-orange text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Monitoring</h3>
              <p className="text-gray-600">Continuously review and adjust your tax strategy as needed</p>
            </div>
          </div>
        </div>

        {/* Tax Services */}
        <div>
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Our Tax Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <FileText className="text-ca-orange h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold text-black">Direct Taxes Services</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Income Tax Return filing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">TDS Returns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Equalization Levy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Advance Tax planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Tax Risk Assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Corporate Tax planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Individual Tax planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">International Tax advisory</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Income Tax Scrutiny assessments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Income Tax Appeals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Professional Tax matters</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <FileText className="text-ca-orange h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold text-black">Indirect Tax Services</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Many small businesses, start-ups, and entrepreneurs find it challenging to match their financial needs.
                We are the solution to this problem, we assist individuals and businesses to efficiently manage their
                taxes.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">GST Registration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">GST Returns Filing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">GST Audit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">GST Advisory</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">E-way Bill</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">GST Refunds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Success Story</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <Image
                src="/collaborative-tax-strategy.png"
                alt="Tax Consultation Success"
                width={300}
                height={300}
                className="rounded-lg shadow-md mx-auto"
              />
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-ca-darkBlue">Tech Startup Tax Optimization</h3>
                <p className="text-gray-700 mb-4">
                  A growing tech startup approached us with complex tax challenges as they expanded operations. Our team
                  implemented a comprehensive tax strategy that resulted in significant savings and improved compliance.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-ca-orange/10 text-ca-orange px-3 py-1 rounded-full text-sm font-medium">
                    30% Tax Savings
                  </span>
                  <span className="bg-ca-purple/10 text-ca-purple px-3 py-1 rounded-full text-sm font-medium">
                    100% Compliance
                  </span>
                  <span className="bg-ca-darkBlue/10 text-ca-darkBlue px-3 py-1 rounded-full text-sm font-medium">
                    Streamlined Process
                  </span>
                </div>
                <div className="flex items-center">
                  <Award className="text-ca-orange h-5 w-5 mr-2" />
                  <span className="text-gray-700 italic">
                    "The team's expertise saved us both money and headaches. Highly recommended!" - CEO, Tech Startup
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ca-darkBlue/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">Looking for Tax Help?</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Our tax consultants are capable and reliable, so if you are looking for the best services, you can
            definitely count on us. When it comes to startups, we help them to create their tax system from the
            beginning.
          </p>
          <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-6 py-6 rounded-md" asChild>
            <Link href="/contact">
              Get Expert Tax Advice <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-ca-darkBlue mb-6 text-center">Useful Tax Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <a
              href="https://www.mca.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <span className="text-ca-darkBlue font-medium">MCA</span>
            </a>
            <a
              href="https://www.gst.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <span className="text-ca-darkBlue font-medium">GST</span>
            </a>
            <a
              href="https://www.icai.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <span className="text-ca-darkBlue font-medium">ICAI</span>
            </a>
            <a
              href="https://www.incometax.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <span className="text-ca-darkBlue font-medium">Income Tax</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
