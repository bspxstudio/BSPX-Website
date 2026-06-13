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

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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

  const desktopLeftLinks = navLinks.slice(0, 2);
  const desktopRightLinks = navLinks.slice(2);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-5"
      }`}
    >
      {/* ================= MAIN NAV BAR ================= */}
      <nav className="relative mx-auto flex w-[calc(100%-24px)] max-w-[1700px] items-center justify-between rounded-full border border-white/10 bg-[#050505]/80 px-4 py-3 shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-500 sm:w-[calc(100%-32px)] sm:px-5 md:px-6 lg:px-8 xl:px-8 2xl:px-10">
        {/* Glass Layers */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-white/[0.10] via-white/[0.03] to-white/[0.08]" />
        <div className="pointer-events-none absolute left-4 top-1/2 h-20 w-40 -translate-y-1/2 rounded-full bg-[#D4A53A]/10 blur-3xl sm:left-10 sm:w-64" />
        <div className="pointer-events-none absolute right-4 top-1/2 h-20 w-40 -translate-y-1/2 rounded-full bg-[#1E3A5F]/20 blur-3xl sm:right-10 sm:w-64" />

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="relative z-10 flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="BSPX Studio Logo"
            className="h-11 w-auto object-contain sm:h-12 md:h-14 lg:h-14 xl:h-14 2xl:h-16"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="relative z-10 hidden min-w-0 items-center gap-1 rounded-full border border-white/10 bg-black/45 p-1.5 shadow-inner backdrop-blur-2xl xl:flex 2xl:gap-2 2xl:p-2">
          {desktopLeftLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-3 py-2.5 font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.14em] transition-all duration-300 2xl:px-5 2xl:py-3 2xl:text-[10px] 2xl:tracking-[0.18em] ${
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
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 180)}
              className={`flex items-center gap-2 rounded-full px-3 py-2.5 font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.14em] transition-all duration-300 focus:outline-none 2xl:px-5 2xl:py-3 2xl:text-[10px] 2xl:tracking-[0.18em] ${
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
              className={`absolute left-1/2 top-full z-[9999] mt-5 w-[min(92vw,560px)] -translate-x-1/2 rounded-[1.75rem] border border-white/10 bg-[#050505]/95 p-4 shadow-[0_35px_120px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-300 origin-top 2xl:mt-6 2xl:rounded-[2rem] 2xl:p-5 ${
                servicesOpen
                  ? "visible scale-100 opacity-100"
                  : "invisible scale-95 opacity-0"
              }`}
            >
              <div className="mb-4 rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-4 2xl:mb-5 2xl:rounded-[1.4rem] 2xl:p-5">
                <p className="font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.3em] text-[#D4A53A]">
                  What We Shoot
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/50">
                  Photography, reels, edits, events, frames, and story-led
                  visual services from Coimbatore to all India.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 2xl:gap-5">
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
                          `block rounded-xl px-3 py-2.5 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-widest transition-all 2xl:text-[10px] ${
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
                          `block rounded-xl px-3 py-2.5 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-widest transition-all 2xl:text-[10px] ${
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
                          `block rounded-xl px-3 py-2.5 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-widest transition-all 2xl:text-[10px] ${
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
                    <p className="font-['Bebas_Neue',sans-serif] text-3xl leading-none tracking-wide text-white 2xl:text-4xl">
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
                    className="mt-6 inline-flex w-fit font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.22em] text-[#D4A53A] transition hover:text-[#FF7A00] 2xl:text-[10px]"
                  >
                    View All Services →
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {desktopRightLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-3 py-2.5 font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.14em] transition-all duration-300 2xl:px-5 2xl:py-3 2xl:text-[10px] 2xl:tracking-[0.18em] ${
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

        {/* ================= DESKTOP CTA ================= */}
        <div className="relative z-10 hidden shrink-0 lg:block xl:hidden 2xl:block">
          <button
            type="button"
            onClick={() => scrollToSection("quote")}
            className="group inline-flex items-center gap-2 rounded-full bg-[#D4A53A] px-5 py-3.5 font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.16em] text-[#0A0A0A] shadow-[0_15px_45px_rgba(212,165,58,0.28)] transition-all duration-300 hover:bg-[#FF7A00] hover:text-white active:scale-95 2xl:gap-3 2xl:px-9 2xl:py-4 2xl:text-[10px] 2xl:tracking-[0.22em]"
          >
            <Camera className="h-4 w-4" />
            <span className="hidden 2xl:inline">Book Shoot</span>
            <span className="2xl:hidden">Book</span>
          </button>
        </div>

        {/* ================= MOBILE / TABLET MENU TOGGLE ================= */}
        <button
          type="button"
          className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition hover:bg-white/10 sm:h-12 sm:w-12 xl:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* ================= MOBILE / TABLET MENU ================= */}
      <div
        className={`mx-auto mt-3 w-[calc(100%-24px)] max-w-[900px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#050505]/95 shadow-[0_35px_120px_rgba(0,0,0,0.75)] backdrop-blur-2xl transition-all duration-500 sm:mt-4 sm:w-[calc(100%-32px)] sm:rounded-[2rem] xl:hidden ${
          isOpen
            ? "max-h-[calc(100vh-104px)] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="max-h-[calc(100vh-104px)] overflow-y-auto p-4 sm:p-5 md:p-6">
          {/* Mobile Logo Header */}
          <div className="mb-4 flex items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4 sm:mb-6 sm:p-5 md:p-6">
            <img
              src={logo}
              alt="BSPX Studio Logo"
              className="h-16 w-auto object-contain sm:h-20 md:h-24"
            />
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {["Home", "About"].map((name) => {
              const link = navLinks.find((item) => item.name === name);

              return (
                <NavLink
                  key={name}
                  to={link.path}
                  onClick={closeMobileMenu}
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
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="flex items-center justify-between rounded-2xl px-5 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-widest text-white/60 transition hover:bg-white/10 hover:text-white sm:col-span-2"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 sm:col-span-2 ${
                mobileServicesOpen
                  ? "max-h-[720px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 gap-2 border-l border-[#D4A53A]/30 pl-4 sm:grid-cols-2">
                {mobileServiceItems.map((service) => (
                  <NavLink
                    key={service.name}
                    to={service.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `rounded-xl border px-4 py-3.5 font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-widest transition-all sm:px-5 sm:text-[11px] ${
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
                  onClick={closeMobileMenu}
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

          <div className="my-5 h-px bg-white/10 sm:my-6" />

          <div className="space-y-3 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 sm:p-5">
            <a
              href="mailto:bspxstudio@gmail.com"
              className="block break-all font-['Montserrat',sans-serif] text-[11px] font-bold uppercase tracking-[0.16em] text-[#D4A53A] sm:text-xs sm:tracking-[0.18em]"
            >
              bspxstudio@gmail.com
            </a>

            <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40 sm:tracking-[0.2em]">
              Coimbatore | Serving All India
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              scrollToSection("quote");
              closeMobileMenu();
            }}
            className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#D4A53A] px-7 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-widest text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white sm:mt-7"
          >
            <Camera className="h-4 w-4" />
            Book Your Shoot
          </button>
        </div>
      </div>
    </header>
  );
}