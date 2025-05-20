import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Home, LogOut } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Hola Javiera</h1>
        </div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home-xK7fynQwq2juzAOoF26lD0lvA3RdQO.png"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </header>

      {/* Navigation Tabs */}
      <Tabs defaultValue="home" className="px-4">
        <TabsList className="bg-transparent border-b border-gray-800 w-full justify-start h-auto p-0 gap-8">
          <TabsTrigger
            value="home"
            className="bg-transparent text-blue-500 px-0 pb-2 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none"
          >
            HOME
          </TabsTrigger>
          <TabsTrigger
            value="agenda"
            className="bg-transparent text-gray-500 px-0 pb-2 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none"
          >
            AGENDA HOY
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Today's Activities */}
      <div className="p-4">
        <div className="text-sm mb-2">HOY: Próximas actividades</div>
        <div className="flex gap-2 text-xs mb-4">
          <span>TIEMPO</span>
          <span className="text-gray-500">PENSIÓN</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg mb-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home-xK7fynQwq2juzAOoF26lD0lvA3RdQO.png"
            alt="Time distribution"
            width={200}
            height={200}
            className="w-full max-w-[200px] mx-auto"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Categorías</h2>
        <div className="grid gap-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="text-sm">Agenda Compartida</div>
                  <span className="text-xs bg-gray-800 px-2 py-0.5 rounded">5 New</span>
                </div>
                <div className="text-xs text-blue-500">9/24</div>
              </div>
              <Progress value={37.5} className="h-1 bg-gray-800" />
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="text-sm">Gestión de Gastos</div>
                  <span className="text-xs bg-gray-800 px-2 py-0.5 rounded">2 New</span>
                </div>
                <div className="text-xs text-purple-500">3/15</div>
              </div>
              <Progress value={20} className="h-1 bg-gray-800" />
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="text-sm">Mediación</div>
                  <span className="text-xs bg-gray-800 px-2 py-0.5 rounded">9 New</span>
                </div>
                <div className="text-xs text-orange-500">4/18</div>
              </div>
              <Progress value={22} className="h-1 bg-gray-800" />
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="text-sm">Solicitudes de cambios</div>
                  <span className="text-xs bg-gray-800 px-2 py-0.5 rounded">5 New</span>
                </div>
                <div className="text-xs text-green-500">5/24</div>
              </div>
              <Progress value={20.8} className="h-1 bg-gray-800" />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4">
        <div className="flex justify-between max-w-md mx-auto">
          <button className="text-gray-400 hover:text-white">
            <Home className="w-6 h-6" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
