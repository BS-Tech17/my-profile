"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  "/1770667199264.jpg",
  "/1770667201421.jpg",
  "/img.png"
  
]

export default function AccidentCarousel() {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  // Auto slideshow (disabled when modal open)
  useEffect(() => {
    if (isOpen) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 2600)

    return () => clearInterval(interval)
  }, [isOpen])

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  return (
    <>
      {/* ===== Carousel ===== */}
      <div className="flex justify-center mb-10">
        <div
          onClick={() => setIsOpen(true)}
          className="
            relative
            w-full
            max-w-2xl
            h-[340px]
            overflow-hidden
            rounded-xl
            border border-white/10
            shadow-[0_0_25px_rgba(255,0,0,0.18)]
            cursor-pointer
          "
        >
          {images.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700
                ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
              `}
            >
              <Image
                src={src}
                alt="Accident dataset"
                fill
                sizes="(max-width: 768px) 90vw, 600px"
                priority={i === 0}
                quality={100}
                className="object-contain p-2"
              />
            </div>
          ))}

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-orange-400/10 pointer-events-none" />

          {/* dots */}
          <div className="absolute bottom-3 w-full flex justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-all
                  ${i === index ? "bg-red-400 w-5" : "bg-white/40"}
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ===== Fullscreen Modal ===== */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-8 text-white text-3xl"
          >
            ✕
          </button>

          {/* Previous */}
          <button
            onClick={prevSlide}
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>

          {/* Image */}
          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={images[index]}
              alt="Accident dataset full view"
              fill
              className="object-contain"
              quality={100}
            />
          </div>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="absolute right-6 text-white text-4xl"
          >
            ›
          </button>

          {/* Bottom Dots */}
          <div className="absolute bottom-6 flex gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full transition-all
                  ${i === index ? "bg-red-500 w-6" : "bg-white/50"}
                `}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}