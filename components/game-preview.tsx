"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { AgeVerificationModal } from "./age-verification-modal"

export function GamePreview() {
  const [showAgeModal, setShowAgeModal] = useState(false)
  const router = useRouter()

  const features = [
    "Kosmosa simboli",
    "Profesionālas animācijas",
    "Vienkārša spēle",
    "Punktu sistēma",
    "Ikdienas griezieni",
    "100% bez maksas",
  ]

  const handlePlayClick = () => {
    console.log("[v0] GamePreview play button clicked")
    console.log("[v0] Setting showAgeModal to true")
    setShowAgeModal(true)
  }

  const handleAgeConfirmed = () => {
    console.log("[v0] GamePreview age confirmed, navigating")
    setShowAgeModal(false)
    router.push("/spele/kosmiskais-celojums")
  }

  const handleModalClose = () => {
    console.log("[v0] GamePreview modal closed")
    setShowAgeModal(false)
  }

  console.log("[v0] GamePreview render, showAgeModal:", showAgeModal)

  return (
    <>
      <section className="w-full bg-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-lg border border-amber-600 bg-amber-50 px-3 py-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-amber-900">Spēle</span>
              </div>

              <h2 className="font-serif text-3xl font-bold text-black md:text-4xl">Kosmiskais Ceļojums</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Eleganta spēle ar kosmosa tēmu. Moderna funkcionalitāte un profesionāls dizains.
              </p>

              <ul className="mt-6 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100">
                      <Check className="h-3 w-3 text-amber-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={handlePlayClick}
                size="lg"
                className="mt-8 h-12 rounded-lg bg-amber-600 px-8 text-sm font-semibold text-white hover:bg-amber-700"
              >
                Sākt Spēli
              </Button>
            </div>

            <Card className="overflow-hidden border-gray-200 bg-white shadow-lg">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4 p-8">
                      <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800/50 border-2 border-amber-600/30">
                        <span className="text-3xl">🌟</span>
                      </div>
                      <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800/50 border-2 border-amber-600/30">
                        <span className="text-3xl">🚀</span>
                      </div>
                      <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800/50 border-2 border-amber-600/30">
                        <span className="text-3xl">🌙</span>
                      </div>
                      <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800/50 border-2 border-amber-600/30">
                        <span className="text-3xl">⭐</span>
                      </div>
                      <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800/50 border-2 border-amber-600/30">
                        <span className="text-3xl">🪐</span>
                      </div>
                      <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800/50 border-2 border-amber-600/30">
                        <span className="text-3xl">🌟</span>
                      </div>
                      <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800/50 border-2 border-amber-600/30">
                        <span className="text-3xl">🌙</span>
                      </div>
                      <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800/50 border-2 border-amber-600/30">
                        <span className="text-3xl">🚀</span>
                      </div>
                      <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800/50 border-2 border-amber-600/30">
                        <span className="text-3xl">⭐</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-4 top-4 rounded-lg bg-amber-600 px-3 py-1.5">
                    <span className="text-xs font-bold text-white">BEZMAKSAS</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <AgeVerificationModal open={showAgeModal} onOpenChange={handleModalClose} onConfirm={handleAgeConfirmed} />
    </>
  )
}
