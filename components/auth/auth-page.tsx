"use client"
import { Button } from "@/components/ui/button"

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Logo Section */}
      <div className="mb-8 text-center">
        <div className="w-64 h-40 bg-[#1a1f3c] rounded-xl relative mb-4 flex items-center justify-center">
          {/* Logo Icon */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white" stroke="currentColor">
                  <path
                    d="M12 3v3m0 0l-4 8h8l-4-8zm0 0l4 8M6 19h12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Parent Figures */}
          <div className="flex justify-between w-full px-12 absolute bottom-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full" />
            <div className="w-8 h-8 bg-blue-500 rounded-full" />
          </div>

          {/* Logo Text */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xl font-bold tracking-wider text-white">
            EQUI PARENTS
          </div>
        </div>
      </div>

      {/* Tagline */}
      <h2 className="text-center text-lg mb-8 max-w-xs">Por una infancia al centro y libre de conflictos</h2>

      {/* Login Options */}
      <div className="w-full max-w-sm space-y-4">
        <Button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 rounded-full"
          onClick={() => console.log("Sign in with email")}
        >
          Sign in with Email
        </Button>

        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white border-gray-800"
            onClick={() => console.log("Sign in with Google")}
          >
            Google
          </Button>
          <Button
            variant="outline"
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white border-gray-800"
            onClick={() => console.log("Sign in with Apple")}
          >
            Apple ID
          </Button>
        </div>

        <p className="text-xs text-gray-400 text-center pt-4">By Continuing you agree to the Terms and Conditions</p>
      </div>
    </div>
  )
}
