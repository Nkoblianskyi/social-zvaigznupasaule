"use client"

import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { GamePreview } from "@/components/game-preview"
import { About } from "@/components/about"
import { PlayButton } from "@/components/play-button"
import { GameDescription } from "@/components/game-description"
import { Disclaimer } from "@/components/disclaimer"
import { Train } from "lucide-react"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Features />
      <GamePreview />
      <About />
      <GameDescription />
      <section className="w-full bg-gradient-to-br from-amber-500 to-amber-600 py-24 text-white">
        <div className="container flex flex-col items-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <Train className="h-10 w-10" />
          </div>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-balance text-center sm:text-5xl">
            Gatavs Sākt Ceļojumu?
          </h2>
          <p className="mt-4 max-w-2xl text-center text-lg text-amber-50">
            Pievienojies mums un pieredzē Latvijas dzelzceļa piedzīvojumu pilnībā bez maksas. Tikai izklaide, bez naudas
            vai balvām.
          </p>
          <div className="mt-8">
            <PlayButton />
          </div>
          <p className="mt-6 text-sm text-amber-100">18+ • Nav Azartspēle • Pilnībā Bezmaksas • Nav Reālas Naudas</p>
        </div>
      </section>
      <Disclaimer type="bottom" className="container my-8" />
    </main>
  )
}
