import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const featuredBlogs = [
  {
    category: "Outdoor Portraits",
    title: "5 Best Outdoor Locations in Coimbatore for Portraits & Couple Shoots",
    description:
      "Planning an outdoor shoot in Coimbatore? We share 5 beautiful spots — from parks to hills — for natural, stunning photos. No studio needed.",
    opening:
      "Being based in Coimbatore, we have shot at nearly every outdoor location. Our top 5 picks are VOC Park, Ukkadam Lake, Isha Yoga Center, Marudamalai Hill, and the peaceful backroads of Kovaipudur.",
    readTime: "3 min read",
    targetLocation: "Coimbatore",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Birthday Shoots",
    title: "Birthday Shoot Ideas for Kids & Adults – Simple & Fun",
    description:
      "Balloons, cakes, and candid laughs. Here are 10 easy birthday shoot ideas that work for 1-year-olds or 50-year-olds. No expensive props needed.",
    opening:
      "A birthday shoot is not about fancy setups. It is about real smiles. Here are our favorite ideas that work anywhere in India — from a home in Coimbatore to a farmhouse in Bangalore.",
    readTime: "4 min read",
    targetLocation: "All India",
    image:
      "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Couple Shoots",
    title: "Couple Shoot Poses That Look Natural — Not Awkward",
    description:
      "No stiff poses. No fake smiles. We share 8 natural couple shoot poses that photographers actually use. Perfect for pre-wedding or anniversary shoots.",
    opening:
      "Most couples tell us: ‘We don’t know how to pose.’ That is fine. You don’t need to. Here are simple, natural poses that work for everyone — whether you are in Coimbatore, Goa, or Kerala.",
    readTime: "4 min read",
    targetLocation: "Coimbatore, Goa, Kerala",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Baby Shoots",
    title: "Baby Shoot Tips – How to Get Candid Photos Without Making Baby Cry",
    description:
      "Keep baby happy, fed, and sleepy. We share 7 tips for a stress-free baby shoot at home. Safe, patient, and adorable results guaranteed.",
    opening:
      "A crying baby does not mean bad photos. In fact, some of our best baby shoots in Coimbatore and Chennai happened after a small nap and a full tummy. Here is what works.",
    readTime: "3 min read",
    targetLocation: "Coimbatore, Chennai",
    image:
      "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Reels & Highlight Edits",
    title: "Instagram Reels for Photoshoots – Why You Need One",
    description:
      "A 30-second reel gets more views than 10 photos. We explain why you should add reels to your shoot and how we edit them with music and transitions.",
    opening:
      "Photos are forever. But reels go viral. When you book a birthday, couple, or baby shoot with BSPX Studio, ask us to shoot short videos too.",
    readTime: "3 min read",
    targetLocation: "All India",
    image:
      "https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Pre & Post Wedding",
    title: "Pre-Wedding Shoot vs Post-Wedding Shoot – Which One Is Right?",
    description:
      "Not sure if you should shoot before or after marriage? We compare both — costs, locations, outfits, and stress levels. Simple answer inside.",
    opening:
      "Pre-wedding shoots are fun but rushed. Post-wedding shoots are relaxed but less traditional. Both are beautiful. We help you decide based on your budget and personality.",
    readTime: "4 min read",
    targetLocation: "Goa, Ooty, Kerala",
    image:
      "https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const moreIdeas = [
  {
    title: "How Much Does a Birthday Shoot Cost in Coimbatore?",
    category: "Birthday Shoots",
    city: "Coimbatore",
  },
  {
    title: "Best Time of Day for Outdoor Portraits in India",
    category: "Outdoor Portraits",
    city: "All India",
  },
  {
    title: "Model Portfolio Photography – What to Wear & How to Prepare",
    category: "Model Shoots",
    city: "Chennai, Bangalore, Mumbai",
  },
  {
    title: "Event Photography Checklist – 10 Things to Ask Your Photographer",
    category: "Events",
    city: "All India",
  },
  {
    title: "Photo Frames vs Digital Albums – Which One Should You Buy?",
    category: "Photo Frames",
    city: "All India",
  },
  {
    title: "We Travel from Coimbatore to Any City – Here Is How It Works",
    category: "General",
    city: "All India",
  },
  {
    title: "Baby’s First Birthday Shoot – Ideas for Parents",
    category: "Baby Shoots",
    city: "Coimbatore, Bangalore",
  },
  {
    title: "Romantic Surprise Couple Shoot Ideas for Anniversaries",
    category: "Couple Shoots",
    city: "Goa, Pondicherry, Ooty",
  },
];

export default function BlogSectionClassic() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      wheelMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const featured = featuredBlogs[0];
  const sideBlogs = featuredBlogs.slice(1, 5);

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-white py-24 text-[#0A0A0A] md:py-32 font-['Poppins',sans-serif]"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-[420px] w-[420px] bg-[#D4A53A]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8%] bottom-[10%] h-[480px] w-[480px] bg-[#1E3A5F]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <span className="mb-5 inline-block border border-[#D4A53A]/30 bg-[#D4A53A]/10 px-5 py-2 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00]">
              BSPX Journal
            </span>

            <h2 className="font-['Bebas_Neue',sans-serif] text-6xl font-normal leading-[0.9] tracking-wide text-[#0A0A0A] md:text-8xl">
              Photography Tips,
              <br />
              Ideas & Stories
            </h2>
          </div>

          <p className="max-w-xl font-['Montserrat',sans-serif] text-sm font-semibold leading-relaxed text-stone-500">
            Straight from BSPX Studio. Based in Coimbatore and helpful for
            anyone in India planning a portrait, birthday, couple, baby, model,
            reel, event, or wedding shoot.
          </p>
        </div>

        {/* Main Blog Dashboard Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1.35fr_0.8fr]">
          {/* Featured Large Card */}
          <article className="group relative min-h-[640px] overflow-hidden bg-[#0A0A0A]">
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

            <div className="absolute left-7 right-7 top-7">
              <span className="bg-black/50 px-4 py-2 font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                {featured.category}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="mb-5 flex items-center gap-3 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                <span>{featured.targetLocation}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>

              <h3 className="max-w-xl font-['Montserrat',sans-serif] text-3xl font-semibold leading-tight text-white md:text-4xl">
                {featured.title}
              </h3>

              <p className="mt-5 line-clamp-3 max-w-xl text-sm leading-relaxed text-white/65">
                {featured.description}
              </p>

              <a
                href="/journal"
                className="mt-7 inline-flex items-center border border-white/20 bg-white px-6 py-3 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A0A0A] transition hover:bg-[#D4A53A]"
              >
                Read Featured
              </a>
            </div>
          </article>

          {/* Center Blog List */}
          <div className="flex flex-col gap-5">
            {sideBlogs.map((blog) => (
              <article
                key={blog.title}
                className="group grid grid-cols-[140px_1fr] gap-5 border border-stone-200 bg-white p-4 transition hover:border-[#D4A53A] hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)] md:grid-cols-[170px_1fr]"
              >
                <div className="relative h-32 overflow-hidden bg-stone-100 md:h-36">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="mb-3 flex flex-wrap items-center gap-2 font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                    <span>{blog.targetLocation}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="font-['Montserrat',sans-serif] text-base font-semibold leading-snug text-[#0A0A0A] transition group-hover:text-[#FF7A00] md:text-lg">
                    {blog.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-stone-500">
                    {blog.description}
                  </p>

                  <div className="mt-4">
                    <span className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D4A53A]">
                      {blog.category}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Promo Panel */}
          <aside className="relative overflow-hidden border border-stone-200 bg-[#f4f2ee] p-8">
            <div className="absolute right-[-90px] top-[-90px] h-56 w-56 bg-[#D4A53A]/25 blur-[80px]" />
            <div className="absolute bottom-[-100px] left-[-80px] h-60 w-60 bg-[#1E3A5F]/15 blur-[90px]" />

            <div className="relative z-10">
              <div className="mt-10">
                <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00]">
                  Modular Journal
                </p>

                <h3 className="mt-5 font-['Bebas_Neue',sans-serif] text-6xl font-normal leading-none tracking-wide text-[#0A0A0A]">
                  Learn.
                  <br />
                  Plan.
                  <br />
                  Shoot.
                </h3>

                <p className="mt-6 text-sm leading-relaxed text-stone-500">
                  Use BSPX Studio blog posts to plan locations, poses, outfits,
                  reels, baby shoots, birthdays, events, and wedding stories
                  before booking your shoot.
                </p>

                <a
                  href="mailto:bspxstudio@gmail.com"
                  className="mt-8 inline-flex bg-[#0A0A0A] px-7 py-4 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#FF7A00]"
                >
                  Email BSPX Studio
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* More Blog Ideas */}
        <div className="mt-24">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00]">
                More Blog Ideas
              </p>

              <h3 className="mt-4 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none tracking-wide text-[#0A0A0A] md:text-7xl">
                Write Later For
                <br />
                Ongoing SEO
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-stone-500">
              These topics help BSPX Studio build local visibility across
              Coimbatore, Bangalore, Chennai, Mumbai, Goa, Ooty, and all India
              shoot-related searches.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-stone-200 bg-stone-200 md:grid-cols-2 lg:grid-cols-4">
            {moreIdeas.map((idea, index) => (
              <article
                key={idea.title}
                className="bg-white p-7 transition hover:bg-[#f8f4ec]"
              >
                <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4A53A]">
                  Idea {String(index + 1).padStart(2, "0")}
                </p>

                <h4 className="mt-5 font-['Montserrat',sans-serif] text-lg font-semibold leading-tight text-[#0A0A0A]">
                  {idea.title}
                </h4>

                <div className="mt-6 space-y-3 border-t border-stone-200 pt-5">
                  <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-widest text-stone-400">
                    Category
                  </p>
                  <p className="text-xs text-stone-600">{idea.category}</p>

                  <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-widest text-stone-400">
                    Target City
                  </p>
                  <p className="text-xs text-stone-600">{idea.city}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-24 max-w-5xl border-t border-stone-200 pt-20 text-center">
          <p className="mb-5 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-[0.25em] text-[#FF7A00]">
            Planning a shoot in Coimbatore or anywhere in India?
          </p>

          <h3 className="font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-[0.95] tracking-wide text-[#0A0A0A] md:text-7xl">
            Read, Plan,
            <br />
            Then Book Your Shoot.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-stone-500">
            Use our photography guides to prepare better. When you are ready,
            BSPX Studio can help with portraits, birthdays, baby shoots, couple
            shoots, reels, edits, frames, and event coverage.
          </p>

          <a
            href="mailto:bspxstudio@gmail.com"
            className="mt-10 inline-flex bg-[#D4A53A] px-9 py-4 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white"
          >
            Email BSPX Studio
          </a>
        </div>
      </div>
    </section>
  );
}