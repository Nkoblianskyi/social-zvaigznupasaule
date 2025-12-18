export default function ParMumsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full border-b border-gray-200 bg-gray-50 py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-serif text-4xl font-bold text-black md:text-5xl">Par Mums</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            Bezmaksas sociālā izklaides platforma Latvijas iedzīvotājiem
          </p>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-black">Mūsu Misija</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Zvaigžņu Pasaule ir Latvijā bāzēta sociālā izklaides platforma, kas piedāvā pieaugušajiem iespēju baudīt
                aizraujošas spēles pilnīgi bez maksas. Mūsu platforma ir 100% bezmaksas un neietver nekādus reālas
                naudas vai balvu elementus.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Mēs esam izveidojuši drošu un atbildīgu vidi, kurā lietotāji var atpūsties un izbaudīt kvalitatīvu
                izklaidi bez riska zaudēt naudu vai iegūt atkarību. Visa nauda, punkti un līmeņi platformā ir tikai
                virtuāli un nevar tikt konvertēti reālā vērtībā.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <h2 className="mb-8 font-serif text-3xl font-bold text-black">Mūsu Vērtības</h2>
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-black">Pilnīgi Bezmaksas</h3>
                  <p className="leading-relaxed text-gray-700">
                    Nav nepieciešama kredītkarte, nav slēpto maksājumu, nav reālas naudas. Viss ir 100% bezmaksas
                    vienmēr. Mūsu platforma eksistē tikai izklaides nolūkos.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-black">Atbildīga Izklaide</h3>
                  <p className="leading-relaxed text-gray-700">
                    Mēs ņemam nopietni vecuma ierobežojumus. Obligāta 18+ vecuma verifikācija nodrošina, ka platforma ir
                    pieejama tikai pieaugušajiem. Mēs sadarbojamies ar atbalsta organizācijām un vienmēr esam gatavi
                    sniegt palīdzību.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-black">Latviešu Kopiena</h3>
                  <p className="leading-relaxed text-gray-700">
                    Platforma ir radīta Latvijā, latviešu valodā un īpaši latviešu auditorijai. Mēs lepojamies ar mūsu
                    kultūru un vērtībām, piedāvājot kvalitatīvu izklaidi, kas respektē vietējos standartus un likumus.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-black">Drošība un Privātums</h3>
                  <p className="leading-relaxed text-gray-700">
                    Jūsu personas dati ir aizsargāti saskaņā ar Latvijas un ES likumdošanu. Mēs nekad nelūdzam finanšu
                    informāciju un nedalāmies ar jūsu datiem ar trešajām pusēm bez jūsu piekrišanas.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-amber-600 bg-amber-50 p-8">
              <h3 className="mb-3 text-xl font-semibold text-amber-900">Svarīgi Atcerēties</h3>
              <ul className="space-y-2 text-amber-900">
                <li className="leading-relaxed">• Nav reālas naudas vai finansiālu iespēju</li>
                <li className="leading-relaxed">• Nav balvu vai materiālu ieguvumu</li>
                <li className="leading-relaxed">• Virtuālie punkti nevar tikt izmantoti ārpus platformas</li>
                <li className="leading-relaxed">• Platforma paredzēta tikai izklaides nolūkiem</li>
                <li className="leading-relaxed">• Obligāta 18+ vecuma verifikācija</li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <h2 className="mb-6 font-serif text-3xl font-bold text-black">Sazinieties ar Mums</h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Ja jums ir jautājumi par mūsu platformu, vēlaties sniegt atsauksmes vai nepieciešama palīdzība, lūdzu,
                sazinieties ar mums caur kontaktu lapu.
              </p>
              <p className="leading-relaxed text-gray-700">
                Mēs vienmēr esam gatavi uzklausīt mūsu lietotājus un uzlabot platformu, lai tā būtu vēl labāka un
                drošāka visiem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
