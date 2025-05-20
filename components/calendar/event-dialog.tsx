"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { type CalendarEvent, defaultColors } from "@/types/calendar"

interface EventDialogProps {
  isOpen: boolean
  onClose: () => void
  onSave: (event: Partial<CalendarEvent>) => void
  event?: CalendarEvent
  selectedDate?: Date
}

export function EventDialog({ isOpen, onClose, onSave, event, selectedDate }: EventDialogProps) {
  const [label, setLabel] = React.useState(event?.label || "")
  const [color, setColor] = React.useState(event?.color || defaultColors[0].value)
  const [notes, setNotes] = React.useState(event?.notes || "")
  const [parent, setParent] = React.useState<"Papá" | "Mamá">(event?.parent || "Papá")
  const [tags, setTags] = React.useState<string>(event?.tags?.join(", ") || "")

  const handleSave = () => {
    onSave({
      id: event?.id || crypto.randomUUID(),
      date: selectedDate || event?.date || new Date(),
      label,
      color,
      notes,
      parent,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white">
        <DialogHeader>
          <DialogTitle>{event ? "Edit Event" : "Add Event"}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="label">Label</Label>
            <Input
              id="label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="bg-gray-800 border-gray-700"
            />
          </div>
          <div className="grid gap-2">
            <Label>Color</Label>
            <div className="flex gap-2">
              {defaultColors.map((colorOption) => (
                <button
                  key={colorOption.value}
                  className={`w-6 h-6 rounded-full ${colorOption.value} ${
                    color === colorOption.value ? "ring-2 ring-white" : ""
                  }`}
                  onClick={() => setColor(colorOption.value)}
                />
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="parent">Parent</Label>
            <Select value={parent} onValueChange={(value: "Papá" | "Mamá") => setParent(value)}>
              <SelectTrigger className="bg-gray-800 border-gray-700">
                <SelectValue placeholder="Select parent" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="Papá">Papá</SelectItem>
                <SelectItem value="Mamá">Mamá</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="bg-gray-800 border-gray-700"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="bg-gray-800 border-gray-700"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
