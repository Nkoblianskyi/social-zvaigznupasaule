"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle, ShieldAlert } from "lucide-react"

interface AgeVerificationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

export function AgeVerificationModal({ open, onOpenChange, onConfirm }: AgeVerificationModalProps) {
  const handleAccept = () => {

    onOpenChange(false)
    window.location.href = "/spele/kosmiskais-celojums"
    setTimeout(() => {
      onConfirm()
    }, 100)
  }

  const handleDecline = () => {

    onOpenChange(false)
    window.location.href = "https://www.google.com"
  }


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-w-[90vw] max-h-[85vh] overflow-y-auto bg-white border-gray-200">
        <DialogHeader className="space-y-2">
          <DialogTitle className="flex items-center gap-2 text-base font-bold text-black">
            <ShieldAlert className="h-5 w-5 text-amber-600" />
            Vecuma Verifikācija - 18+
          </DialogTitle>
          <DialogDescription className="text-xs text-gray-600">Jums jābūt vismaz 18 gadus vecam.</DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
            <p className="mb-2 flex items-center gap-1 text-xs font-bold text-amber-900">
              <AlertTriangle className="h-3 w-3" />
              BRĪDINĀJUMS
            </p>
            <ul className="space-y-1 pl-4 text-[11px] leading-tight text-amber-900">
              <li className="list-disc">
                <strong>NAV azartspēle</strong>
              </li>
              <li className="list-disc">
                <strong>NAV nauda</strong>
              </li>
              <li className="list-disc">
                <strong>NAV balvas</strong>
              </li>
              <li className="list-disc">
                <strong>Tikai izklaide</strong>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-red-200 bg-red-50 p-3">
            <p className="text-[11px] leading-tight text-red-900">
              Problēmas?{" "}
              <a
                href="https://www.spele-bez-risku.lv"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                Spēle Bez Risku
              </a>{" "}
              - <strong>27799699</strong>
            </p>
          </div>
        </div>

        <DialogFooter className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="flex-1 border-gray-300 text-black hover:bg-gray-50 text-xs h-9 bg-transparent"
          >
            Man nav 18 gadi
          </Button>
          <Button onClick={handleAccept} className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-xs h-9">
            Man ir 18+ gadi
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
