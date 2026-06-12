import { useRef } from "react";
import {
  Mail,
  Phone,
  CalendarDays,
  Camera,
  Wand2,
  PackageCheck,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Email or Call",
    subtitle: "You Tell Us Your Idea",
    label: "Plan",
    detail: "24 hrs reply",
    icon: Mail,
    description:
      "You send an email to bspxstudio@gmail.com or call us. Tell us your city, shoot type, number of people, and any special request like reels, highlight edits, or photo frames.",
    points: [
      "City: Coimbatore or anywhere in India",
      "Shoot type: birthday, couple, baby, outdoor, model, event, pre/post wedding",
      "Number of people",
      "Reels, highlight edits, photo frames or any special request",
    ],
    next: "We reply within 24 hours with a simple price quote.",
  },
  {
    step: "02",
    title: "Pick Location",
    subtitle: "We Plan Everything Together",
    label: "Confirm",
    detail: "Date + place",
    icon: CalendarDays,
    description:
      "Not sure where to shoot? We suggest locations. Based in Coimbatore? We know all the best spots. In another city, we research or work with your preferred place.",
    points: [
      "Best time of day for lighting",
      "Outdoor or indoor shoot",
      "Casual or formal looks",
      "Props, outfits, date, time, and location",
    ],
    next: "We confirm date, time, and location. No confusion.",
  },
  {
    step: "03",
    title: "Shoot Day",
    subtitle: "Relax, Smile, We Handle Rest",
    label: "Shoot",
    detail: "No rush",
    icon: Camera,
    description:
      "We reach your location on time anywhere in India. We bring our camera, lights, and creativity. You just be yourself.",
    points: [
      "We make you feel comfortable",
      "Candid and posed photos",
      "Short videos for reels if booked",
      "No rushing — we take time to get the best shots",
    ],
    next: "We go back and start editing. You wait for good news.",
  },
  {
    step: "04",
    title: "Edit & Approve",
    subtitle: "We Edit, You Approve",
    label: "Review",
    detail: "1 revision",
    icon: Wand2,
    description:
      "We edit all photos with color correction, natural skin touch-ups, cropping, and filters. For reels and highlight edits, we add music and transitions.",
    points: [
      "Google Drive link with low-resolution previews",
      "Short video preview for reels",
      "One free revision included",
      "Final files prepared after approval",
    ],
    next: "You say “Yes, I love it” — we prepare final files.",
  },
  {
    step: "05",
    title: "Final Delivery",
    subtitle: "Photos & Frames Delivered",
    label: "Deliver",
    detail: "7–10 days",
    icon: PackageCheck,
    description:
      "We send high-resolution edited photos, reels, highlight edits, and optional physical photo frames shipped to your home anywhere in India.",
    points: [
      "High-resolution edited photos",
      "Reels and highlight edits in MP4 format",
      "Photo frames shipped if ordered",
      "Photos and videos delivered in 7 to 10 days",
    ],
    next: "That’s it. You are done. And you will love the results.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="process"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-white py-28 text-[#0A0A0A] md:py-40 font-['Poppins',sans-serif]"
    >
      {/* White Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[520px] w-[520px] bg-[#D4A53A]/10 blur-[150px]" />
        <div className="absolute right-[-10%] top-[20%] h-[520px] w-[520px] bg-[#1E3A5F]/10 blur-[150px]" />
        <div className="absolute bottom-[-15%] left-[35%] h-[420px] w-[420px] bg-[#FF7A00]/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-24 max-w-6xl text-center">
      

          <h2 className="font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-[0.95] tracking-wide text-[#0A0A0A] md:text-4xl lg:text-6xl">
            Our Process – Simple, Fast
            <br />
            <span className="text-[#D4A53A]">& No Confusion</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl font-['Montserrat',sans-serif] text-sm font-semibold leading-relaxed text-stone-500 md:text-base">
            From “I want a shoot” to “I love my photos” in 5 easy steps. Based
            in Coimbatore, serving all India.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden min-h-[720px] w-full items-center justify-center overflow-hidden lg:flex">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-stone-300" />

          <motion.div
            className="absolute left-0 top-1/2 h-px bg-gradient-to-r from-[#D4A53A] via-[#FF7A00] to-[#1E3A5F]"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />

          <div className="relative grid w-full grid-cols-5">
            {steps.map((item, index) => {
              const isTop = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div key={item.step} className="relative h-[720px]">
                  <motion.div
                    className="absolute left-1/2 top-1/2 z-20 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-stone-200"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-[#0A0A0A]" />
                  </motion.div>

                  <motion.div
                    className={`absolute left-1/2 w-px -translate-x-1/2 bg-stone-300 ${
                      isTop ? "bottom-1/2 h-[150px]" : "top-1/2 h-[150px]"
                    }`}
                    initial={{ height: 0 }}
                    animate={isInView ? { height: 150 } : {}}
                    transition={{ duration: 0.7, delay: index * 0.16 }}
                  />

                  <motion.div
                    className={`absolute left-1/2 w-[250px] -translate-x-1/2 ${
                      isTop
                        ? "bottom-[calc(50%+150px)]"
                        : "top-[calc(50%+150px)]"
                    }`}
                    initial={{ opacity: 0, y: isTop ? 26 : -26 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: index * 0.16 }}
                  >
                    <div className="mb-6 flex justify-center">
                      <div className="inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white px-5 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                        <span className="font-['Montserrat',sans-serif] text-sm font-semibold text-[#0A0A0A]">
                          {item.title}
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00]">
                        {item.subtitle}
                      </p>
                      <p className="mx-auto mt-3 max-w-[220px] text-xs leading-relaxed text-stone-500">
                        {item.next}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute left-1/2 top-[calc(50%+28px)] z-30 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white px-4 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.16 + 0.2 }}
                  >
                    <span className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-widest text-stone-400">
                      {item.detail}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4A53A] text-[#0A0A0A]">
                      <Icon className="h-4 w-4" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="grid grid-cols-1 gap-5 lg:hidden">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                className="border border-stone-200 bg-white p-7 shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6 flex items-start justify-between gap-5">
                  <div>
                    <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF7A00]">
                      Step {item.step}
                    </p>
                    <h3 className="mt-3 font-['Montserrat',sans-serif] text-2xl font-semibold leading-tight text-[#0A0A0A]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs font-medium text-stone-400">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#D4A53A] text-[#0A0A0A]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-stone-600">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-stone-200 pt-6">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-xs font-medium leading-relaxed text-stone-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#D4A53A]" />
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-stone-200 pt-5 text-xs font-semibold text-[#FF7A00]">
                  {item.next}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Final CTA */}
        <div className="mx-auto mt-20 max-w-4xl border-t border-stone-200 pt-20 text-center">
          <p className="mb-5 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-[0.25em] text-[#FF7A00]">
            One email starts the full workflow
          </p>

          <h3 className="font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-[0.95] tracking-wide text-[#0A0A0A] md:text-7xl">
            Ready To Move From
            <br />
            Idea To Final Photos?
          </h3>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:bspxstudio@gmail.com"
              className="inline-flex items-center gap-3 bg-[#D4A53A] px-9 py-4 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white"
            >
              <Mail className="h-4 w-4" />
              Email Your Shoot Plan
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("quote")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-3 border border-stone-300 bg-white px-9 py-4 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] transition hover:border-[#D4A53A] hover:text-[#FF7A00]"
            >
              <Phone className="h-4 w-4" />
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}