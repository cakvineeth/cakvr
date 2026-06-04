import Link from "next/link"
import { ArrowRight, BarChart2, Shield, Users, Cpu, TrendingUp, Settings } from "lucide-react"

export default function PartnershipSection() {
  const services = [
    {
      title: "Business Strategy",
      description:
        "Comprehensive business strategy development to align your organization with market opportunities in India.",
      icon: <TrendingUp className="h-6 w-6 text-indigo-500" />,
      link: "/services/business-strategy",
    },
    {
      title: "Financial Advisory",
      description: "Expert financial guidance to optimize performance, manage risks, and ensure long-term stability.",
      icon: <BarChart2 className="h-6 w-6 text-orange-500" />,
      link: "/services/financial-advisory",
    },
    {
      title: "Talent Management",
      description: "Strategies to attract, develop, and retain high-performing talent for organizational success.",
      icon: <Users className="h-6 w-6 text-blue-500" />,
      link: "/services/talent-management",
    },
    {
      title: "Operations Consulting",
      description: "Optimize your business operations to increase efficiency, reduce costs, and improve quality.",
      icon: <Settings className="h-6 w-6 text-green-500" />,
      link: "/services/operations-consulting",
    },
    {
      title: "Digital Transformation",
      description: "Navigate your digital journey with strategies that leverage technology for competitive advantage.",
      icon: <Cpu className="h-6 w-6 text-purple-500" />,
      link: "/services/digital-transformation",
    },
    {
      title: "Risk Management",
      description: "Identify, assess, and mitigate risks to protect your business and ensure continuity.",
      icon: <Shield className="h-6 w-6 text-red-500" />,
      link: "/services/risk-management",
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-100 opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-orange-100 opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wider text-indigo-600 uppercase mb-2">LET'S WORK TOGETHER</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Partner With Us To Transform Your Business
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our team of seasoned business advisors is ready to help you navigate challenges, capitalize on
            opportunities, and achieve sustainable growth. Let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-indigo-200 group"
            >
              <div className="mb-4 p-3 rounded-lg bg-gray-50 inline-block group-hover:bg-indigo-50 transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
