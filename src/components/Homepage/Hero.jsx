import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

import Image1 from "../../assests/gallery/gallery1.webp";
import Image2 from "../../assests/gallery/gallery2.webp";
import Image3 from "../../assests/gallery/gallery3.webp";
import Image4 from "../../assests/gallery/gallery4.webp";

const slides = [
  {
    id: 1,
    tag: "PORTRAIT PHOTOGRAPHY",
    title: "Capture Your\nBest Moments",
    shortTitle: "Portrait Shoot",
    desc: "From solo outdoor portraits to candid lifestyle shots, we specialize in photography that highlights your unique personality, available in Coimbatore and beyond.",
    img: Image1,
    location: "Coimbatore • Chennai • Across India",
    people: "Solo / Couple / Family",
  },
  {
    id: 2,
    tag: "CELEBRATION SHOOTS",
    title: "Memories That\nLast Forever",
    shortTitle: "Birthday Shoot",
    desc: "Expert coverage for birthdays and milestone events. We capture the joy and energy of your special day with professional, cinematic flair.",
    img: Image2,
    location: "Indoor / Outdoor / Event Venue",
    people: "Birthday / Family / Friends",
  },
  {
    id: 3,
    tag: "COUPLE & PRE-WEDDING",
    title: "Stories Told\nIn Every Frame",
    shortTitle: "Couple Story",
    desc: "Capturing the chemistry and connection of your relationship through artistic couple shoots and pre-wedding sessions tailored to your vision.",
    img: Image3,
    location: "Destination / Outdoor / Studio",
    people: "Couple / Pre-Wedding",
  },
  {
    id: 4,
    tag: "WEDDING & FAMILY",
    title: "Your Journey\nDocumented",
    shortTitle: "Wedding Story",
    desc: "Professional wedding and family photography services. We travel across India to capture the emotions and traditions that define your biggest days.",
    img: Image4,
    location: "Across India",
    people: "Wedding / Family / Events",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const activeSlide = slides[current];

  const getPositionClass = (index) => {
    const total = slides.length;
    const diff = (index - current + total) % total;

    if (diff === 0) {
      return "z-40 translate-x-0 scale-100 opacity-100";
    }

    if (diff === 1) {
      return "z-30 translate-x-[360px] scale-[0.78] opacity-55 blur-[1px]";
    }

    if (diff === total - 1) {
      return "z-30 -translate-x-[360px] scale-[0.78] opacity-55 blur-[1px]";
    }

    return "z-10 translate-x-0 scale-[0.6] opacity-0";
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] text-white font-['Poppins',sans-serif]">
      <div className="relative min-h-screen w-full overflow-hidden md:min-h-[900px]">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-[1400ms] ease-out ${
                current === index
                  ? "scale-100 opacity-100"
                  : "scale-110 opacity-0"
              }`}
            >
              <img
                src={slide.img}
                alt={slide.shortTitle}
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/75 to-[#050505]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/70" />
            </div>
          ))}

          <div className="absolute left-[-12%] top-[10%] h-[520px] w-[520px] bg-[#D4A53A]/15 blur-[150px]" />
          <div className="absolute right-[-12%] bottom-[5%] h-[620px] w-[620px] bg-[#1E3A5F]/30 blur-[160px]" />

          <h2 className="absolute left-1/2 top-[14%] -translate-x-1/2 select-none font-['Bebas_Neue',sans-serif] text-[9rem] leading-none tracking-[0.08em] text-white/[0.025] md:text-[18rem] lg:text-[25rem]">
            STUDIO
          </h2>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-30 mx-auto grid min-h-screen w-full max-w-[1900px] grid-cols-1 items-center gap-12 px-6 pb-40 pt-20 md:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
          {/* Left Glass Content */}
          <div className="max-w-2xl border border-white/10 bg-black/45 p-8 backdrop-blur-2xl md:p-10">
            <div className="mb-7 inline-flex border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-xl">
              <span className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.32em] text-[#D4A53A]">
                {activeSlide.tag}
              </span>
            </div>

            <h1 className="whitespace-pre-line font-['Bebas_Neue',sans-serif] text-6xl font-normal uppercase leading-[0.88] tracking-wide text-white md:text-8xl">
              {activeSlide.title}
            </h1>

            <p className="mt-7 text-sm font-medium leading-relaxed text-white/65 md:text-base">
              {activeSlide.desc}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
              <div className="bg-black/40 p-5">
                <p className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                  Location
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-white/75">
                  <MapPin className="h-4 w-4 text-[#D4A53A]" />
                  {activeSlide.location}
                </p>
              </div>

              <div className="bg-black/40 p-5">
                <p className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                  Best For
                </p>
                <p className="mt-2 text-sm font-semibold text-white/75">
                  {activeSlide.people}
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-3 text-xs font-semibold text-white/55">
              <Phone className="h-4 w-4 text-[#D4A53A]" />
              <span>+91 7075 764 500 · Coimbatore · Across India</span>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button className="group inline-flex items-center gap-3 bg-[#D4A53A] px-8 py-4 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-[0.22em] text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white">
                Book Your Shoot
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <button className="border border-white/15 bg-white/10 px-8 py-4 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-xl transition hover:bg-white hover:text-black">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Center Showcase Slideshow */}
          <div className="relative hidden min-h-[680px] items-center justify-center lg:flex">
            <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4A53A]/20" />

            <div className="relative h-[620px] w-[780px]">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrent(index)}
                  className={`absolute left-1/2 top-1/2 h-[560px] w-[360px] -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-white/10 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.75)] transition-all duration-700 ease-out ${getPositionClass(
                    index
                  )}`}
                >
                  <img
                    src={slide.img}
                    alt={slide.shortTitle}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                    <span className="border border-white/20 bg-white/10 px-3 py-1.5 font-['Montserrat',sans-serif] text-[8px] font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur-xl">
                      {slide.tag}
                    </span>

                    <span className="font-['Montserrat',sans-serif] text-[10px] font-semibold text-white/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-left">
                    <h3 className="font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none tracking-wide text-white">
                      {slide.shortTitle}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-white/60">
                      {slide.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-8 left-6 right-6 z-40 md:left-12 md:right-12">
          <div className="mx-auto flex max-w-[1900px] flex-col gap-5 border border-white/10 bg-black/45 p-4 backdrop-blur-2xl md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/10 text-white transition hover:bg-[#D4A53A] hover:text-[#0A0A0A]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center bg-[#D4A53A] text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="ml-3 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </div>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-3 md:grid-cols-4">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrent(index)}
                  className={`group relative h-20 overflow-hidden border transition-all duration-500 md:h-24 ${
                    current === index
                      ? "border-[#D4A53A]"
                      : "border-white/10 hover:border-white/40"
                  }`}
                >
                  <img
                    src={slide.img}
                    alt={slide.shortTitle}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-black/35" />

                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-[#D4A53A] transition-all duration-500 ${
                      current === index ? "w-full" : "w-0"
                    }`}
                  />

                  <div className="absolute bottom-3 left-3 text-left">
                    <p className="font-['Montserrat',sans-serif] text-[8px] font-semibold uppercase tracking-[0.18em] text-white/70">
                      {slide.shortTitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}