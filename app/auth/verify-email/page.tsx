import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Verify Email | K Vineeth Reddy & Co",
  description: "Verify your email address",
}

export default function VerifyEmailPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-md mx-auto">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Verify Your Email</CardTitle>
            <CardDescription>Please check your email for a verification link</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-6">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <p className="text-center text-gray-700 mb-4">
              We've sent a verification link to your email address. Please click the link to verify your account.
            </p>
            <p className="text-center text-gray-500 text-sm">
              If you don't see the email, check your spam folder or request a new verification link.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/auth/signin">
              <Button variant="outline" className="mr-2">
                Back to Sign In
              </Button>
            </Link>
            <Button className="bg-ca-purple hover:bg-ca-lightPurple">Resend Verification</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
