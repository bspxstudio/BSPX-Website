import React from "react";
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
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
    "FAQ",
    "Reviews",
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
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#101415] text-white font-['Poppins',sans-serif]">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[420px] w-[420px] bg-[#D4A53A]/10 blur-[120px]" />
        <div className="absolute right-[-12%] bottom-[-20%] h-[520px] w-[520px] bg-[#1E3A5F]/25 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_42%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-6 py-16 md:px-12 lg:px-16">
        {/* Top Studio Brand */}
        <div className="border-b border-white/10 pb-14 text-center">
          <div className="flex items-center justify-center gap-4">
            <img
              src={Logo}
              alt="BSPX Studio Logo"
              className="h-10 w-10 object-contain brightness-0 invert"
            />

            <h2 className="font-['Montserrat',sans-serif] text-3xl font-semibold uppercase tracking-[0.08em] text-white md:text-4xl">
              BSPX Studio
            </h2>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50 md:flex-row md:gap-10">
            <span>Photography & Video</span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-white/35 md:block" />
            <span>Coimbatore</span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-white/35 md:block" />
            <span>Serving All India</span>
          </div>
        </div>

        {/* Footer Main Columns */}
        <div className="grid grid-cols-1 gap-px border-b border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Brand */}
          <div className="bg-[#101415] p-8 md:p-10">
            <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4A53A]">
              Brand
            </p>

            {/* Changed: Replaced the text heading with the logo and made it larger */}
            <img
              src={Logo}
              alt="BSPX Studio Logo"
              className="mt-6 h-20 w-20 object-contain brightness-0 invert"
            />

            <p className="mt-6 text-sm leading-relaxed text-white/50">
              Photography & Video – Coimbatore | Serving All India.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-white/50">
              We shoot outdoor portraits, birthday shoots, couple shoots, baby
              shoots, events, pre/post wedding, and model shoots. Also make
              reels, highlight edits, and photo frames.
            </p>

            <a
              href="mailto:bspxstudio@gmail.com"
              className="mt-8 inline-flex items-center gap-3 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A53A] transition hover:text-[#FF7A00]"
            >
              <Mail className="h-4 w-4" />
              bspxstudio@gmail.com
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="bg-[#101415] p-8 md:p-10">
            <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4A53A]">
              Quick Links
            </p>

            <ul className="mt-8 space-y-4">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="font-['Montserrat',sans-serif] text-sm font-medium text-white/55 transition hover:text-[#FF7A00]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="bg-[#101415] p-8 md:p-10">
            <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4A53A]">
              What We Shoot
            </p>

            <ul className="mt-8 space-y-4">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="font-['Montserrat',sans-serif] text-sm font-medium text-white/55 transition hover:text-[#FF7A00]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Area */}
          <div className="bg-[#101415] p-8 md:p-10">
            <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4A53A]">
              Where We Serve
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-widest text-white/30">
                  Based In
                </p>
                <p className="mt-2 text-sm font-medium text-white/60">
                  Coimbatore, Tamil Nadu
                </p>
              </div>

              <div>
                <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-widest text-white/30">
                  Serving India
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  Chennai | Bangalore | Hyderabad | Mumbai | Pune | Delhi |
                  Kerala | Goa | Ooty | And more
                </p>
              </div>

              <p className="border-l border-[#FF7A00] pl-4 text-xs leading-relaxed text-white/45">
                We travel to your city. Email us for travel charges.
              </p>
            </div>
          </div>

          {/* Column 5: Contact */}
          <div className="bg-[#101415] p-8 md:p-10">
            <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4A53A]">
              Contact Us
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-widest text-white/30">
                  Email
                </p>
                <a
                  href="mailto:bspxstudio@gmail.com"
                  className="mt-2 block text-sm font-medium text-white/60 transition hover:text-[#FF7A00]"
                >
                  bspxstudio@gmail.com
                </a>
                <p className="mt-2 text-xs text-white/35">
                  We reply within 24 hours.
                </p>
              </div>

              <div>
                <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-widest text-white/30">
                  Phone
                </p>
                <p className="mt-2 text-sm text-white/55">
                  Provided on request via email
                </p>
              </div>

              <div>
                <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-widest text-white/30">
                  Office Base
                </p>
                <p className="mt-2 text-sm text-white/55">
                  Coimbatore, Tamil Nadu
                </p>
              </div>

              <div>
                <p className="mb-4 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-widest text-white/30">
                  Follow
                </p>

                <div className="flex items-center gap-4">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-label={item.name}
                        className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/5 text-white/60 transition hover:border-[#D4A53A] hover:bg-[#D4A53A] hover:text-[#0A0A0A]"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>

                <p className="mt-5 text-xs leading-relaxed text-white/35">
                  For booking, email is fastest.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 border-b border-white/10 py-10 font-['Montserrat',sans-serif] text-sm font-medium text-white/55 md:gap-14">
          {["Works", "Services", "About", "Pricing", "Contact us"].map(
            (item) => (
              <a
                key={item}
                href="/"
                className="transition hover:text-[#FF7A00]"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col items-center justify-between gap-6 pt-10 text-center md:flex-row md:text-left">
          <p className="font-['Montserrat',sans-serif] text-xs text-white/40">
            © {currentYear} BSPX Studio. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 font-['Montserrat',sans-serif] text-xs text-white/40">
            <a href="/" className="transition hover:text-[#FF7A00]">
              Privacy Policy
            </a>
            <span className="text-white/20">|</span>
            <a href="/" className="transition hover:text-[#FF7A00]">
              Terms of Service
            </a>
            <span className="text-white/20">|</span>
            <a href="/" className="transition hover:text-[#FF7A00]">
              Booking Policy
            </a>
          </div>
        </div>

        <p className="mt-6 text-center font-['Montserrat',sans-serif] text-[10px] font-medium uppercase tracking-[0.18em] text-white/25">
          Built with love in Coimbatore. Serving happy clients across India.
        </p>
      </div>
    </footer>
  );
}