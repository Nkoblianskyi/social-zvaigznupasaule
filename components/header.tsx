"use client"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-[52px] z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/favicon.ico" alt="logo" width={40} height={40} />
          <span className="font-serif text-xl font-bold text-black sm:text-2xl">Zvaigžņu Pasaule</span>
        </Link>

        <div className="flex items-center gap-2 rounded-lg border-2 border-amber-600 bg-white px-3 py-1.5 shadow-sm">
          <span className="text-xl font-bold text-amber-600">18+</span>
        </div>
      </div>
    </header>
  )
}
