"use client"

import { useState } from "react"
import { ChevronLeft, Home, Menu, Plus, X } from "lucide-react"
import Image from "next/image"

type ActivityType = {
  id: string
  name: string
  icon: string
  selected?: boolean
}

type Message = {
  id: string
  text: string
  sender: "user" | "other"
  timestamp: string
  needsResponse?: boolean
}

export default function ChangeRequestPage() {
  const [showActivityModal, setShowActivityModal] = useState(true)
  const [activityTypes, setActivityTypes] = useState<ActivityType[]>([
    { id: "1", name: "Solicitud de Médico", icon: "🏥", selected: true },
    { id: "2", name: "Vacaciones", icon: "🏖️", selected: false },
    { id: "3", name: "Viaje", icon: "✈️", selected: false },
    { id: "4", name: "Actividad de Disfraces", icon: "🎭", selected: false },
  ])

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hola, tengo viaje de trabajo y necesito cambiar de semana. Del 15/7 al 22/7",
      sender: "user",
      timestamp: "10:30",
      needsResponse: true,
    },
    {
      id: "2",
      text: "Puedo, pero hasta el 20/7",
      sender: "other",
      timestamp: "10:35",
    },
  ])

  const toggleActivitySelection = (id: string) => {
    setActivityTypes(
      activityTypes.map((activity) =>
        activity.id === id ? { ...activity, selected: !activity.selected } : { ...activity, selected: false },
      ),
    )
  }

  const closeActivityModal = () => {
    setShowActivityModal(false)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <button className="mr-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-medium">Solicitud de Cambios</h1>
        </div>
        <button>
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 space-y-4">
        {/* Activity Type Modal */}
        {showActivityModal && (
          <div className="bg-white text-black rounded-lg overflow-hidden">
            <div className="flex justify-end p-2">
              <button onClick={closeActivityModal}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-4 pb-4">
              <h2 className="text-center font-medium mb-4">Agregue Actividad</h2>
              <div className="space-y-3">
                {activityTypes.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => toggleActivitySelection(activity.id)}
                  >
                    <div className="w-5 h-5 rounded-full border border-blue-500 flex items-center justify-center">
                      {activity.selected && <div className="w-3 h-3 rounded-full bg-blue-500" />}
                    </div>
                    <span className="text-sm">{activity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Chat Messages */}
        <div className="bg-white text-black rounded-lg overflow-hidden">
          <div className="flex justify-end p-2">
            <button>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 space-y-4">
            {/* User Message */}
            <div className="bg-gray-200 rounded-lg p-3 max-w-[90%] ml-auto">
              <p className="text-sm">Hola, tengo viaje de trabajo y necesito cambiar de semana. Del 15/7 al 22/7</p>
            </div>

            {/* Response Actions */}
            <div className="bg-red-500 text-white p-3 rounded-lg">
              <p className="text-center text-sm mb-2">Acepta o declina? Agregar comentario</p>
              <div className="flex justify-center gap-4">
                <button className="bg-white text-black px-6 py-1 rounded-full text-sm">No</button>
                <button className="bg-white text-black px-6 py-1 rounded-full text-sm">Yes</button>
              </div>
            </div>

            {/* Other Person Message */}
            <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[90%]">
              <p className="text-sm">Puedo, pero hasta el 20/7</p>
            </div>

            {/* Add Message Button */}
            <div className="flex justify-start">
              <button className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                <Plus className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-gray-800 p-4">
        <div className="flex justify-between items-center">
          <button>
            <Home className="w-6 h-6 text-gray-400" />
          </button>
          <span className="text-gray-400">Salir</span>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chat-bwPIvMMKJeLhCV4FZtxpgUaI30vxKf.png"
              alt="Profile"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
