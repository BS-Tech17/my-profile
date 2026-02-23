"use client"

import { useEffect, useState } from "react"

const IMAGES = [
  "/xy.png",
  "/mn.jpeg",
  "/yn.jpeg",
  "/abc.jpeg"
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Prevent SSR mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Slideshow
  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [mounted])

  // Don't render until mounted
  if (!mounted) return null

  return (
    <div className="relative w-full h-[280px] md:h-[380px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">

      <img
        src={IMAGES[index]}
        alt="preview"
        className="w-full h-full object-cover transition-opacity duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

    </div>
  )
}