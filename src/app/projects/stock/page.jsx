"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import StockCarousel from "@/components/stockCarousel"
import { 
  ArrowLeft, TrendingUp, LineChart, 
  Activity, Newspaper, Database, 
  BrainCircuit, Github 
} from "lucide-react"

export default function StockDashboardPage() {
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
              AI + Financial Analytics
            </Badge>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              AI Stock <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Market Dashboard
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              A real-time financial intelligence platform that delivers 
              stock price analytics, risk assessment, fundamental reports, 
              and sentiment-based market news using AI-powered insights.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Python", "Streamlit", "Yahoo Finance", "Alpha Vantage", "Plotly"].map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-full uppercase tracking-widest text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE CAROUSEL */}
          <div className="relative group flex justify-center lg:justify-end">

            {/* Glow Effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            {/* Carousel Container */}
            <div className="relative w-full max-w-[600px] h-[380px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl overflow-hidden">
              <StockCarousel />
            </div>

          </div>

        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard 
            icon={<TrendingUp className="text-cyan-400" />} 
            title="Live Price Tracking" 
            desc="Real-time stock price visualization with dynamic trend charts." 
          />
          <MetricCard 
            icon={<Activity className="text-blue-400" />} 
            title="Risk Analytics" 
            desc="Volatility and annual return calculation for investment decisions." 
          />
          <MetricCard 
            icon={<Database className="text-cyan-400" />} 
            title="Fundamental Data" 
            desc="Balance sheets, income statements, and cash flow reports." 
          />
          <MetricCard 
            icon={<Newspaper className="text-blue-400" />} 
            title="Market News" 
            desc="Top 10 real-time news with sentiment analysis integration." 
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
                { s: "01", t: "Data Fetching", d: "Stock price data retrieved using Yahoo Finance API." },
                { s: "02", t: "Data Processing", d: "Python and Pandas clean and structure financial datasets." },
                { s: "03", t: "Analytics Engine", d: "Calculates returns, risk metrics, and performance indicators." },
                { s: "04", t: "Visualization", d: "Plotly renders interactive charts for dynamic analysis." }
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
                <span>Python</span>
                <span className="text-gray-500">Backend Logic</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Streamlit</span>
                <span className="text-gray-500">UI Framework</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Yahoo Finance</span>
                <span className="text-gray-500">Market Data</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Alpha Vantage</span>
                <span className="text-gray-500">Financial Reports</span>
              </li>
              <li className="flex justify-between">
                <span>Plotly</span>
                <span className="text-gray-500">Charts</span>
              </li>
            </ul>
          </div>
        </div>

        {/* GITHUB SECTION */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/BS-Tech17/Stock-Market-Dashboard"
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