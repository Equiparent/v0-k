export type CalendarEvent = {
  id: string
  date: Date
  label: string
  color: string
  tags: string[]
  notes?: string
  parent: "Papá" | "Mamá"
}

export type ColorOption = {
  name: string
  value: string
}

export const defaultColors: ColorOption[] = [
  { name: "Blue", value: "bg-blue-500" },
  { name: "Red", value: "bg-red-500" },
  { name: "Green", value: "bg-green-500" },
  { name: "Purple", value: "bg-purple-500" },
  { name: "Orange", value: "bg-orange-500" },
  { name: "Pink", value: "bg-pink-500" },
]
