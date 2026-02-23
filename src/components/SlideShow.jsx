


"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
const slides = [
  "/Screenshot 2026-02-18 215817.png",
  "/Acciflow.jpeg",
  "/WhatsApp Image 2026-02-19 at 22.20.40.jpeg",
  "/Se.png"
]

export default function HomeSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center mb-12">
      <div className="relative w-full max-w-2xl h-[360px] overflow-hidden rounded-xl border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.2)]">

        {slides.map((src, i) => (
          <div
            key={i}
            className={`
              absolute inset-0 transition-opacity duration-1000
              ${i === current ? "opacity-100" : "opacity-0"}
            `}
          >
            <Image
              src={src}
              alt={`Slide ${i}`}
              fill
              priority={i === 0}
              className="object-contain"
            />
          </div>
        ))}

      </div>
    </div>
  )
}


