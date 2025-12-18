import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Star, Shield, Clock, Users, Gift } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Star className="h-5 w-5" />,
      title: "Kosmosa Tēma",
      description: "Profesionāli dizainēti simboli ar kosmosa motīviem.",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "100% Bezmaksas",
      description: "Nav reālas naudas, nav maksājumu, nav finanšu risku.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Ātra Spēle",
      description: "Vienkārša un ātri ielādējama spēles mehānika.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Sociāla Platforma",
      description: "Izklaides platforma bez azartspēļu elementiem.",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Ikdienas Bonusi",
      description: "Regulāri saņemiet bezmaksas griezienus.",
    },
    {
      icon: <Gift className="h-5 w-5" />,
      title: "Punktu Sistēma",
      description: "Virtuālie punkti tikai statistikas nolūkiem.",
    },
  ]

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-black md:text-4xl">Platformas Funkcijas</h2>
          <p className="mt-3 text-base text-gray-600">
            Profesionāla sociālās izklaides platforma ar mūsdienīgām funkcijām.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 bg-white transition-shadow hover:shadow-md">
              <CardHeader className="pb-4">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <div className="text-amber-600">{feature.icon}</div>
                </div>
                <CardTitle className="text-lg font-semibold text-black">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
