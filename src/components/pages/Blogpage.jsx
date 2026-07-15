import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  Mail,
  Calendar,
  Clock,
  ChevronRight,
  BookOpen
} from "lucide-react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Weddings", "Tips & Guides", "Behind the Scenes", "Gear"];

  // Mock Blog Data
  const featuredPost = {
    id: 1,
    title: "The Ultimate Guide to Pre-Wedding Shoots in South India",
    excerpt: "From the misty hills of Ooty to the heritage streets of Pondicherry, discover the most breathtaking locations and styling tips for your cinematic pre-wedding story.",
    category: "Tips & Guides",
    date: "July 12, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1200&auto=format&fit=crop",
  };

  const blogPosts = [
    {
      id: 2,
      title: "5 Secrets to Natural & Candid Wedding Photos",
      excerpt: "Feeling camera shy? Here is how our team helps you relax so we can capture those raw, unscripted moments that matter most.",
      category: "Weddings",
      date: "June 28, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "A Royal Destination Wedding in Udaipur",
      excerpt: "Step inside a magical three-day celebration filled with grand architecture, vibrant sangeet nights, and cinematic portrait sessions.",
      category: "Weddings",
      date: "June 15, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "What's in Our Camera Bag: 2026 Edition",
      excerpt: "A deep dive into the exact Sony Alpha bodies, prime lenses, and DJI drones we use to achieve the signature BSPX Studio look.",
      category: "Gear",
      date: "May 30, 2026",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "How to Prepare Your Newborn for a Photo Shoot",
      excerpt: "Timing, temperature, and patience: everything parents need to know to ensure a smooth and beautiful baby photography session.",
      category: "Tips & Guides",
      date: "May 12, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Why Cinematic Reels Are the New Wedding Essential",
      excerpt: "Move over, traditional long-form videos. Here is why short, emotionally-driven cinematic reels are dominating modern weddings.",
      category: "Behind the Scenes",
      date: "April 22, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Mastering Golden Hour Lighting",
      excerpt: "Why we insist on scheduling your outdoor couple shoots during the fleeting magic of sunrise or sunset.",
      category: "Behind the Scenes",
      date: "April 05, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "BSPX Studio Journal",
    "description": "Photography tips, real wedding stories, and behind-the-scenes insights from BSPX Studio.",
    "url": "https://yourdomain.com/blog",
    "publisher": {
      "@type": "PhotographyBusiness",
      "name": "BSPX Studio"
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] font-['Montserrat',sans-serif] text-white">
      <Helmet>
        <title>The Studio Journal | BSPX Studio Blog</title>
        <meta name="description" content="Read our latest photography tips, real wedding stories, and behind-the-scenes insights. BSPX Studio shares expert advice for your perfect shoot." />
        <link rel="canonical" href="https://yourdomain.com/blog" />
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      </Helmet>

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-[#D4A53A]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[50vw] h-[50vw] bg-[#1E3A5F]/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1700px] px-6 pt-32 pb-20 md:px-12 lg:px-20 lg:pt-40">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <p className="mb-6 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A53A]">
            Stories & Insights
          </p>
          <h1 className="font-['Cormorant_Garamond',serif] text-6xl leading-[1.05] text-white md:text-8xl mb-6">
            The Studio <span className="italic text-[#D4A53A]">Journal.</span>
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-white/60">
            Real love stories, expert styling tips, and a behind-the-scenes look at how we craft our cinematic imagery. Welcome to our creative diary.
          </p>
        </div>

        {/* --- FEATURED POST (Only show on 'All' category) --- */}
        {activeCategory === "All" && (
          <div className="mb-20 group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] transition-all hover:border-[#D4A53A]/30">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10 transition-colors duration-500 group-hover:bg-transparent" />
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 z-20 rounded-full bg-[#D4A53A] px-4 py-1.5 font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-widest text-[#0A0A0A] shadow-lg flex items-center gap-2">
                  <BookOpen className="h-3 w-3" /> Featured Read
                </div>
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 relative z-20 backdrop-blur-xl bg-gradient-to-r from-[#111111] to-[#111111]/90">
                <div className="flex items-center gap-4 mb-6">
                  <p className="font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4A53A]">
                    {featuredPost.category}
                  </p>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <p className="flex items-center gap-2 text-xs text-white/50">
                    <Calendar className="h-3 w-3" /> {featuredPost.date}
                  </p>
                </div>
                
                <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl text-white mb-6 leading-tight">
                  {featuredPost.title}
                </h2>
                
                <p className="text-sm leading-relaxed text-white/60 mb-10">
                  {featuredPost.excerpt}
                </p>
                
                <button className="inline-flex w-fit items-center gap-3 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.2em] text-white transition-colors hover:text-[#D4A53A]">
                  Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- FILTER BAR --- */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#D4A53A] text-[#0A0A0A] shadow-[0_5px_20px_rgba(212,165,58,0.3)]"
                  : "border border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/80 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#D4A53A]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10 transition-colors duration-500 group-hover:bg-transparent" />
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4A53A] border border-white/10">
                  {post.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4 text-xs text-white/40">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
                
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#D4A53A] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-white/60 mb-8 flex-1">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center gap-2 font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-[0.2em] text-white transition-colors group-hover:text-[#D4A53A]">
                  Read More <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State Just In Case */}
        {filteredPosts.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="font-['Cormorant_Garamond',serif] text-3xl text-white mb-2">No articles found</h3>
            <p className="text-sm text-white/50">Check back soon for more updates in this category.</p>
          </div>
        )}

        {/* --- CTA SECTION --- */}
        <div className="mx-auto mt-32 border-t border-white/10 pt-20 text-center">
          <p className="mb-5 font-['Montserrat',sans-serif] text-xs font-extrabold uppercase tracking-[0.25em] text-[#D4A53A]">
            Inspired by our stories?
          </p>
          <h3 className="mb-10 font-['Cormorant_Garamond',serif] text-5xl italic text-white sm:text-7xl">
            Let's capture yours.
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-3 rounded-full bg-[#D4A53A] px-9 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-wider text-[#0A0A0A] shadow-[0_10px_40px_rgba(212,165,58,0.2)] transition hover:bg-[#FF7A00] hover:text-white active:scale-95"
            >
              Book Your Shoot <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="mailto:bspxstudio@gmail.com"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-9 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-wider text-white shadow-sm transition hover:border-[#D4A53A] hover:text-[#D4A53A] active:scale-95"
            >
              Email BSPX Studio <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}