export default function SikdatnesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full border-b border-gray-200 bg-gray-50 py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-serif text-4xl font-bold text-black">Sīkdatņu Politika</h1>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">Kā mēs izmantojam sīkdatnes platformā</p>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold text-black">Kas ir sīkdatnes?</h2>
              <p className="leading-relaxed text-gray-700">
                Sīkdatnes ir mazi teksta faili, kurus mūsu platforma saglabā jūsu ierīcē, lai uzlabotu lietošanas
                pieredzi un nodrošinātu pareizu darbību. Šīs sīkdatnes palīdz atcerēties jūsu izvēles un preferences.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold text-black">Kādas sīkdatnes mēs izmantojam</h2>

              <div className="mb-4 space-y-4">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <h3 className="mb-2 font-semibold text-black">Nepieciešamās sīkdatnes</h3>
                  <p className="text-gray-700">
                    Šīs sīkdatnes ir būtiskas platformas darbībai. Tās nodrošina vecuma verifikāciju, sesiju pārvaldību
                    un drošību. Bez šīm sīkdatnēm platforma nevar darboties pareizi.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <h3 className="mb-2 font-semibold text-black">Funkcionālās sīkdatnes</h3>
                  <p className="text-gray-700">
                    Šīs sīkdatnes uzlabo jūsu lietošanas pieredzi, atceroties jūsu izvēlēto valodu, preferences un
                    iestatījumus. Jūs varat atspējot šīs sīkdatnes, bet tas var ietekmēt platformas funkcionalitāti.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <h3 className="mb-2 font-semibold text-black">Analītikas sīkdatnes</h3>
                  <p className="text-gray-700">
                    Izmantojam anonīmas analītikas sīkdatnes, lai saprastu, kā lietotāji izmanto platformu. Šī
                    informācija palīdz mums uzlabot lietotāju pieredzi.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold text-black">Sīkdatņu pārvaldība</h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                Jūs varat kontrolēt un dzēst sīkdatnes jebkurā laikā, izmantojot sava pārlūka iestatījumus. Lūdzu,
                ņemiet vērā, ka nepieciešamo sīkdatņu bloķēšana var ietekmēt platformas funkcionalitāti.
              </p>
              <p className="leading-relaxed text-gray-700">
                Katrs pārlūks piedāvā dažādus veidus, kā pārvaldīt sīkdatnes. Parasti šos iestatījumus var atrast
                pārlūka privātuma vai drošības sadaļā.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold text-black">Izmaiņas sīkdatņu politikā</h2>
              <p className="leading-relaxed text-gray-700">
                Mēs paturam tiesības atjaunināt šo Sīkdatņu Politiku jebkurā laikā. Visas izmaiņas stāsies spēkā pēc to
                publicēšanas šajā lapā. Iesakām regulāri pārskatīt šo politiku, lai būtu informēts par to, kā mēs
                izmantojam sīkdatnes.
              </p>
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm text-gray-600">
                <strong>Pēdējās izmaiņas:</strong> {new Date().toLocaleDateString("lv-LV")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
