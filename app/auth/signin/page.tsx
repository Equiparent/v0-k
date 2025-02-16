"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Github, GitlabIcon, Mail } from "lucide-react"
import Link from "next/link"

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span>Coparenting App</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/contact" className="text-sm text-muted-foreground">
            Contact
          </Link>
          <Link href="/signup" className="text-sm font-medium">
            Sign Up
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-sm space-y-4 px-4">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Log in to Coparenting App</h1>
          </div>

          <div className="space-y-2">
            <Button variant="outline" className="w-full" onClick={() => signIn("github")}>
              <Github className="mr-2 h-4 w-4" />
              Continue with GitHub
            </Button>

            <Button
              variant="outline"
              className="w-full bg-[#6e49cb] text-white hover:bg-[#6e49cb]/90"
              onClick={() => signIn("gitlab")}
            >
              <GitlabIcon className="mr-2 h-4 w-4" />
              Continue with GitLab
            </Button>

            <Button variant="outline" className="w-full" onClick={() => signIn("email")}>
              <Mail className="mr-2 h-4 w-4" />
              Continue with Email
            </Button>
          </div>

          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              {"Don't have an account? "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

