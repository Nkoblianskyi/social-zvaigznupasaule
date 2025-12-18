import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Logo />
            <p className="text-sm leading-relaxed text-gray-600">
              Bezmaksas sociālā izklaides platforma Latvijai. Nav iesaistīta īsta nauda, nav balvu. Tikai izklaide 18+.
            </p>
            <div className="flex items-center gap-2 rounded-lg border border-amber-600 bg-amber-50 px-4 py-2 w-fit">
              <span className="text-2xl font-bold text-amber-600">18+</span>
              <div className="border-l border-amber-300 pl-2">
                <p className="text-xs font-semibold text-gray-900">OBLIGĀTI</p>
                <p className="text-xs text-gray-600">Vecuma ierobežojums</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-black">Juridiskā Informācija</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/privatums" className="hover:text-black transition-colors">
                  Privātuma Politika
                </Link>
              </li>
              <li>
                <Link href="/sikdatnes" className="hover:text-black transition-colors">
                  Sīkdatņu Politika
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-black">Navigācija</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/par-mums" className="hover:text-black transition-colors">
                  Par Mums
                </Link>
              </li>
              
              <li>
                <Link href="/atbildiga-spele" className="hover:text-black transition-colors">
                  Atbildīga Spēle
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8">
          <h3 className="mb-6 text-center text-sm font-semibold text-black">Atbalsta Organizācijas</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://www.iaui.gov.lv/lv"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
              aria-label="IAUI - Izložu un azartspēļu uzraudzības inspekcija"
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
              aria-label="Skalbes"
            >
              <div className="flex h-16 w-24 items-center justify-center rounded bg-black p-2">
                <img
                  src="/skalbels.webp"
                  alt="Skalbes"
                  width={200}
                  height={200}
                  className="h-full w-full object-contain"
                />
              </div>
            </a>
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
              aria-label="GamCare"
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
              aria-label="GambleAware"
            >
              <div className="flex h-16 w-32 items-center justify-center rounded bg-white p-2 border border-gray-200">
                <img src="/gamble.webp" alt="GambleAware" className="h-full w-full object-contain" />
              </div>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Zvaigžņu Pasaule. Visas tiesības aizsargātas.
          </p>
          <p className="mt-1 text-xs text-gray-500">100% Bezmaksas • Nav Azartspēle • 18+ Obligāti</p>
        </div>
      </div>
    </footer>
  )
}
