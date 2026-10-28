
import React, { useEffect, useRef } from "react";

const values = [
  {
    number: "01",
    title: "Made to Wear",
    description:
      "Everyday essentials designed for effortless styling, all-day comfort, and a fit that feels right.",
  },
  {
    number: "02",
    title: "Express Yourself",
    description:
      "Minimal basics or bold statements. Discover pieces that let your personal style speak.",
  },
  {
    number: "03",
    title: "Quality First",
    description:
      "Thoughtful details, wearable designs, and quality you can feel from the very first wear.",
  },
  {
    number: "04",
    title: "Made for Everyone",
    description:
      "Fashion that fits your everyday life, your individuality, and the way you move.",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    section.querySelectorAll(".about-reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative isolate overflow-hidden bg-[#f5f4ef] text-[#171717]"
    >
      <style>{`
        .about-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity 700ms ease,
            transform 700ms ease;
        }

        .about-reveal.about-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-delay-1 { transition-delay: 100ms; }
        .about-delay-2 { transition-delay: 180ms; }
        .about-delay-3 { transition-delay: 260ms; }
        .about-delay-4 { transition-delay: 340ms; }

        .about-orbit {
          position: absolute;
          border: 1px solid rgba(23, 23, 23, 0.12);
          border-radius: 50%;
          animation: aboutOrbit 28s linear infinite;
          pointer-events: none;
        }

        .about-orbit::before {
          content: "";
          position: absolute;
          width: 7px;
          height: 7px;
          top: 12%;
          left: 15%;
          border-radius: 50%;
          background: #c7ff38;
        }

        .about-float {
          animation: aboutFloat 5s ease-in-out infinite;
        }

        .about-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.15'/%3E%3C/svg%3E");
          opacity: .12;
          pointer-events: none;
        }

        .about-card {
          transition:
            background-color 350ms ease,
            color 350ms ease,
            transform 350ms ease,
            border-color 350ms ease;
        }

        .about-card:hover {
          transform: translateY(-5px);
          background: #c7ff38;
          border-color: #c7ff38;
          color: #171717;
        }

        .about-image {
          transition: transform 900ms cubic-bezier(.2,.7,.2,1);
        }

        .about-image-wrap:hover .about-image {
          transform: scale(1.04);
        }

        @keyframes aboutOrbit {
          to { transform: rotate(360deg); }
        }

        @keyframes aboutFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-reveal,
          .about-orbit,
          .about-float,
          .about-card,
          .about-image {
            animation: none !important;
            transition: none !important;
          }

          .about-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* Decorative background */}
      <div className="about-grain absolute inset-0 -z-10" />

      <div className="pointer-events-none absolute -right-32 top-16 -z-10 h-80 w-80 rounded-full bg-[#c7ff38]/20 blur-[100px]" />

      <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-black/[0.04] blur-[100px]" />

      {/* ABOUT INTRO */}
      <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div className="about-reveal relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#171717]" />
              <span className="text-xs font-medium uppercase tracking-[0.25em]">
                Who We Are
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold uppercase leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
              Not Just
              <br />
              Another
              <br />
              <span className="relative inline-block">
                T-Shirt.
                <span className="absolute -bottom-1 left-0 -z-10 h-2.5 w-full -rotate-1 bg-[#c7ff38] sm:h-3" />
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-black/65 sm:text-base sm:leading-8">
              We believe what you wear should feel like you. Our approach to
              clothing is simple: comfortable fits, considered details, and
              everyday styles that help you express yourself without trying
              too hard.
            </p>

            <a
              href="#about-values"
              className="mt-8 inline-flex items-center rounded-full bg-[#171717] px-6 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#c7ff38] hover:text-black"
            >
              Discover Our Story
            </a>

            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
              Style. Comfort. Identity.
            </p>
          </div>

          {/* Clothing image */}
          <div className="about-reveal about-delay-2 relative mx-auto w-full max-w-[560px]">
            <div className="about-image-wrap relative aspect-[4/4.5] overflow-hidden rounded-[3px] bg-[#dfded6]">
              <img
                src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=85"
                alt="Contemporary casual clothing and streetwear"
                className="about-image h-full w-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

              <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/20 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md sm:left-7 sm:top-7">
                Everyday. Elevated.
              </div>

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/70">
                  Your style, your rules
                </p>

                <p className="mt-2 text-2xl font-semibold uppercase leading-tight tracking-[-0.025em] text-white sm:text-3xl">
                  Wear Your
                  <br />
                  Identity.
                </p>
              </div>
            </div>

            {/* Subtle animated graphic */}
            <div className="about-orbit -right-7 -top-7 hidden h-32 w-32 sm:block lg:-right-9 lg:-top-9 lg:h-40 lg:w-40" />

            {/* Floating text label */}
            <div className="about-float absolute -bottom-4 -left-3 bg-[#c7ff38] px-5 py-4 shadow-lg sm:-left-7 sm:px-6 sm:py-5">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-black/55">
                The everyday uniform
              </p>
              <p className="mt-1 text-base font-semibold uppercase tracking-tight sm:text-lg">
                Keep It Real.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BRAND STATEMENT STRIP */}
      <div className="border-y border-black/10 bg-[#c7ff38] py-5 sm:py-6">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-x-5 gap-y-2 px-5 text-center sm:gap-x-8">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs">
            Less Noise
          </span>

          <span className="text-sm">/</span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs">
            More Personality
          </span>

          <span className="text-sm">/</span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs">
            Everyday Comfort
          </span>
        </div>
      </div>

      {/* BRAND VALUES */}
      <div
        id="about-values"
        className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="about-reveal mb-10 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-black" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-black/55">
                What We Stand For
              </span>
            </div>

            <h3 className="max-w-2xl text-3xl font-semibold uppercase leading-[1.02] tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Good Clothes.
              <br />
              <span className="text-black/35">Good Energy.</span>
            </h3>
          </div>

          <p className="max-w-sm text-sm leading-7 text-black/60">
            The little things matter. From the way a T-shirt fits to how it
            makes you feel, we focus on what makes everyday clothing worth
            wearing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <article
              key={value.number}
              className={`about-reveal about-card about-delay-${index + 1} flex min-h-[245px] flex-col border border-black/10 bg-white/40 p-6 sm:min-h-[270px] sm:p-7`}
            >
              <span className="text-xs font-medium tracking-[0.18em] text-black/45">
                / {value.number}
              </span>

              <div className="mt-auto pt-12">
                <h4 className="text-lg font-semibold uppercase tracking-tight sm:text-xl">
                  {value.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-black/60">
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* FINAL ABOUT STATEMENT */}
      <div className="about-reveal relative overflow-hidden bg-[#171717] px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#c7ff38]/10 blur-[80px]" />

        <div className="relative mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#c7ff38]">
              This Is Your Everyday
            </p>

            <h3 className="max-w-3xl text-3xl font-semibold uppercase leading-[1.02] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
              Wear What
              <br />
              Moves You.
            </h3>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/60">
            Find your fit. Build your look. Make every day your own. Your next
            favourite T-shirt starts with your style.
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-[1100px] border-t border-white/15 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white/40">
            <span>Designed for everyday life</span>
            <span>Made for your kind of style</span>
          </div>
        </div>
      </div>
    </section>
  );
}
