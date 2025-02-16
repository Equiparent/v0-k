"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Child = {
  id: string
  name: string
  birthDate: string
  email?: string
  phone?: string
}

export function ChildrenManagement() {
  const [children, setChildren] = useState<Child[]>([])
  const [newChild, setNewChild] = useState<Omit<Child, "id">>({
    name: "",
    birthDate: "",
    email: "",
    phone: "",
  })

  const handleAddChild = () => {
    setChildren([...children, { ...newChild, id: Date.now().toString() }])
    setNewChild({ name: "", birthDate: "", email: "", phone: "" })
  }

  const handleUpdateChild = (id: string, field: keyof Omit<Child, "id">, value: string) => {
    setChildren(children.map((child) => (child.id === id ? { ...child, [field]: value } : child)))
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Agregar Hijo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="childName">Nombre</Label>
            <Input
              id="childName"
              value={newChild.name}
              onChange={(e) => setNewChild({ ...newChild, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="childBirthDate">Fecha de Nacimiento</Label>
            <Input
              id="childBirthDate"
              type="date"
              value={newChild.birthDate}
              onChange={(e) => setNewChild({ ...newChild, birthDate: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="childEmail">Correo Electrónico (opcional)</Label>
            <Input
              id="childEmail"
              type="email"
              value={newChild.email}
              onChange={(e) => setNewChild({ ...newChild, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="childPhone">Teléfono (opcional)</Label>
            <Input
              id="childPhone"
              type="tel"
              value={newChild.phone}
              onChange={(e) => setNewChild({ ...newChild, phone: e.target.value })}
            />
          </div>
          <Button onClick={handleAddChild} className="mt-4">
            Agregar Hijo
          </Button>
        </CardContent>
      </Card>

      {children.map((child) => (
        <Card key={child.id}>
          <CardHeader>
            <CardTitle>{child.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor={`childName-${child.id}`}>Nombre</Label>
              <Input
                id={`childName-${child.id}`}
                value={child.name}
                onChange={(e) => handleUpdateChild(child.id, "name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`childBirthDate-${child.id}`}>Fecha de Nacimiento</Label>
              <Input
                id={`childBirthDate-${child.id}`}
                type="date"
                value={child.birthDate}
                onChange={(e) => handleUpdateChild(child.id, "birthDate", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`childEmail-${child.id}`}>Correo Electrónico</Label>
              <Input
                id={`childEmail-${child.id}`}
                type="email"
                value={child.email}
                onChange={(e) => handleUpdateChild(child.id, "email", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`childPhone-${child.id}`}>Teléfono</Label>
              <Input
                id={`childPhone-${child.id}`}
                type="tel"
                value={child.phone}
                onChange={(e) => handleUpdateChild(child.id, "phone", e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

