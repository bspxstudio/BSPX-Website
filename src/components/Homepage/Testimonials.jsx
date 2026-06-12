import { useEffect, useMemo, useState } from "react";
import Lenis from "@studio-freight/lenis";

const testimonials = [
  {
    name: "Priya & Karthik",
    location: "Coimbatore",
    service: "Baby birthday shoot + photo frames",
    content:
      "We booked BSPX Studio for our son's first birthday shoot at home in Coimbatore. They came on time, played with our son to make him comfortable, and captured the cutest candid moments. The photos were ready in 8 days. We also ordered photo frames – they look beautiful on our wall. Highly recommend.",
    rating: "5/5",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    name: "Divya & Vikram",
    location: "Chennai — shot in Ooty",
    service: "Couple shoot + reel",
    content:
      "We are from Chennai but wanted a couple shoot in Ooty. BSPX Studio traveled from Coimbatore to Ooty for our shoot. They suggested a beautiful lake location. The photos came out so natural – not posed or fake. They also made a 30-second reel that got 10k views on Instagram. Worth every rupee.",
    rating: "5/5",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    name: "Sneha R.",
    location: "Bangalore",
    service: "Outdoor portraits",
    content:
      "I needed professional outdoor portraits for my LinkedIn and Instagram. BSPX Studio came to Bangalore from Coimbatore. They chose a nice rooftop location with sunset light. The edits were clean and natural – not overdone. Very professional and easy to work with. Will book again.",
    rating: "5/5",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    name: "Meera & Arjun",
    location: "Goa — couple from Mumbai",
    service: "Pre-wedding shoot + highlight edit",
    content:
      "Our pre-wedding shoot was in Goa. We found BSPX Studio online. They traveled from Coimbatore to Goa for 2 days of shooting. They were patient, creative, and made us laugh. The highlight edit video made our families cry happy tears. Thank you team.",
    rating: "5/5",
    image:
      "https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    name: "Lakshmi S.",
    location: "Coimbatore",
    service: "Newborn baby shoot + photo frames",
    content:
      "My baby was only 3 months old. I was nervous. But the BSPX team was so gentle and patient. They did not rush. They waited for baby to smile. The photos are now framed in our living room. Everyone who visits asks who took them. Thank you.",
    rating: "5/5",
    image:
      "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    name: "Rajesh Family",
    location: "Hyderabad",
    service: "Event photography + highlight edit",
    content:
      "We had a family get-together in Hyderabad. 50 people. BSPX Studio covered the entire 4-hour event – candid photos, group photos, and even a 2-minute highlight reel. They sent the final photos in 9 days. Very professional and affordable.",
    rating: "5/5",
    image:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    name: "Aravind M.",
    location: "Coimbatore",
    service: "Model portfolio shoot",
    content:
      "I am a beginner model. I needed a portfolio. BSPX Studio guided me on poses, outfits, and locations. They shot at 3 different outdoor spots in Coimbatore in one day. The photos helped me get my first modeling assignment. So grateful.",
    rating: "5/5",
    image:
      "https://images.pexels.com/photos/157675/fashion-model-model-female-157675.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    name: "Neha K.",
    location: "Delhi — remote editing service",
    service: "Reel and highlight edit from own footage",
    content:
      "I already had video clips from my phone from my birthday party. I sent them to BSPX Studio. They edited a beautiful 45-second reel and a 3-minute highlight video with music. I did not even meet them. Everything was done over email. Fast and high quality.",
    rating: "5/5",
    image:
      "https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const stats = [
  { value: "4.9+", label: "Average Rating" },
  { value: "15+", label: "Cities Served" },
  { value: "200+", label: "Happy Clients" },
  { value: "100+", label: "Reels Delivered" },
  { value: "50+", label: "Frames Shipped" },
];

const trustBadges = [
  "100% client satisfaction or we re-edit for free",
  "On-time arrival – everywhere in India",
  "No hidden charges – price agreed before shoot",
  "Safe & patient for baby shoots",
  "Fast delivery – 7 to 10 days",
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

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

    return () => lenis.destroy();
  }, []);

  const activeReview = testimonials[activeIndex];

  const visibleThumbs = useMemo(() => {
    return testimonials.filter((_, index) => index !== activeIndex).slice(0, 4);
  }, [activeIndex]);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white py-24 text-[#0A0A0A] md:py-32 font-['Poppins',sans-serif]"
    >
      {/* Ambient Layer */}
      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-[420px] w-[420px] bg-[#D4A53A]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8%] bottom-[10%] h-[480px] w-[480px] bg-[#1E3A5F]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <span className="mb-5 inline-block border border-[#D4A53A]/30 bg-[#D4A53A]/10 px-5 py-2 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00]">
              BSPX Reviews
            </span>

            <h2 className="font-['Bebas_Neue',sans-serif] text-6xl font-normal leading-[0.9] tracking-wide text-[#0A0A0A] md:text-8xl">
              What Our
              <br />
              Clients Say
            </h2>
          </div>

          <p className="max-w-2xl font-['Montserrat',sans-serif] text-sm font-semibold leading-relaxed text-stone-500">
            Real reviews from real people. Based in Coimbatore and serving
            clients all over India for birthdays, baby shoots, couple shoots,
            portraits, weddings, reels, events, and photo frames.
          </p>
        </div>

        {/* Editorial Review Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[90px_1.05fr_1.35fr] lg:items-stretch">
          {/* Vertical Label */}
          <div className="hidden border-r border-stone-200 lg:flex lg:items-center lg:justify-center">
            <p className="-rotate-90 font-['Montserrat',sans-serif] text-4xl font-semibold tracking-tight text-stone-800">
              Reviews
            </p>
          </div>

          {/* Main Image */}
          <div className="relative min-h-[620px] overflow-hidden bg-stone-100">
            <img
              src={activeReview.image}
              alt={activeReview.name}
              className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <span className="bg-white px-4 py-2 font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.22em] text-[#0A0A0A]">
                {activeReview.service}
              </span>
            </div>
          </div>

          {/* Review Content */}
          <div className="flex flex-col justify-between">
            <div className="border border-stone-200 bg-white p-8 md:p-12">
              <p className="font-['Montserrat',sans-serif] text-3xl font-semibold text-stone-900 md:text-5xl">
                #{activeIndex + 1}
              </p>

              <h3 className="mt-6 font-['Montserrat',sans-serif] text-3xl font-semibold uppercase leading-tight tracking-tight text-[#0A0A0A] md:text-5xl">
                {activeReview.name}
              </h3>

              <p className="mt-3 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.24em] text-[#FF7A00]">
                {activeReview.location}
              </p>

              <p className="mt-8 max-w-3xl text-base leading-relaxed text-stone-600 md:text-lg">
                “{activeReview.content}”
              </p>

              <div className="mt-8 grid grid-cols-1 gap-px bg-stone-200 sm:grid-cols-3">
                <div className="bg-[#f4f2ee] p-5">
                  <p className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-widest text-stone-400">
                    Rating
                  </p>
                  <p className="mt-2 font-['Montserrat',sans-serif] text-xl font-semibold text-[#D4A53A]">
                    {activeReview.rating}
                  </p>
                </div>

                <div className="bg-[#f4f2ee] p-5">
                  <p className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-widest text-stone-400">
                    Service
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug text-stone-800">
                    {activeReview.service}
                  </p>
                </div>

                <div className="bg-[#f4f2ee] p-5">
                  <p className="font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-widest text-stone-400">
                    Delivery
                  </p>
                  <p className="mt-2 text-sm font-semibold text-stone-800">
                    7–10 Days
                  </p>
                </div>
              </div>
            </div>

            {/* Thumbnail Selector */}
            <div className="mt-8 grid grid-cols-4 gap-5">
              {visibleThumbs.map((item) => {
                const originalIndex = testimonials.findIndex(
                  (review) => review.name === item.name
                );

                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveIndex(originalIndex)}
                    className="group relative h-32 overflow-hidden bg-stone-100 md:h-40"
                    aria-label={`View review by ${item.name}`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-px bg-stone-200 md:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#f4f2ee] p-8 text-center">
              <p className="font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none tracking-wide text-[#FF7A00] md:text-7xl">
                {stat.value}
              </p>
              <p className="mt-3 font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-widest text-stone-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 border border-stone-200 bg-white p-8 md:p-10">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00]">
                Trust Badges
              </p>

              <h3 className="mt-4 font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none tracking-wide text-[#0A0A0A] md:text-7xl">
                Clear Promises.
                <br />
                Better Experience.
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-stone-500">
              BSPX Studio is rated 4.9 stars by clients in Coimbatore, Chennai,
              Bangalore, Hyderabad, Mumbai, Delhi, Goa, and other cities across
              India.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-stone-200 md:grid-cols-5">
            {trustBadges.map((badge) => (
              <div key={badge} className="bg-[#f4f2ee] p-6">
                <p className="text-sm font-semibold leading-relaxed text-stone-700">
                  {badge}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews + Video Reviews */}
        <div className="mt-16 grid grid-cols-1 gap-px bg-stone-200 lg:grid-cols-2">
          <div className="bg-white p-8 md:p-10">
            <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00]">
              Google Reviews
            </p>

            <h3 className="mt-4 font-['Montserrat',sans-serif] text-2xl font-semibold leading-tight text-[#0A0A0A]">
              See our Google Reviews
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-stone-500">
              We are a new brand, but our clients love us. Search “BSPX Studio
              Coimbatore” on Google to read our latest reviews. Better yet –
              book a shoot and leave your own review. Email us at
              bspxstudio@gmail.com.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10">
            <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00]">
              Video Reviews
            </p>

            <h3 className="mt-4 font-['Montserrat',sans-serif] text-2xl font-semibold leading-tight text-[#0A0A0A]">
              Watch Client Testimonials — Coming Soon
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-stone-500">
              We are recording short video reviews from our happy clients across
              India. Check back soon or follow us on Instagram. Want to give a
              video review after your shoot? We will give you a small discount
              on your next booking.
            </p>
          </div>
        </div>

        {/* Hidden SEO / GEO / AEO Content */}
        <div className="sr-only">
          BSPX Studio is rated 4.9 stars by clients in Coimbatore, Chennai,
          Bangalore, Hyderabad, Mumbai, Delhi, Goa, and other cities across
          India. BSPX Studio provides birthday shoots, baby shoots, couple
          shoots, outdoor portraits, model shoots, event photography,
          pre-wedding shoots, post-wedding shoots, reels, highlight edits, and
          photo frames across India.
        </div>

        {/* CTA */}
        <div className="mx-auto mt-24 max-w-5xl border-t border-stone-200 pt-20 text-center">
          <p className="mb-5 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-[0.25em] text-[#FF7A00]">
            Happy with our service? Tell the world.
          </p>

          <h3 className="font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-[0.95] tracking-wide text-[#0A0A0A] md:text-7xl">
            Send Your Review
            <br />
            To BSPX Studio.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-stone-500">
            After your shoot, if you love your photos and reels, please email us
            a short review. We will feature it here with your name and city. Your
            review helps other families across India find us.
          </p>

          <a
            href="mailto:bspxstudio@gmail.com"
            className="mt-10 inline-flex bg-[#D4A53A] px-9 py-4 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white"
          >
            Email your review to bspxstudio@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}