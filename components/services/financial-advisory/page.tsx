import { Button } from "@/components/ui/button"
import Link from "next/link"

const FinancialAdvisoryPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Financial Advisory Services</h1>
      <p className="mb-4">
        We offer comprehensive financial advisory services to help you achieve your financial goals.
      </p>
      <p className="mb-4">
        Our team of experienced financial advisors can provide guidance on a wide range of topics, including:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Investment planning</li>
        <li>Retirement planning</li>
        <li>Estate planning</li>
        <li>Tax planning</li>
      </ul>
      <p className="mb-4">
        We work closely with our clients to develop personalized financial plans that are tailored to their individual
        needs and circumstances.
      </p>
      <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-8 py-6 text-lg" asChild>
        <Link href="/contact">Schedule a Consultation</Link>
      </Button>
    </div>
  )
}

export default FinancialAdvisoryPage
