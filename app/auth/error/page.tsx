"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function AuthError() {
  const searchParams = useSearchParams()
  const [errorMessage, setErrorMessage] = useState<string>("An authentication error occurred")

  useEffect(() => {
    const error = searchParams.get("error")
    if (error) {
      switch (error) {
        case "Configuration":
          setErrorMessage("There is a problem with the server configuration.")
          break
        case "AccessDenied":
          setErrorMessage("You do not have permission to sign in.")
          break
        case "Verification":
          setErrorMessage("The verification link may have been used or is no longer valid.")
          break
        case "OAuthSignin":
          setErrorMessage("Error in the OAuth sign-in process.")
          break
        case "OAuthCallback":
          setErrorMessage("Error in the OAuth callback process.")
          break
        case "OAuthCreateAccount":
          setErrorMessage("Could not create OAuth provider user in the database.")
          break
        case "EmailCreateAccount":
          setErrorMessage("Could not create email provider user in the database.")
          break
        case "Callback":
          setErrorMessage("Error in the OAuth callback handler.")
          break
        case "OAuthAccountNotLinked":
          setErrorMessage("The email on the account is already linked, but not with this OAuth account.")
          break
        case "EmailSignin":
          setErrorMessage("The e-mail could not be sent.")
          break
        case "CredentialsSignin":
          setErrorMessage("The sign in attempt failed. Check the details you provided are correct.")
          break
        case "SessionRequired":
          setErrorMessage("You must be signed in to access this page.")
          break
        default:
          setErrorMessage(`An unexpected error occurred: ${error}`)
          break
      }
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-red-500">Authentication Error</h1>
        <p className="mb-6">{errorMessage}</p>
        <div className="flex flex-col gap-4">
          <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-center">
            Return to Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  )
}
