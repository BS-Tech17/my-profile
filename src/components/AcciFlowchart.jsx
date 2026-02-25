"use client"
import { Activity, Camera, Cpu, Bell, Smartphone } from "lucide-react"

export default function AcciFlowchart() {
  const steps = [
    { id: "01", title: "Capture", icon: <Camera />, color: "cyan" },
    { id: "02", title: "Inference", icon: <Cpu />, color: "purple" },
    { id: "03", title: "MQTT Alert", icon: <Activity />, color: "cyan" },
    { id: "04", title: "GSM/SMS", icon: <Smartphone />, color: "purple" },
  ]

  return (
    <div className="w-full py-12 px-4 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
      <h3 className="text-center text-gray-400 text-xs uppercase tracking-[0.3em] mb-10">System Data Flow</h3>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto relative">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center relative z-10">
            {/* Step Circle */}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 
              ${step.color === 'cyan' ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400' : 'border-purple-500/50 bg-purple-500/10 text-purple-400'} 
              shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform hover:scale-110 duration-300`}>
              {step.icon}
            </div>
            
            <div className="mt-4 text-center">
              <span className="block text-[10px] font-mono text-gray-500">{step.id}</span>
              <span className="text-sm font-bold text-white tracking-wide">{step.title}</span>
            </div>

            {/* Connecting Arrow/Line (Desktop) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[100%] w-full h-[2px]">
                <div className="w-full h-full bg-white/10 relative">
                  {/* Animated Glow Pulse */}
                  <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-flow-line"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes flow-line {
          0% { left: -50%; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .animate-flow-line {
          animation: flow-line 2s infinite linear;
        }
      `}</style>
    </div>
  )
}