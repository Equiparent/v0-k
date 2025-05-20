"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, HelpCircle, Home, Menu, Plus, Search, Settings } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { EventDialog } from "./components/calendar/event-dialog"
import type { CalendarEvent } from "./types/calendar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type CalendarDay = {
  date: Date
  isCurrentMonth: boolean
  isToday?: boolean
}

export default function CoCalendar() {
  const [currentDate, setCurrentDate] = React.useState(new Date())
  const [selectedDate, setSelectedDate] = React.useState<Date>()
  const [events, setEvents] = React.useState<CalendarEvent[]>([])
  const [isEventDialogOpen, setIsEventDialogOpen] = React.useState(false)
  const [selectedEvent, setSelectedEvent] = React.useState<CalendarEvent>()

  const weekDays = ["LUN", "MAR", "MIE", "JUE", "VIE", "SÁB", "DOM"]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)

    const daysInMonth = []
    const startingDay = firstDay.getDay() || 7 // Convert Sunday (0) to 7

    // Add days from previous month
    const prevMonthLastDay = new Date(year, month, 0).getDate()
    for (let i = startingDay - 1; i > 0; i--) {
      daysInMonth.push({
        date: new Date(year, month - 1, prevMonthLastDay - i + 1),
        isCurrentMonth: false,
      })
    }

    // Add days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysInMonth.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
        isToday: i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear(),
      })
    }

    // Add days from next month
    const remainingDays = 42 - daysInMonth.length // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      daysInMonth.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
      })
    }

    return daysInMonth
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleToday = () => {
    setCurrentDate(new Date())
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    setIsEventDialogOpen(true)
  }

  const handleEventClick = (event: CalendarEvent, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedEvent(event)
    setIsEventDialogOpen(true)
  }

  const handleSaveEvent = (eventData: Partial<CalendarEvent>) => {
    if (selectedEvent) {
      setEvents(events.map((event) => (event.id === selectedEvent.id ? { ...event, ...eventData } : event)))
    } else {
      setEvents([...events, eventData as CalendarEvent])
    }
    setSelectedEvent(undefined)
  }

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter((event) => event.id !== eventId))
  }

  const daysInMonth = getDaysInMonth(currentDate)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between border-b border-gray-800">
        <button className="p-2">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-medium">Co-calendario</h1>
        <button className="p-2">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Calendar Navigation */}
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        <button className="text-sm font-medium hover:text-blue-500" onClick={handleToday}>
          Hoy
        </button>
        <div className="flex items-center gap-2">
          <button className="p-1" onClick={handlePrevMonth}>
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm font-medium">
            {currentDate.toLocaleString("es-ES", { month: "long", year: "numeric" })}
          </span>
          <button className="p-1" onClick={handleNextMonth}>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <Button size="icon" variant="ghost" className="rounded-full" onClick={() => setIsEventDialogOpen(true)}>
            <Plus className="w-5 h-5" />
          </Button>
          <button>
            <Search className="w-5 h-5" />
          </button>
          <button>
            <HelpCircle className="w-5 h-5" />
          </button>
          <button>
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 p-4">
        <div className="grid grid-cols-7 gap-1">
          {/* Week days */}
          {weekDays.map((day) => (
            <div key={day} className="text-center text-xs font-medium text-gray-400 py-2">
              {day}
            </div>
          ))}

          {/* Calendar days */}
          {daysInMonth.map((day, index) => {
            const dayEvents = events.filter((event) => event.date.toDateString() === day.date.toDateString())

            return (
              <div
                key={index}
                className={`aspect-square p-1 text-center cursor-pointer hover:bg-gray-800 rounded-lg
                  ${!day.isCurrentMonth ? "text-gray-600" : ""}`}
                onClick={() => handleDateClick(day.date)}
              >
                <div
                  className={`h-full rounded-lg flex flex-col items-center justify-start p-1
                    ${day.isToday ? "bg-blue-500" : ""}`}
                >
                  <span className="text-sm">{day.date.getDate()}</span>
                  <div className="flex flex-col gap-1 w-full">
                    {dayEvents.map((event) => (
                      <DropdownMenu key={event.id}>
                        <DropdownMenuTrigger asChild>
                          <button
                            className={`text-[10px] px-2 py-0.5 rounded w-full ${event.color} text-white`}
                            onClick={(e) => handleEventClick(event, e)}
                          >
                            {event.parent}
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-gray-800 border-gray-700">
                          <DropdownMenuItem className="text-red-500" onClick={() => handleDeleteEvent(event.id)}>
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-gray-800 p-4">
        <div className="flex justify-between items-center">
          <button className="p-2">
            <Home className="w-6 h-6" />
          </button>
          <span className="font-medium">Salir</span>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co-calendar%20(1)-i7Yck5DXCE7znRPN8LwjokF2Og4pmR.png"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Event Dialog */}
      <EventDialog
        isOpen={isEventDialogOpen}
        onClose={() => {
          setIsEventDialogOpen(false)
          setSelectedEvent(undefined)
        }}
        onSave={handleSaveEvent}
        event={selectedEvent}
        selectedDate={selectedDate}
      />
    </div>
  )
}
