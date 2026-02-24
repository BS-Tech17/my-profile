"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleScrollToProjects = () => {
    if (typeof window !== "undefined") {
      const section = document.getElementById("projects")
      if (section) {
        const yOffset = -80 // Adjust to navbar height
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }
  }

  return (
    <nav className="sticky top-0 z-50 flex flex-col items-center px-6 py-4 text-white backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition">
          <h1 className="font-bold text-xl tracking-widest cursor-pointer">BHOOMIKA SAXENA</h1>
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <button className="hover:text-cyan-400 transition" onClick={handleScrollToProjects}>
            Projects
          </button>

          <button
            className={`hover:text-cyan-400 transition ${aboutOpen ? "text-cyan-400" : ""}`}
            onClick={() => setAboutOpen(!aboutOpen)}
          >
            About
          </button>

          {mounted && (
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/10 hover:bg-white/20 text-white border-none"
              onClick={handleScrollToTop}
            >
              Top
            </Button>
          )}
        </div>
      </div>

      {aboutOpen && (
        <div className="mt-4 w-full max-w-sm bg-zinc-900/90 border border-white/10 rounded-2xl p-6 backdrop-blur-2xl shadow-2xl relative animate-in fade-in slide-in-from-top-2 duration-300">
          <button
            onClick={() => setAboutOpen(false)}
            className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl font-light"
            aria-label="Close"
          >
            ×
          </button>

          <div className="flex flex-col items-center space-y-4 text-center">
            <Avatar className="w-24 h-24 border-2 border-cyan-500/50 p-1">
              <AvatarImage src="/mpic.jpeg" alt="Bhoomika" className="rounded-full object-cover" />
              <AvatarFallback className="bg-zinc-800">
                <span className="text-2xl">👤</span>
              </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-zinc-900 rounded-full"></div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Bhoomika</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                I develop intelligent systems bridging hardware and software —
                from IoT automation to AI-driven platforms. Focused on building
                scalable real-world tech.
              </p>
            </div>

            <div className="w-full pt-4 border-t border-white/5 flex flex-col space-y-2 text-gray-300 text-xs">
              <p className="flex items-center justify-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:sbhoomi1730@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 transition underline-offset-4 hover:underline"
                >
                  sbhoomi1730@gmail.com
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>📞</span>
                <span className="text-cyan-400">+91 8433077031</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}