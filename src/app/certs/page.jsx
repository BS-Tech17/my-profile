"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import { 
  ShieldCheck, Network, Cpu, BrainCircuit, GraduationCap, 
  ArrowLeft, CheckCircle2, Lock, Zap, Bot, Terminal, Activity, 
  Code, Database, Globe, Layers, Atom, ShoppingBag, Server
} from "lucide-react"
import Link from "next/link"

export default function CertificationsPage() {
  const certList = [
    // --- CORE ENGINEERING & SYSTEMS ---
    { title: "Red Hat System Admin (RH124 & RH134)", org: "Red Hat", icon: <ShieldCheck className="text-red-500" size={18} /> },
    { title: "Arm Cortex-M Certification", org: "Coursera/EduCBA", icon: <Cpu className="text-cyan-400" size={18} /> },
    { title: "Microcontroller & Industrial Apps", org: "L&T EduTech", icon: <Zap className="text-yellow-500" size={18} /> },
    { title: "IoT Boards & Programming", org: "POSTECH", icon: <Cpu className="text-green-400" size={18} /> },
    { title: "Secure IoT Architecture", org: "LearnQuest", icon: <Lock className="text-blue-500" size={18} /> },
    { title: "Energy Management for IoT", org: "Starweaver", icon: <Zap className="text-yellow-400" size={18} /> },
    
    // --- AI & DATA SCIENCE ---
    { title: "Deep Learning Specialization", org: "DeepLearning.AI", icon: <BrainCircuit className="text-purple-400" size={18} /> },
    { title: "NLP - Deep Learning Models", org: "Packt", icon: <Bot className="text-pink-400" size={18} /> },
    { title: "Machine Learning with Python", org: "IBM", icon: <Terminal className="text-green-400" size={18} /> },
    { title: "Exploratory Data Analysis (ML)", org: "IBM", icon: <Database className="text-orange-400" size={18} /> },
    { title: "Intro to Artificial Intelligence", org: "IBM", icon: <BrainCircuit className="text-cyan-400" size={18} /> },
    { title: "Python for Data Science & AI", org: "IBM", icon: <Code className="text-blue-300" size={18} /> },
    { title: "Generative AI: Intro & Apps", org: "IBM", icon: <Bot className="text-pink-500" size={18} /> },
    
    // --- NETWORKING & CYBERSECURITY ---
    { title: "CCNA: Switching & Routing", org: "Cisco", icon: <Network className="text-blue-500" size={18} /> },
    { title: "Fundamentals of Network Comm.", org: "UColorado", icon: <Network className="text-indigo-400" size={18} /> },
    { title: "Cryptography", org: "UMD College Park", icon: <Lock className="text-blue-400" size={18} /> },
    { title: "Cybersecurity Python Automation", org: "Google", icon: <Terminal className="text-cyan-300" size={18} /> },
    { title: "Foundations of Cybersecurity", org: "Google", icon: <ShieldCheck className="text-cyan-500" size={18} /> },
    { title: "Detection and Response", org: "Google", icon: <Activity className="text-red-400" size={18} /> },

    // --- DEVELOPMENT & CS CORE ---
    { title: "Software Engineering: Testing", org: "HKUST", icon: <Layers className="text-gray-400" size={18} /> },
    { title: "Server side JS with Node.js", org: "NIIT", icon: <Server className="text-green-500" size={18} /> },
    { title: "Algorithms (DAA) - NPTEL", org: "NPTEL", icon: <GraduationCap className="text-orange-400" size={18} /> },
    { title: "HTML, CSS, JS for Web Devs", org: "Johns Hopkins", icon: <Globe className="text-blue-300" size={18} /> },
    { title: "C for Everyone: Fundamentals", org: "UC Santa Cruz", icon: <Code className="text-blue-500" size={18} /> },
    { title: "SQL: Practical Intro", org: "IBM", icon: <Database className="text-indigo-500" size={18} /> },
    { title: "Mathematical Thinking in CS", org: "UCSD", icon: <Activity className="text-purple-500" size={18} /> },

    // --- SPECIALIZED TOPICS ---
    { title: "Quantum Information", org: "KAIST", icon: <Atom className="text-cyan-300" size={18} /> },
    { title: "Particle Physics", org: "U Geneva", icon: <Atom className="text-red-300" size={18} /> }
   
  ]

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />

      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto pt-32 pb-20 px-6">
        
        <div className="mb-10 space-y-2">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-4 group w-fit text-xs font-mono">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Return to Home
          </Link>
          <h1 className="text-4xl font-black tracking-tight uppercase">
            Technical <span className="text-cyan-400">Inventory</span>
          </h1>
          <p className="text-gray-500 text-sm max-w-xl">
            A comprehensive verification of my cross-disciplinary technical skills.
          </p>
        </div>

        <div className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 md:p-8 shadow-2xl">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6">
            {certList.map((cert, index) => (
              <li key={index} className="flex gap-4 items-center group p-3 rounded-xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
                <div className="flex-shrink-0 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-all">
                  {cert.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex flex-col">
                    <h3 className="text-[14px] font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
                      {cert.title}
                    </h3>
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">
                      {cert.org}
                    </span>
                  </div>
                  <div className="pt-1 flex items-center gap-1 text-cyan-500/30 text-[8px] font-bold uppercase tracking-tighter">
                    <CheckCircle2 size={10} /> Verified
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}