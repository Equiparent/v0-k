"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Home, Search, Settings, Trash2 } from "lucide-react"
import Image from "next/image"

type Activity = {
  id: string
  title: string
  icon: "book" | "user" | "document"
  color: string
}

export default function ActivitiesPage() {
  const [filter, setFilter] = useState<"all" | "favorite">("all")
  const [searchQuery, setSearchQuery] = useState("")

  const activities: Activity[] = [
    {
      id: "1",
      title: "Esta semana con niños",
      icon: "book",
      color: "bg-blue-500",
    },
    {
      id: "2",
      title: "Cumpleaños hijo mayor 28 Julio",
      icon: "user",
      color: "bg-green-500",
    },
    {
      id: "3",
      title: "Responder Solicitud",
      icon: "document",
      color: "bg-orange-500",
    },
  ]

  const getIconComponent = (iconType: Activity["icon"]) => {
    switch (iconType) {
      case "book":
        return (
          <div className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
              <path
                d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )
      case "user":
        return (
          <div className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
              <path
                d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )
      case "document":
        return (
          <div className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
              <path
                d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <button className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="text-center">
          <h1 className="text-lg font-medium">Próximas</h1>
          <h1 className="text-lg font-medium">Actividades</h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Daily%20progress-q5IyXRYtrnDHKVBuS2wLiJ6Y29VxmD.png"
            alt="Profile"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-800 rounded-full py-2 pl-4 pr-10 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 mb-4 flex gap-2">
        <button
          className={`px-6 py-1.5 rounded-full text-sm font-medium ${filter === "all" ? "bg-blue-500" : "bg-gray-800"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-6 py-1.5 rounded-full text-sm font-medium ${
            filter === "favorite" ? "bg-blue-500" : "bg-gray-800"
          }`}
          onClick={() => setFilter("favorite")}
        >
          Favorite
        </button>
      </div>

      {/* Activities */}
      <div className="px-4 flex-1">
        <div className="space-y-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-3 rounded-lg border border-green-500 bg-gray-900"
              style={{
                borderColor: activity.id === "1" ? "#22c55e" : activity.id === "2" ? "#22c55e" : "transparent",
                backgroundColor: activity.id === "3" ? "#1f2937" : "#111827",
              }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${activity.color} rounded-lg flex items-center justify-center`}>
                  {getIconComponent(activity.icon)}
                </div>
                <span className="text-sm font-medium">{activity.title}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-auto">
        <div className="flex justify-end px-4 py-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Daily%20progress-q5IyXRYtrnDHKVBuS2wLiJ6Y29VxmD.png"
              alt="Profile"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <button className="ml-2">
            <Settings className="w-6 h-6 text-gray-400" />
          </button>
        </div>
        <div className="border-t border-gray-800 p-4">
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
    </div>
  )
}
