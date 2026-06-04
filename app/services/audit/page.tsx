import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Shield,
  FileCheck,
  BarChart4,
  ClipboardCheck,
  Calculator,
  Package2,
} from "lucide-react"

export const metadata = {
  title: "Audit & Assurance Services | K Vineeth Reddy & Co LLP",
  description: "Professional audit and assurance services to streamline your business processes",
}

export default function AuditServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-ca-darkBlue to-ca-purple py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1586486855514-8c633cc6fd29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Audit Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Catalyst in Reshaping Your Business</h1>
            <p className="text-xl text-white/90 mb-8">
              Leveraging Your Business With Efficient Auditing & Assurance Services - Benchmark of quality service.
            </p>
          </div>
        </div>
      </section>

      {/* Company Name Section */}
      <section className="py-12 bg-gradient-to-r from-ca-lightBlue/10 to-ca-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ca-darkBlue">Audit & Assurance Services</h2>
          <div className="w-24 h-1 bg-ca-orange mx-auto my-6"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">Professional Audit Expertise</h2>
            <p className="text-gray-700 mb-6">
              Professional and competent audit experts at our firm follow audit procedures that help streamline the
              company's processes. During an audit of an entity's books of accounts and processes, they assist in
              identifying deficiencies and pending compliances.
            </p>
            <p className="text-gray-700">
              They assist in the implementation of an effective internal control system, ensuring your business operates
              efficiently and in compliance with all regulations.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Audit Services"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Benefits of Our Audit Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Implementation of control system</h3>
              <p className="text-gray-600">
                The audits results can help you identify & implement an internal control system for smooth business
                operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Abiding to legal compliances</h3>
              <p className="text-gray-600">
                Annual audits ensures that your business is adhering to all the legal compliances required by law.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Benchmark of quality service</h3>
              <p className="text-gray-600">
                Our audit services set the benchmark for quality, ensuring your business maintains the highest
                standards.
              </p>
            </div>
          </div>
        </div>

        {/* Audit Process */}
        <div className="mb-16 bg-gray-50 py-12 px-6 rounded-xl">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Our Audit Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-ca-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ca-orange font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold mb-2">Planning</h3>
              <p className="text-sm text-gray-600">Understanding your business and identifying key risk areas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ca-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ca-orange font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold mb-2">Execution</h3>
              <p className="text-sm text-gray-600">Conducting thorough examination of financial records</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ca-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ca-orange font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold mb-2">Reporting</h3>
              <p className="text-sm text-gray-600">Documenting findings and preparing comprehensive reports</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ca-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ca-orange font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold mb-2">Follow-up</h3>
              <p className="text-sm text-gray-600">Providing recommendations and implementation support</p>
            </div>
          </div>
        </div>

        {/* Audit Types */}
        <div>
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Our Auditing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Statutory Audit</h3>
              <p className="text-gray-600">
                Legislation or a Statute imposes the requirement for this audit. As an example, all companies must
                undergo a statutory audit mandated by the Companies Act.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <FileCheck className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Internal Audit</h3>
              <p className="text-gray-600">
                During internal audit, we assess the organization's internal controls to determine their efficiency and
                effectiveness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <BarChart4 className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Concurrent Audit</h3>
              <p className="text-gray-600">
                Concurrent Audit is undertaken by banks, asset management firms, finance institutes & insurance
                entities. It is same as Internal Audit and is carried out at regular intervals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <ClipboardCheck className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">GST Audit</h3>
              <p className="text-gray-600">
                Every registered person must get its accounts audited if the aggregated turnover during the financial
                year exceeds Rs.2 cr from sale of goods or services. A GST Audit is carried out to ensure that GST
                provisions are adhered to.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <Calculator className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Income Tax Audit</h3>
              <p className="text-gray-600">
                A tax audit is a means of determining compliance with income-tax laws and verifying that other
                income-tax laws are followed. It is done as per the provisions laid u/s 44AB.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <Package2 className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Stock Audit</h3>
              <p className="text-gray-600">
                This audit is conducted for physical verification of a company's inventory and stock to ensure accuracy
                in reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-gradient-to-r from-ca-lightBlue/10 to-ca-purple/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Success Stories</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <Image
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Client Company"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-3">Manufacturing Company Audit</h3>
                <p className="text-gray-700 mb-4">
                  We helped a manufacturing company identify significant tax savings through our comprehensive audit
                  process. Our team discovered several compliance issues that were costing the company unnecessarily.
                </p>
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 px-3 py-1 rounded-full text-green-800 text-sm font-medium">
                    30% Cost Reduction
                  </div>
                  <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 text-sm font-medium">
                    Improved Compliance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ca-darkBlue/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">Get In Touch Now!</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            One-stop-solution for all your legal, statutory, and taxation needs. Our competent team of experts have a
            vast experience in providing a range of statutory and internal auditing services as well as governance,
            risk, and compliance support services.
          </p>
          <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-6 py-6 rounded-md" asChild>
            <Link href="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
