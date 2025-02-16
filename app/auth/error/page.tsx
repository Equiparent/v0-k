import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AuthError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold">Error de Autenticación</h1>
        <p className="text-muted-foreground">
          Ha ocurrido un error durante la autenticación. Por favor, intente nuevamente.
        </p>
        <Button asChild>
          <Link href="/auth/signin">Volver al Inicio de Sesión</Link>
        </Button>
      </div>
    </div>
  )
}

