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
import { Github, Presentation, ArrowRight, Globe, Briefcase, FileCheck, Drill } from "lucide-react"

const PROJECTS = [
  { title: "Smart Door Lock", link: "/projects/doorlock" },
  { title: "Accident Detection AI", link: "/projects/acci" },
  { title: "IoT Dashboard", link: "/projects/iotproject" },
  { title: "Stock Market Dashboard", link: "/projects/stock" },
  { title: "Stock Market Dashboard", link: "/projects/tbc" }

]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleOpenPPT = () => {
    if (typeof window !== "undefined") {
      window.open("/Security_Vulnerabilities.pdf", "_blank")
    }
  }

  const handleOpenSmartcomCert = () => {
    if (typeof window !== "undefined") {
      window.open("/smartcom.pdf", "_blank")
    }
  }

  const handleOpenCert = () => {
    if (typeof window !== "undefined") {
      window.open("/smartcom1.pdf", "_blank")
    }
  }

  const cardWrapper =
    "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl transition duration-500 hover:-translate-y-1 hover:border-purple-400 hover:shadow-purple-500/20"

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden bg-black">

      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/25 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
          <Navbar />
        </header>

        {/* HERO */}
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
              <a
                href="#projects"
                className="group flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-bold hover:bg-cyan-400 transition-all"
              >
                View Featured Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

             <Link
  href="https://github.com/BS-Tech17"
  target="_blank"
  className="group flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-cyan-500/10 transition text-white"
>
  <Github
    size={20}
    className="transition-colors group-hover:text-cyan-400"
  />
  <span className="transition-colors group-hover:text-cyan-400">
    GitHub Profile
  </span>
</Link>
            </div>
          </div>

          <div className="w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative">
              {mounted ? (
                <HeroSlider />
              ) : (
                <div className="h-80 bg-white/5 rounded-3xl animate-pulse border border-white/10" />
              )}
            </div>
          </div>
        </section>

        {/* FEATURED WORK */}
        <section id="projects" className="max-w-7xl mx-auto px-6 pb-24 scroll-mt-24">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
            <p className="text-gray-500 mt-2">Core engineering projects in IoT, AI, and Automation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className={cardWrapper}>
                <ProjectCard title={project.title} link={project.link} />
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="max-w-7xl mx-auto px-6 pb-32 scroll-mt-24">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">Research & Internship Experience</h2>
            <p className="text-gray-500 mt-2">Hands-on industry exposure and academic publications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* SMARTCOM */}
           {/* SMARTCOM - FULL UPDATED CARD */}
<Card className="bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden rounded-[2rem]">
  <CardHeader className="bg-gradient-to-br from-white/5 to-transparent border-b border-white/10 p-8">
    <div className="flex flex-col gap-6">

      {/* Top Badge + Date */}
      <div className="flex justify-between items-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase">
          <Globe size={12} /> SMARTCOM 2026
        </span>
        <span className="text-[10px] text-white font-mono font-bold">
          19 Jan 2026
        </span>
      </div>

      {/* Location */}
      <div className="text-sm text-gray-400 font-medium">
        Location: <span className="text-cyan-400 font-semibold">Crowne Plaza, Pune, India</span>
      </div>

      {/* Title */}
      <CardTitle className="text-3xl font-black text-white leading-tight">
        Security Vulnerabilities in <br />
        <span className="text-purple-400">Agentic AI Systems</span>
      </CardTitle>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <Button
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black flex items-center justify-center gap-3 py-7 rounded-2xl transition-all"
          onClick={handleOpenSmartcomCert}
        >
          <FileCheck size={20} /> VIEW CONFERENCE CERTIFICATE
        </Button>

        <Button
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-black flex items-center justify-center gap-3 py-7 rounded-2xl transition-all"
          onClick={handleOpenPPT}
        >
          <Presentation size={20} /> VIEW PRESENTATION (PPTX)
        </Button>
      </div>

    </div>
  </CardHeader>

  <CardContent className="p-8 space-y-10">
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="smartcom-details" className="border-none">
        <AccordionTrigger className="text-white hover:text-cyan-400 font-bold transition-colors hover:no-underline bg-white/10 px-6 py-4 rounded-xl text-md border border-white/10 group">
          DETAILED RESEARCH SUMMARY
          <ArrowRight size={14} className="ml-2 group-data-[state=open]:rotate-90 transition-transform" />
        </AccordionTrigger>

        <AccordionContent className="pt-6 text-slate-100 text-sm space-y-8 leading-relaxed">

          <ul className="list-disc list-inside space-y-4 font-medium text-[14px]">

            <li>
              <strong className="text-cyan-400">Agentic AI Architecture:</strong>
              Modern agentic systems combine Large Language Models (LLMs) with memory modules, tool-calling APIs, browser automation, and local shell execution. These systems autonomously plan, reason, and execute multi-step tasks.
            </li>

            <li>
              <strong className="text-cyan-400">Expanded Attack Surface:</strong>
              Unlike conventional chatbots, agent-based AI interacts with external systems including databases, IoT dashboards, operating systems, and cloud services — significantly increasing exploitable entry points.
            </li>

            <li>
              <strong className="text-cyan-400">Indirect Prompt Injection:</strong>
              Malicious payloads embedded within web content, PDFs, or emails can be retrieved through RAG pipelines and interpreted as trusted instructions, leading to unintended execution.
            </li>

            <li>
              <strong className="text-cyan-400">Zero-Click Exploitation Chain:</strong>
              Attacker-controlled content → RAG ingestion → Prompt override → Tool invocation → Data exfiltration — all without explicit user interaction.
            </li>

            <li>
              <strong className="text-cyan-400">Remote Code Execution (RCE):</strong>
              Compromised tool-calling agents may execute unauthorized shell commands, exposing system-level vulnerabilities.
            </li>

            <li>
              <strong className="text-cyan-400">Privilege Escalation:</strong>
              Improperly scoped API keys, persistent memory states, and environment variables may allow attackers to escalate privileges within autonomous workflows.
            </li>

            <li>
              <strong className="text-cyan-400">Data Exfiltration Risks:</strong>
              Sensitive files, credentials, and configuration tokens may be transmitted to external endpoints via automated API calls.
            </li>

            <li>
              <strong className="text-cyan-400">IoT & Cyber-Physical Impact:</strong>
              In smart industrial ecosystems, compromised AI logic may override actuator controls, modify telemetry thresholds, or disable safety mechanisms.
            </li>

            <li>
              <strong className="text-cyan-400">Threat Modeling Framework:</strong>
              Suggested layered analysis across LLM inference layer, tool invocation layer, memory persistence layer, integration layer, and host OS layer.
            </li>

            <li>
              <strong className="text-cyan-400">Proposed Mitigation Strategy:</strong>
              Introduced multi-layered defense including input sanitization, adversarial filtering, ephemeral sandboxing, scoped permissions, anomaly detection, and mandatory human-in-the-loop verification.
            </li>

            <li>
              <strong className="text-cyan-400">Security-by-Design Recommendation:</strong>
              Future agentic AI systems must adopt zero-trust architecture, least-privilege execution, and isolation-first frameworks to ensure safe deployment at scale.
            </li>

          </ul>

        </AccordionContent>
      </AccordionItem>
    </Accordion>

    {/* IMAGE GALLERY */}
    <div className="pt-6 border-t border-white/10 space-y-6">

      <h3 className="text-lg font-bold text-white">
        Conference Highlights
      </h3>

      <div className="grid grid-cols-2 gap-4">

        <div className="relative group overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/abc.jpeg"
            alt="SMARTCOM Conference 1"
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="relative group overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/res.jpeg"
            alt="SMARTCOM Conference 2"
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="relative group overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/Wt.jpeg"
            alt="SMARTCOM Conference 3"
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="relative group overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/Conf.jpeg"
            alt="SMARTCOM Conference 4"
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

      </div>
    </div>

  </CardContent>
</Card>

            {/* ONGC - UPDATED WITH FLOWCHART LOGIC */}
{/* ONGC - FINAL CORRECT STRUCTURE */}
<Card className="bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden rounded-[2rem]">
  <CardHeader className="bg-gradient-to-br from-white/5 to-transparent border-b border-white/10 p-8">
    <div className="flex flex-col gap-6">

      {/* Top Badge + Date */}
      <div className="flex justify-between items-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold tracking-[0.2em] uppercase">
          <Briefcase size={12} /> ONGC DEHRADUN
        </span>
        <span className="text-[10px] text-white font-mono font-bold">
          25.06.2024 – 25.07.2024
        </span>
      </div>

      {/* Location */}
      <div className="text-sm text-gray-400 font-medium">
        Location: <span className="text-cyan-400 font-semibold">ONGC Dehradun, Uttarakhand, India</span>
      </div>

      {/* Title */}
      <CardTitle className="text-3xl font-black text-white leading-tight">
        AI-Powered <br />
        <span className="text-cyan-400">Document Summarizing</span>
      </CardTitle>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <Button
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black flex items-center justify-center gap-3 py-7 rounded-2xl transition-all"
          onClick={handleOpenCert}
        >
          <Drill size={20} /> VIEW COMPLETION CERTIFICATE
        </Button>

        <Link
          href="https://github.com/BS-Tech17/NLP-for-document-summarizing"
          target="_blank"
          className="w-full"
        >
          <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-black flex items-center justify-center gap-3 py-7 rounded-2xl transition-all">
            <Github size={20} /> VIEW PROJECT REPOSITORY
          </Button>
        </Link>
      </div>

    </div>
  </CardHeader>

  <CardContent className="p-8 space-y-8">

    {/* ========================= */}
    {/* ACCORDION HEADING (ONLY CONTROLS TEXT) */}
    {/* ========================= */}
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="intern-details" className="border-none">

        <AccordionTrigger className="text-white hover:text-purple-400 font-bold transition-colors hover:no-underline bg-white/10 px-6 py-4 rounded-xl text-md border border-white/10 group">
          METHODOLOGY & WORKFLOW
          <ArrowRight size={14} className="ml-2 group-data-[state=open]:rotate-90 transition-transform" />
        </AccordionTrigger>

        {/* FLOWCHART — ALWAYS VISIBLE (OUTSIDE CONTENT BUT INSIDE ITEM) */}
        <div className="mt-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-5 shadow-[0_0_12px_rgba(0,255,255,0.12)] max-w-lg mx-auto">

          <div className="space-y-3 flex flex-col items-center font-mono text-[12px]">

            <div className="px-4 py-2 border border-cyan-400 bg-cyan-500/20 rounded-lg text-white font-semibold">
              PDF DDR DOCUMENT
            </div>

            <div className="text-cyan-400 text-sm">↓</div>

            <div className="px-4 py-2 border border-white/30 bg-white/5 rounded-lg text-white">
              TEXT EXTRACTION
            </div>

            <div className="text-cyan-400 text-sm">↓</div>

            <div className="px-4 py-2 border border-white/30 bg-white/5 rounded-lg text-white">
              TOKENIZATION (NLTK)
            </div>

            <div className="text-cyan-400 text-sm">↓</div>

            <div className="px-4 py-2 border border-purple-400 bg-purple-500/20 rounded-lg text-white text-center">
              SIMILARITY MATRIX
            </div>

            <div className="text-cyan-400 text-sm">↓</div>

            <div className="px-4 py-2 border border-white/30 bg-white/5 rounded-lg text-white">
              GRAPH + PAGERANK
            </div>

            <div className="text-cyan-400 text-sm">↓</div>

            <div className="px-4 py-2 border border-cyan-400 bg-cyan-600 rounded-lg text-black font-bold">
              SUMMARY OUTPUT
            </div>

          </div>
        </div>

        {/* EXPANDABLE CONTENT ONLY FOR BULLETS */}
 <AccordionContent className="pt-6 text-slate-100 text-sm space-y-6 leading-relaxed">

  <ul className="list-disc list-inside space-y-4 font-medium text-[14px]">

    <li>
      <strong className="text-cyan-400">Problem Context:</strong>
      Daily Drilling Reports (DDR) contain complex operational logs including drilling depth progression, mud circulation data, geological observations, downtime events, equipment status, and safety remarks. Manual inspection of such multi-page technical documents is time-intensive and prone to oversight.
    </li>

    <li>
      <strong className="text-cyan-400">Objective:</strong>
      To design an AI-powered extractive summarization pipeline capable of automatically identifying key operational insights and generating concise summaries for engineering review.
    </li>

    <li>
      <strong className="text-cyan-400">PDF Text Extraction:</strong>
      Utilized <span className="text-white">pdfplumber</span> to extract structured textual content from multi-page drilling reports while removing repetitive headers, page numbers, and layout artifacts.
    </li>

    <li>
      <strong className="text-cyan-400">Sentence Segmentation:</strong>
      Applied sentence tokenization using <span className="text-white">NLTK</span> to break large paragraphs into structured, analyzable sentence units.
    </li>

    <li>
      <strong className="text-cyan-400">Text Cleaning:</strong>
      Removed punctuation, special characters, excessive whitespace, irrelevant symbols, and non-informative formatting tokens to ensure clean input data.
    </li>

    <li>
      <strong className="text-cyan-400">Stopword Removal:</strong>
      Eliminated common English stopwords (e.g., “the”, “is”, “and”) using NLTK stopword corpus to reduce noise and emphasize meaningful drilling-related terms.
    </li>

    <li>
      <strong className="text-cyan-400">Normalization & Lemmatization:</strong>
      Converted text to lowercase and applied lemmatization to reduce words to their root forms (e.g., “drilling”, “drilled” → “drill”) to improve semantic consistency.
    </li>

    <li>
      <strong className="text-cyan-400">Domain-Specific Filtering:</strong>
      Retained critical technical keywords such as depth readings, equipment identifiers, geological references, and downtime codes to preserve operational relevance.
    </li>

    <li>
      <strong className="text-cyan-400">Vector Space Modeling (TF-IDF):</strong>
      Transformed processed sentences into numerical vectors using Term Frequency–Inverse Document Frequency (TF-IDF) to measure contextual importance of terms across the document.
    </li>

    <li>
      <strong className="text-cyan-400">Cosine Similarity Matrix:</strong>
      Computed pairwise cosine similarity between sentence vectors to quantify semantic closeness and build contextual relationships.
    </li>

    <li>
      <strong className="text-cyan-400">Graph Construction:</strong>
      Modeled sentences as nodes in a weighted graph using <span className="text-white">NetworkX</span>, where edges represented similarity scores between sentences.
    </li>

    <li>
      <strong className="text-cyan-400">TextRank Algorithm:</strong>
      Applied the PageRank algorithm to compute centrality scores and identify the most information-dense sentences within the document.
    </li>

    <li>
      <strong className="text-cyan-400">Sentence Ranking & Selection:</strong>
      Selected top-ranked sentences based on PageRank scores while maintaining logical sequence to preserve technical coherence.
    </li>

    <li>
      <strong className="text-cyan-400">Summary Generation:</strong>
      Generated concise 8–12 sentence summaries capturing key operational insights, downtime reasons, and performance indicators.
    </li>

    <li>
      <strong className="text-cyan-400">Unsupervised Architecture:</strong>
      Designed without labeled training data, making the system adaptable across varying drilling sites and documentation formats.
    </li>

    <li>
      <strong className="text-cyan-400">Performance Impact:</strong>
      Reduced manual DDR review time significantly, enabling faster identification of inefficiencies and improved engineering decision-making.
    </li>

    <li>
      <strong className="text-cyan-400">Scalability & Future Scope:</strong>
      Built as a modular Python pipeline suitable for integration into enterprise dashboards and future enhancement using transformer-based abstractive models.
    </li>

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