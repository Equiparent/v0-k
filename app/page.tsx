import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "./api/auth/[...nextauth]/route"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span>Coparenting App</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/contact" className="text-sm text-muted-foreground">
            Contact
          </Link>
          <Button asChild>
            <Link href="/auth/signin">Iniciar Sesión</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Bienvenido a Coparenting App</h1>
          <p className="text-xl text-muted-foreground">
            La plataforma que facilita la coordinación entre padres separados
          </p>
          <Button size="lg" asChild>
            <Link href="/auth/signin">Comenzar</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

