import { Database } from "lucide-react"

export default function CADataLoading() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Important Information</h1>
        <p className="text-gray-600">
          Comprehensive reference for tax rates, limits, and other important information for CA professionals in India
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-ca-darkBlue flex items-center">
            <Database className="mr-2 h-5 w-5" />
            Information Reference
          </h2>
        </div>

        <div className="p-6">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded mb-6"></div>
            <div className="flex flex-wrap gap-2 mb-8">
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
              <div className="h-8 w-20 bg-gray-200 rounded"></div>
              <div className="h-8 w-16 bg-gray-200 rounded"></div>
              <div className="h-8 w-28 bg-gray-200 rounded"></div>
            </div>

            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-4">
                      <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-4">
                      <div className="h-5 bg-gray-200 rounded w-2/3 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
