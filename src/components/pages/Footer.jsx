import React from "react";
import {
  Instagram,
  Facebook,
  
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Logo from "../../assests/cubelogo.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    "Home",
    "About Us",
    "Our Work",
    "Our Process",
    "Blog",
    "Contact Us",
  ];

  const services = [
    "Outdoor Portraits",
    "Birthday Shoots",
    "Couple Shoots",
    "Baby Shoots",
    "Pre & Post Wedding Shoots",
    "Model Shoots",
    "Events",
    "Reels & Highlight Edits",
    "Photo Frames",
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/bspx_studio/?hl=en",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61590660396444",
    },
   
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050505] pt-24 lg:pt-32 text-white font-['Poppins',sans-serif]">
      {/* Ambient Background & Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] bg-[#D4A53A]/10 blur-[150px] lg:h-[800px] lg:w-[800px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] bg-[#1E3A5F]/20 blur-[150px] lg:h-[900px] lg:w-[900px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Giant Background Watermark - Increased size for desktop */}
      <h2 className="pointer-events-none absolute left-1/2 top-10 lg:top-4 -translate-x-1/2 select-none whitespace-nowrap font-['Bebas_Neue',sans-serif] text-[18vw] lg:text-[22vw] leading-none tracking-[0.08em] text-white/[0.02]">
        BSPX STUDIO
      </h2>

      <div className="relative z-10 mx-auto w-full max-w-[2000px] px-6 md:px-12 lg:px-20">
        {/* Top Section: Brand Intro & CTA */}
        <div className="flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-16 lg:pb-24 lg:flex-row lg:items-end">
          <div className="max-w-2xl lg:max-w-4xl">
            <div className="flex items-center gap-5 lg:gap-8">
              <img
                src={Logo}
                alt="BSPX Studio Logo"
                className="h-16 w-16 lg:h-24 lg:w-24 object-contain brightness-0 invert transition-transform duration-500 hover:scale-110"
              />
              <div>
                <h3 className="font-['Bebas_Neue',sans-serif] text-4xl tracking-widest text-white md:text-5xl lg:text-7xl xl:text-8xl">
                  BSPX STUDIO
                </h3>
                <p className="font-['Montserrat',sans-serif] text-[10px] lg:text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A53A] mt-2 lg:mt-3">
                  Photography & Video
                </p>
              </div>
            </div>
            {/* Increased text size and line height for desktop body text */}
            <p className="mt-8 text-sm leading-relaxed text-white/60 md:text-base lg:text-xl lg:leading-loose xl:text-2xl font-light">
              We capture moments that matter. From outdoor portraits to cinematic
              wedding stories, we blend artistry with emotion to deliver
              timeless memories. Based in Coimbatore, creating magic across India.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <a
              href="mailto:bspxstudio@gmail.com"
              className="group flex w-full items-center justify-between gap-8 border border-white/15 bg-white/5 px-8 py-5 lg:px-12 lg:py-8 lg:gap-12 backdrop-blur-md transition-all duration-300 hover:border-[#D4A53A] hover:bg-[#D4A53A]/10 hover:shadow-[0_0_30px_rgba(212,165,58,0.15)] sm:w-auto sm:justify-start"
            >
              <div>
                <p className="font-['Montserrat',sans-serif] text-[10px] lg:text-xs font-semibold uppercase tracking-widest text-white/40">
                  Ready to shoot?
                </p>
                <p className="mt-1 lg:mt-2 text-lg lg:text-3xl font-medium text-white transition-colors group-hover:text-[#D4A53A]">
                  Let's Talk
                </p>
              </div>
              <Mail className="h-6 w-6 lg:h-8 lg:w-8 text-white/50 transition-colors group-hover:text-[#D4A53A]" />
            </a>
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 gap-12 py-16 lg:py-24 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          
          {/* Column 1: Links (Span 2) */}
          <div className="lg:col-span-2">
            <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Explore
            </p>
            <div className="mt-6 h-px w-10 lg:w-12 bg-[#D4A53A]" />
            <ul className="mt-8 flex flex-col space-y-4 lg:space-y-6">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="text-sm lg:text-lg font-light text-white/50 transition-colors hover:text-[#D4A53A]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services (Span 3) */}
          <div className="lg:col-span-3">
            <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-sm font-semibold uppercase tracking-[0.25em] text-white">
              What We Shoot
            </p>
            <div className="mt-6 h-px w-10 lg:w-12 bg-[#D4A53A]" />
            <ul className="mt-8 flex flex-col space-y-4 lg:space-y-6">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="text-sm lg:text-lg font-light text-white/50 transition-colors hover:text-[#D4A53A]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Locations (Span 3) */}
          <div className="lg:col-span-3">
            <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Where We Serve
            </p>
            <div className="mt-6 h-px w-10 lg:w-12 bg-[#D4A53A]" />
            <div className="mt-8 space-y-6 lg:space-y-8">
              <div>
                <p className="flex items-center gap-3 text-sm lg:text-lg font-medium text-white">
                  <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-[#D4A53A]" />
                  Base: Coimbatore, TN
                </p>
              </div>
              <div>
                <p className="text-sm lg:text-lg lg:leading-loose text-white/50 font-light">
                  Chennai • Bangalore • Hyderabad • Mumbai • Pune • Delhi •
                  Kerala • Goa • Ooty
                </p>
              </div>
              <p className="border-l-2 border-[#D4A53A]/50 pl-4 lg:pl-6 text-xs lg:text-sm font-light text-white/40 italic">
                Available for travel across India. Email us for destination pricing.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Socials (Span 4) */}
          <div className="lg:col-span-4 lg:pl-8 xl:pl-16">
            <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Connect With Us
            </p>
            <div className="mt-6 h-px w-10 lg:w-12 bg-[#D4A53A]" />
            
            <div className="mt-8 space-y-8 lg:space-y-10">
              <a
                href="mailto:bspxstudio@gmail.com"
                className="group flex items-center gap-5 text-sm lg:text-lg text-white/60 transition-colors hover:text-white"
              >
                <div className="flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-[#D4A53A]">
                  <Mail className="h-5 w-5 lg:h-6 lg:w-6 group-hover:text-black" />
                </div>
                <div>
                  <p className="font-medium text-white">Email Us</p>
                  <p className="text-sm lg:text-base font-light">bspxstudio@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5 text-sm lg:text-lg text-white/60">
                <div className="flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <Phone className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-sm lg:text-base font-light">Available on request</p>
                </div>
              </div>

              <div className="pt-6 lg:pt-8">
                <p className="mb-6 font-['Montserrat',sans-serif] text-[10px] lg:text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                  Follow Our Work
                </p>
                <div className="flex items-center gap-4 lg:gap-5">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.name}
                        className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center border border-white/10 bg-black text-white/60 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A53A] hover:bg-[#D4A53A] hover:text-black hover:shadow-[0_15px_30px_rgba(212,165,58,0.25)]"
                      >
                        <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Navigation Bar (Horizontal list) */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-16 border-t border-white/10 py-10 lg:py-14 font-['Montserrat',sans-serif] text-xs lg:text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
          {["Works", "Services", "About", "Pricing", "Contact us"].map(
            (item) => (
              <a
                key={item}
                href="/"
                className="transition-colors hover:text-[#D4A53A]"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 lg:py-10 md:flex-row">
          <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-sm text-white/30">
            © {currentYear} BSPX Studio. All rights reserved. Built with love in Coimbatore.
          </p>

          <div className="flex items-center gap-4 lg:gap-6 font-['Montserrat',sans-serif] text-[11px] lg:text-sm text-white/30">
            <a href="/" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <span className="h-1 w-1 lg:h-1.5 lg:w-1.5 rounded-full bg-white/20" />
            <a href="/" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <span className="h-1 w-1 lg:h-1.5 lg:w-1.5 rounded-full bg-white/20" />
            <a href="/" className="transition-colors hover:text-white">
              Booking Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}