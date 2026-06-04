import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, Users, Building, Briefcase, BarChart3, Calculator } from "lucide-react"

export const metadata = {
  title: "Business Incorporation Services | K Vineeth Reddy & Co LLP",
  description: "Professional company incorporation and compliance services for all types of business entities",
}

export default function BusinessIncorporationServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-ca-darkBlue to-ca-purple py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
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
            <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-6 py-6 rounded-md" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Name Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ca-darkBlue">
            K VINEETH REDDY & CO LLP
            <span className="block h-1 w-40 bg-ca-orange mx-auto mt-4"></span>
          </h2>
          <p className="text-xl text-gray-700 mt-6 max-w-3xl mx-auto">Company Incorporation & Compliances</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">Assisting in putting the right foot forward</h2>
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
              src="https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Incorporation Services"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h3 className="text-2xl font-bold text-ca-darkBlue mb-4">
            What type of Business Entity is most suitable for you?
          </h3>
          <p className="text-gray-700">
            The first decision that must be made when starting a business is choosing the right business vehicle. The
            decision is influenced by many factors such as:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start">
              <CheckCircle className="text-ca-orange h-5 w-5 mt-1 mr-2" />
              <p>Number of founders/promoters</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-ca-orange h-5 w-5 mt-1 mr-2" />
              <p>Nature of business activities</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-ca-orange h-5 w-5 mt-1 mr-2" />
              <p>Initial capital investment</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-ca-orange h-5 w-5 mt-1 mr-2" />
              <p>Liability protection requirements</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-ca-orange h-5 w-5 mt-1 mr-2" />
              <p>Tax implications</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-ca-orange h-5 w-5 mt-1 mr-2" />
              <p>Future growth and funding plans</p>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Featured Services</h2>
          <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Incorporation & Compliance Services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-ca-purple">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ca-darkBlue">Incorporation of Partnership Firm</h3>
              <p className="text-gray-600">
                In India, a partnership firm is governed under the Indian Partnership Act, 1932. A cooperation agreement
                might be for a single assignment or project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-ca-orange">
              <div className="w-12 h-12 bg-ca-orange/10 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="text-ca-orange h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ca-darkBlue">Incorporation of OPC</h3>
              <p className="text-gray-600">
                When one founder/promoter wishes to launch a business in the name of a private limited company with
                limited liability, such firms are commonly formed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-600">
              <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center mb-4">
                <Building className="text-green-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ca-darkBlue">Incorporation of LLP</h3>
              <p className="text-gray-600">
                LLPs are companies or organisations that have registered as Limited Liability Partnerships. The Limited
                Liability Partnership Act of 2008 governs these businesses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
              <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mb-4">
                <Building className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ca-darkBlue">Incorporation of Pvt. Ltd.</h3>
              <p className="text-gray-600">
                A private limited company in India is incorporated under the Companies Act, 2013. It offers limited
                liability protection and is ideal for businesses seeking growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-purple-600">
              <div className="w-12 h-12 bg-purple-600/10 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="text-purple-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ca-darkBlue">Program Manager</h3>
              <p className="text-gray-600">
                Collaborate Consulting exists to find the place where being seeming disparate interests meet. We help
                manage your incorporation program from start to finish.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-red-600">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <Calculator className="text-red-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ca-darkBlue">Tax Management</h3>
              <p className="text-gray-600">
                Collaborate Consulting exists to find the place where being seeming disparate interests meet. We help
                manage your tax obligations from incorporation onwards.
              </p>
            </div>
          </div>
        </div>

        {/* Registration Services */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">Registration Services</h2>
              <h3 className="text-xl font-bold text-ca-purple mb-4">We help you get started</h3>
              <p className="text-gray-700 mb-6">
                You need a variety of licenses & registrations, whenever you start a business. The registration
                requirements will vary from business to business.
              </p>
              <p className="text-gray-700">
                For your business, we can assist you with all the required registrations & licenses.
              </p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Registration Services"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          <h3 className="text-xl font-bold text-ca-darkBlue mt-12 mb-6">Registration Services:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="p-2 bg-ca-orange/10 rounded-lg">
                    <FileText className="h-6 w-6 text-ca-orange" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ca-darkBlue mb-2">GST Registration</h4>
                  <p className="text-gray-600">
                    GST registration & fillings for sole proprietorship, private limited companies & LLP firms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="p-2 bg-ca-purple/10 rounded-lg">
                    <Users className="h-6 w-6 text-ca-purple" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ca-darkBlue mb-2">Trust, Societies & Association</h4>
                  <p className="text-gray-600">
                    Consultation & registration services for Trust, Society & Association registration.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="p-2 bg-green-600/10 rounded-lg">
                    <Building className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ca-darkBlue mb-2">PF & ESIC</h4>
                  <p className="text-gray-600">
                    Consultation & dedicated services for Provident Fund Registration & Employees' State Insurance
                    Corporation Registration.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="p-2 bg-blue-600/10 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ca-darkBlue mb-2">FSSAI Registration</h4>
                  <p className="text-gray-600">
                    Dedicated services for FSSAI Registration Central License, FSSAI Registration State License, FSSAI
                    Basic Registration Licence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Our Incorporation Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-ca-orange/20 hidden md:block"></div>
            <div className="space-y-12 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold text-ca-darkBlue mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">
                    We begin with a detailed discussion to understand your business goals, structure, and specific
                    requirements.
                  </p>
                </div>
                <div className="md:w-12 flex justify-center">
                  <div className="w-10 h-10 bg-ca-orange rounded-full flex items-center justify-center text-white font-bold z-10">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right"></div>
                <div className="md:w-12 flex justify-center">
                  <div className="w-10 h-10 bg-ca-orange rounded-full flex items-center justify-center text-white font-bold z-10">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-bold text-ca-darkBlue mb-2">Documentation & Filing</h3>
                  <p className="text-gray-600">
                    We prepare and file all necessary documents with the appropriate government authorities.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold text-ca-darkBlue mb-2">Registration & Approvals</h3>
                  <p className="text-gray-600">
                    We handle the entire registration process and secure all necessary approvals and licenses.
                  </p>
                </div>
                <div className="md:w-12 flex justify-center">
                  <div className="w-10 h-10 bg-ca-orange rounded-full flex items-center justify-center text-white font-bold z-10">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right"></div>
                <div className="md:w-12 flex justify-center">
                  <div className="w-10 h-10 bg-ca-orange rounded-full flex items-center justify-center text-white font-bold z-10">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-bold text-ca-darkBlue mb-2">Post-Incorporation Support</h3>
                  <p className="text-gray-600">
                    We provide ongoing support for compliance requirements and other post-incorporation matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ca-darkBlue to-ca-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get in touch</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            We are always available to help your business! We understand the importance of approaching each work
            integrally and believe in the power of simple and easy communication.
          </p>
          <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-8 py-6 rounded-md text-lg" asChild>
            <Link href="/contact">
              Contact Us Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
