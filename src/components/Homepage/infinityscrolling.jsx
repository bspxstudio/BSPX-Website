
import React from "react";

const scrollItems = [
  "New Arrivals",
  "Oversized T-Shirts",
  "Streetwear Essentials",
  "Graphic Tees",
  "Minimal Classics",
  "Premium Cotton Tees",
  "Everyday Wear",
  "Statement Collection",
  "Relaxed Fit Tees",
  "BSPX Originals",
  "New Arrivals",
  "Oversized T-Shirts",
];

export default function InfiniteScroll() {
  const highlightedItems = [
    "New Arrivals",
    "Graphic Tees",
    "Statement Collection",
    "BSPX Originals",
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f4f1e9] py-14 sm:py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-5 sm:px-8 md:grid-cols-2 md:gap-10 lg:px-10">

        {/* Left Static Brand Content */}
        <div className="flex flex-col items-center justify-center md:items-start">
          <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#78953c] sm:text-[11px]">
            BSPX Studio / Latest Drop
          </span>

          <h2 className="bspx-display text-center text-4xl font-bold uppercase leading-[0.95] tracking-[-0.055em] text-[#171714] sm:text-5xl md:text-left md:text-6xl lg:text-7xl">
            Newly Arrived
            <br />
            <span className="text-[#829c4b]">Collections.</span>
          </h2>

          <p className="mt-4 max-w-sm text-center text-xs leading-6 text-stone-500 sm:text-sm md:text-left">
            Discover the latest BSPX drops. From oversized silhouettes to
            everyday essentials, find the pieces that define your style.
          </p>

          <a
            href="#shop"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#171714] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#829c4b]"
          >
            Explore New Arrivals
   
          </a>
        </div>

        {/* Right Infinite Vertical Scroll */}
        <div className="relative h-[270px] overflow-hidden sm:h-[310px] md:h-[340px]">
          <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-16 bg-gradient-to-b from-[#f4f1e9] to-transparent" />

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-[#f4f1e9] to-transparent" />

          <div className="animate-vertical-scroll flex flex-col">
            {[...scrollItems, ...scrollItems].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className={`bspx-display py-1.5 text-3xl font-semibold uppercase leading-tight tracking-[-0.045em] transition-colors duration-300 sm:text-4xl md:text-5xl ${
                  highlightedItems.includes(item)
                    ? "text-[#171714]"
                    : "text-stone-300"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes verticalScroll {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }

        .animate-vertical-scroll {
          animation: verticalScroll 20s linear infinite;
          will-change: transform;
        }

        .animate-vertical-scroll:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-vertical-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
