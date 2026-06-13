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
      return "z-30 translate-x-[220px] xl:translate-x-[300px] 2xl:translate-x-[360px] scale-[0.78] opacity-55 blur-[1px]";
    }

    if (diff === total - 1) {
      return "z-30 -translate-x-[220px] xl:-translate-x-[300px] 2xl:-translate-x-[360px] scale-[0.78] opacity-55 blur-[1px]";
    }

    return "z-10 translate-x-0 scale-[0.6] opacity-0";
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] text-white font-['Poppins',sans-serif]">
      <div className="relative min-h-[760px] w-full overflow-hidden sm:min-h-[820px] md:min-h-[860px] lg:min-h-[820px] xl:min-h-[900px]">
        {/* ================= BACKGROUND IMAGE LAYER ================= */}
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/75 to-[#050505]/90" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
            </div>
          ))}

          <div className="absolute left-[-40%] top-[8%] h-[300px] w-[300px] bg-[#D4A53A]/15 blur-[100px] sm:left-[-20%] sm:h-[420px] sm:w-[420px] md:h-[520px] md:w-[520px] md:blur-[150px]" />

          <div className="absolute right-[-45%] bottom-[5%] h-[340px] w-[340px] bg-[#1E3A5F]/30 blur-[110px] sm:right-[-25%] sm:h-[500px] sm:w-[500px] md:h-[620px] md:w-[620px] md:blur-[160px]" />

          <h2 className="absolute left-1/2 top-[9%] -translate-x-1/2 select-none font-['Bebas_Neue',sans-serif] text-[5.5rem] leading-none tracking-[0.08em] text-white/[0.025] sm:text-[8rem] md:top-[10%] md:text-[13rem] lg:text-[18rem] xl:text-[23rem] 2xl:text-[25rem]">
            STUDIO
          </h2>
        </div>

        {/* ================= MAIN HERO CONTENT ================= */}
        <div className="relative z-30 mx-auto grid min-h-[760px] w-full max-w-[1900px] grid-cols-1 items-center gap-10 px-4 pb-44 pt-16 sm:min-h-[820px] sm:px-6 sm:pb-48 md:min-h-[860px] md:px-10 md:pt-20 lg:min-h-[820px] lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:pb-40 xl:min-h-[900px] xl:grid-cols-[0.8fr_1.2fr] xl:px-16">
          {/* ================= LEFT CONTENT CARD ================= */}
          <div className="w-full max-w-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-2xl sm:p-7 md:p-9 lg:p-10">
            <div className="mb-5 inline-flex max-w-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl md:mb-7 md:px-5">
              <span className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.24em] text-[#D4A53A] sm:text-[10px] sm:tracking-[0.32em]">
                {activeSlide.tag}
              </span>
            </div>

            <h1 className="whitespace-pre-line font-['Bebas_Neue',sans-serif] text-[3.6rem] font-normal uppercase leading-[0.88] tracking-wide text-white sm:text-[4.7rem] md:text-[6rem] lg:text-[5.8rem] xl:text-8xl">
              {activeSlide.title}
            </h1>

            <p className="mt-5 text-sm font-medium leading-relaxed text-white/65 sm:max-w-xl md:mt-7 md:text-base">
              {activeSlide.desc}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 md:mt-8">
              <div className="bg-black/40 p-4 sm:p-5">
                <p className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                  Location
                </p>

                <p className="mt-2 flex items-start gap-2 text-xs font-semibold leading-relaxed text-white/75 sm:text-sm">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A53A]" />
                  {activeSlide.location}
                </p>
              </div>

              <div className="bg-black/40 p-4 sm:p-5">
                <p className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                  Best For
                </p>

                <p className="mt-2 text-xs font-semibold leading-relaxed text-white/75 sm:text-sm">
                  {activeSlide.people}
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3 text-xs font-semibold leading-relaxed text-white/55">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A53A]" />
              <span>+91 7075 764 500 · Coimbatore · Across India</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-9 md:gap-4">
              <button className="group inline-flex w-full items-center justify-center gap-3 bg-[#D4A53A] px-6 py-4 font-['Montserrat',sans-serif] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white sm:w-auto sm:px-8 sm:text-xs sm:tracking-[0.22em]">
                Book Your Shoot
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <button className="w-full border border-white/15 bg-white/10 px-6 py-4 font-['Montserrat',sans-serif] text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition hover:bg-white hover:text-black sm:w-auto sm:px-8 sm:text-xs sm:tracking-[0.22em]">
                View Portfolio
              </button>
            </div>
          </div>

          {/* ================= DESKTOP SHOWCASE SLIDESHOW ================= */}
          <div className="relative hidden min-h-[560px] items-center justify-center lg:flex xl:min-h-[680px]">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 xl:h-[560px] xl:w-[560px] 2xl:h-[620px] 2xl:w-[620px]" />

            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4A53A]/20 xl:h-[430px] xl:w-[430px] 2xl:h-[460px] 2xl:w-[460px]" />

            <div className="relative h-[520px] w-[520px] xl:h-[620px] xl:w-[680px] 2xl:w-[780px]">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrent(index)}
                  className={`absolute left-1/2 top-1/2 h-[460px] w-[290px] -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-white/10 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.75)] transition-all duration-700 ease-out xl:h-[520px] xl:w-[330px] 2xl:h-[560px] 2xl:w-[360px] ${getPositionClass(
                    index
                  )}`}
                >
                  <img
                    src={slide.img}
                    alt={slide.shortTitle}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between xl:left-6 xl:right-6 xl:top-6">
                    <span className="border border-white/20 bg-white/10 px-3 py-1.5 font-['Montserrat',sans-serif] text-[7px] font-semibold uppercase tracking-[0.18em] text-white/75 backdrop-blur-xl xl:text-[8px] xl:tracking-[0.2em]">
                      {slide.tag}
                    </span>

                    <span className="font-['Montserrat',sans-serif] text-[10px] font-semibold text-white/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-left xl:bottom-6 xl:left-6 xl:right-6">
                    <h3 className="font-['Bebas_Neue',sans-serif] text-4xl font-normal leading-none tracking-wide text-white xl:text-5xl">
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

        {/* ================= MOBILE ACTIVE IMAGE PREVIEW ================= */}
        <div className="absolute bottom-[150px] right-4 z-30 block h-28 w-20 overflow-hidden border border-white/15 bg-black shadow-2xl sm:bottom-[165px] sm:right-6 sm:h-36 sm:w-24 md:bottom-[170px] md:right-10 md:h-44 md:w-32 lg:hidden">
          <img
            src={activeSlide.img}
            alt={activeSlide.shortTitle}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-2 left-2 right-2">
            <p className="truncate font-['Montserrat',sans-serif] text-[7px] font-semibold uppercase tracking-[0.16em] text-white/80 sm:text-[8px]">
              {activeSlide.shortTitle}
            </p>
          </div>
        </div>

        {/* ================= BOTTOM CONTROLS ================= */}
        <div className="absolute bottom-4 left-4 right-4 z-40 sm:bottom-6 sm:left-6 sm:right-6 md:left-10 md:right-10 lg:bottom-8 lg:left-12 lg:right-12">
          <div className="mx-auto flex max-w-[1900px] flex-col gap-4 border border-white/10 bg-black/45 p-3 backdrop-blur-2xl sm:p-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-3 md:justify-start">
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/10 text-white transition hover:bg-[#D4A53A] hover:text-[#0A0A0A] sm:h-12 sm:w-12"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="flex h-11 w-11 items-center justify-center bg-[#D4A53A] text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white sm:h-12 sm:w-12"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-[0.2em] text-white/45 md:ml-3">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </div>
            </div>

            <div className="grid flex-1 grid-cols-4 gap-2 sm:gap-3 md:max-w-3xl xl:max-w-5xl">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrent(index)}
                  aria-label={`Open ${slide.shortTitle}`}
                  className={`group relative h-14 overflow-hidden border transition-all duration-500 sm:h-16 md:h-20 lg:h-24 ${
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

                  <div className="absolute bottom-2 left-2 right-2 hidden text-left sm:block">
                    <p className="truncate font-['Montserrat',sans-serif] text-[7px] font-semibold uppercase tracking-[0.14em] text-white/70 md:text-[8px] md:tracking-[0.18em]">
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