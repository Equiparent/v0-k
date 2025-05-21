"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"

export default function UserProfile() {
  const { data: session } = useSession()
  const user = session?.user

  if (!user) return null

  return (
    <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg max-w-sm w-full">
      {user.image ? (
        <div className="mb-4 rounded-full overflow-hidden w-24 h-24 border-2 border-blue-500">
          <Image
            src={user.image || "/placeholder.svg"}
            alt={user.name || "User"}
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
      ) : (
        <div className="mb-4 rounded-full overflow-hidden w-24 h-24 border-2 border-blue-500 bg-gray-800 flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-500">
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </span>
        </div>
      )}
      <h2 className="text-xl font-bold">{user.name || "User"}</h2>
      <p className="text-gray-400">{user.email}</p>
      <div className="mt-4 text-sm text-gray-300">
        <p>✓ Authentication successful</p>
        <p>✓ Profile information retrieved</p>
      </div>
    </div>
  )
}
