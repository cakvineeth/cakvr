import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Incorporation Services | K Vineeth Reddy & Co LLP",
  description: "Professional company incorporation and compliance services",
}

export default function IncorporationServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-ca-darkBlue to-ca-purple py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Incorporation Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Incorporation Services</h1>
            <p className="text-xl text-white/90 mb-8">
              Selecting the right entity for your business and ensuring compliance from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">Company Incorporation & Compliances</h2>
            <p className="text-gray-700 mb-6">
              Our experienced team offers bespoke company incorporation, registration, statutory compliances & auditing
              services. We specialize in corporate secretarial compliances & services.
            </p>
            <p className="text-gray-700">
              The first decision that must be made when starting a business is choosing the right business vehicle. The
              decision is influenced by many factors. We assist you in making the right decision and putting the right
              foot forward.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Incorporation Services"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Our Incorporation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-black">Registration Services</h3>
              <p className="text-gray-700 mb-4">
                We help you get started with your business by handling all necessary registrations.
              </p>
              <p className="text-gray-600">
                You need a variety of licenses & registrations whenever you start a business. The registration
                requirements will vary from business to business. Our experts ensure you have all the necessary
                registrations in place.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-black">Secretarial Works</h3>
              <p className="text-gray-700 mb-4">Our firm is a one-stop consultancy for all your secretarial needs.</p>
              <p className="text-gray-600">
                We enable you to focus on your core activities while we take care of all the other highly critical
                aspects of your business. We provide end-to-end support right from company incorporation to maintaining
                books & filling returns with ROC.
              </p>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div>
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Comprehensive Secretarial Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Incorporation of companies & LLP</h3>
              <p className="text-gray-600">
                Complete assistance with the incorporation process for companies and Limited Liability Partnerships.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Maintenance of secretarial books & records</h3>
              <p className="text-gray-600">
                Professional maintenance of all required secretarial books and records to ensure compliance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Filling of Returns with ROC</h3>
              <p className="text-gray-600">
                Timely and accurate filing of all required returns with the Registrar of Companies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Meetings & Minutes</h3>
              <p className="text-gray-600">
                Assistance with organizing meetings and maintaining proper minutes as required by law.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Legal Assistance</h3>
              <p className="text-gray-600">
                Expert legal assistance for all corporate matters and compliance requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">All Compliances under Company Law</h3>
              <p className="text-gray-600">
                Comprehensive assistance with all compliances required under the Companies Act and related laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ca-darkBlue/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">Start Your Business Right</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            We are your go-to firm for efficient & smooth running of your business. Let us help you start your business
            on the right foot with our comprehensive incorporation and compliance services.
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
