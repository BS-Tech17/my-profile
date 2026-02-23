"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  "/Acciflow.jpeg",
  "/1i.png",
  "/2i.png",
  "/3i.png",
  "/Se.png",
  "/w.jpg",
  "/rpiy.jpg"

  
]

export default function AccidentCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 2600)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center mb-10">

      <div className="
        relative
        w-full
        max-w-2xl
        h-[340px]
        overflow-hidden
        rounded-xl
        border border-white/10
        shadow-[0_0_25px_rgba(255,0,0,0.18)]
      ">

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

        {/* subtle gradient overlay */}
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
  )
}
