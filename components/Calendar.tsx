import { useState } from "react"
import { Calendar as CalendarUI } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Calendario</h1>
      <div className="flex justify-between items-center mb-4">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Agregar Evento
        </Button>
      </div>
      <CalendarUI mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
    </div>
  )
}

