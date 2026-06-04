import type { Metadata } from "next"
import ResetPasswordForm from "@/components/auth/ResetPasswordForm"

export const metadata: Metadata = {
  title: "Reset Password | K Vineeth Reddy & Co",
  description: "Reset your password",
}

export default function ResetPasswordPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-md mx-auto">
        <ResetPasswordForm />
      </div>
    </div>
  )
}
