"use client"

import { useState } from "react"
import { Home, Trash2 } from "lucide-react"
import Image from "next/image"
import { Switch } from "@/components/ui/switch"

export default function ProfilePage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Profile Header */}
      <div className="flex flex-col items-center pt-10 pb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile-CP48tdCbSLMPGz8F4LShfIKPJVbiXX.png"
            alt="Profile"
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold mb-1">Javiera Rojas</h1>
        <p className="text-gray-500 text-sm">javieracowparen@equiparent.app</p>
      </div>

      {/* Notifications Section */}
      <div className="px-4 mb-6">
        <h2 className="text-gray-500 text-sm mb-2">Notificacion</h2>
        <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-between">
          <span className="font-medium">Activar Notificaciones</span>
          <Switch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
        </div>
      </div>

      {/* Invitation Links Section */}
      <div className="px-4">
        <h2 className="text-gray-500 text-sm mb-2">Link Invitación</h2>
        <div className="space-y-3">
          <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-between">
            <span className="font-medium">Invitar Personas</span>
            <button className="bg-blue-500 text-white px-6 py-1.5 rounded-full text-sm">ir</button>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-between">
            <span className="font-medium">Progreso Diario</span>
            <button className="bg-blue-500 text-white px-6 py-1.5 rounded-full text-sm">ir</button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto border-t border-gray-800 p-4">
        <div className="flex justify-between items-center">
          <button>
            <Home className="w-6 h-6 text-gray-400" />
          </button>
          <span className="text-gray-400">Salir</span>
          <button>
            <Trash2 className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  )
}
