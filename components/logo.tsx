import Link from "next/link"
import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 shadow-md">
        <Sparkles className="h-6 w-6 text-white" />
      </div>
      <span className="font-serif text-2xl font-bold text-black">Zvaigžņu Pasaule</span>
    </Link>
  )
}
