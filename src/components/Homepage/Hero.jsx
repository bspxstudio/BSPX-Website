import { useEffect, useState, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

// Import Desktop Images
import OutdoorPortraits from "../../assests/Herobanner/herobanner1.webp";
import BirthdayShoots from "../../assests/Herobanner/herobanner2.webp";
import CoupleShoots from "../../assests/Herobanner/herobanner3.webp";
import PrePostWedding from "../../assests/Herobanner/herobanner4.webp";

// Import Mobile Images
import MobileImg1 from "../../assests/gallery/gallery1.webp";
import MobileImg2 from "../../assests/gallery/gallery2.webp";
import MobileImg3 from "../../assests/gallery/gallery3.webp";
import MobileImg4 from "../../assests/gallery/gallery4.webp";

const WHATSAPP_NUMBER = "918531985733";

const slides = [
  {
    id: 1,
    tag: "Premium Portraits",
    title: "Capture Your\nFinest Essence",
    shortTitle: "Portrait Shoot",
    desc: "From solo outdoor portraits to candid lifestyle frames, we specialize in cinematic photography that highlights your unique narrative.",
    img: OutdoorPortraits,
    mobileImg: MobileImg1,
    location: "Coimbatore & Beyond",
    people: "Solo / Couple",
  },
  {
    id: 2,
    tag: "Milestone Moments",
    title: "Memories Shaped\nIn Light",
    shortTitle: "Birthday Shoot",
    desc: "Expert coverage for milestone events. We preserve the raw emotion and energy of your special day with editorial elegance.",
    img: BirthdayShoots,
    mobileImg: MobileImg2,
    location: "Indoor / Event Venue",
    people: "Birthday / Family",
  },
  {
    id: 3,
    tag: "Love Stories",
    title: "Stories Woven\nIn Every Frame",
    shortTitle: "Couple Story",
    desc: "Documenting the quiet chemistry and profound connection of your relationship through artistic, bespoke pre-wedding sessions.",
    img: CoupleShoots,
    mobileImg: MobileImg3,
    location: "Destination / Studio",
    people: "Couple / Pre-Wedding",
  },
  {
    id: 4,
    tag: "Wedding Archives",
    title: "Your Legacy\nBeautifully Told",
    shortTitle: "Wedding Story",
    desc: "Masterful wedding and family archives. We travel globally to capture the fleeting, authentic traditions that define your legacy.",
    img: PrePostWedding,
    mobileImg: MobileImg4,
    location: "Across India",
    people: "Wedding / Events",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef(null);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play slider with pause on hover
  useEffect(() => {
    if (isHovering) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovering]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const redirectToWhatsApp = useCallback((title = "Photography Shoot") => {
    const message = encodeURIComponent(
      `Hello BSPX Studio! I would like to inquire about the ${title}.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  }, []);

  const scrollToPortfolio = useCallback(() => {
    document.getElementById("gallery")?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  const activeSlide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0a0a0a] text-white selection:bg-[#D4A53A] selection:text-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center">
        {/* ================= CINEMATIC BACKGROUND ================= */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                current === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <picture>
                <source media="(min-width: 768px)" srcSet={slide.img} />
                <img
                  src={isMobile ? slide.mobileImg : slide.img}
                  alt={`${slide.shortTitle} - BSPX Studio`}
                  className={`h-full w-full object-cover transition-transform duration-[10000ms] ease-out ${
                    current === index ? "scale-105" : "scale-100"
                  }`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </picture>

              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            </div>
          ))}

          {/* Decorative left text - hidden on mobile */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left z-20 hidden 2xl:block opacity-20">
            <span className="font-sans text-[10px] uppercase tracking-[1rem] whitespace-nowrap">
              BSPX Creative Studio — Est. 2024
            </span>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="relative z-30 mx-auto w-full max-w-[1800px] px-6 sm:px-12 lg:px-20 pb-32 pt-24 min-h-screen flex flex-col justify-center">
          <div className="w-full max-w-3xl xl:max-w-4xl">
            {/* Tag with animated underline */}
            <div className="flex items-center gap-4 mb-6 md:mb-8 overflow-hidden">
              <div className="h-[1px] w-12 bg-[#D4A53A] transform origin-left transition-transform duration-1000 ease-out" />
              <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#D4A53A]">
                {activeSlide.tag}
              </span>
            </div>

            {/* Main Title with animation */}
            <h1 className="whitespace-pre-line font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif] text-5xl min-[380px]:text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[1.05] tracking-tighter text-white mb-6 drop-shadow-2xl uppercase">
              {activeSlide.title.split("\n").map((line, i) => (
                <span
                  key={i}
                  className={`block transition-all duration-1000 ${
                    i === 1 ? "text-white/80" : "text-white"
                  }`}
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base md:text-lg font-light leading-relaxed text-white/70 max-w-xl mb-10 md:mb-12">
              {activeSlide.desc}
            </p>

            {/* Location & Phone Info */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-12">
              <div className="group flex items-start gap-3">
                <MapPin
                  className="h-5 w-5 text-[#D4A53A] mt-0.5 transition-transform group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1">
                    Location
                  </p>
                  <p className="font-sans text-sm tracking-wide text-white/90">
                    {activeSlide.location}
                  </p>
                </div>
              </div>
              <div className="hidden sm:block w-[1px] h-10 bg-white/20" />
              <div className="group flex items-start gap-3">
                <Phone
                  className="h-5 w-5 text-[#D4A53A] mt-0.5 transition-transform group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1">
                    Inquiries
                  </p>
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-sans text-sm tracking-wide text-white/90 hover:text-[#D4A53A] transition-colors"
                  >
                    +91 8531985733
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button
                onClick={() => redirectToWhatsApp(activeSlide.shortTitle)}
                className="group relative overflow-hidden bg-white text-black px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-4 transition-all duration-500 hover:bg-[#D4A53A] hover:text-white"
                aria-label={`Book ${activeSlide.shortTitle} session`}
              >
                <span className="relative z-10 font-sans text-xs font-bold uppercase tracking-[0.15em]">
                  Book Session
                </span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
              </button>

              <button
                onClick={scrollToPortfolio}
                className="group w-full sm:w-auto px-8 py-4 flex items-center justify-center relative"
                aria-label="View portfolio"
              >
                <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-white/80 transition-colors group-hover:text-white">
                  View Portfolio
                </span>
                <span className="absolute bottom-3 left-8 right-8 h-[1px] bg-white/30 transition-all duration-300 group-hover:bg-white group-hover:scale-x-110" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM NAVIGATION STRIP ================= */}
        <div className="absolute bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black to-transparent pt-20 pb-6 px-6 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-[1800px] flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Navigation Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white"
                aria-label="Previous slide"
              >
                <ChevronLeft
                  className="h-5 w-5 text-white transition-colors group-hover:text-black"
                  strokeWidth={1.5}
                />
              </button>
              <button
                onClick={nextSlide}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white"
                aria-label="Next slide"
              >
                <ChevronRight
                  className="h-5 w-5 text-white transition-colors group-hover:text-black"
                  strokeWidth={1.5}
                />
              </button>

              <div className="ml-6 font-sans text-sm font-light tracking-widest text-white/60 hidden sm:block">
                <span className="text-white font-bold">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span className="mx-2 opacity-30">/</span>
                <span>{String(slides.length).padStart(2, "0")}</span>
              </div>
            </div>

            {/* Slide Progress Indicators */}
            <div className="flex items-center gap-4 w-full md:w-auto md:min-w-[400px] lg:min-w-[600px]">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrent(index)}
                  className="group relative flex-1 h-12 flex flex-col justify-end pb-2"
                  aria-label={`Go to slide ${index + 1}: ${slide.shortTitle}`}
                >
                  <span
                    className={`text-left font-sans text-[9px] font-bold uppercase tracking-[0.1em] mb-3 transition-all duration-300 ${
                      current === index
                        ? "text-white opacity-100 translate-y-0"
                        : "text-white/40 opacity-0 translate-y-2 group-hover:opacity-100"
                    }`}
                  >
                    {slide.shortTitle}
                  </span>

                  <div className="relative w-full h-[2px] bg-white/20 overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full bg-[#D4A53A] transition-transform duration-[7000ms] ease-linear origin-left ${
                        current === index
                          ? "scale-x-100"
                          : "scale-x-0 duration-300"
                      }`}
                    />
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