"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import SmartCarousel from "@/components/SmartCarousel"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, Cpu, Zap, ShieldCheck, 
  Activity, Github, Bell, Users, Award
} from "lucide-react"

export default function SmartDoorLockPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen text-white bg-black selection:bg-purple-500/30">

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
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-3 py-1">
              Embedded Security & GSM
            </Badge>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              SecureLock: <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Home Security System
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              A high-reliability security model that operates without Wi-Fi. 
              Utilizing <strong>GSM technology</strong>, it provides real-time alerts 
              via phone calls during unauthorized entry attempts.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {["Arduino", "GSM SIM800L", "Servo Motor", "Ultrasonic", "Keypad"].map((tech) => (
                <span key={tech} className="text-[10px] font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-full uppercase tracking-widest text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Carousel */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-2xl border border-white/10 bg-black p-2 shadow-2xl overflow-hidden">
              <SmartCarousel />
            </div>
          </div>
        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard 
            icon={<ShieldCheck className="text-purple-400" />} 
            title="3-Attempt Lock" 
            desc="Automatic lockdown and alert after three failed password entries." 
          />
          <MetricCard 
            icon={<Zap className="text-cyan-400" />} 
            title="No Wi-Fi Needed" 
            desc="Operates entirely on GSM/GPRS services for maximum uptime." 
          />
          <MetricCard 
            icon={<Users className="text-purple-400" />} 
            title="Visitor Counter" 
            desc="Detects unauthorized tailgating using ultrasonic sensors." 
          />
          <MetricCard 
            icon={<Bell className="text-cyan-400" />} 
            title="Instant Alerts" 
            desc="Automated GSM calls to the owner's mobile number." 
          />
        </div>

        {/* DETAILED INFO */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Activity className="text-purple-400" size={20} /> Security Workflow
            </h3>

            <div className="space-y-6">
              {[
                { s: "01", t: "User Authentication", d: "User enters a secure password via the 4x4 matrix keypad." },
                { s: "02", t: "Verification", d: "System checks credentials; if incorrect 3 times, it triggers the alert cycle." },
                { s: "03", t: "Physical Response", d: "Servo motor actuates the latch for authorized users while sensors count entries." },
                { s: "04", t: "Emergency Alert", d: "SIM800L module initiates a call to the owner and activates the local buzzer." }
              ].map((item) => (
                <div key={item.s} className="flex gap-4">
                  <span className="text-purple-500 font-mono font-bold">{item.s}</span>
                  <div>
                    <h4 className="font-semibold text-white text-sm uppercase tracking-wide">{item.t}</h4>
                    <p className="text-gray-400 text-sm leading-snug">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Cpu className="text-cyan-400" size={20} /> Hardware Stack
            </h3>

            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Arduino Uno</span>
                <span className="text-gray-500">Main Logic</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>SIM800L Module</span>
                <span className="text-gray-500">GSM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>HC-SR04</span>
                <span className="text-gray-500">Ultrasonic</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Servo Motor</span>
                <span className="text-gray-500">Actuator</span>
              </li>
              <li className="flex justify-between">
                <span>Matrix Keypad</span>
                <span className="text-gray-500">Input</span>
              </li>
            </ul>
          </div>
        </div>

        {/* PATENT CERTIFICATE SECTION */}
        <div className="mt-20">
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm">

              <div className="space-y-3 text-center md:text-left">
                <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-3 py-1">
                  Intellectual Property
                </Badge>

                <h3 className="text-2xl font-bold tracking-tight flex items-center gap-2 justify-center md:justify-start">
                  <Award size={20} className="text-cyan-400" />
                  Patent Certificate
                </h3>

                <p className="text-gray-400 text-sm max-w-md">
                  Officially filed innovation for the SecureLock 
                  GSM-based Home Security System.
                </p>
              </div>

              <a
                href="/smartdoorpatent.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-600 text-black font-semibold hover:scale-105 transition-transform"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>

        {/* GITHUB SECTION */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/BS-Tech17/SMS-Based-Smart-Door-Lock"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group"
          >
            <Github className="w-6 h-6 text-white group-hover:text-purple-400" />
            <span className="text-white font-medium group-hover:text-purple-400">
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