import { cn } from "@/lib/utils"
import { AlertTriangle } from "lucide-react"

interface DisclaimerProps {
  type?: "top" | "bottom" | "inline"
  className?: string
}

export function Disclaimer({ type = "inline", className }: DisclaimerProps) {
  return (
    <div
      className={cn(
        "bg-amber-50 px-4 py-3 text-xs text-amber-900 border-amber-200",
        type === "top" && "sticky top-0 z-40 border-b",
        type === "bottom" && "rounded-lg border",
        className,
      )}
    >
      <div className="container flex items-start gap-2">
        <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
        <p className="leading-relaxed">
          <strong>SVARĪGI:</strong> 18+ Bezmaksas platforma. NAV azartspēle. NAV nauda. NAV balvas. Tikai izklaide.{" "}
          <a
            href="https://www.iaui.gov.lv/lv"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-amber-700"
          >
            IAUI
          </a>
          {" | "}
          <a
            href="https://www.skalbes.lv/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-amber-700"
          >
            Skalbes
          </a>
          {" | "}
          <a
            href="https://www.spele-bez-risku.lv"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-amber-700"
          >
            Spēle Bez Risku
          </a>
        </p>
      </div>
    </div>
  )
}
