export function About() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-black md:text-4xl">Par Zvaigžņu Pasauli</h2>
          <p className="mt-4 text-base text-gray-600">Latvijas sociālā izklaides platforma ar kosmosa tēmu</p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-bold text-black">Mūsu Misija</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Sniegt kvalitatīvu un drošu izklaides pieredzi latviešiem. Profesionāla platforma ar kosmosa tēmu.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-black">100% Bezmaksas</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Nav īstas naudas, nav maksājumu, nav balvu. Visi punkti ir virtuāli un paredzēti tikai izklaidei.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-black">Atbildīga Pieeja</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Platforma paredzēta tikai 18+ personām. Sadarbojamies ar Latvijas atbildīgās spēles organizācijām.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-amber-600 bg-amber-50 p-4">
              <p className="text-sm font-medium text-amber-900">
                Izveidots Latvijā, latviešiem, ar lepnumu par mūsu kultūru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
