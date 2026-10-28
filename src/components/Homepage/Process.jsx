
import React, { useEffect, useRef } from "react";

const features = [
  {
    number: "01",
    eyebrow: "THE FIT",
    title: "Comfort Comes First.",
    description:
      "Relaxed silhouettes and easy-to-wear styles made to feel good throughout your day.",
    tag: "Everyday comfort",
  },
  {
    number: "02",
    eyebrow: "THE STYLE",
    title: "Be Your Own Original.",
    description:
      "From understated essentials to streetwear statements, find pieces that reflect your personality.",
    tag: "Individual expression",
  },
  {
    number: "03",
    eyebrow: "THE DETAILS",
    title: "Less, But Better.",
    description:
      "Thoughtful designs, versatile colours, and wardrobe staples that work with your everyday look.",
    tag: "Made to style",
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".bspx-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("bspx-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("bspx-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="brand-values"
      ref={sectionRef}
      className="bspx-values relative overflow-hidden bg-[#f5f4ef] text-[#20201e]"
    >
      <style>{`
        .bspx-values {
          font-family: 'Poppins', sans-serif;
        }

        .bspx-values *,
        .bspx-values *::before,
        .bspx-values *::after {
          box-sizing: border-box;
        }

        .bspx-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity .7s ease,
            transform .7s cubic-bezier(.2,.7,.2,1);
        }

        .bspx-reveal.bspx-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .bspx-delay-1 { transition-delay: .08s; }
        .bspx-delay-2 { transition-delay: .16s; }
        .bspx-delay-3 { transition-delay: .24s; }

        .bspx-value-card {
          transition:
            background-color .35s ease,
            border-color .35s ease,
            transform .35s ease;
        }

        .bspx-value-card:hover {
          background-color: #c8f169;
          border-color: #c8f169;
          transform: translateY(-5px);
        }

        .bspx-value-number {
          transition: color .3s ease;
        }

        .bspx-value-card:hover .bspx-value-number {
          color: rgba(23,23,20,.7);
        }

        .bspx-wordmark {
          font-size: clamp(4rem, 12vw, 10rem);
          line-height: .85;
          letter-spacing: -.09em;
          font-weight: 500;
        }

        .bspx-value-line {
          transform-origin: left;
          animation: bspxLineIn .9s ease both;
        }

        @keyframes bspxLineIn {
          from {
            transform: scaleX(0);
            opacity: .3;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @media (max-width: 640px) {
          .bspx-value-card:hover {
            transform: none;
          }

          .bspx-reveal {
            transform: translateY(14px);
          }

          .bspx-wordmark {
            font-size: clamp(3.5rem, 17vw, 6rem);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bspx-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .bspx-value-card,
          .bspx-value-number,
          .bspx-value-line {
            animation: none;
            transition: none;
          }
        }
      `}</style>

      {/* Subtle background details */}
      <div className="pointer-events-none absolute -right-32 top-12 h-72 w-72 rounded-full bg-[#c8f169]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-black/[0.035] blur-[100px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:py-24 lg:px-12 lg:py-28">
        {/* SECTION INTRO */}
        <div className="bspx-reveal mx-auto max-w-4xl text-center">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.24em] text-black/50 sm:text-xs">
            The BSPX Approach
          </p>

          <h2 className="text-3xl font-medium uppercase leading-[1.08] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
            Clothing for the way
            <br className="hidden sm:block" /> you live.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-xs leading-6 text-black/60 sm:mt-6 sm:text-sm sm:leading-7">
            Everyday clothing with a point of view. Discover versatile
            T-shirts, relaxed fits, and streetwear-inspired essentials that
            make personal style feel effortless.
          </p>
        </div>

        {/* BRAND VALUES */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {features.map((feature, index) => (
            <article
              key={feature.number}
              className={`bspx-reveal bspx-value-card bspx-delay-${index + 1} flex min-h-[230px] flex-col border border-black/10 bg-white/50 p-5 sm:min-h-[255px] sm:p-7 lg:min-h-[285px] lg:p-8`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-black/50">
                  {feature.eyebrow}
                </span>

                <span className="bspx-value-number text-xs font-medium tracking-[0.12em] text-black/35">
                  / {feature.number}
                </span>
              </div>

              <div className="mt-auto pt-12 sm:pt-16">
                <h3 className="max-w-xs text-xl font-medium leading-tight tracking-[-0.035em] sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-sm text-xs leading-6 text-black/60 sm:text-sm sm:leading-7">
                  {feature.description}
                </p>

                <p className="mt-5 border-t border-black/10 pt-4 text-[9px] font-medium uppercase tracking-[0.16em] text-black/45">
                  {feature.tag}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* BRAND STATEMENT */}
        <div className="bspx-reveal mt-14 border-t border-black/10 pt-8 sm:mt-20 sm:pt-12 lg:mt-24">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto] md:gap-10">
            <div>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-black/45 sm:text-xs">
                Your style. Your rules.
              </p>

              <h3 className="text-3xl font-medium uppercase leading-[1.05] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                Wear it your way.
              </h3>

              <p className="mt-4 max-w-lg text-xs leading-6 text-black/55 sm:text-sm sm:leading-7">
                Build your everyday wardrobe around pieces that feel natural,
                look good, and let your personality take the lead.
              </p>
            </div>

            <a
              href="#shop"
              className="inline-flex min-h-12 w-full items-center justify-center bg-[#20201e] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#c8f169] hover:text-black sm:w-fit sm:min-w-[190px]"
            >
              Explore the collection
            </a>
          </div>
        </div>

        {/* EDITORIAL BRAND STRIP */}
        <div className="bspx-reveal mt-12 overflow-hidden bg-[#20201e] px-5 py-7 text-white sm:mt-16 sm:px-8 sm:py-9">
          <p className="text-center text-[9px] font-medium uppercase tracking-[0.2em] text-white/50 sm:text-[10px] sm:tracking-[0.3em]">
            BSPX Clothing
          </p>

          <p className="bspx-wordmark mt-5 text-center uppercase">
            Be original.
          </p>

          <div className="bspx-value-line mx-auto mt-6 h-[3px] max-w-[220px] bg-[#c8f169] sm:mt-8 sm:max-w-xs" />
        </div>
      </div>
    </section>
  );
}
