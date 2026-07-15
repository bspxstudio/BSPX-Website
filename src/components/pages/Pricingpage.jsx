import React from "react";
import { Helmet } from "react-helmet";
import {
  CheckCircle2,
  ArrowRight,
  Mail,
  Star,
  Info,
  Film,
  Image as ImageIcon
} from "lucide-react";

export default function PricingPage() {
  const packages = [
    {
      name: "The Essential",
      subtitle: "Portraits & Mini Shoots",
      price: "Custom",
      description: "Perfect for couple shoots, birthdays, and baby portraits.",
      features: [
        "Up to 3 Hours of Coverage",
        "1 Location (Within Coimbatore)",
        "50+ Professionally Retouched Photos",
        "1 Cinematic Highlight Reel (Vertical)",
        "Private Online Delivery Gallery",
      ],
      popular: false,
    },
    {
      name: "The Signature",
      subtitle: "Pre-Weddings & Half-Day Events",
      price: "Custom",
      description: "Our most booked package for engaging, story-driven moments.",
      features: [
        "Up to 6 Hours of Coverage",
        "Multiple Locations / Outfit Changes",
        "150+ Professionally Retouched Photos",
        "3 Cinematic Reels (Trending Audio)",
        "1 Premium Printed Photo Frame (12x18)",
        "Complete RAW Unedited JPEGs",
      ],
      popular: true,
    },
    {
      name: "The Legacy",
      subtitle: "Full Weddings & Grand Events",
      price: "Custom",
      description: "Complete, uncompromising coverage of your most important day.",
      features: [
        "Full Day Coverage (Traditional & Candid)",
        "Two Lead Photographers & Videographer",
        "Unlimited Retouched High-Res Photos",
        "Cinematic Wedding Teaser & Full Video",
        "Premium Handcrafted Lay-flat Album",
        "Drone/Aerial Coverage (Location Permitting)",
      ],
      popular: false,
    },
  ];

  const addons = [
    { name: "Premium Photo Album", desc: "Handcrafted 40-page lay-flat photobook", icon: BookOpenIcon },
    { name: "Extra Hour of Coverage", desc: "Keep the cameras rolling longer", icon: ClockIcon },
    { name: "Cinematic Drone", desc: "Aerial shots for weddings and outdoor events", icon: PlaneIcon },
    { name: "Additional Reels", desc: "Extra vertical edits for Instagram/YouTube", icon: Film },
    { name: "Framed Wall Prints", desc: "Museum-quality prints in custom frames", icon: ImageIcon },
  ];

  const policies = [
    {
      title: "Payment Terms",
      desc: "A 50% retainer secures your date. The remaining 50% is due on the day of the shoot before cameras roll."
    },
    {
      title: "Travel & Accommodation",
      desc: "Based in Coimbatore. For shoots across India, exact travel and basic accommodation costs are billed at actuals."
    },
    {
      title: "Delivery Timeline",
      desc: "You will receive your digital gallery and reels within 7 to 10 days. Printed albums and frames take 2-3 weeks."
    },
    {
      title: "RAW Files",
      desc: "We provide high-res JPEG raw files upon request. Source RAW files (.ARW) require a prior discussion."
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Investment & Pricing | BSPX Studio",
    "description": "Transparent pricing for premium photography, weddings, and reels by BSPX Studio in Coimbatore.",
    "url": "https://yourdomain.com/pricing"
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] font-['Montserrat',sans-serif] text-white overflow-hidden">
      <Helmet>
        <title>Investment & Pricing | BSPX Studio</title>
        <meta name="description" content="Clear, transparent photography packages for weddings, portraits, and events. BSPX Studio delivers premium quality without hidden fees." />
        <link rel="canonical" href="https://yourdomain.com/pricing" />
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      </Helmet>

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#D4A53A]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#1E3A5F]/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1700px] px-6 pt-32 pb-20 md:px-12 lg:px-20 lg:pt-40">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-20 flex flex-col items-center text-center lg:mb-28">
          <p className="mb-6 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A53A]">
            The Investment
          </p>
          <h1 className="font-['Cormorant_Garamond',serif] text-6xl leading-[1.05] text-white md:text-8xl mb-6">
            Transparent Pricing.<br />
            <span className="italic text-[#D4A53A]">Zero Surprises.</span>
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-white/60">
            We believe in honest communication and uncompromising quality. Our packages are designed to give you clarity, so you know exactly what you are investing in before we even pick up a camera.
          </p>
        </div>

        {/* --- PRICING TIERS --- */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8 mb-32">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular 
                  ? "border border-[#D4A53A]/50 bg-gradient-to-b from-[#D4A53A]/10 to-[#111111] shadow-[0_30px_60px_rgba(212,165,58,0.1)]" 
                  : "border border-white/10 bg-[#111111]/80 backdrop-blur-xl"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#D4A53A] px-4 py-1.5 font-['Montserrat',sans-serif] text-[9px] font-black uppercase tracking-widest text-[#0A0A0A] shadow-lg flex items-center gap-1.5">
                  <Star className="h-3 w-3 fill-current" /> Most Booked
                </div>
              )}

              <div className="mb-8 border-b border-white/10 pb-8 text-center">
                <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6">{pkg.subtitle}</p>
                <div className="font-['Montserrat',sans-serif] text-4xl font-black text-[#D4A53A] tracking-tight">
                  {pkg.price}
                </div>
                <p className="mt-4 text-xs text-white/60 min-h-[40px] flex items-center justify-center">
                  {pkg.description}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A53A]" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className={`mt-10 w-full rounded-full py-4 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-widest transition-all ${
                  pkg.popular
                    ? "bg-[#D4A53A] text-[#0A0A0A] hover:bg-[#FF7A00] hover:text-white"
                    : "border border-white/20 bg-transparent text-white hover:border-[#D4A53A] hover:text-[#D4A53A]"
                }`}
              >
                Request Quote
              </button>
            </div>
          ))}
        </div>

        {/* --- A LA CARTE / ADD ONS --- */}
        <div className="mb-32 rounded-[2rem] border border-white/10 bg-[#111111]/40 p-8 md:p-16 backdrop-blur-xl">
          <div className="mb-12 text-center">
            <h3 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl text-white mb-4">A La Carte Upgrades</h3>
            <p className="text-sm text-white/50">Enhance your package with these premium additions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <div key={index} className="flex items-start gap-4 rounded-2xl bg-white/5 p-6 border border-white/5 hover:border-[#D4A53A]/30 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D4A53A]/10 text-[#D4A53A]">
                  <addon.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-['Montserrat',sans-serif] text-xs font-bold uppercase tracking-wider text-white mb-2">{addon.name}</h4>
                  <p className="text-xs leading-relaxed text-white/50">{addon.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- POLICIES / FINE PRINT --- */}
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center flex flex-col items-center">
            <Info className="h-6 w-6 text-[#D4A53A] mb-4" />
            <h3 className="font-['Cormorant_Garamond',serif] text-4xl text-white">The Fine Print</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <div key={index} className="border-l border-[#D4A53A]/30 pl-6">
                <h4 className="font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-widest text-white mb-3">
                  {policy.title}
                </h4>
                <p className="text-sm leading-relaxed text-white/60">
                  {policy.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- CTA SECTION --- */}
        <div className="mx-auto mt-32 border-t border-white/10 pt-20 text-center">
          <p className="mb-5 font-['Montserrat',sans-serif] text-xs font-extrabold uppercase tracking-[0.25em] text-[#D4A53A]">
            Have a custom requirement?
          </p>
          <h3 className="mb-10 font-['Cormorant_Garamond',serif] text-5xl italic text-white sm:text-7xl">
            Let's tailor a package for you.
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

// Icon fallbacks for the addons section
function BookOpenIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}
function ClockIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
function PlaneIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.3 2.6c-.2.4.1.9.6 1l7.3 2.5-4.1 4.1-3.1-.8c-.4-.1-.8.2-1 .6l-.8 1.6c-.2.4 0 .9.4 1.1l4.4 2.2 2.2 4.4c.2.4.7.6 1.1.4l1.6-.8c.4-.2.7-.6.6-1l-.8-3.1 4.1-4.1 2.5 7.3c.1.5.6.8 1 .6l2.6-1.3c.5-.2.8-.6.7-1.1z"/>
    </svg>
  );
}