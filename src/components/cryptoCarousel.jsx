"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// Updated image paths for the Stock Dashboard
const images = [
  "/cryp1.png",
  "/cryp2.png"
]

export default function cryptoCarousel() {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const prevImage = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const nextImage = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Container */}
      <div 
        className="relative cursor-pointer group w-full flex items-center justify-center overflow-hidden rounded-2xl" 
        onClick={() => setIsOpen(true)}
      >
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-auto max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay Navigation */}
        <div className="absolute inset-0 flex justify-between items-center px-4 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 flex gap-2">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all ${index === i ? "w-6 bg-cyan-400" : "w-1.5 bg-white/30"}`} 
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] backdrop-blur-md">
          <button
            className="absolute top-8 right-8 p-2 text-white/50 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-10 h-10" />
          </button>

          <div className="relative w-full max-w-5xl px-12 flex items-center justify-center">
            <button
              className="absolute left-0 p-4 text-white/30 hover:text-white transition"
              onClick={(e) => { e.stopPropagation(); prevImage() }}
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <img
              src={images[index]}
              alt={`Slide ${index + 1}`}
              className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
            />

            <button
              className="absolute right-0 p-4 text-white/30 hover:text-white transition"
              onClick={(e) => { e.stopPropagation(); nextImage() }}
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}