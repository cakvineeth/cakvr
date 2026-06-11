"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Calculator, Link2, Database, Landmark } from "lucide-react"
import Logo from "./Logo"

const MANAGER_PRO_LOGIN_URL = "https://manager-pro-gamma.vercel.app/"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isKnowledgeMenuOpen, setIsKnowledgeMenuOpen] = useState(false)
  const [isMobileKnowledgeOpen, setIsMobileKnowledgeOpen] = useState(false)
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false)
  const [isMobileLoginOpen, setIsMobileLoginOpen] = useState(false)
  const pathname = usePathname()
  const knowledgeMenuRef = useRef<HTMLDivElement>(null)
  const mobileKnowledgeRef = useRef<HTMLDivElement>(null)
  const servicesMenuRef = useRef<HTMLDivElement>(null)
  const mobileServicesRef = useRef<HTMLDivElement>(null)
  const loginMenuRef = useRef<HTMLDivElement>(null)
  const mobileLoginRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const toggleKnowledgeMenu = () => {
    setIsKnowledgeMenuOpen(!isKnowledgeMenuOpen)
    if (isServicesMenuOpen) setIsServicesMenuOpen(false)
    if (isLoginMenuOpen) setIsLoginMenuOpen(false)
  }

  const toggleMobileKnowledge = () => {
    setIsMobileKnowledgeOpen(!isMobileKnowledgeOpen)
  }

  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen)
    if (isKnowledgeMenuOpen) setIsKnowledgeMenuOpen(false)
    if (isLoginMenuOpen) setIsLoginMenuOpen(false)
  }

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen)
  }

  const toggleLoginMenu = () => {
    setIsLoginMenuOpen(!isLoginMenuOpen)
    if (isKnowledgeMenuOpen) setIsKnowledgeMenuOpen(false)
    if (isServicesMenuOpen) setIsServicesMenuOpen(false)
  }

  const toggleMobileLogin = () => {
    setIsMobileLoginOpen(!isMobileLoginOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const isKnowledgeActive = () => {
    return pathname.startsWith("/knowledge") || pathname.startsWith("/ca-tools")
  }

  const desktopNavItemClass = (active: boolean) =>
    `inline-flex h-10 items-center border-b-2 px-1 text-sm font-medium leading-none ${
      active
        ? "border-ca-purple text-gray-900"
        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
    }`

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (knowledgeMenuRef.current && !knowledgeMenuRef.current.contains(event.target as Node)) {
        setIsKnowledgeMenuOpen(false)
      }
      if (mobileKnowledgeRef.current && !mobileKnowledgeRef.current.contains(event.target as Node)) {
        setIsMobileKnowledgeOpen(false)
      }
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
        setIsServicesMenuOpen(false)
      }
      if (mobileServicesRef.current && !mobileServicesRef.current.contains(event.target as Node)) {
        setIsMobileServicesOpen(false)
      }
      if (loginMenuRef.current && !loginMenuRef.current.contains(event.target as Node)) {
        setIsLoginMenuOpen(false)
      }
      if (mobileLoginRef.current && !mobileLoginRef.current.contains(event.target as Node)) {
        setIsMobileLoginOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Logo linkWrapper={false} size="small" />
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
            <div className="flex items-center gap-5 xl:gap-8">
              <Link
                href="/"
                className={desktopNavItemClass(isActive("/"))}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={desktopNavItemClass(isActive("/about"))}
              >
                About Us
              </Link>
              {/* Services Link */}
              <div className="relative" ref={servicesMenuRef}>
                <button
                  onClick={toggleServicesMenu}
                  className={`${desktopNavItemClass(pathname.startsWith("/services"))} gap-1`}
                  aria-expanded={isServicesMenuOpen}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isServicesMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isServicesMenuOpen && (
                  <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Link
                        href="/services/accounting"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        Accounting & Bookkeeping
                      </Link>
                      <Link
                        href="/services/audit"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        Audit & Assurance
                      </Link>
                      <Link
                        href="/services/taxation"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        Taxation Services
                      </Link>
                      <Link
                        href="/services/business-consultancy"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        Business Consultancy
                      </Link>
                      <Link
                        href="/services/business-incorporation"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        Business Incorporation
                      </Link>
                      <Link
                        href="/services/secretarial-works"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        Secretarial Works
                      </Link>
                      <Link
                        href="/services/virtual-cfo"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        Virtual CFO
                      </Link>
                      <Link
                        href="/services/business-valuation"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        Business Valuation
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={knowledgeMenuRef}>
                <button
                  onClick={toggleKnowledgeMenu}
                  className={`${desktopNavItemClass(isKnowledgeActive())} gap-1`}
                  aria-expanded={isKnowledgeMenuOpen}
                >
                  Knowledge Center
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isKnowledgeMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isKnowledgeMenuOpen && (
                  <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Link
                        href="/knowledge"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsKnowledgeMenuOpen(false)}
                      >
                        Knowledge Center
                      </Link>
                      <Link
                        href="/ca-tools/tax-calculator"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsKnowledgeMenuOpen(false)}
                      >
                        <Calculator className="mr-2 h-4 w-4 text-ca-purple" />
                        Tax Calculator
                      </Link>
                      <Link
                        href="/ca-tools/emi-calculator"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsKnowledgeMenuOpen(false)}
                      >
                        <Landmark className="mr-2 h-4 w-4 text-ca-purple" />
                        EMI Calculator
                      </Link>
                      <Link
                        href="/ca-tools/important-links"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsKnowledgeMenuOpen(false)}
                      >
                        <Link2 className="mr-2 h-4 w-4 text-ca-purple" />
                        Important Links
                      </Link>
                      <Link
                        href="/ca-tools/ca-data"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsKnowledgeMenuOpen(false)}
                      >
                        <Database className="mr-2 h-4 w-4 text-ca-purple" />
                        Important Information
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className={desktopNavItemClass(isActive("/contact"))}
              >
                Contact
              </Link>

              <div className="relative" ref={loginMenuRef}>
                <button
                  onClick={toggleLoginMenu}
                  className="inline-flex h-10 items-center gap-1 rounded-md bg-ca-purple px-4 text-sm font-medium leading-none text-white hover:bg-ca-purple/90"
                  aria-expanded={isLoginMenuOpen}
                >
                  Login
                  <ChevronDown className={`h-4 w-4 transition-transform ${isLoginMenuOpen ? "rotate-180" : ""}`} />
                </button>

                {isLoginMenuOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <a
                        href={MANAGER_PRO_LOGIN_URL}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsLoginMenuOpen(false)}
                      >
                        Employee/Client Login
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ca-purple"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive("/")
                ? "border-ca-purple text-ca-purple bg-ca-purple/10"
                : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            }`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive("/about")
                ? "border-ca-purple text-ca-purple bg-ca-purple/10"
                : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            }`}
            onClick={closeMenu}
          >
            About
          </Link>
          {/* Services Mobile Section - Styled like Login */}
          <div className="border-l-4 border-transparent" ref={mobileServicesRef}>
            <button
              onClick={toggleMobileServices}
              className="w-full flex items-center justify-between pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              <span>Services</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {isMobileServicesOpen && (
              <div className="mt-2 space-y-1 px-2">
                <Link
                  href="/services/accounting"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <span>Accounting & Bookkeeping</span>
                </Link>
                <Link
                  href="/services/audit"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <span>Audit & Assurance</span>
                </Link>
                <Link
                  href="/services/taxation"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <span>Taxation Services</span>
                </Link>
                <Link
                  href="/services/business-consultancy"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <span>Business Consultancy</span>
                </Link>
                <Link
                  href="/services/business-incorporation"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <span>Business Incorporation</span>
                </Link>
                <Link
                  href="/services/secretarial-works"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <span>Secretarial Works</span>
                </Link>
                <Link
                  href="/services/virtual-cfo"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <span>Virtual CFO</span>
                </Link>
                <Link
                  href="/services/business-valuation"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <span>Business Valuation</span>
                </Link>
              </div>
            )}
          </div>

          <div className="border-l-4 border-transparent" ref={mobileKnowledgeRef}>
            <button
              onClick={toggleMobileKnowledge}
              className="w-full flex items-center justify-between pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              <span>Knowledge Center</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isMobileKnowledgeOpen ? "rotate-180" : ""}`} />
            </button>

            {isMobileKnowledgeOpen && (
              <div className="mt-2 space-y-1 px-2">
                <Link
                  href="/knowledge"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <span>Knowledge Center</span>
                </Link>
                <Link
                  href="/ca-tools/tax-calculator"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <Calculator className="mr-2 h-5 w-5 text-ca-purple" />
                  <span>Tax Calculator</span>
                </Link>
                <Link
                  href="/ca-tools/emi-calculator"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <Landmark className="mr-2 h-5 w-5 text-ca-purple" />
                  <span>EMI Calculator</span>
                </Link>
                <Link
                  href="/ca-tools/important-links"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <Link2 className="mr-2 h-5 w-5 text-ca-purple" />
                  <span>Important Links</span>
                </Link>
                <Link
                  href="/ca-tools/ca-data"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <Database className="mr-2 h-5 w-5 text-ca-purple" />
                  <span>Important Information</span>
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive("/contact")
                ? "border-ca-purple text-ca-purple bg-ca-purple/10"
                : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            }`}
            onClick={closeMenu}
          >
            Contact
          </Link>

          <div className="border-l-4 border-transparent" ref={mobileLoginRef}>
            <button
              onClick={toggleMobileLogin}
              className="w-full flex items-center justify-between pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              <span>Login</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isMobileLoginOpen ? "rotate-180" : ""}`} />
            </button>

            {isMobileLoginOpen && (
              <div className="mt-2 space-y-1 px-2">
                <a
                  href={MANAGER_PRO_LOGIN_URL}
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <span>Employee/Client Login</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
