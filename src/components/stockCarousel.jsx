"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/cryp1.png",
  "/cryp2.png"
  
]

export default function StockCarousel() {
  const [index, setIndex] = useState(0)

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  return (
    <div className="relative w-full h-[380px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">

      {/* Slides */}
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out
            ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          <Image
            src={src}
            alt="Stock Dashboard Preview"
            fill
            priority={i === 0}
            quality={100}
            className="object-contain p-6 brightness-110"
          />
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all
              ${i === index ? "bg-cyan-400 w-6" : "bg-white/40"}
            `}
          />
        ))}
      </div>

      {/* Subtle Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

    </div>
  )
}