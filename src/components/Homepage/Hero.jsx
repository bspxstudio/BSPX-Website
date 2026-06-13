import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

// Proper local images from assets/gallery
import OutdoorPortraits from "../../assests/gallery/Outdoor Portraits.webp";
import BirthdayShoots from "../../assests/gallery/Birthday Shoots.webp";
import CoupleShoots from "../../assests/gallery/Couple Shoots.webp";
import PrePostWedding from "../../assests/gallery/Pre & Post Wedding.webp";

const WHATSAPP_NUMBER = "918531985733";

const slides = [
  {
    id: 1,
    tag: "PORTRAIT PHOTOGRAPHY",
    title: "Capture Your\nBest Moments",
    shortTitle: "Portrait Shoot",
    desc: "From solo outdoor portraits to candid lifestyle shots, we specialize in photography that highlights your unique personality, available in Coimbatore and beyond.",
    img: OutdoorPortraits,
    location: "Coimbatore • Chennai • Across India",
    people: "Solo / Couple / Family",
  },
  {
    id: 2,
    tag: "CELEBRATION SHOOTS",
    title: "Memories That\nLast Forever",
    shortTitle: "Birthday Shoot",
    desc: "Expert coverage for birthdays and milestone events. We capture the joy and energy of your special day with professional, cinematic flair.",
    img: BirthdayShoots,
    location: "Indoor / Outdoor / Event Venue",
    people: "Birthday / Family / Friends",
  },
  {
    id: 3,
    tag: "COUPLE & PRE-WEDDING",
    title: "Stories Told\nIn Every Frame",
    shortTitle: "Couple Story",
    desc: "Capturing the chemistry and connection of your relationship through artistic couple shoots and pre-wedding sessions tailored to your vision.",
    img: CoupleShoots,
    location: "Destination / Outdoor / Studio",
    people: "Couple / Pre-Wedding",
  },
  {
    id: 4,
    tag: "WEDDING & FAMILY",
    title: "Your Journey\nDocumented",
    shortTitle: "Wedding Story",
    desc: "Professional wedding and family photography services. We travel across India to capture the emotions and traditions that define your biggest days.",
    img: PrePostWedding,
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

  const redirectToWhatsApp = (title = "Photography Shoot") => {
    const message = encodeURIComponent(
      `Hello BSPX Studio! I would like to book: ${title}`
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  const scrollToPortfolio = () => {
    document.getElementById("gallery")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const activeSlide = slides[current];

  // Upgraded the slide cards to have rounded-2xl for a modern look
  const getPositionClass = (index) => {
    const total = slides.length;
    const diff = (index - current + total) % total;

    if (diff === 0) {
      return "z-40 translate-x-0 translate-y-0 scale-100 rotate-0 opacity-100 shadow-[0_20px_60px_rgba(0,0,0,0.8)] border-white/20 rounded-2xl";
    }

    if (diff === 1) {
      return "z-30 translate-x-[180px] translate-y-[40px] xl:translate-x-[250px] xl:translate-y-[60px] 2xl:translate-x-[300px] scale-[0.85] rotate-[8deg] opacity-60 blur-[1px] border-white/5 rounded-2xl";
    }

    if (diff === total - 1) {
      return "z-30 -translate-x-[180px] -translate-y-[40px] xl:-translate-x-[250px] xl:-translate-y-[60px] 2xl:-translate-x-[300px] scale-[0.85] -rotate-[8deg] opacity-60 blur-[1px] border-white/5 rounded-2xl";
    }

    return "z-10 translate-x-0 translate-y-[120px] scale-[0.6] opacity-0 border-white/5 rounded-2xl";
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] text-white font-['Poppins',sans-serif]">
      <div className="relative min-h-[100svh] w-full overflow-hidden sm:min-h-[820px] md:min-h-[860px] lg:min-h-[860px] xl:min-h-[940px]">
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
                className="h-full w-full object-cover lg:grayscale"
              />

              <div className="absolute inset-0 bg-black/40 lg:bg-black/70" />
              <div className="absolute inset-0 hidden bg-gradient-to-r from-[#050505] via-[#050505]/75 to-transparent lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
            </div>
          ))}

          <div className="absolute left-[-40%] top-[8%] h-[300px] w-[300px] bg-[#D4A53A]/20 blur-[100px] sm:left-[-20%] sm:h-[420px] sm:w-[420px] md:h-[520px] md:w-[520px] md:blur-[150px]" />

          <div className="absolute right-[-45%] bottom-[5%] h-[340px] w-[340px] bg-[#1E3A5F]/30 blur-[110px] sm:right-[-25%] sm:h-[500px] sm:w-[500px] md:h-[620px] md:w-[620px] md:blur-[160px]" />

          {/* Changed Bebas to Helvetica for the giant background watermark */}
          <h2 className="absolute left-1/2 top-[7%] -translate-x-1/2 select-none font-['Helvetica',Arial,sans-serif] font-bold text-[4.2rem] leading-none tracking-[0.05em] text-white/[0.025] min-[380px]:text-[5.5rem] sm:text-[8rem] md:top-[10%] md:text-[13rem] lg:text-[18rem] xl:text-[20rem] 2xl:text-[23rem]">
            STUDIO
          </h2>
        </div>

        {/* ================= MAIN HERO CONTENT ================= */}
        <div className="relative z-30 mx-auto grid min-h-[100svh] w-full max-w-[1900px] grid-cols-1 items-center gap-8 px-4 pb-52 pt-10 min-[380px]:pb-48 min-[380px]:pt-14 sm:min-h-[820px] sm:px-6 sm:pb-48 md:min-h-[860px] md:px-10 md:pt-20 lg:min-h-[820px] lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:pb-40 xl:min-h-[900px] xl:grid-cols-[0.8fr_1.2fr] xl:px-16">
          
          {/* ================= LEFT CONTENT CARD ================= */}
          {/* Transformed sharp box into a premium rounded glass panel */}
          <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-2xl backdrop-blur-2xl min-[380px]:p-8 sm:p-10 md:p-12 lg:p-14">
            
            <div className="mb-6 inline-flex max-w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl md:mb-8 md:px-5">
              <span className="font-['Poppins',sans-serif] text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D4A53A] sm:text-[10px]">
                {activeSlide.tag}
              </span>
            </div>

            {/* Changed Bebas to strict bold Helvetica, adjusted sizing for wider font characters */}
            <h1 className="w-full whitespace-pre-line font-['Helvetica',Arial,sans-serif] text-[2.2rem] font-bold uppercase leading-[1.05] tracking-tight text-white min-[380px]:text-[2.6rem] sm:text-[4rem] md:text-[5rem] lg:text-[4.5rem] xl:text-[5.5rem]">
              {activeSlide.title}
            </h1>

            <p className="mt-5 font-['Poppins',sans-serif] text-sm font-light leading-relaxed text-white/70 min-[380px]:text-[15px] sm:max-w-xl md:mt-8 md:text-base md:leading-loose">
              {activeSlide.desc}
            </p>

            {/* Transformed sharp matrix grid into sleek vertical/horizontal flex layout */}
            <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-white/5 p-5 border border-white/5 sm:flex-row sm:items-center sm:gap-12 md:mt-10 md:p-6">
              <div>
                <p className="font-['Poppins',sans-serif] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4A53A]">
                  Location
                </p>
                <p className="mt-2 flex items-center gap-2 font-['Poppins',sans-serif] text-[13px] font-medium text-white sm:text-sm">
                  <MapPin className="h-4 w-4 shrink-0 text-[#D4A53A]" />
                  {activeSlide.location}
                </p>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div>
                <p className="font-['Poppins',sans-serif] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4A53A]">
                  Best For
                </p>
                <p className="mt-2 font-['Poppins',sans-serif] text-[13px] font-medium text-white sm:text-sm">
                  {activeSlide.people}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 font-['Poppins',sans-serif] text-[12px] font-medium text-white/60 md:mt-8">
              <Phone className="h-4 w-4 shrink-0 text-[#D4A53A]" />
              <span>+91 8531985733 · Coimbatore · Across India</span>
            </div>

            {/* Completely redesigned luxury buttons (rounded-full, Helvetica, sleek hover effects) */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center md:gap-5">
              <button
                onClick={() => redirectToWhatsApp(activeSlide.shortTitle)}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-['Helvetica',Arial,sans-serif] text-[11px] font-bold uppercase tracking-[0.15em] text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D4A53A] hover:text-white hover:shadow-[0_8px_25px_rgba(212,165,58,0.4)] sm:w-auto"
              >
                Book Your Shoot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={scrollToPortfolio}
                className="w-full rounded-full border border-white/20 bg-transparent px-8 py-4 font-['Helvetica',Arial,sans-serif] text-[11px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:w-auto"
              >
                View Portfolio
              </button>
            </div>
          </div>

          {/* ================= DESKTOP SHOWCASE SLIDESHOW ================= */}
          <div className="relative hidden min-h-[560px] items-center justify-center lg:flex xl:min-h-[680px]">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[40px] border border-white/5 bg-gradient-to-tr from-white/5 to-transparent transition-transform duration-1000 xl:h-[560px] xl:w-[560px] 2xl:h-[620px] 2xl:w-[620px]" />

            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[30px] border border-[#D4A53A]/20 bg-gradient-to-bl from-[#D4A53A]/5 to-transparent transition-transform duration-1000 xl:h-[430px] xl:w-[430px] 2xl:h-[460px] 2xl:w-[460px]" />

            <div className="relative h-[520px] w-[520px] xl:h-[620px] xl:w-[680px] 2xl:w-[780px]">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrent(index)}
                  className={`absolute left-1/2 top-1/2 h-[460px] w-[290px] -translate-x-1/2 -translate-y-1/2 overflow-hidden border bg-black transition-all duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] xl:h-[520px] xl:w-[330px] 2xl:h-[560px] 2xl:w-[360px] ${getPositionClass(
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
                    <span className="rounded-full border border-white/20 bg-black/40 px-4 py-1.5 font-['Poppins',sans-serif] text-[7px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-xl xl:text-[8px]">
                      {slide.tag}
                    </span>

                    <span className="font-['Helvetica',Arial,sans-serif] text-[11px] font-bold text-white/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-left xl:bottom-8 xl:left-8 xl:right-8">
                    <h3 className="font-['Helvetica',Arial,sans-serif] text-3xl font-bold uppercase leading-tight tracking-tight text-white xl:text-4xl">
                      {slide.shortTitle}
                    </h3>

                    <p className="mt-3 line-clamp-2 font-['Poppins',sans-serif] text-xs font-light leading-relaxed text-white/80">
                      {slide.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM CONTROLS ================= */}
        <div className="absolute bottom-4 left-4 right-4 z-40 sm:bottom-6 sm:left-6 sm:right-6 md:left-10 md:right-10 lg:bottom-8 lg:left-12 lg:right-12">
          <div className="mx-auto flex max-w-[1900px] flex-col gap-3 rounded-[2rem] border border-white/10 bg-black/50 p-3 backdrop-blur-2xl sm:gap-4 sm:p-4 md:flex-row md:items-center md:justify-between lg:px-6">
            <div className="flex items-center justify-between gap-3 md:justify-start">
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-colors hover:border-[#D4A53A] hover:bg-[#D4A53A] hover:text-[#0A0A0A] sm:h-12 sm:w-12"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A53A] text-[#0A0A0A] transition-colors hover:bg-white sm:h-12 sm:w-12"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="font-['Helvetica',Arial,sans-serif] text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 md:ml-4">
                <span className="text-white">{String(current + 1).padStart(2, "0")}</span> /{" "}
                {String(slides.length).padStart(2, "0")}
              </div>
            </div>

            <div className="grid flex-1 grid-cols-4 gap-2 sm:gap-3 md:max-w-3xl xl:max-w-5xl">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrent(index)}
                  aria-label={`Open ${slide.shortTitle}`}
                  className={`group relative h-14 overflow-hidden rounded-xl border transition-all duration-500 sm:h-16 md:h-16 lg:h-20 ${
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

                  <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />

                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-[#D4A53A] transition-all duration-500 ${
                      current === index ? "w-full" : "w-0"
                    }`}
                  />

                  <div className="absolute bottom-2 left-3 right-3 hidden text-left sm:block">
                    <p className={`truncate font-['Helvetica',Arial,sans-serif] text-[8px] font-bold uppercase tracking-[0.1em] transition-colors ${current === index ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
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