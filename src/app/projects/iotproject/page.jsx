"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import IotCarousel from "@/components/IotCarousel"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Activity, Database, LineChart, Cpu, ShieldCheck, Globe } from "lucide-react"

export default function IoTProjectPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen text-white bg-black selection:bg-cyan-500/30">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Navigation */}
        <Link href="/" className="group flex items-center gap-2 text-gray-500 hover:text-white mb-10 transition-colors">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Return to Dashboard</span>
        </Link>

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          <div className="space-y-6">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-3 py-1">
              Full Stack IoT Simulation
            </Badge>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              IoT Device Simulator <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Real-Time Analytics Dashboard
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              A scalable simulation platform that replicates real-world IoT device behavior 
              by generating dynamic sensor data streams and visualizing them through 
              interactive dashboards powered by Next.js, Prisma, and PostgreSQL.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Next.js 15", "React 19", "Prisma", "PostgreSQL", "Clerk", "Recharts"].map((tech) => (
                <span key={tech} className="text-[10px] font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-full uppercase tracking-widest text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Carousel */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-2xl border border-white/10 bg-black p-2 shadow-2xl overflow-hidden">
              <IotCarousel />
            </div>
          </div>
        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard 
            icon={<Activity className="text-cyan-400" />} 
            title="Live Simulation" 
            desc="Dynamic sensor data generation without physical hardware." 
          />
          <MetricCard 
            icon={<LineChart className="text-purple-400" />} 
            title="Real-Time Charts" 
            desc="Interactive analytics powered by Recharts visualization." 
          />
          <MetricCard 
            icon={<Database className="text-cyan-400" />} 
            title="Persistent Storage" 
            desc="Structured data logging with Prisma & PostgreSQL." 
          />
          <MetricCard 
            icon={<ShieldCheck className="text-purple-400" />} 
            title="Secure Access" 
            desc="Clerk authentication with protected multi-user dashboards." 
          />
        </div>

        {/* WORKFLOW SECTION */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Globe className="text-cyan-400" size={20} /> System Workflow
            </h3>

            <div className="space-y-6">
              {[
                { s: "01", t: "Project Creation", d: "Users create IoT projects and configure virtual devices." },
                { s: "02", t: "Sensor Configuration", d: "Custom sensors selected per device for simulation." },
                { s: "03", t: "Data Simulation Engine", d: "Backend generates rule-based & randomized sensor values." },
                { s: "04", t: "Analytics Dashboard", d: "Real-time charts and historical logs displayed securely." }
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

          {/* TECH STACK CARD */}
          <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Cpu className="text-purple-400" size={20} /> Infrastructure
            </h3>

            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Next.js 15</span>
                <span className="text-gray-500">Frontend</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Prisma ORM</span>
                <span className="text-gray-500">Data Layer</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>PostgreSQL</span>
                <span className="text-gray-500">Database</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Clerk</span>
                <span className="text-gray-500">Auth</span>
              </li>
              <li className="flex justify-between">
                <span>Vercel</span>
                <span className="text-gray-500">Deployment</span>
              </li>
            </ul>
          </div>

        </div>

        {/* GITHUB BUTTON */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/BS-Tech17/iot-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
          >
            <svg
              className="w-6 h-6 text-white group-hover:text-cyan-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.8 1.6-.8.9-1.6 2.3-1.1 2.9-.9.1-.7.4-1.1.7-1.3-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.5-2.7 5.4-5.3 5.7.4.3.8.9.8 1.8v2.7c0 .3.2.7.8.6A10.5 10.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
            </svg>
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
    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-sm uppercase tracking-wider mb-2">{title}</h3>
      <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
    </div>
  )
}