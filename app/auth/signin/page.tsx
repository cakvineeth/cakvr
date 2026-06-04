import SignInForm from "@/components/auth/SignInForm"

export const metadata = {
  title: "Sign In - CA Web Mosaic",
  description: "Sign in to your account",
}

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <SignInForm />
    </div>
  )
}
