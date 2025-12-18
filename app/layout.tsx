import type React from "react"
import type { Metadata } from "next/types"
import { Playfair_Display, Inter } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Disclaimer } from "@/components/disclaimer"
import { cn } from "@/lib/utils"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Zvaigžņu Pasaule - Bezmaksas Sociālā Izklaides Platforma",
  description: "Bezmaksas sociālā izklaides platforma. Nav īsta nauda, nav balvas. Tikai izklaide 18+.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lv" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, playfair.variable)}>
        <div className="relative flex min-h-screen flex-col">
          <Disclaimer type="top" />
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
