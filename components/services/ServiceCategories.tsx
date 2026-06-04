"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart3, FileText, Shield, Briefcase, Building, TrendingUp, Users, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "financial",
    title: "Financial Advisory",
    icon: <BarChart3 className="h-6 w-6" />,
    description: "Expert financial guidance to optimize performance, manage risks, and ensure long-term stability.",
    color: "from-blue-500 to-blue-700",
    services: ["Financial Planning", "Cash Flow Management", "Risk Assessment", "Investment Strategy"],
  },
  {
    id: "compliance",
    title: "Compliance & Reporting",
    icon: <FileText className="h-6 w-6" />,
    description: "Stay compliant with all regulatory requirements and maintain accurate financial reporting.",
    color: "from-green-500 to-green-700",
    services: ["Tax Compliance", "Statutory Reporting", "Regulatory Filings", "Audit Support"],
  },
  {
    id: "risk",
    title: "Risk Management",
    icon: <Shield className="h-6 w-6" />,
    description: "Identify, assess, and mitigate risks to protect your business and ensure continuity.",
    color: "from-red-500 to-red-700",
    services: ["Risk Assessment", "Mitigation Strategies", "Business Continuity", "Fraud Prevention"],
  },
  {
    id: "strategy",
    title: "Business Strategy",
    icon: <Briefcase className="h-6 w-6" />,
    description: "Comprehensive business strategy development to align your organization with market opportunities.",
    color: "from-purple-500 to-purple-700",
    services: ["Strategic Planning", "Market Analysis", "Competitive Positioning", "Growth Strategy"],
  },
  {
    id: "operations",
    title: "Operations Consulting",
    icon: <Building className="h-6 w-6" />,
    description: "Optimize your business operations to increase efficiency, reduce costs, and improve quality.",
    color: "from-yellow-500 to-yellow-700",
    services: ["Process Optimization", "Operational Efficiency", "Supply Chain Management", "Quality Improvement"],
  },
  {
    id: "growth",
    title: "Growth & Innovation",
    icon: <TrendingUp className="h-6 w-6" />,
    description: "Drive sustainable growth through innovation, market expansion, and strategic initiatives.",
    color: "from-teal-500 to-teal-700",
    services: ["Innovation Strategy", "Market Expansion", "Digital Transformation", "Product Development"],
  },
  {
    id: "talent",
    title: "Talent Management",
    icon: <Users className="h-6 w-6" />,
    description: "Strategies to attract, develop, and retain high-performing talent for organizational success.",
    color: "from-indigo-500 to-indigo-700",
    services: ["Talent Acquisition", "Performance Management", "Leadership Development", "Succession Planning"],
  },
  {
    id: "digital",
    title: "Digital Transformation",
    icon: <Settings className="h-6 w-6" />,
    description: "Navigate your digital journey with strategies that leverage technology for competitive advantage.",
    color: "from-pink-500 to-pink-700",
    services: ["Digital Strategy", "Technology Implementation", "Data Analytics", "Process Automation"],
  },
]

const ServiceCategories = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  const activeItem = categories.find((cat) => cat.id === activeCategory)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ca-darkBlue mb-4">Our Service Categories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services designed to address all aspects of your business needs. Click on
            a category to learn more.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`cursor-pointer rounded-lg p-4 transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-br ${category.color} text-white shadow-lg scale-105`
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                    activeCategory === category.id ? "bg-white/20" : "bg-white"
                  }`}
                >
                  {category.icon}
                </div>
                <h3 className="font-bold">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {activeItem && (
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${activeItem.color} rounded-xl p-8 text-white shadow-xl`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  {activeItem.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{activeItem.title}</h3>
                <p className="text-white/90 mb-4">{activeItem.description}</p>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold mb-4">Key Services</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeItem.services.map((service, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h5 className="font-semibold mb-2">{service}</h5>
                      <p className="text-sm text-white/80">
                        Comprehensive {service.toLowerCase()} solutions tailored to your business needs.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button className="bg-white text-gray-800 hover:bg-white/80" asChild>
                <a href="/contact">Contact Us About {activeItem.title}</a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ServiceCategories
