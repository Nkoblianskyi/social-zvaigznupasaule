import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/favicon.ico" alt="logo" width={40} height={40} />
      <span className="font-serif text-xl font-bold text-black sm:text-2xl">Zvaigžņu Pasaule</span>
    </Link>
  )
}
