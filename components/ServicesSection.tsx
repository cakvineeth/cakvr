"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Briefcase,
  TrendingUp,
  LineChart,
  Lightbulb,
  GitBranch,
  BarChart3,
  DollarSign,
  FileText,
  ShieldCheck,
  Settings,
  Users,
  PenTool,
  Building,
  Shield,
  ClipboardCheck,
  UserCheck,
  ArrowRight,
} from "lucide-react"

// Service categories with icons
const serviceCategories = [
  {
    id: "compliance",
    title: "Compliance & Governance",
    icon: Shield,
    color: "from-green-500 to-teal-600",
    description: "Ensure regulatory compliance, financial transparency, and effective corporate governance.",
    services: [
      {
        name: "Tax Compliance",
        icon: FileText,
        description: "Stay compliant with tax regulations and optimize tax planning.",
      },
      {
        name: "Audit & Assurance",
        icon: ClipboardCheck,
        description: "Independent audits to ensure financial accuracy and regulatory adherence.",
      },
      {
        name: "Business Incorporation",
        icon: Building,
        description: "Legal and procedural support for company formation and structuring.",
      },
      {
        name: "Virtual CFO",
        icon: UserCheck,
        description: "Outsourced financial leadership to drive business growth and stability.",
      },
    ],
  },
  {
    id: "strategic",
    title: "Strategic Advisory",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-600",
    description: "Expert guidance to help executives make informed decisions and drive sustainable business growth.",
    services: [
      {
        name: "Business Strategy",
        icon: TrendingUp,
        description: "Develop actionable strategies to achieve long-term objectives.",
      },
      {
        name: "Business Analysis",
        icon: LineChart,
        description: "In-depth assessments to identify strengths, weaknesses, opportunities, and threats.",
      },
      {
        name: "Innovation Strategy",
        icon: Lightbulb,
        description: "Foster innovation to create sustainable competitive advantage.",
      },
      {
        name: "Change Management",
        icon: GitBranch,
        description: "Successfully navigate organizational change with minimal disruption.",
      },
      {
        name: "Business Incorporation",
        icon: Building,
        description: "Expert assistance in selecting the right business entity for your needs.",
      },
    ],
  },
  {
    id: "financial",
    title: "Financial Excellence",
    icon: BarChart3,
    color: "from-purple-500 to-ca-purple",
    description: "Comprehensive financial solutions to optimize performance and ensure long-term stability.",
    services: [
      {
        name: "Cash Flow Management",
        icon: DollarSign,
        description: "Optimize cash flow to improve liquidity and financial health.",
      },
      {
        name: "Financial Planning",
        icon: FileText,
        description: "Create robust financial plans to ensure long-term stability.",
      },
      {
        name: "Fundraising Strategy",
        icon: Briefcase,
        description: "Develop effective strategies to secure funding for growth.",
      },
      {
        name: "Risk Management",
        icon: ShieldCheck,
        description: "Identify and mitigate financial risks to protect business assets.",
      },
    ],
  },
  {
    id: "operational",
    title: "Operational Optimization",
    icon: Settings,
    color: "from-orange-500 to-ca-orange",
    description: "Streamline processes and enhance efficiency to maximize productivity and profitability.",
    services: [
      {
        name: "Process Optimization",
        icon: Settings,
        description: "Streamline operations to maximize efficiency and productivity.",
      },
      {
        name: "Talent Management",
        icon: Users,
        description: "Build and retain high-performing teams through effective HR strategies.",
      },
      {
        name: "Strategic Marketing",
        icon: PenTool,
        description: "Develop marketing strategies aligned with business objectives.",
      },
      { name: "Business Development", icon: Building, description: "Identify and capitalize on growth opportunities." },
    ],
  },
]

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id)

  const activeServices = serviceCategories.find((cat) => cat.id === activeCategory)?.services || []

  return (
    <section
      id="services"
      className="py-20 md:py-24 xl:py-28 bg-gradient-to-b from-white to-ca-lightGray relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white -z-10"></div>
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-ca-purple/5 -z-10"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-ca-orange/5 -z-10"></div>

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 xl:mb-16">
          <div className="inline-flex items-center px-4 py-1 bg-ca-orange/10 rounded-full text-ca-orange text-sm font-medium mb-4">
            <span className="mr-2">✦</span>
            OUR EXPERTISE
            <span className="ml-2">✦</span>
          </div>
          <h2 className="text-[clamp(2.25rem,4vw,3.75rem)] font-bold text-gray-900 mb-6 tracking-tight">
            Comprehensive <span className="text-ca-orange">Business Advisory</span> Services
          </h2>
          <p className="text-lg text-gray-600">
            Our suite of services is designed to help businesses thrive by addressing critical strategic, financial, and
            operational needs.
          </p>
        </div>

        {/* Service category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r " + category.color + " text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 shadow-sm"
              }`}
            >
              <category.icon
                className={`h-5 w-5 ${activeCategory === category.id ? "text-white" : "text-gray-500"} mr-2`}
              />
              {category.title}
            </button>
          ))}
        </div>

        {/* Active category description */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gray-700 text-lg">
            {serviceCategories.find((cat) => cat.id === activeCategory)?.description}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 mb-16">
          {activeServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:border-gray-200 group"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:scale-110 bg-gradient-to-r ${
                  activeCategory === "compliance"
                    ? "from-green-500 to-teal-600"
                    : activeCategory === "strategic"
                      ? "from-blue-500 to-indigo-600"
                      : activeCategory === "financial"
                        ? "from-purple-500 to-ca-purple"
                        : "from-orange-500 to-ca-orange"
                }`}
              >
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            className="bg-ca-purple hover:bg-ca-lightPurple text-white px-8 py-3 rounded-full shadow-lg transition-all hover:shadow-xl"
            asChild
          >
            <Link href="/services">
              Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
