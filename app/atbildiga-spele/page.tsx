import { ShieldAlert, Phone, Mail, ExternalLink, AlertTriangle } from "lucide-react"

export default function AtbildigaSpeePage() {
  return (
    <main className="flex flex-col">
      <section className="w-full bg-gradient-to-br from-red-50 to-white py-16 border-b">
        <div className="container">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-balance text-center sm:text-5xl mb-4">
            Atbildīga Spēle
          </h1>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto">
            Mūsu prioritāte ir jūsu labklājība un atbildīga izklaides pieredze.
          </p>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container max-w-4xl">
          <div className="mb-12 p-6 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-red-100 p-3 flex-shrink-0">
                <ShieldAlert className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h2 className="font-semibold text-xl mb-3">Svarīgi Zināt</h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0" />
                    Šī platforma ir <strong>pilnībā bezmaksas</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0" />
                    <strong>NAV</strong> azartspēle
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0" />
                    <strong>NAV</strong> reāla nauda vai balvas
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0" />
                    Tikai izklaide <strong>18+</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Mūsu Apņemšanās</h2>
              <p className="text-gray-600 leading-relaxed">
                Zvaigžņu Pasaule ir apņēmusies nodrošināt drošu un atbildīgu izklaides vidi. Lai gan mūsu platforma
                neietver azartspēles vai reālu naudu, mēs joprojām uzskatām, ka ir svarīgi veicināt veselīgas izklaides
                paradumus.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Vecuma Verifikācija</h2>
              <p className="text-gray-600 leading-relaxed">
                Visi lietotāji ir jāverificē, ka viņi ir vismaz 18 gadus veci, lai piekļūtu mūsu platformai. Šis ir
                stingrs noteikums, ko mēs īstenojam, lai aizsargātu nepilngadīgos.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Paškontroles Rīki</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Lai gan nav risks zaudēt naudu, mēs iesakām sekojošo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Iestatiet laika limitus savai izklaidei</li>
                <li>Dariet pārtraukumus regulāri</li>
                <li>Spēlējiet tikai, kad tas jums sagādā prieku</li>
                <li>Neizmantojiet platformu kā aizbēgšanas veidu no problēmām</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Brīdinājuma Pazīmes</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ja jūs vai kāds, ko pazīstat, piedzīvo šādas problēmas:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Pavada pārāk daudz laika platformā</li>
                <li>Neievēro laika limitus</li>
                <li>Izmanto platformu, lai izvairītos no reālām problēmām</li>
                <li>Ietekmē darbu, mācības vai attiecības</li>
              </ul>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Lūdzu, sazinieties ar atbildīgās izklaides organizācijām.
              </p>
            </div>

            <div className="!mt-12">
              <h2 className="font-serif text-2xl font-bold mb-6">Palīdzības Resursi</h2>
              <div className="grid gap-6">
                <div className="p-6 bg-white rounded-lg border shadow-sm">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-amber-600" />
                    IAUI - Izložu un Azartspēļu Uzraudzības Inspekcija
                  </h3>
                  <p className="text-gray-600 mb-4">Latvijas valsts iestāde, kas uzrauga azartspēļu un izložu jomu.</p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <ExternalLink className="h-4 w-4 text-amber-600" />
                    <a
                      href="https://www.iaui.gov.lv/lv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.iaui.gov.lv
                    </a>
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg border shadow-sm">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-amber-600" />
                    Skalbes
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Latvijas palīdzības organizācija cilvēkiem ar atkarību problēmām.
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <ExternalLink className="h-4 w-4 text-amber-600" />
                    <a
                      href="https://www.skalbes.lv/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.skalbes.lv
                    </a>
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg border shadow-sm">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-amber-600" />
                    Spēle Bez Risku
                  </h3>
                  <p className="text-gray-600 mb-4">Latvijas vadošā organizācija atbildīgai spēlei un atbalstam.</p>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-gray-700">
                      <Phone className="h-4 w-4 text-amber-600" />
                      <a href="tel:27799699" className="hover:underline font-semibold">
                        27799699
                      </a>
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                      <ExternalLink className="h-4 w-4 text-amber-600" />
                      <a
                        href="https://www.spele-bez-risku.lv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        www.spele-bez-risku.lv
                      </a>
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-lg border shadow-sm">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-amber-600" />
                    GamCare
                  </h3>
                  <p className="text-gray-600 mb-4">Starptautiska atbalsta organizācija.</p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <ExternalLink className="h-4 w-4 text-amber-600" />
                    <a
                      href="https://www.gamcare.org.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.gamcare.org.uk
                    </a>
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg border shadow-sm">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-amber-600" />
                    GambleAware
                  </h3>
                  <p className="text-gray-600 mb-4">Informācija un atbalsts atbildīgai spēlei.</p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <ExternalLink className="h-4 w-4 text-amber-600" />
                    <a
                      href="https://www.gambleaware.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.gambleaware.org
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="!mt-12">
              <h3 className="font-semibold text-lg mb-6 text-center">Pādodas Organizācijas</h3>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a
                  href="https://www.iaui.gov.lv/lv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <div className="flex h-16 w-32 items-center justify-center rounded bg-white p-2 border border-gray-200">
                    <img src="/liels.png" alt="IAUI" className="h-full w-full object-contain" />
                  </div>
                </a>
                <a
                  href="https://www.skalbes.lv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <div className="flex h-16 w-24 items-center justify-center rounded bg-black p-2">
                    <img src="/skalbels.webp" alt="Skalbes" className="h-full w-full object-contain" />
                  </div>
                </a>
                <a
                  href="https://www.gamcare.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <div className="flex h-16 w-32 items-center justify-center rounded bg-white p-2 border border-gray-200">
                    <img src="/gamecare.svg" alt="GamCare" className="h-full w-full object-contain" />
                  </div>
                </a>
                <a
                  href="https://www.gambleaware.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <div className="flex h-16 w-32 items-center justify-center rounded bg-white p-2 border border-gray-200">
                    <img src="/gamble.webp" alt="GambleAware" className="h-full w-full object-contain" />
                  </div>
                </a>
              </div>
            </div>

            <div className="!mt-12 p-6 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-lg mb-3">Sazinies Ar Mums</h3>
              <p className="text-gray-600 mb-4">
                Ja jums ir jautājumi vai bažas par atbildīgu spēli, lūdzu, sazinieties ar mums:
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <Mail className="h-4 w-4 text-amber-600" />
                <a href="mailto:atbalsts@zvaigznupasaule.lv" className="hover:underline">
                  atbalsts@zvaigznupasaule.lv
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
