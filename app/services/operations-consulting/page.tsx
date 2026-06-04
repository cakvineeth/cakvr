import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Settings, Building, Briefcase } from "lucide-react"
import Logo from "@/components/Logo"

export const metadata = {
  title: "Operations Consulting Services | K Vineeth Reddy & Co LLP",
  description:
    "Optimize your business operations to increase efficiency, reduce costs, and improve overall performance.",
}

export default function OperationsConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ca-darkBlue to-ca-purple py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-6">
                <Logo variant="light" size="medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Operations Consulting Services</h1>
              <p className="text-xl text-white/90 mb-8">
                Optimize your business operations to increase efficiency, reduce costs, and improve overall performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Operations Consulting Services"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ca-darkBlue mb-4">Operational Excellence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our operations consulting services help businesses optimize their processes, systems, and resources to
              achieve operational excellence and drive sustainable performance improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ca-lightGray p-6 rounded-lg">
              <Settings className="h-12 w-12 text-ca-purple mb-4" />
              <h3 className="text-xl font-bold text-ca-darkBlue mb-2">Process Optimization</h3>
              <p className="text-gray-600 mb-4">
                Streamline and improve your business processes to enhance efficiency and effectiveness.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Process mapping and analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Bottleneck identification and resolution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Process redesign and implementation</span>
                </li>
              </ul>
            </div>

            <div className="bg-ca-lightGray p-6 rounded-lg">
              <Building className="h-12 w-12 text-ca-purple mb-4" />
              <h3 className="text-xl font-bold text-ca-darkBlue mb-2">Operational Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Optimize resource utilization and reduce waste to improve overall operational efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Resource allocation optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Cost reduction strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Productivity improvement</span>
                </li>
              </ul>
            </div>

            <div className="bg-ca-lightGray p-6 rounded-lg">
              <Briefcase className="h-12 w-12 text-ca-purple mb-4" />
              <h3 className="text-xl font-bold text-ca-darkBlue mb-2">Performance Management</h3>
              <p className="text-gray-600 mb-4">
                Develop and implement systems to measure, monitor, and improve operational performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">KPI development and implementation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Performance dashboard creation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Continuous improvement systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ca-purple to-ca-darkBlue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Operations?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our operations consulting services can help your business improve
            efficiency, reduce costs, and enhance overall performance.
          </p>
          <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-8 py-6 text-lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
