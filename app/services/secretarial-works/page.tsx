import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, BookOpen, Calendar } from "lucide-react"

export const metadata = {
  title: "Secretarial Works | K Vineeth Reddy & Co LLP",
  description: "Comprehensive secretarial services for companies and LLPs",
}

export default function SecretarialWorksServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-ca-darkBlue to-ca-purple py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Secretarial Works Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Secretarial Works</h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive secretarial services to ensure compliance and smooth business operations
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">One-Stop Secretarial Solutions</h2>
            <p className="text-gray-700 mb-6">
              Our firm is a one-stop consultancy, which enables you to focus on your core activities while we take care
              of all the other highly critical aspects of your business. We provide end-to-end support right from
              company incorporation to maintaining books & filing returns with ROC.
            </p>
            <p className="text-gray-700">
              We are your go-to firm for efficient & smooth running of your business, ensuring all secretarial and
              compliance requirements are met professionally and on time.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Secretarial Works Services"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Our Secretarial Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Incorporation of Companies & LLP</h3>
              <p className="text-gray-600">
                We handle the complete process of incorporating your company or LLP, ensuring all legal requirements are
                met and documentation is properly filed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Maintenance of Secretarial Books & Records</h3>
              <p className="text-gray-600">
                We maintain all required statutory books and records in compliance with the Companies Act and other
                applicable regulations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Filing of Returns with ROC</h3>
              <p className="text-gray-600">
                We ensure timely and accurate filing of all statutory returns with the Registrar of Companies to keep
                your business compliant.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Additional Secretarial Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-black">Meetings & Minutes</h3>
              <p className="text-gray-600 mb-4">
                We assist in organizing and documenting board meetings, annual general meetings, and other statutory
                meetings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Preparation of meeting notices and agendas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Recording and maintaining minutes of meetings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Ensuring compliance with meeting requirements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-black">Legal Assistance</h3>
              <p className="text-gray-600 mb-4">
                We provide legal assistance for various corporate matters to ensure your business operates within the
                legal framework.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Drafting and reviewing legal documents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Advising on corporate governance matters</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Ensuring compliance with regulatory requirements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-black">Company Law Compliances</h3>
              <p className="text-gray-600 mb-4">
                We ensure your business complies with all requirements under the Companies Act and other applicable
                regulations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Annual compliance management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Statutory registers maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Compliance with director-related requirements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-black">Corporate Restructuring</h3>
              <p className="text-gray-600 mb-4">
                We assist with corporate restructuring activities to help your business adapt to changing market
                conditions and strategic objectives.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Mergers and acquisitions support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Corporate reorganization assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ca-purple h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Due diligence for corporate transactions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ca-darkBlue/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">Focus on Your Core Business</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Let us handle your secretarial and compliance requirements while you focus on growing your business. Our
            expert team ensures all your secretarial needs are met professionally and efficiently.
          </p>
          <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-6 py-6 rounded-md" asChild>
            <Link href="/contact">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
