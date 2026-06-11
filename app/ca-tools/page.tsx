import Link from "next/link"
import { Calculator, Link2, Database, Landmark } from "lucide-react"

export default function CAToolsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CA Tools & Resources</h1>
        <p className="text-gray-600">Essential tools and resources for Chartered Accountants in India</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/ca-tools/tax-calculator">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
            <div className="p-6 flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Calculator className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Tax Calculator</h2>
                <p className="text-gray-600">
                  Calculate income tax liability for individuals under both old and new tax regimes
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/ca-tools/emi-calculator">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
            <div className="p-6 flex items-start">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Landmark className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">EMI Calculator</h2>
                <p className="text-gray-600">
                  Calculate monthly EMI, total interest, and a detailed repayment schedule.
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/ca-tools/important-links">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
            <div className="p-6 flex items-start">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Link2 className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Important Links</h2>
                <p className="text-gray-600">
                  Directory of essential government portals, financial institutions, and professional resources
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/ca-tools/ca-data">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
            <div className="p-6 flex items-start">
              <div className="bg-amber-100 p-3 rounded-lg mr-4">
                <Database className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Important Information</h2>
                <p className="text-gray-600">
                  Comprehensive reference for tax rates, limits, and other important information
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
