"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RotateCcw, Sparkles, Star, Rocket, Moon, Trophy } from "lucide-react"

const symbols = [
  { id: 1, icon: Star, color: "text-amber-500", name: "Zvaigzne", points: 10 },
  { id: 2, icon: Rocket, color: "text-red-500", name: "Raķete", points: 20 },
  { id: 3, icon: Moon, color: "text-blue-400", name: "Mēness", points: 15 },
  { id: 4, icon: Sparkles, color: "text-yellow-400", name: "Spīdeklis", points: 25 },
]

export default function GamePage() {
  const router = useRouter()
  const [grid, setGrid] = useState<number[][]>([])
  const [spinning, setSpinning] = useState(false)
  const [message, setMessage] = useState("")
  const [bonusPoints, setBonusPoints] = useState(1000)
  const [lastWin, setLastWin] = useState(0)

  useEffect(() => {
    const hasVerified = localStorage.getItem("age-verified-zvaigznu-pasaule")
    if (!hasVerified) {
      router.push("/")
      return
    }
    const savedPoints = localStorage.getItem("bonus-points")
    if (savedPoints) {
      setBonusPoints(Number.parseInt(savedPoints))
    }
    initializeGrid()
  }, [router])

  useEffect(() => {
    if (bonusPoints !== 1000) {
      localStorage.setItem("bonus-points", bonusPoints.toString())
    }
  }, [bonusPoints])

  const initializeGrid = () => {
    const newGrid = Array(3)
      .fill(0)
      .map(() =>
        Array(3)
          .fill(0)
          .map(() => Math.floor(Math.random() * symbols.length)),
      )
    setGrid(newGrid)
  }

  const handleSpin = () => {
    if (spinning || bonusPoints < 10) return

    setBonusPoints((prev) => prev - 10)
    setSpinning(true)
    setMessage("")
    setLastWin(0)

    const interval = setInterval(() => {
      setGrid(
        Array(3)
          .fill(0)
          .map(() =>
            Array(3)
              .fill(0)
              .map(() => Math.floor(Math.random() * symbols.length)),
          ),
      )
    }, 100)

    setTimeout(() => {
      clearInterval(interval)
      const finalGrid = Array(3)
        .fill(0)
        .map(() =>
          Array(3)
            .fill(0)
            .map(() => Math.floor(Math.random() * symbols.length)),
        )
      setGrid(finalGrid)
      setSpinning(false)
      checkWin(finalGrid)
    }, 1500)
  }

  const checkWin = (finalGrid: number[][]) => {
    let totalPoints = 0

    for (let row = 0; row < 3; row++) {
      if (finalGrid[row][0] === finalGrid[row][1] && finalGrid[row][1] === finalGrid[row][2]) {
        totalPoints += symbols[finalGrid[row][0]].points
      }
    }

    for (let col = 0; col < 3; col++) {
      if (finalGrid[0][col] === finalGrid[1][col] && finalGrid[1][col] === finalGrid[2][col]) {
        totalPoints += symbols[finalGrid[0][col]].points
      }
    }

    if (finalGrid[0][0] === finalGrid[1][1] && finalGrid[1][1] === finalGrid[2][2]) {
      totalPoints += symbols[finalGrid[0][0]].points
    }
    if (finalGrid[0][2] === finalGrid[1][1] && finalGrid[1][1] === finalGrid[2][0]) {
      totalPoints += symbols[finalGrid[0][2]].points
    }

    if (totalPoints > 0) {
      setBonusPoints((prev) => prev + totalPoints)
      setLastWin(totalPoints)
      setMessage(`+${totalPoints} punkti!`)
    } else {
      setMessage("Nav uzvaras")
    }
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-4">
      <div className="w-full max-w-md px-4">
        <div className="flex items-center justify-between mb-3">
          <Button variant="outline" size="sm" onClick={() => router.push("/")} className="h-8 text-xs">
            <ArrowLeft className="mr-1 h-3 w-3" />
            Atpakaļ
          </Button>
          <h1 className="font-serif text-base font-bold text-black">Kosmiskais Ceļojums</h1>
          <div className="w-16" />
        </div>

        <div className="flex items-center justify-between rounded-lg border border-amber-600 bg-amber-50 px-3 py-2 mb-3">
          <div className="flex items-center gap-1">
            <Trophy className="h-4 w-4 text-amber-600" />
            <span className="text-xs font-semibold text-gray-700">Punkti</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-lg font-bold text-amber-600">{bonusPoints}</span>
            {lastWin > 0 && <span className="text-[10px] font-bold text-green-600">+{lastWin}</span>}
          </div>
        </div>

        <div className="rounded-lg border-2 border-amber-600 bg-white p-2 shadow-md mb-3">
          <div className="grid grid-cols-3 gap-1.5">
            {grid.map((row, rowIndex) =>
              row.map((symbolIndex, colIndex) => {
                const Symbol = symbols[symbolIndex]
                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`flex aspect-square items-center justify-center rounded border border-gray-200 bg-gray-50 ${
                      spinning ? "animate-pulse" : ""
                    }`}
                  >
                    <Symbol.icon className={`h-7 w-7 ${Symbol.color}`} />
                  </div>
                )
              }),
            )}
          </div>
        </div>

        {message && (
          <div
            className={`mb-3 rounded p-2 text-center text-xs font-semibold ${
              lastWin > 0 ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
            }`}
          >
            {message}
          </div>
        )}

        <Button
          onClick={handleSpin}
          disabled={spinning || bonusPoints < 10}
          className="w-full h-10 rounded-lg bg-amber-600 text-sm font-bold text-white hover:bg-amber-700 disabled:opacity-50 mb-3"
        >
          {spinning ? (
            <>
              <RotateCcw className="mr-1 h-4 w-4 animate-spin" />
              Griežas...
            </>
          ) : bonusPoints < 10 ? (
            "Nav punktu"
          ) : (
            <>
              <Sparkles className="mr-1 h-4 w-4" />
              Griezt (10)
            </>
          )}
        </Button>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-2 mb-3">
          <div className="grid grid-cols-4 gap-1.5">
            {symbols.map((symbol) => {
              const Icon = symbol.icon
              return (
                <div key={symbol.id} className="flex flex-col items-center gap-0.5 rounded bg-white p-1.5 border">
                  <Icon className={`h-5 w-5 ${symbol.color}`} />
                  <span className="text-[10px] font-bold text-amber-600">{symbol.points}</span>
                </div>
              )
            })}
          </div>
          <p className="mt-1.5 text-center text-[10px] text-gray-500">3 vienādi = punkti</p>
        </div>

        <div className="rounded border border-gray-200 bg-gray-50 p-2 text-center text-[10px] text-gray-600">
          100% Bezmaksas • Nav Naudas • Tikai Izklaide
        </div>
      </div>
    </main>
  )
}
