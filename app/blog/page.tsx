import BlogPageContent from "@/components/blog/BlogPageContent"
import Logo from "@/components/Logo"

export const metadata = {
  title: "Blog | K Vineeth Reddy & Co LLP",
  description: "Insights, articles, and resources on finance, accounting, and business strategy.",
}

export default function BlogPage() {
  return (
    <>
      <div className="py-12 bg-gradient-to-br from-ca-purple to-ca-darkBlue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full">
                <Logo size="large" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Insights & Resources</h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Expert articles and resources on finance, accounting, and business strategy
            </p>
          </div>
        </div>
      </div>
      <BlogPageContent />
    </>
  )
}
