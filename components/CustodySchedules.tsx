"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type Schedule = {
  day: string
  parent: string
  time: string
}

const initialSchedules: Schedule[] = [
  { day: "Lunes", parent: "Madre", time: "15:00 - 20:00" },
  { day: "Martes", parent: "Padre", time: "15:00 - 20:00" },
  { day: "Miércoles", parent: "Madre", time: "15:00 - 20:00" },
  { day: "Jueves", parent: "Padre", time: "15:00 - 20:00" },
  { day: "Viernes", parent: "Madre", time: "15:00 - 20:00" },
  { day: "Sábado", parent: "Padre", time: "Todo el día" },
  { day: "Domingo", parent: "Madre", time: "Todo el día" },
]

export function CustodySchedules() {
  const [schedules, setSchedules] = useState<Schedule[]>(initialSchedules)
  const [editingSchedule, setEditingSchedule] = useState<Schedule | null>(null)

  const handleEditSchedule = (schedule: Schedule) => {
    setEditingSchedule(schedule)
  }

  const handleUpdateSchedule = () => {
    if (editingSchedule) {
      setSchedules(schedules.map((s) => (s.day === editingSchedule.day ? editingSchedule : s)))
      setEditingSchedule(null)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Régimen de Visitas</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Día</TableHead>
            <TableHead>Progenitor</TableHead>
            <TableHead>Horario</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedules.map((schedule) => (
            <TableRow key={schedule.day}>
              <TableCell>{schedule.day}</TableCell>
              <TableCell>{schedule.parent}</TableCell>
              <TableCell>{schedule.time}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button onClick={() => handleEditSchedule(schedule)}>Editar</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar Horario</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="parent">Progenitor</Label>
                        <Select
                          value={editingSchedule?.parent}
                          onValueChange={(value) =>
                            setEditingSchedule((prev) => (prev ? { ...prev, parent: value } : null))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar progenitor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Madre">Madre</SelectItem>
                            <SelectItem value="Padre">Padre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="time">Horario</Label>
                        <Input
                          id="time"
                          value={editingSchedule?.time}
                          onChange={(e) =>
                            setEditingSchedule((prev) => (prev ? { ...prev, time: e.target.value } : null))
                          }
                        />
                      </div>
                      <Button onClick={handleUpdateSchedule}>Guardar Cambios</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

