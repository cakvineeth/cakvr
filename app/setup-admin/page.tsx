"use client"

export default function SetupAdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-ca-darkBlue mb-4">Admin Setup</h1>
        <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
          <h3 className="text-amber-800 font-medium mb-2">Feature Not Available</h3>
          <p className="text-amber-700">
            The admin setup feature is not available in this version of the application. Please contact your system
            administrator for assistance with setting up admin accounts.
          </p>
        </div>
        <button
          onClick={() => window.history.back()}
          className="w-full bg-ca-purple hover:bg-ca-lightPurple text-white py-2 px-4 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}
