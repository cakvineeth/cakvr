"use client"
import { useDisclaimer } from "@/contexts/DisclaimerContext"

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

  // Only render if the user hasn't agreed
  if (hasAgreed) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>

          <div className="prose prose-sm max-w-none text-gray-700 mb-6 space-y-4">
            <p>
              As per the Chartered Accountants Act 1949 and the guidelines laid down by the Institute of Chartered
              Accountants of India (ICAI), CA's are prohibited from soliciting clients or professional work either
              directly or indirectly. This website is only intended to provide general information about K VINEETH REDDY
              & CO, its Partners, services it renders and updates regarding Taxation and Accounting.
            </p>

            <p>By clicking on "I Agree", the user acknowledges the following:</p>

            <p>
              The user wishes to gain more information about K VINEETH REDDY & CO LLP for his/her own use on his own
              accord. There has been no advertisement, personal communication, invitation or inducement of any sort
              whatsoever from K VINEETH REDDY & CO LLP or any of its partners to solicit work through its website. Any
              information obtained or material downloaded from this website is completely at the user's volition.
              Information contained in the website is not in the nature of professional opinion and would not under any
              circumstances be equivalent to any profession advice.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleAgree}
              className="px-6 py-3 bg-ca-purple text-white font-medium rounded-md hover:bg-ca-purple/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ca-purple focus:ring-offset-2"
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
