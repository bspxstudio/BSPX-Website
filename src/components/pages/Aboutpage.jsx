import React from "react";
import { Helmet } from "react-helmet";
import HTMLFlipBook from "react-pageflip";
import {
  Camera,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Video,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  Star,
  Play,
  CheckCircle2,
  ChevronDown,
  Award,
  Aperture,
  Calendar,
  Zap,
  MessageSquare
} from "lucide-react";

import AboutImage from "../../assests/gallery/gallery2.webp";

// --- Custom Component for the 3D Book Pages ---
const BookPage = React.forwardRef((props, ref) => {
  return (
    <div
      className="relative h-full w-full overflow-hidden bg-[#F7F7F5] shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]"
      ref={ref}
    >
      {/* Paper curvature & Spine shadow for realism */}
      <div 
        className={`absolute inset-y-0 ${
          props.isLeft 
            ? 'right-0 w-16 bg-gradient-to-l from-black/25 via-black/5 to-transparent' 
            : 'left-0 w-16 bg-gradient-to-r from-black/25 via-black/5 to-transparent'
        } z-20 pointer-events-none mix-blend-multiply`} 
      />
      
      {/* Subtle paper texture overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply" />
      
      {props.children}
    </div>
  );
});
BookPage.displayName = 'BookPage';

export default function AboutPage() {
  const coreValues = [
    {
      icon: MapPin,
      title: "We Travel Everywhere",
      desc: "Based in Coimbatore, but we shoot across India.",
    },
    {
      icon: Camera,
      title: "All Services Under One Roof",
      desc: "Photos, reels, edits, and frames. No running to different people.",
    },
    {
      icon: ShieldCheck,
      title: "Clear Pricing",
      desc: "You know the cost before we start. No last-minute surprises.",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      desc: "Get your edited photos and reels within 7 to 10 days.",
    },
  ];

  const brandFacts = [
    { icon: MapPin, title: "Office Location", desc: "Coimbatore, Tamil Nadu" },
    { icon: ShieldCheck, title: "Service Area", desc: "All over India" },
    { icon: Camera, title: "Specialties", desc: "Outdoor, birthday, couple, baby, models, events" },
    { icon: Video, title: "Also Offer", desc: "Reels, highlight edits, photo frames" },
    { icon: Mail, title: "Contact", desc: "bspxstudio@gmail.com" },
  ];

  const stats = [
    { number: "10+", label: "Shoots Completed" },
    { number: "5+", label: "Cities Travelled" },
    { number: "7", label: "Days Fast Delivery" },
    { number: "1M", label: "Shutter Clicks" },
  ];

  const processSteps = [
    { step: "01", title: "Discovery", desc: "We discuss your vision, vibe, and requirements.", icon: MessageSquare },
    { step: "02", title: "Planning", desc: "Locking the dates, locations, and styling.", icon: Calendar },
    { step: "03", title: "The Shoot", desc: "Executing the perfect frames and cinematic reels.", icon: Aperture },
    { step: "04", title: "Delivery", desc: "Crisp edits and frames delivered to your door.", icon: Zap },
  ];

  const signatureStyles = [
    { title: "Cinematic Portraits", desc: "Moody, dramatic, and story-driven." },
    { title: "Candid Moments", desc: "Unposed, raw, and completely authentic." },
    { title: "Dynamic Reels", desc: "Trending transitions with premium color grading." },
    { title: "Studio Editorials", desc: "High-fashion lighting for personal portfolios." },
  ];

  const gearList = [
    "Sony Alpha Full-Frame Series",
    "DJI Ronin Gimbals",
    "DJI Mavic Cinematic Drones",
    "Godox Studio Lighting",
    "Prime Portrait Lenses (85mm, 50mm, 35mm)",
  ];

  const testimonials = [
    { name: "Arjun & Sneha", type: "Couple Shoot", review: "BSPX made us feel so comfortable. The reels went viral among our friends!" },
    { name: "Priya Menon", type: "Baby Shoot", review: "The patience they had with my 1-year-old was amazing. The photo frame is beautiful." },
    { name: "Karthik R.", type: "Event Coverage", review: "Clear pricing, no hidden charges, and we got the photos on day 6. Highly recommended." },
  ];

  const awards = [
    "Featured in Top Coimbatore Photographers 2024",
    "Over 10M+ Organic Views on Client Reels",
    "5-Star Rated on Google Business",
  ];

  const faqs = [
    { q: "Do you charge extra for travel outside Coimbatore?", a: "Travel and basic accommodation are charged at actuals. We discuss this transparently before booking." },
    { q: "Do we get all the RAW unedited photos?", a: "Yes, we provide all raw JPEGs. RAW formats (.ARW) can be provided upon prior request." },
    { q: "How do we select photos for editing?", a: "We share a secure online gallery link where you can easily heart/select your favorite frames." },
    { q: "Do you require an advance payment?", a: "Yes, a 50% advance secures your date. The remaining is due on the day of the shoot." },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "PhotographyBusiness",
    "name": "BSPX Studio",
    "image": AboutImage,
    "email": "bspxstudio@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "description": "Professional photography studio based in Coimbatore, serving all of India. Specializing in outdoor portraits, events, reels, and wedding photography.",
    "priceRange": "$$",
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Helmet>
        <title>About BSPX Studio | Premium Photography in Coimbatore & India</title>
        <meta name="description" content="BSPX Studio offers premium photography, reels, and editing services. Based in Coimbatore, we travel across India for weddings, events, and portraits." />
        <meta name="keywords" content="BSPX Studio, Coimbatore photographers, Indian wedding photography, event photography, baby shoots, premium albums" />
        <link rel="canonical" href="https://yourdomain.com/about" />
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      </Helmet>

      <section
        id="about"
        className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] text-white font-['Montserrat',sans-serif]"
      >
        {/* --- HERO SECTION --- */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          <div className="relative bg-[#1C1C1C]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(212,165,58,0.16),transparent_34%)]" />
            <div className="absolute inset-0 bg-black/45" />
          </div>
          <div className="relative bg-[#1E3A5F]">
            <div className="absolute inset-0 bg-[#1f9d63]/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,122,0,0.20),transparent_34%)]" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
          <h2 className="select-none font-['Cormorant_Garamond',serif] text-[8rem] font-bold tracking-widest text-white/[0.04] md:text-[14rem] lg:text-[20rem]">
            BSPX
          </h2>
        </div>

        <div className="relative z-10 min-h-screen px-6 py-10 md:px-12 lg:px-20">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-['Cormorant_Garamond',serif] text-3xl font-bold tracking-widest text-white">BSPX</p>
              <p className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.35em] text-[#D4A53A]">Studio</p>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-white/25 px-6 py-3 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.25em] text-white transition hover:border-[#D4A53A] hover:bg-[#D4A53A] hover:text-[#0A0A0A]"
            >
              Booking
            </button>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 hidden h-[82vh] w-[42vw] -translate-x-1/2 lg:block">
            <img
              src={AboutImage}
              alt="BSPX Studio photography showcase"
              loading="lazy"
              className="h-full w-full object-cover object-center grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          </div>

          <div className="grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="relative z-30 max-w-xl pt-20 lg:pt-0">
              <p className="mb-5 font-['Montserrat',sans-serif] text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A53A]">
                About BSPX Studio
              </p>
              <h1 className="font-['Cormorant_Garamond',serif] text-6xl leading-[1.05] text-white md:text-7xl lg:text-8xl">
                We Are<br />
                <span className="italic text-[#D4A53A]">BSPX Studio.</span>
              </h1>
              <p className="mt-6 font-['Montserrat',sans-serif] text-lg font-semibold leading-snug text-white/90 md:text-xl">
                Born in Coimbatore, serving all of India.
              </p>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/60">
                BSPX Studio started with a simple idea: everyone deserves beautiful photos, no matter where they live. We don&apos;t believe in boundaries. Whether you are in Chennai, Mumbai, Bangalore, Kerala, Delhi, or a small town, we will come to you.
              </p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/60">
                Our team loves capturing real smiles, honest emotions, and special moments — from a baby&apos;s first birthday to a couple&apos;s first look.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-3 bg-[#D4A53A] px-8 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-[0.22em] text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white"
                >
                  Book Your Shoot <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="mailto:bspxstudio@gmail.com"
                  className="inline-flex items-center gap-3 border border-white/15 bg-white/5 px-8 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-[0.22em] text-white transition hover:border-[#D4A53A] hover:text-[#D4A53A]"
                >
                  Email Studio <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative z-30 ml-auto max-w-md lg:pr-8">
              <div className="mb-12 flex items-start justify-between">
                <p className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-white">
                  03<span className="text-sm italic text-white/50">/05</span>
                </p>
                <div className="h-20 w-px bg-white/25" />
              </div>
              <p className="mb-6 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.3em] text-white/55">
                What We Do
              </p>
              <h2 className="font-['Cormorant_Garamond',serif] text-5xl leading-[1.05] text-white md:text-6xl">
                We Don&apos;t Just<br />Click Photos.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-white/70">
                We create outdoor portraits, birthday shoots, couple shoots, baby shoots, and event coverage. We also make trending reels, highlight edits, and beautiful photo frames.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                Plus, we handle pre-wedding, post-wedding, and model shoots. One call to{" "}
                <a href="mailto:bspxstudio@gmail.com" className="font-bold text-[#D4A53A] transition hover:text-white">bspxstudio@gmail.com</a>{" "}
                and we take care of everything — photography, video edits, and printing.
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-6 right-6 z-40 flex items-center justify-between md:left-12 md:right-12 lg:left-20 lg:right-20">
            <div className="flex items-center gap-4 text-white/55">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition hover:text-[#D4A53A]"><Facebook className="h-4 w-4" /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-[#D4A53A]"><Instagram className="h-4 w-4" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-[#D4A53A]"><Linkedin className="h-4 w-4" /></a>
            </div>
            <button
              onClick={() => scrollToSection("about-details")}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#0A0A0A]/40 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-widest text-[#D4A53A] backdrop-blur-md transition hover:border-[#D4A53A]"
            >
              Scroll
            </button>
          </div>
        </div>

        {/* --- MEGA DETAILS SECTION --- */}
        <div id="about-details" className="relative z-20 bg-[#0A0A0A] px-6 py-28 md:px-12 lg:px-20">
          <div className="mx-auto max-w-[1700px] space-y-32">
            
            {/* 1. IMPACT STATS */}
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-[#1C1C1C] p-8 text-center sm:p-12">
                  <h4 className="font-['Cormorant_Garamond',serif] text-5xl font-bold text-[#D4A53A] md:text-6xl">{stat.number}</h4>
                  <p className="mt-3 font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-widest text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* 2. WHY CHOOSE US */}
            <div>
              <p className="mb-4 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A53A]">Why People Choose Us</p>
              <h3 className="mb-12 font-['Cormorant_Garamond',serif] text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
                Simple, Clear,<br />Reliable Service.
              </h3>
              <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {coreValues.map((val, index) => (
                  <div key={index} className="group bg-[#1C1C1C] p-10 transition hover:bg-[#111111]">
                    <div className="mb-8 inline-flex bg-[#D4A53A] p-4 text-[#0A0A0A] transition group-hover:bg-[#FF7A00] group-hover:text-white">
                      <val.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-['Montserrat',sans-serif] text-base font-bold text-white">{val.title}</h4>
                    <p className="mt-4 text-xs leading-relaxed text-white/50">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. OUR PROCESS */}
            <div>
              <p className="mb-4 text-center font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A53A]">The Workflow</p>
              <h3 className="mb-16 text-center font-['Cormorant_Garamond',serif] text-5xl text-white md:text-6xl">How We Bring Ideas To Life</h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                {processSteps.map((step, i) => (
                  <div key={i} className="relative border-t border-white/10 pt-8">
                    <span className="absolute -top-6 left-0 bg-[#0A0A0A] pr-4 font-['Cormorant_Garamond',serif] text-4xl italic text-white/20">{step.step}</span>
                    <step.icon className="mb-4 mt-2 h-6 w-6 text-[#D4A53A]" />
                    <h4 className="mb-2 font-['Montserrat',sans-serif] text-sm font-bold text-white">{step.title}</h4>
                    <p className="text-xs text-white/50">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. SIGNATURE STYLES */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {signatureStyles.map((style, i) => (
                <div key={i} className="group relative h-80 overflow-hidden border border-white/10 bg-[#1C1C1C] p-8 transition-colors hover:border-[#D4A53A]/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative z-10 flex h-full flex-col justify-end">
                    <h4 className="mb-2 font-['Cormorant_Garamond',serif] text-3xl font-bold text-white">{style.title}</h4>
                    <p className="translate-y-4 text-xs text-white/60 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">{style.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 5. CINEMATIC VIDEO TEASER */}
            <div className="relative flex h-[50vh] items-center justify-center overflow-hidden border border-white/10 bg-[#1C1C1C]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,165,58,0.1),transparent)]" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <button className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white shadow-xl backdrop-blur-sm transition hover:scale-110 hover:border-[#D4A53A] hover:text-[#D4A53A]">
                  <Play className="ml-1 h-8 w-8" />
                </button>
                <h3 className="font-['Cormorant_Garamond',serif] text-4xl text-white md:text-6xl">Watch Our Showreel</h3>
                <p className="mt-4 font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4A53A]">Cinematic Excellence</p>
              </div>
            </div>

            {/* 6. EXTENDED 10-PAGE ALBUM FLIPBOOK SECTION */}
            <div className="border-y border-white/10 bg-[#0A0A0A] py-32 relative">
               {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,165,58,0.05),transparent_60%)] pointer-events-none" />
              
              <div className="relative z-10">
                <p className="mb-4 text-center font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A53A]">Our Masterpieces</p>
                <h3 className="mb-6 text-center font-['Cormorant_Garamond',serif] text-5xl text-white md:text-6xl">The Editorial Album</h3>
                <p className="mb-20 text-center text-sm text-white/50 max-w-xl mx-auto">Experience our hand-crafted, lay-flat premium photo books. Drag the corners to flip through the 10-page editorial spread.</p>
                
                <div className="flex w-full items-center justify-center px-4">
                  <div className="hidden md:block">
                    <HTMLFlipBook 
                      width={480} 
                      height={650} 
                      size="fixed"
                      minWidth={315}
                      maxWidth={550}
                      minHeight={420}
                      maxHeight={750}
                      maxShadowOpacity={0.6}
                      showCover={true}
                      mobileScrollSupport={true}
                      className="mx-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)]"
                    >
                      {/* PAGE 1: Front Cover */}
                      <BookPage isLeft={false}>
                        <div className="absolute inset-0 bg-[#111] flex flex-col items-center justify-center border-8 border-[#1c1c1c] p-10 shadow-[inset_0_0_50px_rgba(0,0,0,0.9)]">
                          <div className="border border-[#D4A53A]/40 w-full h-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,165,58,0.1),transparent)]" />
                            <h4 className="relative font-['Cormorant_Garamond',serif] text-5xl font-bold text-[#D4A53A] mb-6">BSPX</h4>
                            <p className="relative font-['Montserrat',sans-serif] text-[10px] uppercase tracking-[0.4em] text-white/70">Volume 01 <br/><br/> The Premium Collection</p>
                          </div>
                        </div>
                      </BookPage>
                      
                      {/* PAGE 2: Inside Cover (Text) */}
                      <BookPage isLeft={true}>
                        <div className="h-full w-full flex items-center justify-center p-14 text-center">
                          <div className="max-w-xs">
                            <Aperture className="h-6 w-6 text-black/20 mx-auto mb-8" />
                            <h5 className="font-['Cormorant_Garamond',serif] text-4xl text-[#111] italic leading-snug mb-8">"Photography is the story I fail to put into words."</h5>
                            <p className="font-['Montserrat',sans-serif] text-[9px] uppercase tracking-widest text-[#666]">— Destin Sparks</p>
                          </div>
                        </div>
                      </BookPage>

                      {/* PAGE 3: Title Spread */}
                      <BookPage isLeft={false}>
                        <div className="h-full w-full p-12 flex flex-col justify-end pb-24 relative">
                          <p className="font-['Montserrat',sans-serif] text-[10px] uppercase tracking-[0.3em] text-[#D4A53A] mb-4">Chapter I</p>
                          <h2 className="font-['Cormorant_Garamond',serif] text-6xl text-[#111] leading-none mb-6">The<br/>Beginning</h2>
                          <div className="w-12 h-px bg-[#111]/20 mb-6" />
                          <p className="font-['Cormorant_Garamond',serif] text-lg text-[#444] italic">Capturing the raw, unfiltered moments of your most important day.</p>
                        </div>
                      </BookPage>

                      {/* PAGE 4: Full Bleed Image Left */}
                      <BookPage isLeft={true}>
                        <div className="h-full w-full bg-[#111]">
                          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop" alt="Wedding Portrait" className="h-full w-full object-cover opacity-90" />
                        </div>
                      </BookPage>

                      {/* PAGE 5: Editorial Text Right */}
                      <BookPage isLeft={false}>
                        <div className="h-full w-full p-12 pt-24">
                          <h3 className="font-['Cormorant_Garamond',serif] text-4xl text-[#111] mb-8">Timeless Elegance</h3>
                          <p className="font-['Montserrat',sans-serif] text-xs leading-loose text-[#555] text-justify mb-8">
                            Every glance, every whisper, every shared silence holds a universe of meaning. Our editorial approach ensures that your memories are preserved not just as images, but as cinematic stills drawn from the greatest story ever told—yours.
                          </p>
                          <div className="grid grid-cols-2 gap-4 mt-12">
                             <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=500&auto=format&fit=crop" alt="Details" className="w-full h-32 object-cover" />
                             <img src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=500&auto=format&fit=crop" alt="Rings" className="w-full h-32 object-cover" />
                          </div>
                        </div>
                      </BookPage>

                      {/* PAGE 6: B&W Portrait Left */}
                      <BookPage isLeft={true}>
                        <div className="h-full w-full p-8 pb-20">
                          <div className="w-full h-full border border-black/10 p-2">
                            <img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000&auto=format&fit=crop" alt="B&W Candid" className="h-full w-full object-cover grayscale contrast-125" />
                          </div>
                          <p className="absolute bottom-10 left-0 right-0 text-center font-['Montserrat',sans-serif] text-[8px] uppercase tracking-[0.2em] text-black/50">The Monochrome Series</p>
                        </div>
                      </BookPage>

                      {/* PAGE 7: Grid Layout Right */}
                      <BookPage isLeft={false}>
                        <div className="h-full w-full p-8 flex flex-col gap-4">
                          <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop" alt="Event" className="w-full h-[45%] object-cover" />
                          <div className="flex gap-4 h-[45%]">
                            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=500&auto=format&fit=crop" alt="Candid 1" className="w-1/2 h-full object-cover" />
                            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=500&auto=format&fit=crop" alt="Candid 2" className="w-1/2 h-full object-cover" />
                          </div>
                          <p className="text-center font-['Montserrat',sans-serif] text-[8px] uppercase tracking-[0.2em] text-black/50 mt-2">Unscripted Joy</p>
                        </div>
                      </BookPage>

                      {/* PAGE 8: Cinematic Portrait Left */}
                      <BookPage isLeft={true}>
                        <div className="h-full w-full bg-black">
                          <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop" alt="Golden Hour" className="h-full w-full object-cover opacity-80" />
                        </div>
                      </BookPage>

                      {/* PAGE 9: Cinematic Portrait Right / Quote */}
                      <BookPage isLeft={false}>
                        <div className="h-full w-full bg-[#111] text-white flex flex-col justify-center items-center p-12 text-center border-l border-white/10">
                          <h3 className="font-['Cormorant_Garamond',serif] text-5xl mb-6">Forever.</h3>
                          <div className="w-8 h-px bg-[#D4A53A] mb-6" />
                          <p className="font-['Montserrat',sans-serif] text-[10px] uppercase tracking-[0.3em] text-white/50">Your Legacy, Framed.</p>
                        </div>
                      </BookPage>

                      {/* PAGE 10: Back Cover */}
                      <BookPage isLeft={true}>
                        <div className="absolute inset-0 bg-[#111] flex items-center justify-center border-8 border-[#1c1c1c] shadow-[inset_0_0_50px_rgba(0,0,0,0.9)]">
                          <div className="text-center">
                            <p className="font-['Montserrat',sans-serif] text-[10px] uppercase tracking-[0.3em] text-[#D4A53A]/70 mb-4">BSPX Studio</p>
                            <p className="font-['Cormorant_Garamond',serif] text-sm text-white/30">Coimbatore, India</p>
                          </div>
                        </div>
                      </BookPage>
                    </HTMLFlipBook>
                  </div>
                  {/* Fallback for smaller screens */}
                  <div className="md:hidden text-center border border-white/10 p-10 bg-[#141414] w-full max-w-sm">
                     <Aperture className="h-10 w-10 text-[#D4A53A] mx-auto mb-4" />
                     <h4 className="font-['Cormorant_Garamond',serif] text-3xl text-white mb-2">Interactive Albums</h4>
                     <p className="font-['Montserrat',sans-serif] text-xs text-white/50 leading-relaxed">Please view on a desktop or tablet to experience our immersive 10-page 3D flipbook albums.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. TRUST PROMISE & FACTS */}
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
              <div className="bg-[#1C1C1C] p-10 md:p-14">
                <p className="mb-5 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.28em] text-[#D4A53A]">Trust Promise</p>
                <h3 className="font-['Cormorant_Garamond',serif] text-5xl leading-[1.05] text-white md:text-6xl">
                  Photos, Reels,<br />Edits, Frames —<br />One Studio
                </h3>
                <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/60">
                  BSPX Studio keeps the complete photography workflow simple. You do not need to coordinate with multiple vendors for shooting, video editing, reels, highlight edits, or photo frames. We manage the creative execution under one roof with clear communication, simple pricing, and fast delivery.
                </p>
              </div>
              <div className="bg-[#1C1C1C] p-10 md:p-14">
                <p className="mb-5 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.28em] text-[#D4A53A]">Behind The Scenes</p>
                <h3 className="font-['Cormorant_Garamond',serif] text-5xl leading-[1.05] text-white md:text-6xl">Brand Facts For<br />Visitors And AI</h3>
                <div className="mt-10 space-y-6">
                  {brandFacts.map((fact, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-[#D4A53A] text-[#0A0A0A]">
                        <fact.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-['Montserrat',sans-serif] text-xs font-bold uppercase tracking-[0.18em] text-white/40">{fact.title}</p>
                        <p className="mt-1 text-sm text-white/70">{fact.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 8. WALL OF LOVE (Testimonials) */}
            <div>
              <p className="mb-4 text-center font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A53A]">Client Stories</p>
              <h3 className="mb-12 text-center font-['Cormorant_Garamond',serif] text-5xl text-white md:text-6xl">Wall of Love</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {testimonials.map((test, i) => (
                  <div key={i} className="border border-white/10 bg-[#141414] p-8">
                    <div className="mb-6 flex gap-1 text-[#D4A53A]">
                      {[...Array(5)].map((_, idx) => <Star key={idx} className="h-4 w-4 fill-current" />)}
                    </div>
                    <p className="mb-6 text-sm italic leading-relaxed text-white/70">"{test.review}"</p>
                    <div>
                      <p className="font-['Montserrat',sans-serif] text-sm font-bold text-white">{test.name}</p>
                      <p className="text-xs text-white/40">{test.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 9. GEAR & AWARDS (Split Section) */}
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
              <div className="bg-[#1C1C1C] p-10 md:p-14">
                <p className="mb-4 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A53A]">The Arsenal</p>
                <h3 className="mb-8 font-['Cormorant_Garamond',serif] text-4xl text-white">Gear We Trust</h3>
                <ul className="space-y-4">
                  {gearList.map((gear, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2 className="h-4 w-4 text-[#D4A53A]" /> {gear}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#1C1C1C] p-10 md:p-14">
                <p className="mb-4 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A53A]">Recognitions</p>
                <h3 className="mb-8 font-['Cormorant_Garamond',serif] text-4xl text-white">Milestones</h3>
                <ul className="space-y-6">
                  {awards.map((award, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 rounded-full bg-white/5 p-2"><Award className="h-4 w-4 text-[#D4A53A]" /></div>
                      <p className="text-sm leading-relaxed text-white/80">{award}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 10. FAQ SECTION */}
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-center font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A53A]">Got Questions?</p>
              <h3 className="mb-12 text-center font-['Cormorant_Garamond',serif] text-5xl text-white md:text-6xl">Frequently Asked</h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group border border-white/10 bg-[#1C1C1C] [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-6 font-['Montserrat',sans-serif] text-sm font-bold text-white">
                      {faq.q}
                      <ChevronDown className="h-4 w-4 text-[#D4A53A] transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="border-t border-white/5 p-6 pt-2 text-sm leading-relaxed text-white/60">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* --- CTA SECTION --- */}
            <div className="mx-auto border-t border-white/10 pt-20 text-center">
              <p className="mb-5 font-['Montserrat',sans-serif] text-xs font-extrabold uppercase tracking-[0.25em] text-[#D4A53A]">
                We pack our cameras and come to you
              </p>
              <h3 className="mb-10 font-['Cormorant_Garamond',serif] text-6xl italic text-white sm:text-7xl">
                Ready To Capture Your Story?
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-3 rounded-full bg-[#D4A53A] px-9 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-wider text-[#0A0A0A] shadow-2xl transition hover:bg-[#FF7A00] hover:text-white active:scale-95"
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
        </div>
      </section>
    </main>
  );
}