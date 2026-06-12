import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Camera, Menu, X } from "lucide-react";
import logo from "../../assests/cubelogo.webp";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Process", path: "/process" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  const photoServices = [
    { name: "Outdoor Portraits", path: "/services/outdoor-portraits" },
    { name: "Birthday Shoots", path: "/services/birthday-shoots" },
    { name: "Couple Shoots", path: "/services/couple-shoots" },
    { name: "Baby Shoots", path: "/services/baby-shoots" },
    { name: "Pre-Wedding Shoots", path: "/services/pre-wedding-shoots" },
    { name: "Post-Wedding Shoots", path: "/services/post-wedding-shoots" },
    { name: "Model Shoots", path: "/services/model-shoots" },
    { name: "Events", path: "/services/events" },
  ];

  const videoServices = [
    { name: "Reels", path: "/services/reels" },
    { name: "Highlight Edits", path: "/services/highlight-edits" },
  ];

  const productServices = [
    { name: "Photo Frames", path: "/services/photo-frames" },
  ];

  const mobileServiceItems = [
    ...photoServices,
    ...videoServices,
    ...productServices,
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <nav className="relative mx-auto flex w-[calc(100%-32px)] max-w-[1700px] items-center justify-between rounded-full border border-white/10 bg-[#050505]/75 px-6 py-4 shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-500 md:px-8 lg:px-10">
        {/* Black Glass Layers */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-white/[0.10] via-white/[0.03] to-white/[0.08]" />
        <div className="pointer-events-none absolute left-10 top-1/2 h-24 w-64 -translate-y-1/2 rounded-full bg-[#D4A53A]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-1/2 h-24 w-64 -translate-y-1/2 rounded-full bg-[#1E3A5F]/20 blur-3xl" />

        {/* Logo Only - No Circle */}
        <Link to="/" className="relative z-10 flex items-center">
          <img
            src={logo}
            alt="BSPX Studio Logo"
            className="h-14 w-auto object-contain md:h-16"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="relative z-10 hidden items-center gap-2 rounded-full border border-white/10 bg-black/45 p-2 shadow-inner backdrop-blur-2xl xl:flex">
          {navLinks.slice(0, 2).map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-5 py-3 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.18em] transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 text-[#D4A53A]"
                    : "text-white/65 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
              className={`flex items-center gap-2 rounded-full px-5 py-3 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.18em] transition-all duration-300 focus:outline-none ${
                servicesOpen
                  ? "bg-white/10 text-[#D4A53A]"
                  : "text-white/65 hover:bg-white/10 hover:text-white"
              }`}
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full z-[9999] mt-6 w-[520px] -translate-x-1/2 rounded-[2rem] border border-white/10 bg-[#050505]/95 p-5 shadow-[0_35px_120px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-300 origin-top ${
                servicesOpen
                  ? "visible scale-100 opacity-100"
                  : "invisible scale-95 opacity-0"
              }`}
            >
              <div className="mb-5 rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.3em] text-[#D4A53A]">
                  What We Shoot
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/50">
                  Photography, reels, edits, events, frames, and story-led
                  visual services from Coimbatore to all India.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-5">
                <div>
                  <p className="mb-3 font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.25em] text-white/30">
                    Photos
                  </p>

                  <div className="space-y-1">
                    {photoServices.map((service) => (
                      <NavLink
                        key={service.name}
                        to={service.path}
                        className={({ isActive }) =>
                          `block rounded-xl px-3 py-2.5 font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-widest transition-all ${
                            isActive
                              ? "bg-white/10 text-[#D4A53A]"
                              : "text-white/55 hover:bg-white/10 hover:text-white"
                          }`
                        }
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.25em] text-white/30">
                    Videos & Edits
                  </p>

                  <div className="space-y-1">
                    {videoServices.map((service) => (
                      <NavLink
                        key={service.name}
                        to={service.path}
                        className={({ isActive }) =>
                          `block rounded-xl px-3 py-2.5 font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-widest transition-all ${
                            isActive
                              ? "bg-white/10 text-[#D4A53A]"
                              : "text-white/55 hover:bg-white/10 hover:text-white"
                          }`
                        }
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>

                  <p className="mb-3 mt-6 font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.25em] text-white/30">
                    Products
                  </p>

                  <div className="space-y-1">
                    {productServices.map((service) => (
                      <NavLink
                        key={service.name}
                        to={service.path}
                        className={({ isActive }) =>
                          `block rounded-xl px-3 py-2.5 font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-widest transition-all ${
                            isActive
                              ? "bg-white/10 text-[#D4A53A]"
                              : "text-white/55 hover:bg-white/10 hover:text-white"
                          }`
                        }
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4">
                  <div>
                    <p className="font-['Bebas_Neue',sans-serif] text-4xl leading-none tracking-wide text-white">
                      Book
                      <br />
                      Better
                      <br />
                      Shoots.
                    </p>
                    <p className="mt-4 text-xs leading-relaxed text-white/40">
                      Choose a service, share your city, and we reply within 24
                      hours.
                    </p>
                  </div>

                  <NavLink
                    to="/services"
                    className="mt-6 inline-flex w-fit font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-[#D4A53A] transition hover:text-[#FF7A00]"
                  >
                    View All Services →
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-5 py-3 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.18em] transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 text-[#D4A53A]"
                    : "text-white/65 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="relative z-10 hidden md:block">
          <button
            onClick={() => scrollToSection("quote")}
            className="group inline-flex items-center gap-3 rounded-full bg-[#D4A53A] px-9 py-4 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-[#0A0A0A] shadow-[0_15px_45px_rgba(212,165,58,0.28)] transition-all duration-300 hover:bg-[#FF7A00] hover:text-white active:scale-95"
          >
            <Camera className="h-4 w-4" />
            Book Shoot
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition hover:bg-white/10 xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Black Morphism Menu */}
      <div
        className={`mx-auto mt-4 w-[calc(100%-32px)] max-w-[1700px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505]/90 shadow-[0_35px_120px_rgba(0,0,0,0.75)] backdrop-blur-2xl transition-all duration-500 xl:hidden ${
          isOpen
            ? "max-h-[920px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="p-6">
          {/* Mobile Logo Header - No Circle */}
          <div className="mb-6 flex items-center justify-center border border-white/10 bg-white/[0.04] p-6">
            <img
              src={logo}
              alt="BSPX Studio Logo"
              className="h-24 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col gap-3">
            {["Home", "About"].map((name) => {
              const link = navLinks.find((item) => item.name === name);

              return (
                <NavLink
                  key={name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-5 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-widest transition-all ${
                      isActive
                        ? "bg-white/10 text-[#D4A53A]"
                        : "text-white/60 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  {name}
                </NavLink>
              );
            })}

            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between rounded-2xl px-5 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-widest text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                mobileServicesOpen
                  ? "max-h-[620px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 gap-2 border-l border-[#D4A53A]/30 pl-4">
                {mobileServiceItems.map((service) => (
                  <NavLink
                    key={service.name}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl border px-5 py-3.5 font-['Montserrat',sans-serif] text-[11px] font-bold uppercase tracking-widest transition-all ${
                        isActive
                          ? "border-[#D4A53A] bg-white/10 text-[#D4A53A]"
                          : "border-white/10 text-white/55 hover:border-white/25 hover:bg-white/10 hover:text-white"
                      }`
                    }
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {[
              "Work",
              "Process",
              "Pricing",
              "Blog",
              "FAQ",
              "Reviews",
              "Contact",
            ].map((name) => {
              const link = navLinks.find((item) => item.name === name);

              return (
                <NavLink
                  key={name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-5 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-widest transition-all ${
                      isActive
                        ? "bg-white/10 text-[#D4A53A]"
                        : "text-white/60 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  {name}
                </NavLink>
              );
            })}
          </div>

          <div className="my-6 h-px bg-white/10" />

          <div className="space-y-3 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
            <a
              href="mailto:bspxstudio@gmail.com"
              className="block font-['Montserrat',sans-serif] text-xs font-bold uppercase tracking-[0.18em] text-[#D4A53A]"
            >
              bspxstudio@gmail.com
            </a>
            <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Coimbatore | Serving All India
            </p>
          </div>

          <button
            onClick={() => {
              scrollToSection("quote");
              setIsOpen(false);
            }}
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#D4A53A] px-7 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-widest text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white"
          >
            <Camera className="h-4 w-4" />
            Book Your Shoot
          </button>
        </div>
      </div>
    </header>
  );
}