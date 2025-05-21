"use client"

import { useState } from "react"
import { useSession, signOut, signIn } from "next-auth/react"
import { X, AlertCircle } from "lucide-react"
import UserProfile from "@/components/auth/user-profile"

export default function Home() {
  const { data: session, status } = useSession()
  const [showPermissions, setShowPermissions] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const isAuthenticated = status === "authenticated" && session?.user

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" })
  }

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      setError(null)
      await signIn("google", { callbackUrl: "/" })
    } catch (err) {
      console.error("Authentication error:", err)
      setError("Failed to authenticate with Google. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">EQUI PARENTS</h1>
      <p className="text-xl mb-8 text-center">Por una infancia al centro y libre de conflictos</p>

      {error && (
        <div className="bg-red-900/50 border border-red-500 rounded-md p-4 mb-6 flex items-start gap-3 max-w-md">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-500">Authentication Error</p>
            <p className="text-sm text-gray-300">{error}</p>
          </div>
        </div>
      )}

      {isAuthenticated ? (
        <div className="flex flex-col items-center gap-6">
          <UserProfile />
          <button onClick={handleSignOut} className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-full">
            Sign Out
          </button>
        </div>
      ) : status === "loading" || isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full w-full max-w-xs"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign in with Google
          </button>
          <button className="mt-4 text-sm text-gray-400 hover:text-gray-300" onClick={() => setShowPermissions(true)}>
            View required permissions
          </button>
        </>
      )}

      {/* Permissions Popup */}
      {showPermissions && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-lg w-full max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setShowPermissions(false)}
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-6 text-center">Required Permissions</h2>

            <div className="space-y-4">
              <div className="pt-2">
                <h3 className="text-sm font-medium text-gray-400 mb-3">Google Account Permissions</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-2 w-5 h-5 flex items-center justify-center bg-blue-500 rounded-full text-white text-xs">
                      ✓
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300">Profile Information</p>
                      <p className="text-xs text-gray-400">Access to your name, email, and profile picture</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-md"
                  onClick={() => setShowPermissions(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
