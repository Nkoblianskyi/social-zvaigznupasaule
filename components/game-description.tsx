"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Star, Trophy, AlertTriangle } from "lucide-react"

export function GameDescription() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-black md:text-4xl">Kā Spēlēt Kosmisko Ceļojumu</h2>
          <p className="mt-4 text-base text-gray-600">Vienkārša spēle - sāciet ceļojumu cauri zvaigžņu pasaulei.</p>
        </div>

        <div className="mx-auto mb-12 grid max-w-4xl gap-6 md:grid-cols-3">
          <Card className="border-gray-200 bg-white">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                <Sparkles className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-black">1. Nospiediet Pogu</h3>
              <p className="text-sm text-gray-600">Sāciet ceļojumu nospiežot pogu. Kosmiskais kuģis sāks lidojumu.</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-black">2. Vērojiet Simbolus</h3>
              <p className="text-sm text-gray-600">Kad kuģis apstājas, jūs redzēsiet dažādus kosmiskos simbolus.</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                <Trophy className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-black">3. Vāciet Punktus</h3>
              <p className="text-sm text-gray-600">Turpiniet ceļot un vāciet virtuālos punktus izklaidei.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto max-w-3xl rounded-lg border border-red-200 bg-red-50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-600">
              <AlertTriangle className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold text-red-900">OBLIGĀTA INFORMĀCIJA</h3>
              <div className="space-y-2 text-sm text-red-900">
                <p>
                  <strong>NAV azartspēle</strong> - tikai izklaide
                </p>
                <p>
                  <strong>NAV nauda/balvas</strong> - visi punkti virtuāli
                </p>
                <p>
                  <strong>18+ OBLIGĀTI</strong> - tikai pieaugušajiem
                </p>
                <p className="mt-4 rounded-lg border border-red-300 bg-white p-3">
                  Problēmas?{" "}
                  <a
                    href="https://www.spele-bez-risku.lv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline"
                  >
                    Spēle Bez Risku
                  </a>{" "}
                  - <strong>27799699</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
