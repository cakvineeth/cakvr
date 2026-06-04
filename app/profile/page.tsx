import type { Metadata } from "next"
import ProfilePage from "@/components/auth/ProfilePage"

export const metadata: Metadata = {
  title: "Profile | K Vineeth Reddy & Co LLP",
  description: "Manage your profile",
}

export default function Profile() {
  return (
    <div className="container mx-auto py-12 px-4">
      <ProfilePage />
    </div>
  )
}
