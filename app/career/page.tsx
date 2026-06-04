import Logo from "@/components/Logo"

export default function Career() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Logo size="large" />
          </div>
          <h1 className="text-4xl font-bold text-ca-darkBlue mb-4">Careers</h1>
        </div>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Join our team of dedicated professionals at CAKVR Business Advisors. We're always looking for talented
            individuals who are passionate about making a difference in the business world.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Current Openings</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">Senior Business Analyst</h3>
              <p className="text-gray-600 mb-4">
                We're seeking an experienced Business Analyst to join our consulting team.
              </p>
              <p className="text-gray-600">To apply, please send your resume to careers@cakvr.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
