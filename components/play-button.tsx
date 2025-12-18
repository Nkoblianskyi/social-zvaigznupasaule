"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { AgeVerificationModal } from "./age-verification-modal"

export function PlayButton() {
  const [showAgeModal, setShowAgeModal] = useState(false)

  const handleAgeConfirmed = () => {
    console.log('Age confirmed, navigating to game')
    window.location.href = "/spele/kosmiskais-celojums"
  }

  const handleButtonClick = () => {
    console.log('Play button clicked')
    setShowAgeModal(true)
  }

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-600 px-8 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
        type="button"
      >
        <Play className="h-5 w-5" />
        Spēlēt Tagad
      </button>

      <AgeVerificationModal open={showAgeModal} onOpenChange={setShowAgeModal} onConfirm={handleAgeConfirmed} />
    </>
  )
}
