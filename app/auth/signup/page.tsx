import SignUpForm from "@/components/auth/SignUpForm"

export const metadata = {
  title: "Sign Up - CA Web Mosaic",
  description: "Create a new account",
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <SignUpForm />
    </div>
  )
}
