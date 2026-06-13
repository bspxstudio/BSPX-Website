import React from "react";
import { ArrowRight } from "lucide-react";

// Correct local images from assets/gallery
import BabyShoots from "../../assests/gallery/Baby Shoots.webp";
import BirthdayShoots from "../../assests/gallery/Birthday Shoots.webp";
import CinematicReels from "../../assests/gallery/cinematic Reels.webp";
import CoupleShoots from "../../assests/gallery/Couple Shoots.webp";
import EventPhotography from "../../assests/gallery/Event Photography.webp";
import HighlightEdits from "../../assests/gallery/Highlight Edits.webp";
import ModelShoots from "../../assests/gallery/Model Shoots.webp";
import OutdoorPortraits from "../../assests/gallery/Outdoor Portraits.webp";
import PhotoFrames from "../../assests/gallery/Photo Frames.webp";
import PrePostWedding from "../../assests/gallery/Pre & Post Wedding.webp";

const WHATSAPP_NUMBER = "917075764500";

const getWhatsappLink = (serviceTitle = "Photography Shoot") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I am interested in booking ${serviceTitle}. Please share the details.`
  )}`;

const services = [
  {
    id: "01",
    title: "Outdoor Portraits",
    subtitle: "Natural light. Real backgrounds.",
    desc: "Portraits that capture personality, mood, and location in one cinematic frame.",
    img: OutdoorPortraits,
  },
  {
    id: "02",
    title: "Birthday Shoots",
    subtitle: "Fun. Colorful. Candid.",
    desc: "Celebrate milestones with vibrant frames that feel alive and personal.",
    img: BirthdayShoots,
  },
  {
    id: "03",
    title: "Couple Shoots",
    subtitle: "Romantic creative sessions.",
    desc: "Soft, emotional visuals designed around chemistry, story, and location.",
    img: CoupleShoots,
  },
  {
    id: "04",
    title: "Baby Shoots",
    subtitle: "Cute expressions. Calm moments.",
    desc: "Patient, warm, and detail-led photography for your little one’s early memories.",
    img: BabyShoots,
  },
  {
    id: "05",
    title: "Cinematic Reels",
    subtitle: "Short videos. Strong stories.",
    desc: "Professional vertical reels made for Instagram, memories, and brand storytelling.",
    img: CinematicReels,
  },
  {
    id: "06",
    title: "Highlight Edits",
    subtitle: "Raw clips to story-driven edits.",
    desc: "We turn moments into emotional highlight films with pacing, music, and rhythm.",
    img: HighlightEdits,
  },
  {
    id: "07",
    title: "Photo Frames",
    subtitle: "Premium printed memories.",
    desc: "High-quality physical prints and frames for homes, gifting, and keepsakes.",
    img: PhotoFrames,
  },
  {
    id: "08",
    title: "Pre & Post Wedding",
    subtitle: "Emotional relaxed shoots.",
    desc: "Premium couple storytelling before and after the wedding with cinematic direction.",
    img: PrePostWedding,
  },
  {
    id: "09",
    title: "Model Shoots",
    subtitle: "Fashion and editorial looks.",
    desc: "Portfolio-ready frames built around styling, confidence, and visual identity.",
    img: ModelShoots,
  },
  {
    id: "10",
    title: "Event Photography",
    subtitle: "Birthdays. Gatherings. Moments.",
    desc: "Full event coverage that captures emotion, people, energy, and atmosphere.",
    img: EventPhotography,
  },
];

export default function Services() {
  return (
    <section className="bg-[#f7f4ef] py-20 text-stone-950 font-['Poppins',sans-serif] sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[112rem] px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-10 lg:mb-20 lg:flex-row lg:gap-12">
          <div className="max-w-3xl">
            <span className="mb-5 block text-xs font-bold uppercase tracking-[0.35em] text-[#FF7A00]">
              What We Shoot
            </span>

            <h2 className="font-['Bebas_Neue',sans-serif] text-5xl leading-[0.9] tracking-tight text-stone-950 sm:text-6xl md:text-8xl">
              SERVICES THAT
              <br />
              FEEL LIKE STORIES.
            </h2>

            <p className="mt-6 max-w-2xl font-['Montserrat',sans-serif] text-sm font-semibold leading-relaxed text-stone-600 sm:text-base md:mt-8 md:text-lg">
              A premium visual experience for portraits, celebrations, reels,
              weddings, and personal memories — designed as cinematic story
              cards.
            </p>
          </div>

          <div className="space-y-4 border-l border-stone-300 pl-6 text-sm text-stone-500 sm:pl-8">
            <p>↗ Visual memory design</p>
            <p>↗ Cinematic framing</p>
            <p>↗ Emotional positioning</p>
            <p>↗ Premium personal storytelling</p>
          </div>
        </div>

        {/* Story Style Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative h-[390px] overflow-hidden bg-stone-900 shadow-2xl sm:h-[420px] lg:h-[440px] xl:h-[460px]"
            >
              {/* Background Image */}
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Overlay Treatment */}
              <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/80" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Top Number */}
              <div className="absolute left-5 top-5 z-10 flex items-center gap-3 sm:left-6 sm:top-6">
                <span className="flex h-8 w-8 items-center justify-center border border-white/20 bg-white/15 text-xs font-bold text-white backdrop-blur-md sm:h-9 sm:w-9">
                  {service.id}
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/70 sm:text-[10px]">
                  Service
                </span>
              </div>

              {/* Main Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-6">
                <div className="mb-5 text-center">
                  <h3 className="font-['Bebas_Neue',sans-serif] text-4xl leading-[0.9] tracking-wide drop-shadow-lg sm:text-[2.7rem]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-white/90">
                    {service.subtitle}
                  </p>

                  <p className="mx-auto mt-3 max-w-[16rem] text-xs leading-relaxed text-white/70">
                    {service.desc}
                  </p>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={getWhatsappLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-full items-center justify-between border border-white/20 bg-white/15 px-4 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-stone-950"
                >
                  <span className="flex h-8 w-8 items-center justify-center bg-white/20">
                    <ArrowRight size={16} />
                  </span>

                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                    Book Now
                  </span>

                  <span className="text-white/40 group-hover:text-stone-400">
                    »»
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-8 bg-stone-950 p-7 text-white sm:p-10 md:mt-20 md:flex-row md:items-center md:p-14 lg:mt-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF7A00]">
              Start Your Visual Story
            </span>

            <h3 className="mt-4 font-['Bebas_Neue',sans-serif] text-4xl uppercase tracking-wide sm:text-5xl">
              Ready to tell your story?
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
              Book a professional shoot experience designed around your
              occasion, personality, location, and visual story.
            </p>
          </div>

          <a
            href={getWhatsappLink("a professional photography shoot")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#FF7A00] px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-stone-950 sm:w-auto sm:px-10"
          >
            Book Your Shoot Today
          </a>
        </div>
      </div>
    </section>
  );
}