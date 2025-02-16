import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Control</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Calendario</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/calendar" className="text-blue-500 hover:underline">
              Ver calendario
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Régimen de Visitas</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/custody-schedules" className="text-blue-500 hover:underline">
              Ver régimen de visitas
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resumen Financiero</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/financial-summary" className="text-blue-500 hover:underline">
              Ver resumen financiero
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

