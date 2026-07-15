import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  Send,
  MapPinned,
  Aperture,
  SlidersHorizontal,
  CloudUpload,
  ArrowRight,
  CheckCircle2,
  Route,
  Navigation,
  Map,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const WHATSAPP_NUMBER = "918531985733";

const steps = [
  {
    step: "01",
    title: "Share Your Shoot Idea",
    subtitle: "Tell Us Your Requirement",
    label: "Start Point",
    detail: "24 hrs reply",
    icon: Send,
    description:
      "You send us your shoot requirement through email, call, or WhatsApp. Share your city, shoot type, number of people, preferred date, and any add-ons like reels, highlight edits, or photo frames.",
    points: [
      "City: Coimbatore or anywhere in India",
      "Shoot type: birthday, couple, baby, outdoor, model, event, pre/post wedding",
      "Number of people and preferred date",
      "Reels, highlight edits, photo frames or any special request",
    ],
    next: "We reply within 24 hours with a clear quote and next-step plan.",
  },
  {
    step: "02",
    title: "Plan Location & Styling",
    subtitle: "Date, Place, Look & Mood",
    label: "Planning Point",
    detail: "Date + place",
    icon: MapPinned,
    description:
      "We help you finalise the location, timing, outfit direction, props, and mood of the shoot. If you are unsure, we suggest suitable indoor, outdoor, or destination-style options.",
    points: [
      "Best time of day for natural lighting",
      "Outdoor, indoor, studio, or event venue planning",
      "Casual, formal, traditional, or cinematic looks",
      "Props, outfits, date, time, and location alignment",
    ],
    next: "We confirm the date, time, location, and complete shoot plan.",
  },
  {
    step: "03",
    title: "Shoot Execution",
    subtitle: "Relax, Smile, We Handle It",
    label: "Production Point",
    detail: "No rush",
    icon: Aperture,
    description:
      "On shoot day, we manage camera work, lighting, direction, candid moments, and overall visual execution. You focus on being natural while we handle the creative process.",
    points: [
      "Comfortable guidance throughout the shoot",
      "Candid and posed photo coverage",
      "Short-form video capture for reels if booked",
      "No rushing — we focus on quality frames",
    ],
    next: "After the shoot, we move the selected files into the editing workflow.",
  },
  {
    step: "04",
    title: "Edit, Review & Approve",
    subtitle: "Professional Post-Production",
    label: "Review Point",
    detail: "1 revision",
    icon: SlidersHorizontal,
    description:
      "We edit the photos with color correction, natural touch-ups, cropping, and visual consistency. For reels and highlight edits, we add pacing, music, transitions, and storytelling flow.",
    points: [
      "Google Drive preview link",
      "Color correction and natural skin touch-ups",
      "Short video preview for reels or highlight edits",
      "One free revision included",
    ],
    next: "Once you approve the preview, we prepare the final high-resolution delivery.",
  },
  {
    step: "05",
    title: "Final Delivery",
    subtitle: "Photos, Videos & Frames",
    label: "Destination",
    detail: "7–10 days",
    icon: CloudUpload,
    description:
      "We deliver your final edited photos, reels, highlight edits, and optional printed photo frames. Digital files are shared online, and physical frames can be shipped across India.",
    points: [
      "High-resolution edited photos",
      "Reels and highlight edits in MP4 format",
      "Photo frames shipped if ordered",
      "Final delivery within 7 to 10 days",
    ],
    next: "Your complete shoot output is delivered, ready to save, share, print, or post.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(0);

  const ActiveIcon = steps[activeStep].icon;

  const redirectToWhatsApp = (title = "Photography Shoot") => {
    const message = encodeURIComponent(
      `Hello BSPX Studio! I would like to discuss: ${title}`
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section
      id="process"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#f7f4ef] py-24 text-[#0A0A0A] sm:py-28 md:py-36 lg:py-40 font-['Inter',sans-serif]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-20%] top-[5%] h-[420px] w-[420px] rounded-full bg-[#D4A53A]/15 blur-[130px]" />
        <div className="absolute right-[-15%] top-[25%] h-[460px] w-[460px] rounded-full bg-[#1E3A5F]/10 blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[30%] h-[420px] w-[420px] rounded-full bg-[#FF7A00]/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-6xl text-center md:mb-24">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white px-5 py-2 shadow-sm">
            <Route className="h-4 w-4 text-[#FF7A00]" />
            <span className="font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF7A00]">
              Shoot Journey Map
            </span>
          </div>

          <h2 className="font-['Montserrat',sans-serif] text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#0A0A0A] sm:text-5xl md:text-6xl lg:text-7xl">
            From Idea To Final Photos
            <br />
            <span className="text-[#D4A53A]">Mapped Step By Step</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xs font-semibold leading-relaxed text-stone-500 sm:text-sm md:mt-8 md:text-base">
            A clear production journey that shows how your enquiry moves through
            planning, shooting, editing, approval, and final delivery.
          </p>
        </div>

        {/* Desktop Mapping UI */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[1fr_420px] gap-10 xl:gap-14">
            {/* Journey Map Canvas */}
            <div className="relative min-h-[760px] overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-10 shadow-[0_30px_100px_rgba(0,0,0,0.08)]">
              {/* Map Grid */}
              <div className="absolute inset-0 opacity-[0.28]">
                <div className="h-full w-full bg-[linear-gradient(to_right,#d6d3d1_1px,transparent_1px),linear-gradient(to_bottom,#d6d3d1_1px,transparent_1px)] bg-[size:56px_56px]" />
              </div>

              {/* Map Route SVG */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1000 760"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M120 120 C280 80, 310 260, 460 240 C640 215, 600 430, 790 390 C930 360, 870 610, 760 640 C580 690, 430 575, 300 620 C180 660, 130 520, 210 460"
                  fill="none"
                  stroke="#d6d3d1"
                  strokeWidth="4"
                  strokeDasharray="12 14"
                />

                <motion.path
                  d="M120 120 C280 80, 310 260, 460 240 C640 215, 600 430, 790 390 C930 360, 870 610, 760 640 C580 690, 430 575, 300 620 C180 660, 130 520, 210 460"
                  fill="none"
                  stroke="url(#routeGradient)"
                  strokeWidth="5"
                  strokeDasharray="900"
                  strokeDashoffset="900"
                  animate={isInView ? { strokeDashoffset: 0 } : {}}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />

                <defs>
                  <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D4A53A" />
                    <stop offset="50%" stopColor="#FF7A00" />
                    <stop offset="100%" stopColor="#1E3A5F" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Map Points */}
              {steps.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeStep === index;

                const positions = [
                  "left-[9%] top-[9%]",
                  "left-[38%] top-[25%]",
                  "right-[11%] top-[45%]",
                  "left-[27%] bottom-[13%]",
                  "right-[16%] bottom-[10%]",
                ];

                return (
                  <motion.button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                    className={`absolute z-20 w-[230px] rounded-3xl border p-5 text-left transition-all duration-500 ${positions[index]} ${
                      isActive
                        ? "scale-105 border-[#D4A53A] bg-[#0A0A0A] text-white shadow-[0_30px_90px_rgba(0,0,0,0.24)]"
                        : "border-stone-200 bg-white text-[#0A0A0A] shadow-[0_18px_60px_rgba(0,0,0,0.08)] hover:border-[#D4A53A]"
                    }`}
                    initial={{ opacity: 0, y: 28 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: index * 0.16 }}
                  >
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                          isActive
                            ? "bg-[#D4A53A] text-[#0A0A0A]"
                            : "bg-[#fff8eb] text-[#FF7A00]"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.18em] ${
                          isActive
                            ? "bg-white/10 text-white/70"
                            : "bg-stone-100 text-stone-400"
                        }`}
                      >
                        {item.step}
                      </span>
                    </div>

                    <p
                      className={`mb-2 font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.22em] ${
                        isActive ? "text-[#D4A53A]" : "text-[#FF7A00]"
                      }`}
                    >
                      {item.label}
                    </p>

                    <h3 className="font-['Montserrat',sans-serif] text-lg font-black leading-tight tracking-[-0.03em]">
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 line-clamp-2 text-xs font-medium leading-relaxed ${
                        isActive ? "text-white/60" : "text-stone-500"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </motion.button>
                );
              })}

              {/* Map Badge */}
              <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3 rounded-full border border-stone-200 bg-white px-5 py-3 shadow-lg">
                <Navigation className="h-4 w-4 text-[#FF7A00]" />
                <span className="font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-stone-500">
                  5-Step Route
                </span>
              </div>

              <div className="absolute right-8 top-8 z-20 flex items-center gap-3 rounded-full border border-stone-200 bg-white px-5 py-3 shadow-lg">
                <Map className="h-4 w-4 text-[#D4A53A]" />
                <span className="font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-stone-500">
                  Client Journey
                </span>
              </div>
            </div>

            {/* Active Detail Panel */}
            <motion.div
              key={activeStep}
              className="sticky top-10 h-fit rounded-[2rem] border border-stone-200 bg-[#0A0A0A] p-8 text-white shadow-[0_40px_120px_rgba(0,0,0,0.25)]"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-8 flex items-start justify-between gap-6">
                <div>
                  <p className="font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.25em] text-[#D4A53A]">
                    Current Map Point
                  </p>

                  <h3 className="mt-4 font-['Montserrat',sans-serif] text-4xl font-black leading-tight tracking-[-0.04em]">
                    {steps[activeStep].title}
                  </h3>

                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                    {steps[activeStep].detail}
                  </p>
                </div>

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#D4A53A] text-[#0A0A0A]">
                  <ActiveIcon className="h-8 w-8" />
                </div>
              </div>

              <p className="text-sm leading-relaxed text-white/65">
                {steps[activeStep].description}
              </p>

              <div className="mt-8 grid gap-3">
                {steps[activeStep].points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A53A]" />
                    <p className="text-xs font-medium leading-relaxed text-white/70">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#D4A53A]/30 bg-[#D4A53A]/10 p-5">
                <p className="font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.25em] text-[#D4A53A]">
                  Next Movement
                </p>

                <p className="mt-3 text-sm font-semibold leading-relaxed text-white">
                  {steps[activeStep].next}
                </p>
              </div>

              <button
                onClick={() => redirectToWhatsApp(steps[activeStep].title)}
                className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-[#D4A53A] px-8 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-wider text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white"
              >
                Discuss This Step
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Mapping UI */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-stone-300" />

            <motion.div
              className="absolute left-6 top-0 w-px bg-gradient-to-b from-[#D4A53A] via-[#FF7A00] to-[#1E3A5F]"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1.5 }}
            />

            <div className="space-y-5">
              {steps.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeStep === index;

                return (
                  <motion.button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className="relative grid w-full grid-cols-[48px_1fr] gap-4 text-left"
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border transition ${
                        isActive
                          ? "border-[#D4A53A] bg-[#0A0A0A] text-white"
                          : "border-stone-200 bg-white text-[#FF7A00]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div
                      className={`rounded-3xl border p-5 transition-all duration-500 ${
                        isActive
                          ? "border-[#D4A53A] bg-[#fff8eb]"
                          : "border-stone-200 bg-white"
                      }`}
                    >
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.2em] text-[#FF7A00]">
                          Map Point {item.step}
                        </span>

                        <span className="rounded-full bg-stone-100 px-3 py-1 font-['Montserrat',sans-serif] text-[8px] font-black uppercase tracking-[0.18em] text-stone-400">
                          {item.detail}
                        </span>
                      </div>

                      <h3 className="font-['Montserrat',sans-serif] text-lg font-black leading-tight tracking-[-0.03em] text-[#0A0A0A] sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs font-semibold text-stone-400">
                        {item.subtitle}
                      </p>

                      <p className="mt-4 text-sm leading-relaxed text-stone-600">
                        {item.description}
                      </p>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.35 }}
                        >
                          <ul className="mt-6 space-y-3 border-t border-stone-200 pt-6">
                            {item.points.map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-3 text-xs font-medium leading-relaxed text-stone-600"
                              >
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A53A]" />
                                {point}
                              </li>
                            ))}
                          </ul>

                          <p className="mt-6 border-t border-stone-200 pt-5 text-xs font-bold text-[#FF7A00]">
                            {item.next}
                          </p>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              redirectToWhatsApp(item.title);
                            }}
                            className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#0A0A0A] px-7 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-wider text-white transition hover:bg-[#FF7A00]"
                          >
                            Discuss on WhatsApp
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mx-auto mt-16 max-w-4xl border-t border-stone-200 pt-12 text-center sm:mt-20 sm:pt-16 lg:mt-24 lg:pt-20">
          <p className="mb-5 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.25em] text-[#FF7A00] sm:text-xs">
            Start your route with one message
          </p>

          <h3 className="font-['Montserrat',sans-serif] text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#0A0A0A] sm:text-5xl md:text-6xl">
            Ready To Begin Your
            <br />
            Shoot Journey?
          </h3>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:flex-wrap">
            <button
              onClick={() => redirectToWhatsApp("New Shoot Plan")}
              className="inline-flex w-full items-center justify-center gap-3 bg-[#D4A53A] px-8 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-wider text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white sm:w-auto sm:px-9"
            >
              <Send className="h-4 w-4" />
              WhatsApp Your Shoot Plan
            </button>

            <a
              href="mailto:bspxstudio@gmail.com"
              className="inline-flex w-full items-center justify-center gap-3 border border-stone-300 bg-white px-8 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-wider text-[#0A0A0A] transition hover:border-[#D4A53A] hover:text-[#FF7A00] sm:w-auto sm:px-9"
            >
              <Mail className="h-4 w-4" />
              Email Shoot Plan
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("quote")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex w-full items-center justify-center gap-3 border border-stone-300 bg-white px-8 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-wider text-[#0A0A0A] transition hover:border-[#D4A53A] hover:text-[#FF7A00] sm:w-auto sm:px-9"
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