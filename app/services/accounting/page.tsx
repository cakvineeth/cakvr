import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, BarChart, ClipboardCheck } from "lucide-react"

export const metadata = {
  title: "Accounting & Bookkeeping Services | K Vineeth Reddy & Co LLP",
  description: "Comprehensive accounting and bookkeeping services for businesses of all sizes",
}

export default function AccountingServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-ca-darkBlue to-ca-purple py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Accounting Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Accounting & Bookkeeping Services</h1>
            <p className="text-xl text-white/90 mb-8">
              One of the most trusted firm for accounting & book keeping. Improved efficiency, providing pleasant
              customer experience coupled with best practised & service standards available around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-4">K VINEETH REDDY & CO LLP</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our skilled staff, combined with our experience ensures best bookkeeping & accountancy services for your
            business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">Seamless, Secure & Scalable Solutions</h2>
            <p className="text-gray-700 mb-6">
              We ensure seamless, secure & scalable solutions to reduce costs, streamline business processes and gain
              business advantages.
            </p>
            <p className="text-gray-700 mb-6">
              Accounting & Book keeping is the need for every startup and SME, it cannot be overstated. A solid
              financial foundation is essential for any industry. It is vital for every organization to systematically
              set up their accounting processes.
            </p>
            <p className="text-gray-700">
              All types of companies can benefit from our bookkeeping solutions. Hiring in-house accountants is
              definitely more expensive and time-consuming than outsourcing your accounting activities to an accounting
              firm like ours.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Accounting Services"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Why Choose Our Accounting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                At our firm, we have a team of qualified accountants with extensive knowledge of accounting regulations
                and updated with the latest techniques. The level of accuracy in maintaining accounting records
                increases when accounting services are managed by skilled professionals.
              </p>
              <p className="text-gray-700">
                The accounting needs of an organization will undoubtedly be met by outsourcing their accountants and
                bookkeeping to us.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional Accountants"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Our Accounting Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FileText className="text-ca-purple h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Data Collection</h3>
              <p className="text-gray-600">
                We collect and organize all your financial documents and transactions systematically.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <BarChart className="text-ca-purple h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Processing & Analysis</h3>
              <p className="text-gray-600">
                Our experts process the data and perform detailed analysis to ensure accuracy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <ClipboardCheck className="text-ca-purple h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Reporting & Compliance</h3>
              <p className="text-gray-600">
                We prepare comprehensive reports and ensure all regulatory compliances are met.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Set-up Accounting</h3>
              <p className="text-gray-600">
                We help startups and business owners to setup the accounting system properly from the beginning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Essential Reports</h3>
              <p className="text-gray-600">
                We help you with your management reports which is necessary for taking better business decisions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Compliances</h3>
              <p className="text-gray-600">
                We make sure that your company is compliant by due filling & management of accounts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ca-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-ca-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Accounting Policies</h3>
              <p className="text-gray-600">
                In order to maintain the division's smooth operations, we set up accounting policies and procedures.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Benefits of Outsourcing Accounting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-ca-orange/10 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="text-ca-orange h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">Cost Efficiency</h3>
                  <p className="text-gray-600">
                    Save on hiring, training, and maintaining in-house accounting staff. Pay only for the services you
                    need.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-ca-orange/10 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="text-ca-orange h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">Expert Knowledge</h3>
                  <p className="text-gray-600">
                    Access to a team of professionals with specialized knowledge in various accounting domains.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-ca-orange/10 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="text-ca-orange h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">Time Saving</h3>
                  <p className="text-gray-600">
                    Focus on your core business activities while we handle the complex accounting tasks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-ca-orange/10 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="text-ca-orange h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">Scalability</h3>
                  <p className="text-gray-600">
                    Easily scale your accounting services up or down based on your business needs and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Section */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Business Success"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-ca-darkBlue mb-4">How We Helped a Growing Startup</h3>
              <p className="text-gray-700 mb-4">
                A tech startup was struggling with managing their finances while scaling rapidly. Our team implemented a
                comprehensive accounting system that:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>Reduced their accounting costs by 40%</li>
                <li>Streamlined financial reporting processes</li>
                <li>Ensured compliance with all regulatory requirements</li>
                <li>Provided valuable insights for strategic decision-making</li>
              </ul>
              <p className="text-gray-700">
                The company was able to focus on their core business while we handled all their accounting needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ca-darkBlue/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-ca-darkBlue mb-6">Finance Planning, Execution & Strategy</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            By outsourcing your accounts, you will be afforded the convenience of having a professional team take care
            of your accounts and all your needs & business essentials.
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
