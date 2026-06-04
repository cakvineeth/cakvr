import AboutPageContentNew from "@/components/about/AboutPageContentNew"
import Testimonials from "@/components/Testimonials"

export const metadata = {
  title: "About Us | K Vineeth Reddy & Co LLP",
  description:
    "Learn about K Vineeth Reddy & Co LLP, our founder, partners, values, and expertise in financial advisory and business consulting",
}

export default function About() {
  return (
    <>
      <AboutPageContentNew />
      <Testimonials title="What our clients say about us" subtitle="CLIENT TESTIMONIALS" />
    </>
  )
}
