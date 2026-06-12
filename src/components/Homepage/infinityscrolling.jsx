import React from "react";

const scrollItems = [
  "Outdoor Portraits",
  "Birthday Shoots",
  "Couple Shoots",
  "Baby Shoots",
  "Cinematic Reels",
  "Highlight Edits",
  "Photo Frames",
  "Pre & Post Wedding",
  "Model Shoots",
  "Event Photography",
  "Outdoor Portraits",
  "Birthday Shoots",
];

export default function InfiniteScroll() {
  return (
    <section className="w-full overflow-hidden bg-[#f7f4ef] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-10">
        
        {/* Left Static Brand Content */}
        <div className="flex flex-col items-center justify-center md:items-start md:justify-center">
          <span className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-[#FF7A00]">
            Photography Services
          </span>

          <h2 className="text-center font-['Bebas_Neue',sans-serif] text-6xl font-semibold tracking-tight text-stone-950 md:text-left md:text-8xl">
            What We Shoot
          </h2>

          <p className="mt-5 max-w-md text-center text-sm leading-relaxed text-stone-500 md:text-left">
            From portraits and celebrations to cinematic reels and wedding stories,
            we capture visual memories with emotion, clarity, and premium execution.
          </p>
        </div>

        {/* Right Infinite Vertical Scroll */}
        <div className="relative h-[320px] overflow-hidden">
          <div className="absolute left-0 right-0 top-0 z-10 h-20 bg-gradient-to-b from-[#f7f4ef] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 z-10 h-20 bg-gradient-to-t from-[#f7f4ef] to-transparent" />

          <div className="animate-vertical-scroll flex flex-col">
            {[...scrollItems, ...scrollItems].map((item, index) => (
              <div
                key={index}
                className={`py-1 font-['Bebas_Neue',sans-serif] text-5xl font-medium leading-tight tracking-tight md:text-6xl ${
                  item === "Couple Shoots" ||
                  item === "Cinematic Reels" ||
                  item === "Pre & Post Wedding" ||
                  item === "Event Photography"
                    ? "text-stone-950"
                    : "text-stone-300"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes verticalScroll {
            0% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          .animate-vertical-scroll {
            animation: verticalScroll 14s linear infinite;
          }

          .animate-vertical-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
} 