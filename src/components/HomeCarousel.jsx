"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  "/Screenshot 2026-02-18 215817.png",
  "/Acciflow.jpeg",
  "/WhatsApp Image 2026-02-19 at 22.20.40.jpeg",
  "/rp.jpeg"
]

export default function HomeCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 2800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center mb-10">

      <div
        className="
          relative
          w-full
          max-w-xl          /* SMALLER overall width */
          h-[340px]         /* slightly taller */
          md:h-[360px]
          overflow-hidden
          rounded-xl
          border border-white/10
          shadow-[0_0_25px_rgba(0,255,255,0.15)]
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
              alt="Portfolio showcase"
              fill
              quality={100}
              sizes="(max-width:768px) 90vw, 600px"
              className="
                object-contain
                p-2           /* less padding = more space */
              "
              priority={i === 0}
            />
          </div>
        ))}

        {/* glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-purple-500/10 pointer-events-none" />

        {/* dots */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all
                ${i === index ? "bg-cyan-400 w-5" : "bg-white/40"}
              `}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
