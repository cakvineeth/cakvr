"use client"

import Image from "next/image"
import { Users, Award, TrendingUp, CheckCircle } from "lucide-react"

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ca-lightGray/50 rounded-bl-[200px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-ca-lightGray/50 rounded-tr-[120px] -z-10"></div>
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-ca-purple/10 -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-ca-orange/10 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-ca-lightGray/20 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-5 py-2 bg-ca-purple/10 rounded-full text-ca-purple text-sm font-semibold mb-6">
            <span className="mr-2">✦</span>
            OUR STORY
            <span className="ml-2">✦</span>
          </div>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
            Finance, Business and Brand <span className="text-ca-purple">Consulting Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering strategic financial solutions and business advisory services across South India since 2020
          </p>
        </div>

        {/* IMPROVED: Adjusted grid to give more space to the image section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-20 items-center">
          {/* IMPROVED: Left column - Larger image that takes 7 of 12 columns */}
          <div className="relative order-2 lg:order-1 lg:col-span-7">
            {/* IMPROVED: Taller image container */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[40/40] full relative">
                <Image
                  src="https://images.pexels.com/photos/5922204/pexels-photo-5922204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Financial advisory meeting"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ca-darkBlue/70 to-transparent"></div>

                {/* Enhanced overlay text */}
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="text-2xl font-bold drop-shadow-md mb-1">CAKVR Business Advisors</p>
                  <p className="text-base opacity-90">Financial Consulting Since 2020</p>
                </div>
              </div>
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 bg-gradient-to-br from-ca-purple to-ca-darkBlue rounded-3xl -z-10 opacity-90"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-ca-orange/30 rounded-2xl -z-10"></div>
          </div>

          {/* IMPROVED: Right column - Content now takes 5 of 12 columns for better balance */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <h3 className="text-2xl font-bold text-ca-darkBlue mb-6">Your Trusted Partner for Financial Excellence</h3>

            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              K Vineeth Reddy & Co LLP is a dynamic and client-focused firm of Chartered Accountants headquartered in
              Bengaluru. Established in 2020, we've quickly earned a reputation for delivering high-quality,
              value-driven services across diverse industries.
            </p>

            {/* Service highlights with check marks */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-100">
              <h4 className="font-semibold text-lg text-ca-darkBlue mb-4">Our Specialized Services</h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-black">Audit & Assurance</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-black">Direct & Indirect Taxation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-black"> Business Advisory & Strategic Consulting</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-black">Compliance Management</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ca-purple mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-black">M&A Advisory & Due Diligence</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Our firm combines deep industry knowledge with personalized service to deliver measurable outcomes. We're
              committed to ethical practices, continuous learning, and excellence in execution.
            </p>

            {/* Enhanced key stats with icons - Adjusted to fit in smaller space */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:bg-ca-purple/5">
                <div className="w-12 h-12 bg-ca-purple/15 rounded-xl flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-ca-purple" />
                </div>
                <p className="text-3xl font-bold text-ca-purple">750+</p>
                <p className="text-sm text-gray-600 font-medium">Clients Served</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:bg-ca-purple/5">
                <div className="w-12 h-12 bg-ca-purple/15 rounded-xl flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-ca-purple" />
                </div>
                <p className="text-3xl font-bold text-ca-purple">5+</p>
                <p className="text-sm text-gray-600 font-medium">Years Experience</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:bg-ca-purple/5">
                <div className="w-12 h-12 bg-ca-purple/15 rounded-xl flex items-center justify-center mb-3">
                  <TrendingUp className="h-6 w-6 text-ca-purple" />
                </div>
                <p className="text-3xl font-bold text-ca-purple">7+</p>
                <p className="text-sm text-gray-600 font-medium">Expert Consultants</p>
              </div>
            </div>

            {/* Added CTA button */}
            <div className="mt-8">
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 bg-ca-purple text-white rounded-xl font-medium transition-all hover:bg-ca-darkBlue shadow-lg hover:shadow-xl hover:translate-y-1"
              >
                Explore Our Services
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
