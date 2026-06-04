"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  ChevronDown,
  Calculator,
  Calendar,
  Link2,
  Database,
  BookOpen,
  Newspaper,
  LogIn,
  User,
  Users,
  ExternalLink,
} from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import Logo from "./Logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isKnowledgeMenuOpen, setIsKnowledgeMenuOpen] = useState(false)
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false)
  const [isMobileKnowledgeOpen, setIsMobileKnowledgeOpen] = useState(false)
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const { user, signOut } = useAuth()
  const userMenuRef = useRef<HTMLDivElement>(null)
  const knowledgeMenuRef = useRef<HTMLDivElement>(null)
  const loginMenuRef = useRef<HTMLDivElement>(null)
  const mobileKnowledgeRef = useRef<HTMLDivElement>(null)
  const servicesMenuRef = useRef<HTMLDivElement>(null)
  const mobileServicesRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen)
    if (isKnowledgeMenuOpen) setIsKnowledgeMenuOpen(false)
    if (isLoginMenuOpen) setIsLoginMenuOpen(false)
    if (isServicesMenuOpen) setIsServicesMenuOpen(false)
  }

  const toggleKnowledgeMenu = () => {
    setIsKnowledgeMenuOpen(!isKnowledgeMenuOpen)
    if (isUserMenuOpen) setIsUserMenuOpen(false)
    if (isLoginMenuOpen) setIsLoginMenuOpen(false)
    if (isServicesMenuOpen) setIsServicesMenuOpen(false)
  }

  const toggleLoginMenu = () => {
    setIsLoginMenuOpen(!isLoginMenuOpen)
    if (isUserMenuOpen) setIsUserMenuOpen(false)
    if (isKnowledgeMenuOpen) setIsKnowledgeMenuOpen(false)
    if (isServicesMenuOpen) setIsServicesMenuOpen(false)
  }

  const toggleMobileKnowledge = () => {
    setIsMobileKnowledgeOpen(!isMobileKnowledgeOpen)
  }

  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen)
    if (isUserMenuOpen) setIsUserMenuOpen(false)
    if (isKnowledgeMenuOpen) setIsKnowledgeMenuOpen(false)
    if (isLoginMenuOpen) setIsLoginMenuOpen(false)
  }

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const isKnowledgeActive = () => {
    return (
      pathname.startsWith("/blog") ||
      pathname.startsWith("/news") ||
      pathname.startsWith("/knowledge") ||
      pathname.startsWith("/ca-tools")
    )
  }

  const handleSignOut = async () => {
    await signOut()
    setIsUserMenuOpen(false)
    closeMenu()
  }

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
      if (knowledgeMenuRef.current && !knowledgeMenuRef.current.contains(event.target as Node)) {
        setIsKnowledgeMenuOpen(false)
      }
      if (loginMenuRef.current && !loginMenuRef.current.contains(event.target as Node)) {
        setIsLoginMenuOpen(false)
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
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Logo linkWrapper={false} size="small" />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-end md:flex-1">
            <div className="flex space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/")
                    ? "border-ca-purple text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/about")
                    ? "border-ca-purple text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                About Us
              </Link>
              {/* Services Link */}
              <div className="relative" ref={servicesMenuRef}>
                <button
                  onClick={toggleServicesMenu}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname.startsWith("/services")
                      ? "border-ca-purple text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  aria-expanded={isServicesMenuOpen}
                >
                  Services
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${isServicesMenuOpen ? "rotate-180" : ""}`}
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

              {/* Knowledge Center Dropdown */}
              <div className="relative" ref={knowledgeMenuRef}>
                <button
                  onClick={toggleKnowledgeMenu}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isKnowledgeActive()
                      ? "border-ca-purple text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  aria-expanded={isKnowledgeMenuOpen}
                >
                  Knowledge Center
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${isKnowledgeMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isKnowledgeMenuOpen && (
                  <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Link
                        href="/blog"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsKnowledgeMenuOpen(false)}
                      >
                        <BookOpen className="mr-2 h-4 w-4 text-ca-purple" />
                        Blogs
                      </Link>
                      <Link
                        href="/news"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsKnowledgeMenuOpen(false)}
                      >
                        <Newspaper className="mr-2 h-4 w-4 text-ca-purple" />
                        News
                      </Link>
                    </div>
                    <div className="py-1">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500">CA Tools</div>
                      <Link
                        href="/ca-tools/tax-calculator"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsKnowledgeMenuOpen(false)}
                      >
                        <Calculator className="mr-2 h-4 w-4 text-ca-purple" />
                        Tax Calculator
                      </Link>
                      <Link
                        href="/ca-tools/important-dates"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsKnowledgeMenuOpen(false)}
                      >
                        <Calendar className="mr-2 h-4 w-4 text-ca-purple" />
                        Important Dates
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
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/contact")
                    ? "border-ca-purple text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Contact
              </Link>
            </div>
            <div className="ml-8 flex items-center space-x-4">
              {user ? (
                <div className="relative ml-3" ref={userMenuRef}>
                  <button
                    type="button"
                    onClick={toggleUserMenu}
                    className="flex items-center space-x-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ca-purple"
                    id="user-menu-button"
                    aria-expanded={isUserMenuOpen}
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-ca-purple flex items-center justify-center text-white">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-gray-700 font-medium hidden lg:inline-block">
                      {user.email?.split("@")[0]}
                    </span>
                  </button>

                  {isUserMenuOpen && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <Link
                        href="/account"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabIndex={-1}
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Your Account
                      </Link>
                      {user.email === "karthikeyakumar.nallam@gmail.com" && (
                        <Link
                          href="/admin/blog"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          tabIndex={-1}
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Admin Dashboard
                        </Link>
                      )}
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative" ref={loginMenuRef}>
                  <button
                    onClick={toggleLoginMenu}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-ca-purple hover:bg-gray-50"
                    aria-expanded={isLoginMenuOpen}
                  >
                    <LogIn className="mr-1.5 h-4 w-4" />
                    Login
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${isLoginMenuOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isLoginMenuOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <a
                          href="https://kvineethreddyco.cacloud.ca.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsLoginMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <User className="mr-2 h-4 w-4 text-ca-purple" />
                            <span>Client Login</span>
                          </div>
                          <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
                        </a>
                        <a
                          href="https://kvineethreddyco.cacloud.ca.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsLoginMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-ca-purple" />
                            <span>Employer Login</span>
                          </div>
                          <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
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
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
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

          {/* Knowledge Center Mobile Section - Styled like Login */}
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
                <div className="pl-3 pr-4 py-1 text-xs font-semibold text-gray-500">Resources</div>
                <Link
                  href="/blog"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <BookOpen className="mr-2 h-5 w-5 text-ca-purple" />
                  <span>Blogs</span>
                </Link>
                <Link
                  href="/news"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <Newspaper className="mr-2 h-5 w-5 text-ca-purple" />
                  <span>News</span>
                </Link>

                <div className="pl-3 pr-4 py-1 text-xs font-semibold text-gray-500">CA Tools</div>
                <Link
                  href="/ca-tools/tax-calculator"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <Calculator className="mr-2 h-5 w-5 text-ca-purple" />
                  <span>Tax Calculator</span>
                </Link>
                <Link
                  href="/ca-tools/important-dates"
                  className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  <Calendar className="mr-2 h-5 w-5 text-ca-purple" />
                  <span>Important Dates</span>
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
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          {user ? (
            <div className="space-y-1">
              <div className="flex items-center px-4 py-2">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-ca-purple flex items-center justify-center text-white">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800 truncate max-w-[200px]">{user.email}</div>
                </div>
              </div>
              <Link
                href="/account"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                onClick={closeMenu}
              >
                Your Account
              </Link>
              {user.email === "karthikeyakumar.nallam@gmail.com" && (
                <Link
                  href="/admin/blog"
                  className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                  onClick={closeMenu}
                >
                  Admin Dashboard
                </Link>
              )}
              <button
                onClick={handleSignOut}
                className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="mt-3 space-y-1 px-2">
              <div className="pl-3 pr-4 py-1 text-xs font-semibold text-gray-500">Login Options</div>
              <a
                href="https://kvineethreddyco.cacloud.ca.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={closeMenu}
              >
                <div className="flex items-center">
                  <User className="mr-2 h-5 w-5 text-ca-purple" />
                  <span>Client Login</span>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </a>
              <a
                href="https://kvineethreddyco.cacloud.ca.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={closeMenu}
              >
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-ca-purple" />
                  <span>Employer Login</span>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
