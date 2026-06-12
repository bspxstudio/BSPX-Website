import React from "react";
import {
  Camera,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Video,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

import AboutImage from "../../assests/gallery/gallery2.webp";

export default function About() {
  const coreValues = [
    {
      icon: MapPin,
      title: "We Travel Everywhere",
      desc: "Based in Coimbatore, but we shoot across India.",
    },
    {
      icon: Camera,
      title: "All Services Under One Roof",
      desc: "Photos, reels, edits, and frames. No running to different people.",
    },
    {
      icon: ShieldCheck,
      title: "Clear Pricing",
      desc: "You know the cost before we start. No last-minute surprises.",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      desc: "Get your edited photos and reels within 7 to 10 days.",
    },
  ];

  const brandFacts = [
    {
      icon: MapPin,
      title: "Office Location",
      desc: "Coimbatore",
    },
    {
      icon: ShieldCheck,
      title: "Service Area",
      desc: "All over India",
    },
    {
      icon: Camera,
      title: "Specialties",
      desc: "Outdoor, birthday, couple, baby, models, events",
    },
    {
      icon: Video,
      title: "Also Offer",
      desc: "Reels, highlight edits, photo frames",
    },
    {
      icon: Mail,
      title: "Contact",
      desc: "bspxstudio@gmail.com",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] text-white font-['Poppins',sans-serif]"
    >
      {/* Split Background */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="relative bg-[#1C1C1C]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(212,165,58,0.16),transparent_34%)]" />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative bg-[#1E3A5F]">
          <div className="absolute inset-0 bg-[#1f9d63]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,122,0,0.20),transparent_34%)]" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Faded Background Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h2 className="select-none font-['Bebas_Neue',sans-serif] text-[10rem] tracking-[0.08em] text-white/[0.025] md:text-[16rem] lg:text-[23rem]">
          BSPX
        </h2>
      </div>

      {/* Main Layout */}
      <div className="relative z-10 min-h-screen px-6 py-10 md:px-12 lg:px-20">
        {/* Top Brand Row */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-['Bebas_Neue',sans-serif] text-3xl tracking-wider text-white">
              BSPX
            </p>
            <p className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.35em] text-[#D4A53A]">
              Studio
            </p>
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="border border-white/25 px-6 py-3 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.25em] text-white transition hover:border-[#D4A53A] hover:bg-[#D4A53A] hover:text-[#0A0A0A]"
          >
            Booking
          </button>
        </div>

        {/* Center Visual Image */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 hidden h-[82vh] w-[42vw] -translate-x-1/2 lg:block">
          <img
            src={AboutImage}
            alt="BSPX Studio photography showcase"
            className="h-full w-full object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </div>

        {/* Content Grid */}
        <div className="grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-30 max-w-xl pt-20 lg:pt-0">
            <p className="mb-5 font-['Montserrat',sans-serif] text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A53A]">
              About BSPX Studio
            </p>

            <h1 className="font-['Bebas_Neue',sans-serif] text-6xl leading-[0.88] tracking-wide text-white md:text-8xl">
              We Are
              <br />
              BSPX Studio
            </h1>

            <p className="mt-6 font-['Montserrat',sans-serif] text-lg font-semibold leading-snug text-white/90 md:text-xl">
              Born in Coimbatore, serving all of India.
            </p>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/60">
              BSPX Studio started with a simple idea: everyone deserves beautiful
              photos, no matter where they live. We are based in Coimbatore, but
              we don&apos;t believe in boundaries. Whether you are in Chennai,
              Mumbai, Bangalore, Kerala, Delhi, or a small town, we will come to
              you.
            </p>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/60">
              Our team loves capturing real smiles, honest emotions, and special
              moments — from a baby&apos;s first birthday to a couple&apos;s first
              look.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-3 bg-[#D4A53A] px-8 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-[0.22em] text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white"
              >
                Book Your Shoot
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="mailto:bspxstudio@gmail.com"
                className="inline-flex items-center gap-3 border border-white/15 bg-white/5 px-8 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-[0.22em] text-white transition hover:border-[#D4A53A] hover:text-[#D4A53A]"
              >
                Email Studio
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative z-30 ml-auto max-w-md lg:pr-8">
            <div className="mb-12 flex items-start justify-between">
              <p className="font-['Montserrat',sans-serif] text-4xl font-black text-white">
                03<span className="text-sm text-white/50">/05</span>
              </p>

              <div className="h-20 w-px bg-white/25" />
            </div>

            <p className="mb-6 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.3em] text-white/55">
              What We Do
            </p>

            <h2 className="font-['Bebas_Neue',sans-serif] text-5xl leading-[0.95] tracking-wide text-white md:text-6xl">
              We Don&apos;t Just
              <br />
              Click Photos.
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-white/70">
              We create outdoor portraits, birthday shoots, couple shoots, baby
              shoots, and event coverage. We also make trending reels, highlight
              edits, and beautiful photo frames.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Plus, we handle pre-wedding, post-wedding, and model shoots. One
              call to{" "}
              <a
                href="mailto:bspxstudio@gmail.com"
                className="font-bold text-[#D4A53A]"
              >
                bspxstudio@gmail.com
              </a>{" "}
              and we take care of everything — photography, video edits, and
              printing.
            </p>

            <button className="mt-8 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.28em] text-white underline underline-offset-8 transition hover:text-[#D4A53A]">
              Learn More
            </button>
          </div>
        </div>

        {/* Bottom Controls / Social */}
        <div className="absolute bottom-8 left-6 right-6 z-40 flex items-center justify-between md:left-12 md:right-12 lg:left-20 lg:right-20">
          <div className="flex items-center gap-4 text-white/55">
            <Facebook className="h-4 w-4 transition hover:text-[#D4A53A]" />
            <Instagram className="h-4 w-4 transition hover:text-[#D4A53A]" />
            <Linkedin className="h-4 w-4 transition hover:text-[#D4A53A]" />
          </div>

          <button
            onClick={() => scrollToSection("about-details")}
            className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#0A0A0A]/40 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-widest text-[#D4A53A] backdrop-blur-md transition hover:border-[#D4A53A]"
          >
            Scroll
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div
        id="about-details"
        className="relative z-20 bg-[#0A0A0A] px-6 py-28 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-[1700px]">
          {/* Why Choose Us */}
          <div className="mb-20">
            <div className="mb-12 max-w-4xl">
              <p className="mb-4 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A53A]">
                Why People Choose Us
              </p>

              <h3 className="font-['Bebas_Neue',sans-serif] text-5xl leading-[0.95] tracking-wide text-white md:text-7xl">
                Simple, Clear,
                <br />
                Reliable Photography Service
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((val, index) => (
                <div
                  key={index}
                  className="group bg-[#1C1C1C] p-10 transition hover:bg-[#111111]"
                >
                  <div className="mb-8 inline-flex bg-[#D4A53A] p-4 text-[#0A0A0A] transition group-hover:bg-[#FF7A00] group-hover:text-white">
                    <val.icon className="h-5 w-5" />
                  </div>

                  <h4 className="font-['Montserrat',sans-serif] text-base font-bold text-white">
                    {val.title}
                  </h4>

                  <p className="mt-4 text-xs leading-relaxed text-white/50">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust + Brand Facts */}
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
            <div className="bg-[#1C1C1C] p-10 md:p-14">
              <p className="mb-5 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.28em] text-[#D4A53A]">
                Trust Promise
              </p>

              <h3 className="font-['Bebas_Neue',sans-serif] text-5xl leading-[0.95] tracking-wide text-white md:text-6xl">
                Photos, Reels,
                <br />
                Edits, Frames —
                <br />
                One Studio
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/60">
                BSPX Studio keeps the complete photography workflow simple. You
                do not need to coordinate with multiple vendors for shooting,
                video editing, reels, highlight edits, or photo frames. We manage
                the creative execution under one roof with clear communication,
                simple pricing, and fast delivery.
              </p>
            </div>

            <div className="bg-[#1C1C1C] p-10 md:p-14">
              <p className="mb-5 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.28em] text-[#D4A53A]">
                Behind The Scenes
              </p>

              <h3 className="font-['Bebas_Neue',sans-serif] text-5xl leading-[0.95] tracking-wide text-white md:text-6xl">
                Brand Facts For
                <br />
                Visitors And AI
              </h3>

              <div className="mt-10 space-y-6">
                {brandFacts.map((fact, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-[#D4A53A] text-[#0A0A0A]">
                      <fact.icon className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="font-['Montserrat',sans-serif] text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                        {fact.title}
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        {fact.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mx-auto mt-24 max-w-3xl border-t border-white/10 pt-20 text-center">
            <p className="mb-5 font-['Montserrat',sans-serif] text-xs font-extrabold uppercase tracking-[0.25em] text-[#D4A53A]">
              We pack our cameras and come to you
            </p>

            <h3 className="mb-10 font-['Bebas_Neue',sans-serif] text-5xl leading-[0.95] tracking-wide text-white sm:text-7xl">
              Ready To Capture Your Story?
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-3 rounded-full bg-[#D4A53A] px-9 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-wider text-[#0A0A0A] shadow-2xl transition hover:bg-[#FF7A00] hover:text-white active:scale-95"
              >
                Book Your Shoot <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="mailto:bspxstudio@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-9 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-wider text-white shadow-sm transition hover:border-[#D4A53A] hover:text-[#D4A53A] active:scale-95"
              >
                Email BSPX Studio <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}