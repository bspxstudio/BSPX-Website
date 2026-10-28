
import React, { useEffect, useRef, useState } from "react";

const products = [
  {
    id: 1,
    category: "OVERSIZED",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    category: "ESSENTIALS",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    category: "STREETWEAR",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    category: "EVERYDAY FIT",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    category: "CASUAL WEAR",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    category: "NEW DROP",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=85",
  },
];

export default function GalleryGrid() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const pausedRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frameId;
    let previousTime = 0;
    let loopWidth = 0;

    const measure = () => {
      loopWidth = track.scrollWidth / 2;
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    const speed = 35; // Pixels per second

    const animate = (time) => {
      if (!previousTime) previousTime = time;

      const delta = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;

      if (!pausedRef.current && loopWidth > 0) {
        positionRef.current += speed * delta;

        if (positionRef.current >= loopWidth) {
          positionRef.current -= loopWidth;
        }

        track.style.transform = `translate3d(-${positionRef.current}px, 0, 0)`;
      }

      frameId = requestAnimationFrame(animate);
      animationRef.current = frameId;
    };

    frameId = requestAnimationFrame(animate);
    animationRef.current = frameId;

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, []);

  const pauseScroll = (paused) => {
    pausedRef.current = paused;
    setIsPaused(paused);
  };

  const duplicatedProducts = [...products, ...products];

  return (
    <section className="bspx-endless overflow-hidden bg-[#f5f4ef] text-[#20201e]">
      <style>{`
        .bspx-endless {
          font-family: Inter, Arial, sans-serif;
        }

        .bspx-endless .product-image {
          transition: transform 700ms cubic-bezier(.2,.7,.2,1);
        }

        .bspx-endless .product-card:hover .product-image {
          transform: scale(1.045);
        }

        .bspx-endless .marquee-track {
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .bspx-endless .marquee-track {
            transform: none !important;
          }

          .bspx-endless .product-image {
            transition: none;
          }
        }
      `}</style>

      {/* SECTION INTRO */}
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-14 sm:px-8 sm:pb-10 sm:pt-20 lg:px-12">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#77766e] sm:text-xs">
          BSPX Clothing / Latest Collection
        </p>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[44px]">
            Everyday wear.
            <span className="block text-[#85837a]">
              Uncommon attitude.
            </span>
          </h2>

          <p className="max-w-sm text-sm leading-6 text-[#77766e]">
            Discover your next favourite fit. Designed for everyday
            comfort and individual style.
          </p>
        </div>
      </div>

      {/* ENDLESS PRODUCT STRIP */}
      <div
        className="relative overflow-hidden pb-10 sm:pb-14"
        onMouseEnter={() => pauseScroll(true)}
        onMouseLeave={() => pauseScroll(false)}
        onFocus={() => pauseScroll(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            pauseScroll(false);
          }
        }}
      >
        <div
          ref={trackRef}
          className="marquee-track flex w-max gap-3 pl-3 sm:gap-5 sm:pl-5"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {duplicatedProducts.map((product, index) => (
            <article
              key={`${product.id}-${index}`}
              className="product-card w-[64vw] max-w-[310px] shrink-0 sm:w-[32vw] sm:max-w-[360px] lg:w-[25vw] lg:max-w-[390px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e6de]">
                <img
                  src={product.image}
                  alt={`BSPX ${product.category.toLowerCase()} T-shirt collection`}
                  draggable="false"
                  loading={index < products.length ? "eager" : "lazy"}
                  className="product-image h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-4 pt-12 sm:px-5 sm:pb-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white sm:text-xs">
                    {product.category}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* SCROLL STATUS */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 pb-10 sm:px-8 sm:pb-14 lg:px-12">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#77766e] sm:text-xs">
          {isPaused ? "Collection paused" : "Explore the collection"}
        </p>

        <button
          type="button"
          onClick={() => pauseScroll(!pausedRef.current)}
          className="border-b border-[#20201e] pb-1 text-[10px] font-medium uppercase tracking-[0.16em] sm:text-xs"
          aria-pressed={isPaused}
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>

      {/* WAVE DIVIDER */}
      <div className="-mb-px w-full overflow-hidden leading-[0]">
        <svg
          className="block h-[48px] w-full sm:h-[72px] lg:h-[90px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 34 C180 88 360 5 540 35 S880 90 1080 42 S1320 10 1440 36 L1440 100 L0 100 Z"
            fill="#20201e"
          />
        </svg>
      </div>

      {/* BRAND STRIP */}
      <div className="bg-[#20201e] px-5 pb-12 pt-3 text-[#f5f4ef] sm:px-8 sm:pb-16 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">
              BSPX Clothing
            </p>

            <h3 className="mt-2 text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
              Wear your own story.
            </h3>
          </div>

          <p className="max-w-sm text-xs leading-5 text-white/60 sm:text-right sm:text-sm">
            Simple essentials. Individual expression. Streetwear
            made to move with you.
          </p>
        </div>
      </div>
    </section>
  );
}
