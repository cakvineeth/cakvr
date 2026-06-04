"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, ExternalLink } from "lucide-react"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="bg-ca-darkBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Logo variant="light" size="medium" />
            </div>
            <p className="text-gray-300 mb-6">
              K Vineeth Reddy & Co LLP, Chartered Accountants, led by CA K Vineeth Reddy, partners with C-suite
              executives to advance their businesses and improve ROI through strategic initiatives, financial
              management, and operational excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Rest of the footer content remains the same */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Services
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Knowledge Center
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/business-strategy" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Business Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/financial-advisory" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Financial Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services/operations-consulting"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> Operations Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-incorporation"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> Business Incorporation
                </Link>
              </li>
              <li>
                <Link href="/services/virtual-cfo" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Virtual CFO
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-ca-orange" />
                <span className="text-gray-300">
                  3RD FLOOR, ASK TOWERS, NO 74/3, ITPL Main Rd, above EMPIRE HOTEL, Lakshminarayana Pura, Munnekollal,
                  Bengaluru, Karnataka 560037
                </span>
              </li>
              <li className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-ca-orange" />
                  <a href="tel:+918884449446" className="text-gray-300 hover:text-white transition-colors">
                    +91 88844 49446
                  </a>
                </div>
                <div className="flex items-center ml-8">
                  <a href="tel:+917026278880" className="text-gray-300 hover:text-white transition-colors">
                    +91 70262 78880
                  </a>
                </div>
              </li>
              <li className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-ca-orange" />
                  <a href="mailto:office@cakvr.com" className="text-gray-300 hover:text-white transition-colors">
                    office@cakvr.com
                  </a>
                </div>
                <div className="flex items-center ml-8">
                  <a href="mailto:cavineeth@cakvr.com" className="text-gray-300 hover:text-white transition-colors">
                    cavineeth@cakvr.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} K Vineeth Reddy & Co LLP - Chartered Accountants. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Miolo.in Attribution */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <a
            href="https://miolo.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center group"
          >
            <span className="text-gray-500 text-xs group-hover:text-ca-orange transition-colors duration-300">
              Designed & Developed by
            </span>
            <span className="ml-1.5 text-gray-400 font-semibold text-xs group-hover:text-white transition-colors duration-300">
              miolo.in
            </span>
            <ExternalLink className="h-3 w-3 ml-1 text-gray-500 group-hover:text-ca-orange transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
