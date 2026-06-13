import React, { useState } from "react";
import {
  X,
  MessageCircle,
  ArrowRight,
  Eye,
  Heart,
  ChevronRight,
  Images,
} from "lucide-react";

// Proper category images from assets/gallery
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

// Additional gallery images also available in your folder
import Gallery1 from "../../assests/gallery/gallery1.webp";
import Gallery2 from "../../assests/gallery/gallery2.webp";
import Gallery3 from "../../assests/gallery/gallery3.webp";
import Gallery4 from "../../assests/gallery/gallery4.webp";

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
  {
    id: 11,
    img: Gallery1,
    category: "Creative Portraits",
    title: "Signature Frames",
    views: 430,
    likes: 295,
    desc: "Creative portrait frames designed for personal branding, profile photos, lifestyle stories, and visual identity.",
  },
  {
    id: 12,
    img: Gallery2,
    category: "Lifestyle Shoots",
    title: "Everyday Stories",
    views: 370,
    likes: 250,
    desc: "Lifestyle-led photography sessions that capture natural movement, personality, environment, and authentic moments.",
  },
  {
    id: 13,
    img: Gallery3,
    category: "Editorial Moments",
    title: "Styled Visuals",
    views: 490,
    likes: 315,
    desc: "Editorial-style visual storytelling for creators, models, couples, and clients who want a premium visual language.",
  },
  {
    id: 14,
    img: Gallery4,
    category: "Studio Memories",
    title: "Classic Frames",
    views: 410,
    likes: 275,
    desc: "Clean, timeless photography frames for families, individuals, celebrations, and meaningful personal milestones.",
  },
];

const displayItems = [
  ...galleryItems,
  galleryItems[0],
].map((item, index) => ({
  ...item,
  displayId: `${item.id}-${index}`,
  photoNo: index + 1,
}));

export default function GalleryGrid() {
  const [activeId, setActiveId] = useState(displayItems[0].displayId);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setActiveId(member.displayId || member.id);
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

  return (
    <section className="overflow-hidden bg-white font-[family-name:Inter,sans-serif] text-stone-950">
      <style>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* ================= EDITORIAL HERO GALLERY ================= */}
      <div className="relative overflow-hidden bg-white py-10">
        <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[300px_1fr]">
          {/* Left Editorial Counter */}
          <aside className="relative z-20 flex flex-col justify-center border-r border-stone-100 bg-white px-8 py-12 lg:px-10">
            <div>
              <p className="mb-6 text-[11px] font-black uppercase tracking-[0.35em] text-stone-400">
                BSPX Studio Gallery
              </p>

              <h1 className="text-[7rem] font-black leading-[0.78] tracking-[-0.12em] text-[#ff1200] sm:text-[9rem] lg:text-[10rem]">
                15
              </h1>

              <div className="mt-7 flex items-center gap-3">
                <Images className="h-4 w-4 text-stone-400" />
                <p className="text-sm font-black uppercase tracking-[0.22em] text-stone-400">
                  Photos
                </p>
              </div>

              <p className="mt-7 max-w-xs text-sm font-medium leading-relaxed text-stone-500">
                A curated visual collection of portraits, celebrations, couple
                shoots, baby moments, reels, weddings, and event stories.
              </p>

              <button
                onClick={() => redirectToWhatsApp("BSPX Studio Gallery")}
                className="mt-8 inline-flex items-center gap-3 bg-stone-950 px-7 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-[#ff1200]"
              >
                Book Shoot
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </aside>

          {/* Right Horizontal Gallery */}
          <main className="relative flex items-center overflow-hidden bg-white">
            <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-32 bg-gradient-to-l from-white to-transparent md:w-56" />

            <div className="no-scrollbar flex h-[520px] w-max items-stretch overflow-x-scroll scroll-smooth">
              {displayItems.map((item, index) => (
                <button
                  key={item.displayId}
                  onClick={() => openModal(item)}
                  onMouseEnter={() => setActiveId(item.displayId)}
                  className={`group relative h-[520px] shrink-0 overflow-hidden border-r border-white bg-stone-100 text-left transition-all duration-500 ${
                    index === 0
                      ? "w-[360px] md:w-[460px]"
                      : "w-[300px] md:w-[400px]"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition group-hover:opacity-95" />

                  <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-stone-950 backdrop-blur">
                    {String(item.photoNo).padStart(2, "0")} / 15
                  </div>

                  <div className="absolute bottom-7 left-6 right-6">
                    <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#ff1200]">
                      {item.category}
                    </p>

                    <h2 className="text-3xl font-black leading-none tracking-[-0.04em] text-white md:text-4xl">
                      {item.title}
                    </h2>

                    <p className="mt-4 line-clamp-2 max-w-md text-sm font-medium leading-relaxed text-white/75">
                      {item.desc}
                    </p>

                    <div className="mt-5 flex items-center gap-5 text-xs font-bold text-white/70">
                      <span className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        {item.views}
                      </span>

                      <span className="flex items-center gap-2">
                        <Heart className="h-4 w-4" />
                        {item.likes}
                      </span>
                    </div>
                  </div>

                  {activeId === item.displayId && (
                    <div className="absolute bottom-7 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-stone-950 backdrop-blur transition">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* ================= PORTFOLIO GRID ================= */}
      <div className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-[118rem] px-4 sm:px-8 lg:px-12">
          <header className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-4xl">
              <span className="mb-5 block text-xs font-black uppercase tracking-[0.35em] text-[#ff1200]">
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
              className="inline-flex w-fit items-center gap-3 border border-stone-200 bg-stone-50 px-8 py-4 text-xs font-black uppercase tracking-widest text-stone-950 transition hover:border-[#ff1200] hover:text-[#ff1200]"
            >
              Chat on WhatsApp
              <MessageCircle className="h-4 w-4" />
            </button>
          </header>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryItems.map((member) => (
              <div
                key={member.id}
                onClick={() => openModal(member)}
                className="group relative aspect-[4/5] cursor-pointer overflow-hidden border border-stone-200 bg-stone-100 transition-all duration-500 hover:border-[#ff1200] hover:shadow-2xl"
              >
                <img
                  src={member.img}
                  alt={member.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-stone-950/95 via-stone-950/30 to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-[#ff1200]">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/85 p-4 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-5xl overflow-hidden bg-white shadow-2xl md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative min-h-[360px] bg-stone-200">
              <img
                src={selectedMember.img}
                alt={selectedMember.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ff1200]">
                  {selectedMember.category}
                </p>

                <h2 className="mt-3 text-4xl font-black leading-none text-white md:text-5xl">
                  {selectedMember.title}
                </h2>
              </div>
            </div>

            <div className="flex flex-col justify-center p-10 md:p-14">
              <span className="mb-6 inline-block w-fit bg-[#ff1200]/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#ff1200]">
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
                  <Eye className="h-4 w-4 text-[#ff1200]" />
                  {selectedMember.views} Views
                </span>

                <span className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-[#ff1200]" />
                  {selectedMember.likes} Likes
                </span>
              </div>

              <button
                onClick={() => redirectToWhatsApp(selectedMember.title)}
                className="mt-10 inline-flex w-fit items-center justify-center gap-3 bg-stone-950 px-8 py-4 text-xs font-black uppercase tracking-widest text-white shadow-md transition hover:bg-[#ff1200]"
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