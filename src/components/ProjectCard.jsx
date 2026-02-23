"use client"

import Link from "next/link"

export default function ProjectCard({ title, link }) {
  return (
    <Link href={link}>
      <div className="cursor-pointer rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 transition duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 hover:shadow-2xl hover:shadow-cyan-500/40">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-2">Click to explore →</p>
      </div>
    </Link>
  )
}
