import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Eye,
  Heart,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";

// Import proper local images from assets/gallery
import OutdoorPortraits from "../../assests/gallery/Outdoor Portraits.webp";
import BirthdayShoots from "../../assests/gallery/Birthday Shoots.webp";
import CoupleShoots from "../../assests/gallery/Couple Shoots.webp";
import BabyShoots from "../../assests/gallery/Baby Shoots.webp";
import CinematicReels from "../../assests/gallery/cinematic Reels.webp";
import HighlightEdits from "../../assests/gallery/Highlight Edits.webp";
import PrePostWedding from "../../assests/gallery/Pre & Post Wedding.webp";
import ModelShoots from "../../assests/gallery/Model Shoots.webp";
import EventPhotography from "../../assests/gallery/Event Photography.webp";
import PhotoFrames from "../../assests/gallery/Photo Frames.webp";
import FamilyShoots from "../../assests/gallery/gallery1.webp";
import InfluencerShoots from "../../assests/gallery/gallery3.webp";


const projects = [
  {
    title: "Outdoor Portraits",
    category: "Portraits",
    heading: "Natural Light, Real Backgrounds",
    description:
      "We shoot outdoors in parks, streets, rooftops, or beaches. No fake studio setups. Just you looking your best in natural light.",
    highlights: [
      "Solo portraits with soft evening light",
      "Urban street-style photos",
      "Nature backgrounds with mountains or trees",
    ],
    location: "Coimbatore, Ooty, Kodaikanal, Bangalore",
    caption: "Outdoor portrait – Sneha, Bangalore rooftop",
    img: OutdoorPortraits,
    likes: 342,
    views: 890,
    color: "from-cyan-500/85 to-cyan-600/70",
  },
  {
    title: "Birthday Shoots",
    category: "Celebrations",
    heading: "Fun, Colorful & Candid",
    description:
      "First birthday or 50th — we make every birthday special. Candid laughs, cake cuts, family hugs, and happy tears.",
    highlights: [
      "Kids with balloons and cakes",
      "Surprise birthday moments",
      "Group family photos",
    ],
    location: "Coimbatore, Chennai, Hyderabad, Mumbai",
    caption: "Birthday shoot – Aarav's 1st birthday, Coimbatore",
    img: BirthdayShoots,
    likes: 280,
    views: 741,
    color: "from-emerald-400/85 to-teal-600/75",
  },
  {
    title: "Couple Shoots",
    category: "Couples",
    heading: "Romantic, Fun or Creative",
    description:
      "Engagement shoots, anniversary shoots, or just because you are in love. We make you feel comfortable, so photos look natural.",
    highlights: [
      "Walking hand-in-hand shots",
      "Fun laughing candid moments",
      "Sunset couple portraits",
    ],
    location: "Coimbatore, Goa, Pondicherry, Kerala",
    caption: "Couple shoot – Raj & Priya, Ooty",
    img: CoupleShoots,
    likes: 412,
    views: 1250,
    color: "from-rose-500/85 to-red-500/75",
  },
  {
    title: "Baby Shoots",
    category: "Baby Stories",
    heading: "Safe, Patient & Adorable",
    description:
      "Newborns to toddlers. We work at baby's speed — no rushing, no forcing. Just pure cute expressions.",
    highlights: [
      "Sleeping newborn photos",
      "Baby smiling candid shots",
      "Parents holding baby frames",
    ],
    location: "Coimbatore, Bangalore, Mysore, Trivandrum",
    caption: "Baby shoot – Anvi, 6 months old, Chennai",
    img: BabyShoots,
    likes: 198,
    views: 520,
    color: "from-sky-500/85 to-blue-600/75",
  },
  {
    title: "Reels & Highlight Edits",
    category: "Video Edits",
    heading: "Made for Instagram & WhatsApp",
    description:
      "Short cinematic videos from 15 to 60 seconds for reels, or a 2–3 minute highlight film of your full event. Music added. Colors corrected.",
    highlights: [
      "Birthday reel with slow-motion and fun music",
      "Couple shoot highlight",
      "Event recap with fast cuts",
    ],
    location: "Anywhere in India — we edit remotely",
    caption: "Couple shoot highlight – 30 seconds",
    img: CinematicReels,
    likes: 305,
    views: 920,
    color: "from-orange-500/85 to-amber-500/75",
  },
  {
    title: "Pre-Wedding Shoots",
    category: "Wedding Stories",
    heading: "Romantic, Styled & Location-Based",
    description:
      "Pre-wedding shoots before marriage — fun, romantic, and location-based. We help with mood, styling, locations, and direction.",
    highlights: [
      "Heritage location portraits",
      "Traditional and western looks",
      "Candid walking and dancing shots",
    ],
    location: "Coimbatore, Ooty, Madurai, Jaipur, Goa",
    caption: "Pre-wedding – Vikram & Divya, Goa",
    img: PrePostWedding,
    likes: 512,
    views: 1950,
    color: "from-purple-500/85 to-fuchsia-600/75",
  },
  {
    title: "Post-Wedding Shoots",
    category: "Wedding Stories",
    heading: "Relaxed, No Rush, Pure Couple Time",
    description:
      "Post-wedding shoots are calm and natural. No event pressure, no rushing — only relaxed couple storytelling after the wedding.",
    highlights: [
      "Relaxed couple portraits",
      "After-wedding casual looks",
      "Destination-style couple frames",
    ],
    location: "Coimbatore, Kerala, Pondicherry, Goa",
    caption: "Post-wedding – Arjun & Meera, Kerala",
    img: HighlightEdits,
    likes: 438,
    views: 1380,
    color: "from-pink-500/85 to-rose-600/75",
  },
  {
    title: "Model Shoots",
    category: "Portfolio",
    heading: "Portfolio, Fashion & Editorial",
    description:
      "For aspiring models, influencers, or actors. We help you build your portfolio with high-quality, professional images.",
    highlights: [
      "Bold fashion poses",
      "Casual lifestyle model shots",
      "Black and white editorial looks",
    ],
    location: "Coimbatore, Chennai, Bangalore, Mumbai",
    caption: "Model shoot – fashion portfolio, Chennai",
    img: ModelShoots,
    likes: 245,
    views: 675,
    color: "from-slate-700/85 to-stone-950/80",
  },
  {
    title: "Event Photography",
    category: "Events + Prints",
    heading: "Candid Coverage For Every Occasion",
    description:
      "We cover small and big events — birthday parties, anniversaries, family get-togethers, launches, and private celebrations.",
    highlights: [
      "Event candid moments",
      "Group family photos",
      "Decor and venue details",
    ],
    location: "Coimbatore, Chennai, Bangalore, Hyderabad",
    caption: "Event candid – family gathering, Coimbatore",
    img: EventPhotography,
    likes: 489,
    views: 1420,
    color: "from-teal-500/85 to-cyan-700/75",
  },
  {
    title: "Photo Frames",
    category: "Events + Prints",
    heading: "Memories You Can Touch",
    description:
      "We print your best photos into beautiful physical frames for homes, gifting, walls, desks, and family memories.",
    highlights: [
      "Premium framed prints",
      "Wall-ready photo memories",
      "Frames shipped across India",
    ],
    location: "Frames shipped anywhere in India",
    caption: "Photo frame – family memory wall, Coimbatore",
    img: PhotoFrames,
    likes: 190,
    views: 510,
    color: "from-yellow-500/85 to-orange-600/75",
  },
  {
    title: "Family Shoots",
    category: "Family Stories",
    heading: "Warm, Simple & Emotional",
    description:
      "Family shoots are designed to capture bonding, laughter, generations, and real connection without making people feel staged.",
    highlights: [
      "Parents and children portraits",
      "Grandparents and family frames",
      "Home and outdoor family sessions",
    ],
    location: "Coimbatore, Chennai, Kerala, Bangalore",
    caption: "Family shoot – three generations, Chennai",
    img: FamilyShoots,
    likes: 366,
    views: 980,
    color: "from-lime-500/85 to-green-700/75",
  },
  {
    title: "Influencer Shoots",
    category: "Portfolio",
    heading: "Content-Ready Personal Branding",
    description:
      "For creators, coaches, influencers, and small business owners who need strong visual content for social media and campaigns.",
    highlights: [
      "Instagram content shoots",
      "Personal brand portraits",
      "Reels and short-form visuals",
    ],
    location: "Coimbatore, Chennai, Bangalore, Mumbai",
    caption: "Influencer shoot – personal brand content, Bangalore",
    img: InfluencerShoots,
    likes: 620,
    views: 2100,
    color: "from-indigo-500/85 to-blue-700/75",
  },
];

const categories = [
  "All",
  "Portraits",
  "Celebrations",
  "Couples",
  "Baby Stories",
  "Video Edits",
  "Wedding Stories",
  "Portfolio",
  "Events + Prints",
  "Family Stories",
];

export default function Work() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="work"
      className="relative flex min-h-screen justify-center overflow-hidden bg-[#f4f2ee] py-20 text-[#0A0A0A] sm:py-24 md:py-32 lg:py-40 font-['Poppins',sans-serif]"
    >
      {/* Ambient Background */}
      <div
        className="pointer-events-none absolute left-[-40%] top-[4%] h-72 w-72 bg-[#D4A53A]/20 blur-[90px] transition-transform duration-500 sm:left-auto sm:h-96 sm:w-96 sm:blur-[120px]"
        style={{
          transform: `translate(${cursorPos.x * 0.015}px, ${
            cursorPos.y * 0.015
          }px)`,
        }}
      />
      <div
        className="pointer-events-none absolute right-[-45%] top-1/3 h-72 w-72 bg-[#1E3A5F]/15 blur-[90px] transition-transform duration-500 sm:right-0 sm:h-80 sm:w-80 sm:blur-[120px]"
        style={{
          transform: `translate(${cursorPos.x * -0.015}px, ${
            cursorPos.y * -0.015
          }px)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-6xl text-center sm:mb-16 md:mb-24 lg:mb-28">
          <div className="mb-5 inline-block border border-[#D4A53A]/30 bg-white/70 px-4 py-2 backdrop-blur-md sm:mb-8 sm:px-5">
            <span className="font-['Montserrat',sans-serif] text-[8px] font-semibold uppercase tracking-[0.2em] text-[#FF7A00] min-[380px]:text-[9px] sm:text-[10px] sm:tracking-[0.25em]">
              BSPX Studio Work
            </span>
          </div>

          <h2 className="mb-5 font-['Bebas_Neue',sans-serif] text-[3.4rem] font-normal leading-[0.88] tracking-wide text-[#0A0A0A] min-[380px]:text-6xl sm:text-7xl md:text-8xl lg:text-8xl">
            Our Work
            <br />
            <span className="text-[#D4A53A]">
              Real Shoots. Real Emotions.
            </span>
          </h2>

          <p className="mx-auto max-w-3xl px-2 font-['Montserrat',sans-serif] text-xs font-semibold leading-relaxed text-stone-600 sm:text-sm md:text-base">
            Based in Coimbatore | Delivered everywhere from Chennai to Delhi to
            Kerala
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mb-12 -mx-4 flex gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:mb-16 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0 md:mb-20 md:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`shrink-0 border px-4 py-3 font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.14em] transition-all duration-500 sm:px-6 sm:py-3.5 sm:text-[10px] sm:tracking-[0.18em] ${
                activeCategory === cat
                  ? "border-[#0A0A0A] bg-[#0A0A0A] text-white shadow-2xl"
                  : "border-stone-200 bg-white/70 text-stone-600 backdrop-blur-md hover:border-[#FF7A00] hover:text-[#FF7A00]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider Header */}
        <div className="mx-auto mb-8 flex w-full max-w-[1750px] items-center justify-between gap-4 sm:mb-10 md:mb-12">
          <span className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#FF7A00] sm:text-[10px] sm:tracking-[0.25em]">
            Selected BSPX Shoots
          </span>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={prevSlide}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center border border-stone-200 bg-white/70 text-stone-700 backdrop-blur-md transition-all duration-300 hover:bg-[#0A0A0A] hover:text-white sm:h-12 sm:w-12"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center bg-[#0A0A0A] text-white shadow-md transition-all duration-300 hover:bg-[#FF7A00] sm:h-12 sm:w-12"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Tall Colored Card Slider */}
        <div className="relative mx-auto mb-12 flex min-h-[610px] w-full max-w-[1750px] items-center justify-center overflow-hidden px-0 py-4 min-[380px]:min-h-[650px] sm:mb-16 sm:min-h-[720px] sm:px-2 sm:py-6">
          {filteredProjects.map((project, index) => {
            const isActive = index === currentIndex;
            const isPrev =
              index ===
              (currentIndex - 1 + filteredProjects.length) %
                filteredProjects.length;
            const isNext = index === (currentIndex + 1) % filteredProjects.length;
            const isFarPrev =
              index ===
              (currentIndex - 2 + filteredProjects.length) %
                filteredProjects.length;
            const isFarNext =
              index === (currentIndex + 2) % filteredProjects.length;

            let positionClass = "invisible translate-x-32 scale-90 opacity-0";

            if (isActive) {
              positionClass =
                "z-40 translate-x-0 scale-100 opacity-100 shadow-[0_30px_80px_rgba(0,0,0,0.16)] sm:shadow-[0_40px_100px_rgba(0,0,0,0.18)]";
            } else if (isPrev) {
              positionClass =
                "z-30 -translate-x-[310px] scale-85 opacity-60 blur-[0.5px] max-md:hidden";
            } else if (isNext) {
              positionClass =
                "z-30 translate-x-[310px] scale-85 opacity-60 blur-[0.5px] max-md:hidden";
            } else if (isFarPrev) {
              positionClass =
                "z-10 -translate-x-[580px] scale-75 opacity-35 blur-[1px] max-lg:hidden";
            } else if (isFarNext) {
              positionClass =
                "z-10 translate-x-[580px] scale-75 opacity-35 blur-[1px] max-lg:hidden";
            }

            return (
              <article
                key={index}
                className={`absolute h-[570px] w-[calc(100vw-32px)] max-w-[300px] overflow-hidden transition-all duration-700 ease-in-out min-[380px]:h-[600px] min-[380px]:max-w-[330px] sm:h-[640px] sm:max-w-[350px] md:h-[660px] md:max-w-[390px] ${positionClass}`}
              >
                {/* Image Layer */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
                />

                {/* Color Overlay Card Layer */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${project.color} mix-blend-multiply`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/75 via-transparent to-white/10" />

                {/* Card Top */}
                <div className="absolute left-5 right-5 top-6 z-10 sm:left-7 sm:right-7 sm:top-8">
                  <p className="font-['Montserrat',sans-serif] text-[8px] font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-[10px] sm:tracking-[0.3em]">
                    {project.category}
                  </p>

                  <h3 className="mt-5 font-['Montserrat',sans-serif] text-xl font-semibold leading-tight text-white sm:mt-8 sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold leading-relaxed text-white/80 sm:mt-3 sm:text-sm">
                    {project.heading}
                  </p>
                </div>

                {/* Metrics */}
                <div className="absolute left-5 top-[46%] z-10 flex items-center gap-4 text-white sm:left-7 sm:top-[48%] sm:gap-5">
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold">
                    <Eye className="h-3.5 w-3.5 text-white/70" />
                    {project.views}
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-semibold">
                    <Heart className="h-3.5 w-3.5 text-white/70" />
                    {project.likes}
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-7">
                  <p className="line-clamp-4 text-[11px] leading-relaxed text-white/75 sm:text-xs">
                    {project.description}
                  </p>

                  <div className="mt-4 space-y-1.5 sm:mt-5 sm:space-y-2">
                    {project.highlights.slice(0, 3).map((item) => (
                      <p
                        key={item}
                        className="text-[9px] font-semibold leading-relaxed text-white/70 sm:text-[10px]"
                      >
                        ↗ {item}
                      </p>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-white/20 pt-4 sm:mt-6 sm:pt-5">
                    <p className="font-['Montserrat',sans-serif] text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-[9px] sm:tracking-[0.25em]">
                      Client Locations
                    </p>

                    <p className="mt-2 text-[11px] font-semibold leading-relaxed text-white sm:text-xs">
                      {project.location}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="mt-5 inline-flex items-center gap-2 bg-white px-4 py-3 font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-widest text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white sm:mt-6 sm:px-5 sm:text-[10px]"
                  >
                    View Details
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Portfolio Caption Strip */}
        <div className="mx-auto max-w-[1750px] border border-stone-200 bg-white/70 p-5 backdrop-blur-md sm:p-8 md:p-10">
          <div className="mb-6 flex flex-col justify-between gap-5 sm:mb-8 md:flex-row md:items-end">
            <div>
              <span className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.2em] text-[#FF7A00] sm:text-[10px] sm:tracking-[0.28em]">
                Portfolio Captions
              </span>

              <h3 className="mt-3 font-['Bebas_Neue',sans-serif] text-[3.2rem] font-normal leading-none tracking-wide text-[#0A0A0A] sm:text-5xl">
                Small captions.
                <br />
                Strong context.
              </h3>
            </div>

            <p className="max-w-xl text-xs leading-relaxed text-stone-600 sm:text-sm">
              Add short location-led captions below images to strengthen trust,
              local relevance, and AI search clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {projects.slice(0, 8).map((project) => (
              <div
                key={project.caption}
                className="border border-stone-200 bg-white px-4 py-4 sm:px-5"
              >
                <p className="text-[11px] font-semibold leading-relaxed text-stone-600 sm:text-xs">
                  “{project.caption}”
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Work Map */}
        <div className="mx-auto mt-12 max-w-[1750px] bg-[#0A0A0A] p-6 text-white sm:mt-16 sm:p-10 md:p-12">
          <span className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D4A53A] sm:text-[10px] sm:tracking-[0.28em]">
            Client Work Map
          </span>

          <h3 className="mt-4 font-['Bebas_Neue',sans-serif] text-[3.4rem] font-normal leading-none tracking-wide sm:text-6xl md:text-7xl">
            Where We Have
            <br />
            Shot Recently
          </h3>

          <p className="mt-5 text-xs leading-relaxed text-white/60 sm:mt-6 sm:text-sm">
            📍 Coimbatore | 📍 Chennai | 📍 Bangalore | 📍 Hyderabad | 📍 Mumbai
            | 📍 Delhi | 📍 Kerala | 📍 Goa | 📍 Ooty | 📍 Madurai
          </p>

          <p className="mt-4 text-xs font-semibold text-[#D4A53A] sm:text-sm">
            Next could be your city. Email us to add it.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-16 grid w-full max-w-[1750px] grid-cols-2 gap-0 border border-stone-100 bg-white/70 p-4 backdrop-blur-md sm:mt-24 sm:p-8 md:p-14 lg:mt-32 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center border-b border-r border-stone-100 p-4 text-center lg:border-b-0">
            <span className="mb-2 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none text-[#FF7A00] md:text-7xl">
              50+
            </span>
            <span className="font-['Montserrat',sans-serif] text-[8px] font-semibold uppercase tracking-widest text-stone-500 sm:text-[9px]">
              Shoots Completed
            </span>
          </div>

          <div className="flex flex-col items-center justify-center border-b border-stone-100 p-4 text-center lg:border-b-0 lg:border-r">
            <span className="mb-2 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none text-[#FF7A00] md:text-7xl">
              45+
            </span>
            <span className="font-['Montserrat',sans-serif] text-[8px] font-semibold uppercase tracking-widest text-stone-500 sm:text-[9px]">
              Happy Clients
            </span>
          </div>

          <div className="flex flex-col items-center justify-center border-r border-stone-100 p-4 text-center">
            <span className="mb-2 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none text-[#FF7A00] md:text-7xl">
              10+
            </span>
            <span className="font-['Montserrat',sans-serif] text-[8px] font-semibold uppercase tracking-widest text-stone-500 sm:text-[9px]">
              Cities Covered
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 text-center">
            <span className="mb-2 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none text-[#FF7A00] md:text-7xl">
              7–10
            </span>
            <span className="font-['Montserrat',sans-serif] text-[8px] font-semibold uppercase tracking-widest text-stone-500 sm:text-[9px]">
              Day Delivery
            </span>
          </div>
        </div>

        {/* Action Call Section */}
        <div className="mx-auto mt-16 max-w-4xl border-t border-stone-200 pt-12 text-center sm:mt-24 sm:pt-16 lg:mt-32 lg:pt-20">
          <h3 className="mb-5 font-['Bebas_Neue',sans-serif] text-[3.3rem] font-normal leading-none tracking-wide text-[#0A0A0A] sm:text-6xl md:text-7xl">
            Want your photos to be
            <br />
            in our next gallery?
          </h3>

          <p className="mb-8 text-xs leading-relaxed text-stone-600 sm:mb-10 sm:text-sm md:text-base">
            We are looking for fresh faces and real stories. Whether you are in
            Coimbatore or any other city in India, we will come and shoot for
            you.
          </p>

          <a
            href="mailto:bspxstudio@gmail.com"
            className="inline-flex w-full items-center justify-center gap-3 bg-[#0A0A0A] px-6 py-4 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-wider text-white shadow-2xl transition-all duration-300 hover:bg-[#FF7A00] active:scale-95 sm:w-auto sm:px-10 sm:text-xs"
          >
            <Mail className="h-4 w-4" />
            Email us your shoot idea
          </a>
        </div>
      </div>
    </section>
  );
}