import React, { useState } from "react";
import {
  X,
  MessageCircle,
  ArrowRight,
  Eye,
  Heart,
  Sparkles,
} from "lucide-react";

// Importing proper local assets from assets/gallery
import OutdoorPortraits from "../../assests/gallery/Outdoor Portraits.webp";
import BirthdayShoots from "../../assests/gallery/Birthday Shoots.webp";
import CoupleShoots from "../../assests/gallery/Couple Shoots.webp";
import BabyShoots from "../../assests/gallery/Baby Shoots.webp";
import CinematicReels from "../../assests/gallery/cinematic Reels.webp";
import HighlightEdits from "../../assests/gallery/Highlight Edits.webp";
import PrePostWedding from "../../assests/gallery/Pre & Post Wedding.webp";
import EventPhotography from "../../assests/gallery/Event Photography.webp";
import ModelShoots from "../../assests/gallery/Model Shoots.webp";
import PhotoFrames from "../../assests/gallery/Photo Frames.webp";

const WHATSAPP_NUMBER = "918531985733";

const galleryItems = [
  {
    id: 1,
    img: OutdoorPortraits,
    category: "Outdoor Portraits",
    title: "Natural Light Stories",
    views: 450,
    likes: 320,
    desc: "Outdoor portrait sessions designed to capture personality, confidence, and natural emotion in real locations.",
  },
  {
    id: 2,
    img: BirthdayShoots,
    category: "Birthday Shoots",
    title: "Celebration Moments",
    views: 280,
    likes: 190,
    desc: "Birthday and milestone photography focused on candid joy, family energy, décor, cake moments, and emotional memories.",
  },
  {
    id: 3,
    img: CoupleShoots,
    category: "Couple Shoots",
    title: "Love In Frames",
    views: 620,
    likes: 410,
    desc: "Creative couple photography sessions that capture chemistry, mood, styling, and relationship storytelling.",
  },
  {
    id: 4,
    img: BabyShoots,
    category: "Baby Shoots",
    title: "Little Memories",
    views: 390,
    likes: 240,
    desc: "Patient and warm baby photography sessions focused on expressions, details, comfort, and family bonding.",
  },
  {
    id: 5,
    img: CinematicReels,
    category: "Cinematic Reels",
    title: "Short Visual Stories",
    views: 310,
    likes: 180,
    desc: "Trending vertical reels for Instagram and personal branding, edited with rhythm, emotion, and cinematic pacing.",
  },
  {
    id: 6,
    img: HighlightEdits,
    category: "Highlight Edits",
    title: "Memory Films",
    views: 400,
    likes: 270,
    desc: "Raw clips transformed into clean highlight edits for birthdays, events, couple moments, and family celebrations.",
  },
  {
    id: 7,
    img: PrePostWedding,
    category: "Pre & Post Wedding",
    title: "Wedding Journey",
    views: 210,
    likes: 95,
    desc: "Pre-wedding and post-wedding storytelling sessions crafted around location, emotion, styling, and couple identity.",
  },
  {
    id: 8,
    img: EventPhotography,
    category: "Event Photography",
    title: "Live Event Coverage",
    views: 520,
    likes: 380,
    desc: "Complete event photography coverage for birthdays, gatherings, family functions, launches, and special occasions.",
  },
  {
    id: 9,
    img: ModelShoots,
    category: "Model Shoots",
    title: "Portfolio Frames",
    views: 360,
    likes: 225,
    desc: "Fashion, editorial, and model portfolio shoots designed for confidence, styling, and professional visual identity.",
  },
  {
    id: 10,
    img: PhotoFrames,
    category: "Photo Frames",
    title: "Printed Memories",
    views: 185,
    likes: 120,
    desc: "Premium photo frames and printed memories for homes, gifting, family walls, desks, and keepsakes.",
  },
];

export default function GalleryGrid() {
  const [activeId, setActiveId] = useState(1);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setActiveId(member.id);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const redirectToWhatsApp = (title) => {
    const message = encodeURIComponent(
      `Hello BSPX Studio! I would like to know more about: ${title}`
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  const scrollingItems = [...galleryItems, ...galleryItems, ...galleryItems];

  return (
    <section className="overflow-hidden bg-white font-[family-name:Inter,sans-serif] text-stone-950">
      <style>{`
        @keyframes galleryAutoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .gallery-auto-scroll {
          animation: galleryAutoScroll 32s linear infinite;
        }

        .gallery-auto-scroll:hover {
          animation-play-state: paused;
        }

        .hero-perspective {
          perspective: 1400px;
        }

        .gallery-card-3d {
          transform: rotateY(-10deg);
          transform-style: preserve-3d;
        }

        .gallery-card-3d:nth-child(even) {
          transform: rotateY(10deg) translateY(32px);
        }

        .gallery-card-3d:nth-child(3n) {
          transform: rotateY(-14deg) translateY(-18px);
        }

        .gallery-card-3d:nth-child(5n) {
          transform: rotateY(14deg) translateY(18px);
        }
      `}</style>

      {/* ================= WHITE HERO WITH AUTO SCROLL ================= */}
      <div className="relative min-h-screen overflow-hidden bg-white pb-24 pt-10">
        {/* Soft background glow */}
        <div className="absolute left-1/2 top-[42%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#FF7A00]/10 blur-[120px]" />
        <div className="absolute left-0 top-[35%] h-[360px] w-[360px] rounded-full bg-stone-200/70 blur-[120px]" />
        <div className="absolute right-0 top-[30%] h-[360px] w-[360px] rounded-full bg-stone-100 blur-[120px]" />

        <div className="relative mx-auto max-w-[118rem] px-4 sm:px-8 lg:px-12">
          {/* Top Label */}
          <div className="mx-auto mb-20 flex max-w-5xl items-center justify-between gap-4">
            <div className="flex items-center gap-10 rounded-full border border-stone-100 bg-white px-6 py-4 shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-950 text-white">
                  <Sparkles className="h-4 w-4 text-[#FF7A00]" />
                </div>

                <span className="text-lg font-black tracking-tight">
                  BSPX STUDIO
                </span>
              </div>

              <nav className="hidden items-center gap-8 text-xs font-semibold text-stone-600 md:flex">
                <span>Portraits</span>
                <span>Events</span>
                <span>Reels</span>
                <span>Weddings</span>
              </nav>
            </div>

            <button
              onClick={() => redirectToWhatsApp("BSPX Studio Portfolio")}
              className="hidden items-center gap-3 rounded-full bg-stone-950 px-7 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-[0_20px_60px_rgba(0,0,0,0.16)] transition hover:bg-[#FF7A00] md:flex"
            >
              Book Shoot
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Hero Text */}
          <div className="relative z-20 text-center">
            <h1 className="mx-auto max-w-6xl text-5xl font-light tracking-[-0.06em] text-stone-950 md:text-7xl lg:text-8xl">
              Capture Real Moments
              <br />
              <span className="font-black">With BSPX Studio</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-sm font-medium leading-relaxed text-stone-500 md:text-base">
              Explore portraits, birthdays, couple shoots, baby shoots, reels,
              highlight edits, weddings, and event coverage through a premium
              auto-scrolling visual gallery experience.
            </p>

            <button
              onClick={() => redirectToWhatsApp("BSPX Studio Gallery")}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-stone-950 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition hover:border-[#FF7A00] hover:bg-[#FF7A00] hover:text-white"
            >
              Explore Shoots
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Auto Scrolling Visual Carousel */}
          <div className="hero-perspective relative z-10 mt-20 h-[430px] overflow-hidden md:h-[520px]">
            <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-36 bg-gradient-to-r from-white to-transparent md:w-72" />
            <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-36 bg-gradient-to-l from-white to-transparent md:w-72" />

            <div className="gallery-auto-scroll flex w-max items-center gap-7 pt-10">
              {scrollingItems.map((item, index) => (
                <button
                  key={`${item.id}-${index}`}
                  onClick={() => openModal(item)}
                  className="gallery-card-3d group relative h-[300px] w-[200px] shrink-0 overflow-hidden border border-stone-200 bg-stone-100 shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition duration-500 hover:z-40 hover:scale-105 sm:h-[340px] sm:w-[220px] md:h-[380px] md:w-[250px]"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-contain bg-stone-100 transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-80" />

                  <div className="absolute bottom-5 left-5 right-5 text-left">
                    <p className="mb-2 text-[9px] font-black uppercase tracking-[0.25em] text-[#FF7A00]">
                      {item.category}
                    </p>

                    <h3 className="truncate text-lg font-black text-white">
                      {item.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="relative z-20 mt-16 grid grid-cols-1 gap-10 text-center md:grid-cols-3">
            <div>
              <h3 className="text-base font-black text-stone-950">
                Story-Led Shoots
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-xs leading-relaxed text-stone-500">
                Each shoot is planned around your occasion, mood, location, and
                personal story.
              </p>
            </div>

            <div>
              <h3 className="text-base font-black text-stone-950">
                Reels, Edits & Frames
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-xs leading-relaxed text-stone-500">
                BSPX Studio manages photography, cinematic reels, highlight
                edits, and printed memories under one roof.
              </p>
            </div>

            <div>
              <h3 className="text-base font-black text-stone-950">
                Across India
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-xs leading-relaxed text-stone-500">
                Born in Coimbatore, serving clients across Chennai, Bangalore,
                Kerala, Delhi, Goa, and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MIDDLE GALLERY GRID ================= */}
      <div className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-[118rem] px-4 sm:px-8 lg:px-12">
          <header className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-4xl">
              <span className="mb-5 block text-xs font-black uppercase tracking-[0.35em] text-[#FF7A00]">
                BSPX Portfolio
              </span>

              <h2 className="text-5xl font-black tracking-[-0.06em] text-stone-950 md:text-7xl">
                SHOOTS, STORIES & MOMENTS
              </h2>

              <p className="mt-6 max-w-2xl text-sm font-medium leading-relaxed text-stone-500 md:text-base">
                A curated collection of photography services and visual stories
                covering portraits, celebrations, couple moments, baby shoots,
                weddings, reels, and events.
              </p>
            </div>

            <button
              onClick={() => redirectToWhatsApp("BSPX Studio Portfolio")}
              className="inline-flex w-fit items-center gap-3 border border-stone-200 bg-stone-50 px-8 py-4 text-xs font-black uppercase tracking-widest text-stone-950 transition hover:border-[#FF7A00] hover:text-[#FF7A00]"
            >
              Chat on WhatsApp
              <MessageCircle className="h-4 w-4" />
            </button>
          </header>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {galleryItems.map((member) => (
              <div
                key={member.id}
                onClick={() => openModal(member)}
                className={`group relative h-[420px] cursor-pointer overflow-hidden border bg-stone-100 transition-all duration-500 hover:shadow-2xl sm:h-[460px] md:h-[500px] ${
                  activeId === member.id
                    ? "border-[#FF7A00] ring-4 ring-[#FF7A00]/10"
                    : "border-stone-200 hover:border-stone-400"
                }`}
              >
                <img
                  src={member.img}
                  alt={member.title}
                  className="h-full w-full object-contain bg-stone-100 transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div
                  className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-stone-950/95 via-stone-950/30 to-transparent p-8 transition-opacity duration-500 ${
                    activeId === member.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <span className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-[#FF7A00]">
                    {member.category}
                  </span>

                  <h3 className="truncate text-xl font-black leading-tight text-white">
                    {member.title}
                  </h3>

                  <div className="mt-5 flex items-center gap-5 text-[11px] font-bold text-white/70">
                    <span className="flex items-center gap-2">
                      <Eye className="h-3.5 w-3.5" />
                      {member.views}
                    </span>

                    <span className="flex items-center gap-2">
                      <Heart className="h-3.5 w-3.5" />
                      {member.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/85 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-5xl overflow-hidden bg-white shadow-2xl transition-all duration-500 md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative min-h-[420px] bg-stone-100 md:min-h-[560px]">
              <img
                src={selectedMember.img}
                alt={selectedMember.title}
                className="h-full w-full object-contain bg-stone-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF7A00]">
                  {selectedMember.category}
                </p>

                <h2 className="mt-3 text-4xl font-black leading-none text-white md:text-5xl">
                  {selectedMember.title}
                </h2>
              </div>
            </div>

            <div className="flex flex-col justify-center p-10 md:p-14">
              <span className="mb-6 inline-block w-fit bg-[#FF7A00]/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#FF7A00]">
                BSPX Shoot Details
              </span>

              <h3 className="text-3xl font-black tracking-tight text-stone-950 md:text-5xl">
                {selectedMember.title}
              </h3>

              <p className="mt-6 text-sm leading-relaxed text-stone-600">
                {selectedMember.desc}
              </p>

              <div className="mt-8 flex items-center gap-6 border-t border-stone-100 pt-6 text-sm font-bold text-stone-500">
                <span className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-[#FF7A00]" />
                  {selectedMember.views} Views
                </span>

                <span className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-[#FF7A00]" />
                  {selectedMember.likes} Likes
                </span>
              </div>

              <button
                onClick={() => redirectToWhatsApp(selectedMember.title)}
                className="mt-10 inline-flex w-fit items-center justify-center gap-3 bg-stone-950 px-8 py-4 text-xs font-black uppercase tracking-widest text-white shadow-md transition hover:bg-[#FF7A00]"
              >
                Get Quote on WhatsApp
                <MessageCircle className="h-4 w-4" />
              </button>
            </div>

            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute right-5 top-5 bg-white p-3 text-stone-950 shadow-lg transition hover:bg-stone-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}