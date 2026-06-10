"use client"

import { useDisclaimer } from "@/contexts/DisclaimerContext"
import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Scale } from "lucide-react"

export default function DisclaimerModal() {
  const { hasAgreed, setHasAgreed } = useDisclaimer()

  const handleAgree = () => {
    setHasAgreed(true)
    try {
      localStorage.setItem("disclaimerAgreed", "true")
    } catch (error) {
      console.error("Failed to save disclaimer agreement to localStorage", error)
    }
  }

  if (hasAgreed) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ca-darkBlue/80 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div className="flex max-h-[min(90vh,720px)] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl">
        {/* Header */}
        <div className="shrink-0 bg-gradient-to-r from-ca-darkBlue via-ca-purple to-ca-lightPurple px-6 py-5 text-white sm:px-8">
          <div className="mb-4 flex justify-center [&_img]:h-auto [&_img]:max-h-14 [&_img]:w-auto [&_img]:brightness-0 [&_img]:invert">
            <Logo size="small" linkWrapper={false} />
          </div>
          <div className="flex items-center justify-center gap-2">
            <Scale className="h-5 w-5 shrink-0 text-ca-orange" aria-hidden />
            <h2 id="disclaimer-title" className="text-center text-xl font-semibold tracking-tight sm:text-2xl">
              Disclaimer
            </h2>
          </div>
          <p className="mt-2 text-center text-sm text-white/80">
            Institute of Chartered Accountants of India (ICAI) guidelines
          </p>
        </div>

        {/* Body */}
        <ScrollArea className="min-h-0 flex-1">
          <div className="space-y-5 px-6 py-6 text-sm leading-relaxed text-gray-700 sm:px-8 sm:text-[0.9375rem]">
            <section className="rounded-lg border border-ca-purple/15 bg-ca-lightGray/80 p-4 sm:p-5">
              <p className="text-gray-800">
                As per the{" "}
                <span className="font-medium text-ca-darkBlue">Chartered Accountants Act 1949</span> and the
                guidelines laid down by the{" "}
                <span className="font-medium text-ca-darkBlue">
                  Institute of Chartered Accountants of India (ICAI)
                </span>
                , CAs are prohibited from soliciting clients or professional work either directly or indirectly.
                This website is only intended to provide general information about{" "}
                <span className="font-semibold text-ca-purple">K VINEETH REDDY &amp; CO</span>, its Partners,
                services it renders and updates regarding Taxation and Accounting.
              </p>
            </section>

            <section>
              <p className="mb-3 font-medium text-ca-darkBlue">
                By clicking on &ldquo;I Agree&rdquo;, the user acknowledges the following:
              </p>
              <ul className="space-y-3 border-l-2 border-ca-orange/60 pl-4 sm:pl-5">
                <li className="relative pl-1">
                  <span className="absolute -left-[1.125rem] top-2 h-1.5 w-1.5 rounded-full bg-ca-purple" aria-hidden />
                  The user wishes to gain more information about{" "}
                  <span className="font-semibold text-ca-purple">K VINEETH REDDY &amp; CO LLP</span> for his/her own
                  use on his own accord.
                </li>
                <li className="relative pl-1">
                  <span className="absolute -left-[1.125rem] top-2 h-1.5 w-1.5 rounded-full bg-ca-purple" aria-hidden />
                  There has been no advertisement, personal communication, invitation or inducement of any sort
                  whatsoever from K VINEETH REDDY &amp; CO LLP or any of its partners to solicit work through its
                  website.
                </li>
                <li className="relative pl-1">
                  <span className="absolute -left-[1.125rem] top-2 h-1.5 w-1.5 rounded-full bg-ca-purple" aria-hidden />
                  Any information obtained or material downloaded from this website is completely at the
                  user&apos;s volition. Information contained in the website is not in the nature of professional
                  opinion and would not under any circumstances be equivalent to any professional advice.
                </li>
              </ul>
            </section>
          </div>
        </ScrollArea>

        {/* Footer */}
        <div className="shrink-0 border-t border-gray-200 bg-gray-50/80 px-6 py-4 sm:px-8 sm:py-5">
          <Button
            type="button"
            onClick={handleAgree}
            size="lg"
            className="w-full bg-gradient-to-r from-ca-darkBlue to-ca-purple text-white hover:from-ca-purple hover:to-ca-darkBlue sm:max-w-xs sm:mx-auto sm:flex"
          >
            I Agree
          </Button>
          <p className="mt-3 text-center text-xs text-gray-500">
            You must accept this disclaimer to continue to the website.
          </p>
        </div>
      </div>
    </div>
  )
}
