"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { AgeVerificationModal } from "./age-verification-modal"

export function PlayButton() {
  const [showAgeModal, setShowAgeModal] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    console.log("[v0] PlayButton clicked")
    console.log("[v0] Setting showAgeModal to true")
    setShowAgeModal(true)
  }

  const handleAgeConfirmed = () => {
    console.log("[v0] Age confirmed, navigating to game")
    setShowAgeModal(false)
    router.push("/spele/kosmiskais-celojums")
  }

  const handleModalClose = () => {
    console.log("[v0] Modal closed")
    setShowAgeModal(false)
  }

  console.log("[v0] PlayButton render, showAgeModal:", showAgeModal)

  return (
    <>
      <Button
        size="lg"
        onClick={handleClick}
        className="h-12 rounded-lg bg-amber-600 px-8 font-semibold text-white hover:bg-amber-700 shadow-lg"
      >
        <Play className="mr-2 h-5 w-5" />
        Spēlēt Tagad
      </Button>

      <AgeVerificationModal open={showAgeModal} onOpenChange={handleModalClose} onConfirm={handleAgeConfirmed} />
    </>
  )
}
