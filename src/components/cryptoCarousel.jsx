// CryptoCarousel.jsx
"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const images = [
  "/cryp1.png",
  "/cryp2.png"
]

export default function CryptoCarousel() {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const prevImage = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const nextImage = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  return (
    <div className="relative w-full">
      <div className="relative cursor-pointer" onClick={() => setIsOpen(true)}>
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="rounded-2xl w-full object-cover"
        />
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <ChevronLeft
            className="w-8 h-8 text-white/70 hover:text-white transition"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
          />
          <ChevronRight
            className="w-8 h-8 text-white/70 hover:text-white transition"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
          />
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <X
            className="absolute top-6 right-6 w-10 h-10 text-white cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          <img
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl"
          />
          <div className="absolute left-6 flex items-center">
            <ChevronLeft
              className="w-10 h-10 text-white cursor-pointer"
              onClick={() => prevImage()}
            />
          </div>
          <div className="absolute right-6 flex items-center">
            <ChevronRight
              className="w-10 h-10 text-white cursor-pointer"
              onClick={() => nextImage()}
            />
          </div>
        </div>
      )}
    </div>
  )
}