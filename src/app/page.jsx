"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

// Core Components
import Navbar from "@/components/Navbar"
import ProjectCard from "@/components/ProjectCard"
import HeroSlider from "@/components/HeroSlider"

// UI Components (Shadcn)
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Github, Presentation, ArrowRight, ShieldAlert, Cpu, Globe, Briefcase, HardHat, Drill } from "lucide-react"

const PROJECTS = [
  { title: "Smart Door Lock", link: "/projects/doorlock" },
  { title: "Accident Detection AI", link: "/projects/acci" },
  { title: "IoT Dashboard", link: "/projects/iot" }
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleOpenPPT = () => {
    if (typeof window !== "undefined") {
      window.open("/files/Security_Vulnerabilities.pptx", "_blank")
    }
  }

  const handleOpenCert = () => {
    if (typeof window !== "undefined") {
      window.open("/files/ONGC_Internship_Certificate.pdf", "_blank")
    }
  }

  const cardWrapper = "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl transition duration-500 hover:-translate-y-1 hover:border-purple-400 hover:shadow-purple-500/20"

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden bg-black">

      {/* ===== BACKGROUND BLOBS ===== */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/25 blur-[120px] rounded-full" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10">

        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
          <Navbar />
        </header>

        {/* ===== HERO ===== */}
        <section className="max-w-7xl mx-auto pt-44 pb-24 px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                Integrating
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Innovation into Reality
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
                Designing AI-driven automation systems blending IoT hardware, scalable platforms, and robotics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="group flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-bold hover:bg-cyan-400 transition-all">
                View Featured Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="https://github.com/your-profile" target="_blank" className="flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition">
                <Github size={20} /> GitHub Profile
              </Link>
            </div>
          </div>

          <div className="w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative">
              {mounted ? <HeroSlider /> : <div className="h-80 bg-white/5 rounded-3xl animate-pulse border border-white/10" />}
            </div>
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <section id="projects" className="max-w-7xl mx-auto px-6 pb-32 scroll-mt-24">
          <div className="flex flex-col items-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-center">Featured Engineering</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((p) => (
              <div key={p.title} className={cardWrapper}>
                <ProjectCard title={p.title} link={p.link} />
              </div>
            ))}
          </div>
        </section>

        {/* ===== INTERNSHIP & CONFERENCE SECTION ===== */}
        <section id="experience" className="max-w-7xl mx-auto px-6 pb-32 scroll-mt-24">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">Research & Internship Experience</h2>
            <p className="text-gray-500 mt-2">Hands-on industry exposure and academic publications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* CONFERENCE CARD */}
            <Card className="bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden rounded-[2rem]">
              <CardHeader className="bg-gradient-to-br from-white/5 to-transparent border-b border-white/10 p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                      <Globe size={12} /> SMARTCOM 2026
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">Paper ID: 402</span>
                  </div>
                  <CardTitle className="text-3xl font-black text-white leading-tight">
                    Security Vulnerabilities in <br />
                    <span className="text-purple-400">Agentic AI Assistants</span>
                  </CardTitle>
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black flex items-center justify-center gap-3 py-7 rounded-2xl transition-all group"
                    onClick={handleOpenPPT}
                  >
                    <Presentation size={20} className="group-hover:scale-110 transition-transform" />
                    VIEW PRESENTATION (PPTX)
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <ShieldAlert size={18} className="text-purple-400" />
                    <p className="text-xs font-bold text-white uppercase tracking-tighter">Threat Level</p>
                    <p className="text-[10px] text-gray-500">Critical: AI-to-Physical</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <Cpu size={18} className="text-cyan-400" />
                    <p className="text-xs font-bold text-white uppercase tracking-tighter">Architecture</p>
                    <p className="text-[10px] text-gray-500">Agentic Entities</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Analyzing how virtual vulnerabilities in autonomous agents manifest as physical security breaches in IoT environments.
                  </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="full-article" className="border-none">
                    <AccordionTrigger className="text-cyan-400 hover:text-white transition-colors hover:no-underline bg-white/5 px-6 py-4 rounded-xl text-sm border border-white/10 group">
                      Technical Summary <ArrowRight size={14} className="ml-2 group-data-[state=open]:rotate-90 transition-transform" />
                    </AccordionTrigger>
                    <AccordionContent className="pt-6 text-gray-400 text-sm space-y-4">
                      <p>Focuses on adversarial prompt injections and privilege escalation in autonomous AI agents interacting with physical IoT security protocols.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* ONGC INTERNSHIP CARD */}
            <Card className="bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden rounded-[2rem]">
              <CardHeader className="bg-gradient-to-br from-white/5 to-transparent border-b border-white/10 p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                      <Briefcase size={12} /> ONGC DEHRADUN
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">Summer 2024</span>
                  </div>
                  <CardTitle className="text-3xl font-black text-white leading-tight">
                    Industrial Training & <br />
                    <span className="text-purple-400">Drilling Technology</span>
                  </CardTitle>
                  <Button
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-black flex items-center justify-center gap-3 py-7 rounded-2xl transition-all group"
                    onClick={handleOpenCert}
                  >
                    <Drill size={20} className="group-hover:rotate-12 transition-transform" />
                    VIEW COMPLETION CERTIFICATE
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <HardHat size={18} className="text-purple-400" />
                    <p className="text-xs font-bold text-white uppercase tracking-tighter">Department</p>
                    <p className="text-[10px] text-gray-500">Drilling Services</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <Cpu size={18} className="text-cyan-400" />
                    <p className="text-xs font-bold text-white uppercase tracking-tighter">Exposure</p>
                    <p className="text-[10px] text-gray-500">SCADA & Automation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Hands-on experience at **ONGC (Oil and Natural Gas Corporation)**, focusing on drilling rig automation, safety protocols, and industrial IoT integration.
                  </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="intern-summary" className="border-none">
                    <AccordionTrigger className="text-cyan-400 hover:text-white transition-colors hover:no-underline bg-white/5 px-6 py-4 rounded-xl text-sm border border-white/10 group">
                      Hands-on Summary <ArrowRight size={14} className="ml-2 group-data-[state=open]:rotate-90 transition-transform" />
                    </AccordionTrigger>
                    <AccordionContent className="pt-6 text-gray-400 text-sm space-y-4">
                      <p>Gained deep insights into the mechanics of drilling rigs, offshore/onshore operations, and the implementation of automated monitoring systems in high-risk environments.</p>
                      <ul className="list-disc list-inside space-y-1 text-[11px]">
                        <li>Study of Blowout Preventers (BOP) Control Systems.</li>
                        <li>Analysis of real-time mud logging sensors.</li>
                        <li>Industrial safety standards (HSE) and risk mitigation.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

          </div>
        </section>
      </div>
    </main>
  )
}