
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Customer One",
    product: "Oversized T-Shirt",
    fit: "Relaxed fit",
    content:
      "The fit is exactly what I wanted. Easy to style with jeans and sneakers, and perfect for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Customer Two",
    product: "Classic T-Shirt",
    fit: "Everyday essential",
    content:
      "Simple design and easy to pair with different outfits. This is the kind of basic tee I can wear anywhere.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Customer Three",
    product: "Streetwear Collection",
    fit: "Casual street style",
    content:
      "I like the clean streetwear look. It works well for casual outings and gives my everyday outfits a fresh feel.",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  const activeReview = testimonials[activeIndex];

  return (
    <section
      id="reviews"
      className="bspx-testimonials overflow-hidden bg-[#f5f4ef] text-[#20201e]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      <style>{`
        .bspx-testimonials {
          font-family: Inter, Arial, sans-serif;
        }

        .bspx-review-image {
          transition: transform 700ms ease;
        }

        .bspx-review-image:hover {
          transform: scale(1.035);
        }

        .bspx-review-progress {
          height: 2px;
          transform-origin: left;
          animation: bspx-review-timer 5s linear infinite;
        }

        @keyframes bspx-review-timer {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .bspx-review-progress {
            animation: none;
          }

          .bspx-review-image {
            transition: none;
          }
        }
      `}</style>

      {/* SECTION HEADING */}
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#77766e] sm:text-xs">
          The BSPX Community
        </p>

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
            Made to wear.
            <span className="block text-[#85837a]">
              Loved in real life.
            </span>
          </h2>

          <p className="max-w-md text-sm leading-6 text-[#77766e]">
            Discover what customers love about adding BSPX-inspired
            streetwear essentials to their everyday wardrobe.
          </p>
        </div>
      </div>

      {/* REVIEW FEATURE */}
      <div className="mx-auto max-w-[1440px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="grid grid-cols-1 overflow-hidden border border-[#dedcd3] bg-[#faf9f5] md:grid-cols-2">
          {/* PRODUCT IMAGE */}
          <div className="relative min-h-[320px] overflow-hidden bg-[#e9e7df] sm:min-h-[450px]">
            <img
              key={activeReview.image}
              src={activeReview.image}
              alt={`${activeReview.product} clothing`}
              className="bspx-review-image absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-5 pb-5 pt-16 sm:px-8 sm:pb-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">
                Featured style
              </p>

              <p className="mt-2 text-lg font-medium text-white sm:text-xl">
                {activeReview.product}
              </p>
            </div>
          </div>

          {/* REVIEW CONTENT */}
          <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12">
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#77766e]">
                  Customer feedback
                </p>

                <p className="text-xs tabular-nums text-[#77766e]">
                  0{activeIndex + 1} / 0{testimonials.length}
                </p>
              </div>

              <div className="my-7 h-px bg-[#dedcd3]" />

              <p className="text-2xl font-medium leading-snug tracking-[-0.035em] sm:text-3xl">
                “{activeReview.content}”
              </p>

              <div className="mt-8 border-t border-[#dedcd3] pt-5">
                <p className="text-sm font-semibold">
                  {activeReview.name}
                </p>

                <p className="mt-1 text-xs text-[#77766e]">
                  {activeReview.fit}
                </p>
              </div>
            </div>

            {/* SLIDER CONTROLS */}
            <div className="mt-10">
              <div className="mb-5 flex gap-2">
                {testimonials.map((review, index) => (
                  <button
                    key={review.product}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show review ${index + 1}`}
                    aria-pressed={activeIndex === index}
                    className={`h-[3px] flex-1 transition-colors ${
                      activeIndex === index
                        ? "bg-[#20201e]"
                        : "bg-[#dedcd3] hover:bg-[#a6a398]"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      (activeIndex - 1 + testimonials.length) %
                        testimonials.length
                    )
                  }
                  className="border-b border-[#20201e] pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] hover:text-[#77766e] sm:text-xs"
                >
                  Previous
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((activeIndex + 1) % testimonials.length)
                  }
                  className="border-b border-[#20201e] pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] hover:text-[#77766e] sm:text-xs"
                >
                  Next review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BRAND MESSAGE */}
      <div className="relative bg-[#20201e] px-5 pb-16 pt-14 text-[#f5f4ef] sm:px-8 sm:pb-20 sm:pt-16 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-5 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/50 sm:text-xs">
              BSPX Clothing
            </p>

            <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
              Your everyday. Your style.
            </h3>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/60 md:justify-self-end">
            Keep it comfortable. Keep it original. Find the pieces that
            feel right for you.
          </p>
        </div>

        {/* WAVE DIVIDER */}
        <div className="absolute bottom-0 left-0 w-full translate-y-px overflow-hidden leading-[0]">
          <svg
            className="block h-[30px] w-full sm:h-[42px]"
            viewBox="0 0 1440 70"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 35 C180 68 350 5 540 32 S890 65 1080 30 S1320 8 1440 36 L1440 70 L0 70 Z"
              fill="#f5f4ef"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
