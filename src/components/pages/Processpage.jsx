import React from "react";
import { Helmet } from "react-helmet";
import {
  Coffee,
  Compass,
  Aperture,
  SlidersHorizontal,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Focus
} from "lucide-react";

export default function ProcessPage() {
  const workflowSteps = [
    { id: "01", title: "Discovery", subtitle: "The First Hello", icon: Coffee },
    { id: "02", title: "Planning", subtitle: "The Blueprint", icon: Compass },
    { id: "03", title: "Execution", subtitle: "The Shoot", icon: Aperture },
    { id: "04", title: "Editing", subtitle: "Darkroom Magic", icon: SlidersHorizontal },
    { id: "05", title: "Delivery", subtitle: "The Legacy", icon: BookOpen }
  ];

  return (
    <main className="min-h-screen bg-[#050505] font-['Montserrat',sans-serif] text-white selection:bg-[#D4A53A] selection:text-black">
      <Helmet>
        <title>BSPX Studio | The Process</title>
      </Helmet>

      {/* --- HERO: 3D Camera Visual Concept --- */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center border-b border-white/10 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#050505_100%)]" />
        
        {/* Floating Camera Graphic Representation */}
        <div className="relative z-10 mb-12 transform hover:rotate-6 transition-transform duration-700">
           <div className="w-64 h-64 border-[12px] border-[#D4A53A] rounded-full flex items-center justify-center relative">
              <Focus className="w-32 h-32 text-white/20" />
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#D4A53A] rounded-full" />
           </div>
        </div>

        <h1 className="relative z-10 font-['Cormorant_Garamond',serif] text-7xl md:text-9xl text-white">
          <span className="italic text-[#D4A53A]">Precision</span> Craft.
        </h1>
      </section>

      {/* --- WORKFLOW TIMELINE --- */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-y border-white/10">
          {workflowSteps.map((step, i) => (
            <div key={i} className="group border-r border-white/10 last:border-r-0 p-8 flex flex-col gap-6 hover:bg-[#0d0d0d] transition-colors">
              <span className="font-['Cormorant_Garamond',serif] text-5xl text-[#D4A53A]">{step.id}</span>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-2">{step.title}</h3>
                <p className="text-[10px] uppercase text-white/40 tracking-[0.2em]">{step.subtitle}</p>
              </div>
              <step.icon className="w-8 h-8 text-white/20 group-hover:text-[#D4A53A] transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* --- TECHNICAL DETAILS --- */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-[#D4A53A]/20 p-10 bg-black">
            <Cpu className="w-10 h-10 text-[#D4A53A] mb-6" />
            <h4 className="font-['Cormorant_Garamond',serif] text-3xl mb-4">Technical Purity</h4>
            <p className="text-sm leading-relaxed text-white/60">
              We utilize calibrated full-frame optics and custom color-profiles 
              to ensure your memories aren't just captured—they are engineered 
              for eternity. No noise, no color-cast, just pure image quality.
            </p>
          </div>
          <div className="border border-white/10 p-10 bg-black">
            <CheckCircle2 className="w-10 h-10 text-white/20 mb-6" />
            <h4 className="font-['Cormorant_Garamond',serif] text-3xl mb-4">Studio Integrity</h4>
            <p className="text-sm leading-relaxed text-white/60">
              Transparency is our primary lens. From the initial quote to the 
              final print, you retain full visibility. We work in the light, 
              delivering premium results without the hidden-fee shadow.
            </p>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-32 text-center border-t border-white/10">
        <h2 className="font-['Cormorant_Garamond',serif] text-6xl italic mb-12">Ready to frame your moment?</h2>
        <button className="inline-flex items-center gap-3 bg-[#D4A53A] px-12 py-5 font-bold uppercase tracking-widest text-black hover:bg-white transition-all">
          Book Session <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </main>
  );
}