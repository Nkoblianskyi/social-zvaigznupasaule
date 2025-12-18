"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import { PlayButton } from "./play-button"

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-28 bg-black"
      style={{
        backgroundImage: "url(/hero-casino-background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/70" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-600 bg-amber-950/80 px-4 py-2 backdrop-blur-sm">
            <Shield className="h-4 w-4 text-amber-500" />
            <span className="text-xs font-semibold uppercase tracking-wide text-amber-100">
              18+ • Bezmaksas • Nav Azartspēle
            </span>
          </div>

          <h1 className="font-serif text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Zvaigžņu Pasaule
          </h1>

          <p className="mt-4 text-xl font-medium text-amber-400 md:text-2xl">Kosmiskais Ceļojums</p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200">
            Profesionāla izklaides platforma ar kosmosa tēmu. Pilnībā bez maksas, bez reālas naudas vai balvām.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <PlayButton />
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-lg border-amber-600 px-8 text-sm font-semibold text-white hover:bg-amber-950/50 bg-transparent backdrop-blur-sm"
            >
              <Link href="/par-mums">Uzzināt Vairāk</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
