import { Mail, MapPin, Phone, Shield } from "lucide-react"

export default function KontaktiPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full border-b border-gray-200 bg-gray-50 py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-serif text-4xl font-bold text-black">Kontakti</h1>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">Sazinies ar mums par jebkādiem jautājumiem</p>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-black">Tālrunis</h3>
                <a href="tel:+37120123456" className="text-gray-600 hover:text-amber-600">
                  +371 20 123 456
                </a>
                <p className="mt-1 text-sm text-gray-500">P-Pk: 9:00-18:00</p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-black">E-pasts</h3>
                <a href="mailto:info@zvaigznupasaule.lv" className="text-gray-600 hover:text-amber-600">
                  info@zvaigznupasaule.lv
                </a>
                <p className="mt-1 text-sm text-gray-500">Atbildēsim 24h laikā</p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-black">Adrese</h3>
                <p className="text-gray-600">Brīvības iela 40</p>
                <p className="text-gray-600">Rīga, LV-1050</p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border-l-4 border-amber-600 bg-amber-50 p-6">
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 text-amber-600" />
                <div>
                  <h3 className="mb-2 font-semibold text-black">Atbildīga Spēle</h3>
                  <p className="text-sm text-gray-700">
                    Ja ir problēmas ar spēlēšanu, sazinies ar Spēle Bez Risku:{" "}
                    <a href="tel:27799699" className="font-medium text-amber-700 underline">
                      27799699
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
