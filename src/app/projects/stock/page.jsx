"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import CryptoCarousel from "@/components/CryptoCarousel"
import { 
  ArrowLeft, TrendingUp, LineChart, 
  Activity, Database, AlertTriangle, 
  BrainCircuit, Github 
} from "lucide-react"

export default function CryptoArbitragePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen text-white bg-black selection:bg-cyan-500/30">

      {/* Dynamic Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Navigation */}
        <Link href="/" className="group flex items-center gap-2 text-gray-500 hover:text-white mb-10 transition-colors">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Return to Dashboard</span>
        </Link>

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-3 py-1">
              Crypto Analytics
            </Badge>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Crypto <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Arbitrage Dashboard
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              A clean dashboard showcasing cryptocurrency arbitrage metrics and patterns.
              Designed for data visualization, historical analysis, and actionable insights.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "Tailwind CSS", "Supabase", "Chart.js"].map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-full uppercase tracking-widest text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - LARGER CAROUSEL */}
          <div className="relative group flex justify-center lg:justify-end">

            {/* Glow Effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            {/* Carousel Container */}
            <div className="relative w-full max-w-[700px] h-[500px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl overflow-hidden">
              <CryptoCarousel />
            </div>

          </div>

        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard 
            icon={<TrendingUp className="text-cyan-400" />} 
            title="Live Arbitrage Detection" 
            desc="Displays arbitrage opportunities and metrics in a clean, interactive dashboard." 
          />
          <MetricCard 
            icon={<Activity className="text-blue-400" />} 
            title="Profit Analysis" 
            desc="Shows calculated profit trends over time for easy decision-making." 
          />
          <MetricCard 
            icon={<Database className="text-cyan-400" />} 
            title="Historical Patterns" 
            desc="Logs past data to help identify recurring arbitrage trends." 
          />
          <MetricCard 
            icon={<AlertTriangle className="text-blue-400" />} 
            title="Notifications Ready" 
            desc="Prepared to integrate alerts for key events and profitable trades." 
          />
        </div>

        {/* DETAILED SECTION */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <LineChart className="text-cyan-400" size={20} /> System Workflow
            </h3>

            <div className="space-y-6">
              {[
                { s: "01", t: "Data Input", d: "Collect and store cryptocurrency pricing data in a database." },
                { s: "02", t: "Arbitrage Metrics", d: "Calculate potential profits and display them on the dashboard." },
                { s: "03", t: "Trend Analysis", d: "Visualize historical profit trends and arbitrage opportunities." },
                { s: "04", t: "Dashboard Alerts", d: "Prepare system to notify users about significant patterns or profits." }
              ].map((item) => (
                <div key={item.s} className="flex gap-4">
                  <span className="text-cyan-500 font-mono font-bold">{item.s}</span>
                  <div>
                    <h4 className="font-semibold text-white text-sm uppercase tracking-wide">{item.t}</h4>
                    <p className="text-gray-400 text-sm leading-snug">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/20 to-transparent border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <BrainCircuit className="text-blue-400" size={20} /> Tech Stack
            </h3>

            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>React / Next.js</span>
                <span className="text-gray-500">Frontend Framework</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Tailwind CSS</span>
                <span className="text-gray-500">Styling & Layout</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Supabase</span>
                <span className="text-gray-500">Backend & Database</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Chart.js / Plotly</span>
                <span className="text-gray-500">Visualizations</span>
              </li>
              <li className="flex justify-between">
                <span>Optional Alerts</span>
                <span className="text-gray-500">Future Notification Integration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* GITHUB SECTION */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/BS-Tech17/Crypto-Arbitrage-Dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group"
          >
            <Github className="w-6 h-6 text-white group-hover:text-cyan-400" />
            <span className="text-white font-medium group-hover:text-cyan-400">
              View GitHub Repository
            </span>
          </a>
        </div>

      </div>
    </main>
  )
}

function MetricCard({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-sm uppercase tracking-wider mb-2">{title}</h3>
      <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
    </div>
  )
}