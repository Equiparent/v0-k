import Link from "next/link"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/dashboard"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        Dashboard
      </Link>
      <Link
        href="/calendar"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/calendar" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        Calendario
      </Link>
      <Link
        href="/custody-schedules"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/custody-schedules" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        Régimen de Visitas
      </Link>
      <Link
        href="/financial-summary"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/financial-summary" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        Resumen Financiero
      </Link>
    </nav>
  )
}

