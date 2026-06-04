import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ServicesPageContentNew = () => {
  // Define services with their details and links
  const services = [
    {
      title: "Financial Advisory",
      description: "Expert financial guidance to optimize performance, manage risks, and ensure long-term stability.",
      link: "/services/financial-advisory",
    },
    {
      title: "Business Strategy",
      description:
        "Comprehensive business strategy development to align your organization with market opportunities in India.",
      link: "/services/business-strategy",
    },
    {
      title: "Operations Consulting",
      description: "Optimize your business operations to increase efficiency, reduce costs, and improve quality.",
      link: "/services/operations-consulting",
    },
    {
      title: "Talent Management",
      description: "Strategies to attract, develop, and retain high-performing talent for organizational success.",
      link: "/services/talent-management",
    },
    {
      title: "Digital Transformation",
      description: "Navigate your digital journey with strategies that leverage technology for competitive advantage.",
      link: "/services/digital-transformation",
    },
    {
      title: "Risk Management",
      description: "Identify, assess, and mitigate risks to protect your business and ensure continuity.",
      link: "/services/risk-management",
    },
    {
      title: "Tax Services",
      description: "Comprehensive tax planning and compliance solutions for businesses and individuals.",
      link: "/services/taxation",
    },
    {
      title: "Audit & Assurance",
      description: "Independent verification of financial statements and business processes.",
      link: "/services/audit",
    },
    {
      title: "Business Incorporation",
      description: "Complete assistance with company formation and registration processes.",
      link: "/services/incorporation",
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Comprehensive business advisory and financial services tailored to your needs
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800">Our service categories</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              We offer a wide range of services to meet your business needs
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
                <h4 className="text-xl font-semibold text-gray-800">{service.title}</h4>
                <p className="mt-2 text-gray-600 flex-grow">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-ca-purple hover:text-ca-orange font-medium mt-4 inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPageContentNew
