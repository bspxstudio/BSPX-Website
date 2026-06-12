import { ChevronRight, ArrowLeft, ArrowRight, Eye, Heart, Mail } from "lucide-react";
import { useEffect, useState } from "react";

// Import local images from assets
import project1 from "../../assests/gallery/gallery1.webp";
import project2 from "../../assests/gallery/gallery1.webp";
import project3 from "../../assests/gallery/gallery1.webp";
import project4 from "../../assests/gallery/gallery1.webp";
import project5 from "../../assests/gallery/gallery1.webp";
import project6 from "../../assests/gallery/gallery1.webp";
import project7 from "../../assests/gallery/gallery1.webp";
import project8 from "../../assests/gallery/gallery1.webp";

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
    img: project1,
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
    img: project2,
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
    img: project3,
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
    img: project4,
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
    img: project5,
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
    img: project6,
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
    img: project3,
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
    img: project7,
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
    img: project8,
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
    img: project2,
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
    img: project4,
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
    img: project5,
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
      className="relative flex min-h-screen justify-center overflow-hidden bg-[#f4f2ee] py-32 text-[#0A0A0A] md:py-40 font-['Poppins',sans-serif]"
    >
      {/* Ambient Background */}
      <div
        className="pointer-events-none absolute h-96 w-96 bg-[#D4A53A]/20 blur-[120px] transition-transform duration-500"
        style={{
          transform: `translate(${cursorPos.x * 0.015}px, ${
            cursorPos.y * 0.015
          }px)`,
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 bg-[#1E3A5F]/15 blur-[120px] transition-transform duration-500"
        style={{
          transform: `translate(${cursorPos.x * -0.015}px, ${
            cursorPos.y * -0.015
          }px)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-6xl text-center md:mb-28">
          <div className="mb-8 inline-block border border-[#D4A53A]/30 bg-white/70 px-5 py-2 backdrop-blur-md">
            <span className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF7A00]">
              BSPX Studio Work
            </span>
          </div>

          <h2 className="mb-6 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-[0.9] tracking-wide text-[#0A0A0A] md:text-8xl lg:text-5xl">
            Our Work
            <br />
            <span className="text-[#D4A53A]">
              Real Shoots. Real Emotions.
            </span>
          </h2>

          <p className="mx-auto max-w-3xl font-['Montserrat',sans-serif] text-sm font-semibold leading-relaxed text-stone-600 md:text-base">
            Based in Coimbatore | Delivered everywhere from Chennai to Delhi to
            Kerala
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mb-20 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`border px-6 py-3.5 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-500 ${
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
        <div className="mx-auto mb-12 flex w-full max-w-[1750px] items-center justify-between">
          <span className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF7A00]">
            Selected BSPX Shoots
          </span>

          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center border border-stone-200 bg-white/70 text-stone-700 backdrop-blur-md transition-all duration-300 hover:bg-[#0A0A0A] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center bg-[#0A0A0A] text-white shadow-md transition-all duration-300 hover:bg-[#FF7A00]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Tall Colored Card Slider */}
        <div className="relative mx-auto mb-16 flex min-h-[660px] w-full max-w-[1750px] items-center justify-center overflow-hidden px-2 py-6 sm:min-h-[720px]">
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
                "z-40 translate-x-0 scale-100 opacity-100 shadow-[0_40px_100px_rgba(0,0,0,0.18)]";
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
                className={`absolute h-[590px] w-full max-w-[300px] overflow-hidden transition-all duration-700 ease-in-out sm:max-w-[350px] md:h-[660px] md:max-w-[390px] ${positionClass}`}
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
                <div className="absolute left-7 right-7 top-8 z-10">
                  <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.3em] text-white/75">
                    {project.category}
                  </p>

                  <h3 className="mt-8 font-['Montserrat',sans-serif] text-2xl font-semibold leading-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-relaxed text-white/80">
                    {project.heading}
                  </p>
                </div>

                {/* Metrics */}
                <div className="absolute left-7 top-[48%] z-10 flex items-center gap-5 text-white">
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
                <div className="absolute bottom-0 left-0 right-0 z-10 p-7">
                  <p className="line-clamp-4 text-xs leading-relaxed text-white/75">
                    {project.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {project.highlights.slice(0, 3).map((item) => (
                      <p
                        key={item}
                        className="text-[10px] font-semibold leading-relaxed text-white/70"
                      >
                        ↗ {item}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/20 pt-5">
                    <p className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.25em] text-white/55">
                      Client Locations
                    </p>

                    <p className="mt-2 text-xs font-semibold leading-relaxed text-white">
                      {project.location}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="mt-6 inline-flex items-center gap-2 bg-white px-5 py-3 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-widest text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white"
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
        <div className="mx-auto max-w-[1750px] border border-stone-200 bg-white/70 p-8 backdrop-blur-md md:p-10">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00]">
                Portfolio Captions
              </span>

              <h3 className="mt-3 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none tracking-wide text-[#0A0A0A]">
                Small captions.
                <br />
                Strong context.
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-stone-600">
              Add short location-led captions below images to strengthen trust,
              local relevance, and AI search clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {projects.slice(0, 8).map((project) => (
              <div
                key={project.caption}
                className="border border-stone-200 bg-white px-5 py-4"
              >
                <p className="text-xs font-semibold leading-relaxed text-stone-600">
                  “{project.caption}”
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Work Map */}
        <div className="mx-auto mt-16 max-w-[1750px] bg-[#0A0A0A] p-10 text-white md:p-12">
          <span className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4A53A]">
            Client Work Map
          </span>

          <h3 className="mt-4 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none tracking-wide md:text-7xl">
            Where We Have
            <br />
            Shot Recently
          </h3>

          <p className="mt-6 text-sm leading-relaxed text-white/60">
            📍 Coimbatore | 📍 Chennai | 📍 Bangalore | 📍 Hyderabad | 📍 Mumbai
            | 📍 Delhi | 📍 Kerala | 📍 Goa | 📍 Ooty | 📍 Madurai
          </p>

          <p className="mt-4 text-sm font-semibold text-[#D4A53A]">
            Next could be your city. Email us to add it.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-32 grid w-full max-w-[1750px] grid-cols-2 gap-8 border border-stone-100 bg-white/70 p-12 backdrop-blur-md lg:grid-cols-4 md:p-14">
          <div className="flex flex-col items-center justify-center border-r border-stone-100 p-4 text-center">
            <span className="mb-2 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none text-[#FF7A00] md:text-7xl">
              50+
            </span>
            <span className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-widest text-stone-500">
              Shoots Completed
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 text-center lg:border-r border-stone-100">
            <span className="mb-2 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none text-[#FF7A00] md:text-7xl">
              45+
            </span>
            <span className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-widest text-stone-500">
              Happy Clients
            </span>
          </div>

          <div className="flex flex-col items-center justify-center border-r border-stone-100 p-4 text-center">
            <span className="mb-2 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none text-[#FF7A00] md:text-7xl">
              10+
            </span>
            <span className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-widest text-stone-500">
              Cities Covered
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 text-center">
            <span className="mb-2 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none text-[#FF7A00] md:text-7xl">
              7–10
            </span>
            <span className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-widest text-stone-500">
              Day Delivery
            </span>
          </div>
        </div>

        {/* Action Call Section */}
        <div className="mx-auto mt-32 max-w-4xl border-t border-stone-200 pt-20 text-center">
          <h3 className="mb-5 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none tracking-wide text-[#0A0A0A] md:text-7xl">
            Want your photos to be
            <br />
            in our next gallery?
          </h3>

          <p className="mb-10 text-sm leading-relaxed text-stone-600 md:text-base">
            We are looking for fresh faces and real stories. Whether you are in
            Coimbatore or any other city in India, we will come and shoot for
            you.
          </p>

          <a
            href="mailto:bspxstudio@gmail.com"
            className="inline-flex items-center gap-3 bg-[#0A0A0A] px-10 py-4 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-wider text-white shadow-2xl transition-all duration-300 hover:bg-[#FF7A00] active:scale-95"
          >
            <Mail className="h-4 w-4" />
            Email us your shoot idea
          </a>
        </div>
      </div>
    </section>
  );
}