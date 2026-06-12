import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    shootType: "",
    preferredDate: "",
    peopleCount: "",
    message: "",
  });

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      wheelMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("BSPX Studio enquiry submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white font-['Poppins',sans-serif]"
    >
      {/* Dark Map / Global Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050505]" />

        <div className="absolute inset-0 opacity-[0.13]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.101235332616!2d76.9558443750419!3d11.01397028909876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85906a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sCoimbatore%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1715000000000!3m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.1)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BSPX Studio Coimbatore Map Background"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />

        <div className="absolute left-[-12%] top-[8%] h-[520px] w-[520px] bg-[#D4A53A]/10 blur-[150px]" />
        <div className="absolute right-[-10%] bottom-[5%] h-[520px] w-[520px] bg-[#1E3A5F]/25 blur-[160px]" />

        <h2 className="absolute left-[12%] top-[18%] select-none font-['Bebas_Neue',sans-serif] text-[11rem] leading-none tracking-[0.05em] text-white/[0.025] md:text-[18rem] lg:text-[24rem]">
          BSPX
        </h2>
      </div>

      {/* Top Brand Strip */}
      <div className="relative z-20 flex items-center justify-between px-6 pt-8 md:px-12 lg:px-16">
        <div>
          <p className="font-['Bebas_Neue',sans-serif] text-3xl tracking-wide text-white">
            BSPX<span className="text-[#FF7A00]">.</span>
          </p>
          <p className="font-['Montserrat',sans-serif] text-[8px] font-semibold uppercase tracking-[0.35em] text-[#D4A53A]">
            Studio
          </p>
        </div>

        <a
          href="mailto:bspxstudio@gmail.com"
          className="hidden font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 transition hover:text-[#D4A53A] md:block"
        >
          bspxstudio@gmail.com
        </a>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-[1900px] grid-cols-1 gap-12 px-6 py-20 md:px-12 lg:grid-cols-[1fr_1.1fr] lg:px-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <div className="mb-14">
            <div className="mb-6 flex items-center gap-5">
              <span className="h-20 w-1 bg-[#FF7A00]" />
              <div>
                <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">
                  How to contact us
                </p>
                <h1 className="mt-2 font-['Montserrat',sans-serif] text-5xl font-semibold leading-none tracking-tight text-white md:text-7xl">
                  Contacts
                </h1>
              </div>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-white/45">
              BSPX Studio is based in Coimbatore, Tamil Nadu. We do not have a
              public studio for walk-ins, but we can meet you in Coimbatore if
              you want to discuss your shoot before booking.
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 gap-8 border-y border-white/10 py-10 md:grid-cols-3">
            <div>
              <p className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Address
              </p>
              <p className="mt-4 text-xs leading-relaxed text-white/55">
                Coimbatore, Tamil Nadu
                <br />
                Near Gandhipuram / RS Puram / Peelamedu
              </p>
            </div>

            <div>
              <p className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Phone
              </p>
              <p className="mt-4 text-xs leading-relaxed text-white/55">
                Available after enquiry
                <br />
                Email first for booking coordination
              </p>
            </div>

            <div>
              <p className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                E-mail
              </p>
              <a
                href="mailto:bspxstudio@gmail.com"
                className="mt-4 block text-xs leading-relaxed text-white/55 transition hover:text-[#D4A53A]"
              >
                bspxstudio@gmail.com
              </a>
            </div>
          </div>

          {/* Office Location Block */}
          <div className="mt-14 max-w-2xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl">
            <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00]">
              Office Location
            </p>

            <h2 className="mt-5 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-[0.95] tracking-wide text-white md:text-6xl">
              Our Base – Coimbatore
              <br />
              <span className="text-[#D4A53A]">But We Travel Everywhere</span>
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-white/45">
              We do not shoot at our office. We come to your home or outdoor
              location in Coimbatore — or any city in India.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
              <div className="bg-[#101010] p-5">
                <p className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-widest text-white/35">
                  Base City
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Coimbatore, Tamil Nadu
                </p>
              </div>

              <div className="bg-[#101010] p-5">
                <p className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-widest text-white/35">
                  Service Area
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  All India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Front Contact Form */}
        <div className="flex items-center">
          <div className="w-full border border-white/10 bg-[#0B0B0B]/80 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10 lg:p-12">
            <div className="mb-10">
              <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00]">
                Get in touch
              </p>

              <h3 className="mt-4 font-['Montserrat',sans-serif] text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Plan your shoot
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/40">
                Tell us your city, shoot type, date, number of people, and
                special requests. We reply within 24 hours with price and
                availability.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                <div>
                  <label className="mb-3 block font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#FF7A00]"
                  />
                </div>

                <div>
                  <label className="mb-3 block font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your e-mail"
                    className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#FF7A00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                <div>
                  <label className="mb-3 block font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#FF7A00]"
                  />
                </div>

                <div>
                  <label className="mb-3 block font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Coimbatore / Chennai / Bangalore"
                    className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#FF7A00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                <div>
                  <label className="mb-3 block font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                    Shoot Type *
                  </label>
                  <select
                    name="shootType"
                    value={formData.shootType}
                    onChange={handleChange}
                    required
                    className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition focus:border-[#FF7A00]"
                  >
                    <option className="bg-[#0A0A0A]" value="">
                      Select shoot type
                    </option>
                    <option className="bg-[#0A0A0A]" value="Birthday Shoot">
                      Birthday Shoot
                    </option>
                    <option className="bg-[#0A0A0A]" value="Couple Shoot">
                      Couple Shoot
                    </option>
                    <option className="bg-[#0A0A0A]" value="Baby Shoot">
                      Baby Shoot
                    </option>
                    <option className="bg-[#0A0A0A]" value="Outdoor Portraits">
                      Outdoor Portraits
                    </option>
                    <option className="bg-[#0A0A0A]" value="Model Shoot">
                      Model Shoot
                    </option>
                    <option className="bg-[#0A0A0A]" value="Event Photography">
                      Event Photography
                    </option>
                    <option className="bg-[#0A0A0A]" value="Pre/Post Wedding">
                      Pre/Post Wedding
                    </option>
                    <option className="bg-[#0A0A0A]" value="Reels / Edits">
                      Reels / Highlight Edits
                    </option>
                    <option className="bg-[#0A0A0A]" value="Photo Frames">
                      Photo Frames
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition focus:border-[#FF7A00]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                  Number of People
                </label>
                <input
                  type="text"
                  name="peopleCount"
                  value={formData.peopleCount}
                  onChange={handleChange}
                  placeholder="Example: 2 people / 50 guests / baby + parents"
                  className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#FF7A00]"
                />
              </div>

              <div>
                <label className="mb-3 block font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                  Special Request
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Reels, highlight edits, photo frames, location idea, outfit doubts, or anything else..."
                  className="w-full resize-none border-0 border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#FF7A00]"
                />
              </div>

              <div className="flex flex-col gap-5 pt-4 md:flex-row md:items-center">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center bg-[#FF7A00] px-9 py-4 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#D4A53A] hover:text-[#0A0A0A]"
                >
                  Send Enquiry
                  <span className="ml-4 transition group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <a
                  href="mailto:bspxstudio@gmail.com"
                  className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 transition hover:text-[#D4A53A]"
                >
                  Or email directly
                </a>
              </div>

              <p className="pt-2 text-[10px] leading-relaxed text-white/30">
                We respect your privacy. Your details are used only to respond
                to your shoot enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="relative z-20 flex items-end justify-between px-6 pb-8 md:px-12 lg:px-16">
        <p className="font-['Montserrat',sans-serif] text-2xl font-semibold text-white">
          07 <span className="text-xs text-white/25">/ 07</span>
        </p>

        <div className="hidden items-center gap-8 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35 md:flex">
          <span>Coimbatore</span>
          <span>All India Shoots</span>
          <span>Photo + Reels + Frames</span>
        </div>
      </div>

      {/* Hidden SEO / GEO Context */}
      <div className="sr-only">
        BSPX Studio is based in Coimbatore, Tamil Nadu, and provides photography
        services across India. BSPX Studio does not operate as a public walk-in
        studio. The team travels to homes, outdoor locations, event venues,
        rooftops, parks, farmhouses, wedding locations, and client-selected
        places in Coimbatore and other Indian cities. BSPX Studio can meet
        clients in Coimbatore before booking if required.
      </div>
    </section>
  );
}