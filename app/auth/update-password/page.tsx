import type { Metadata } from "next"
import UpdatePasswordForm from "@/components/auth/UpdatePasswordForm"

export const metadata: Metadata = {
  title: "Update Password | K Vineeth Reddy & Co",
  description: "Update your password",
}

export default function UpdatePasswordPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-md mx-auto">
        <UpdatePasswordForm />
      </div>
    </div>
  )
}
