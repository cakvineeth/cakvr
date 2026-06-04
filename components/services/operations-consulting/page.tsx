import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Operations Consulting - Capstone Associates",
  description: "Capstone Associates Operations Consulting Services",
}

const OperationsConsultingPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Operations Consulting</h1>
      <p className="mb-4">We help businesses optimize their operations for maximum efficiency and profitability.</p>
      <p className="mb-4">
        Our team of experienced consultants will work with you to identify areas for improvement and develop customized
        solutions to meet your specific needs.
      </p>

      <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-8 py-6 text-lg" asChild>
        <Link href="/contact">Schedule a Consultation</Link>
      </Button>
    </div>
  )
}

export default OperationsConsultingPage
