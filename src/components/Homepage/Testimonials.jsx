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
  { value: "4.9+", label: "Average Rating", link: "https://g.page/r/your-google-review-link" },
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
  const [isHovering, setIsHovering] = useState(false);

  // Smooth scroll initialization
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

  // Auto-rotation
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHovering]);

  // Inject Review Schema (JSON-LD)
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BSPX Studio",
      url: "https://www.bspxstudio.com",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "45",
        bestRating: "5",
        worstRating: "1",
      },
      review: testimonials.map((t) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: t.name,
        },
        reviewBody: t.content,
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      })),
    });
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);

  const activeReview = testimonials[activeIndex];

  const visibleThumbs = useMemo(() => {
    return testimonials.filter((_, index) => index !== activeIndex).slice(0, 4);
  }, [activeIndex]);

  // Handle thumbnail click
  const handleThumbClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white py-24 text-[#0A0A0A] md:py-32 font-['Poppins',sans-serif]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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
              alt={`${activeReview.name} - ${activeReview.service} review by BSPX Studio`}
              className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
              loading="lazy"
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
                    onClick={() => handleThumbClick(originalIndex)}
                    className="group relative h-32 overflow-hidden bg-stone-100 md:h-40"
                    aria-label={`View review by ${item.name}`}
                  >
                    <img
                      src={item.image}
                      alt={`Review thumbnail for ${item.name}`}
                      className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      loading="lazy"
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
              {stat.link ? (
                <a
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:opacity-80"
                >
                  <p className="font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none tracking-wide text-[#FF7A00] md:text-7xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-widest text-stone-500">
                    {stat.label}
                  </p>
                </a>
              ) : (
                <>
                  <p className="font-['Bebas_Neue',sans-serif] text-5xl font-normal leading-none tracking-wide text-[#FF7A00] md:text-7xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-widest text-stone-500">
                    {stat.label}
                  </p>
                </>
              )}
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
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4A53A]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm font-semibold leading-relaxed text-stone-700">
                    {badge}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews + WhatsApp CTA */}
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
              book a shoot and leave your own review.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://g.page/r/your-google-review-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#D4A53A] bg-white px-6 py-3 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] transition hover:bg-[#D4A53A] hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Write a Review on Google
              </a>

              <a
                href="mailto:bspxstudio@gmail.com"
                className="inline-flex items-center gap-2 border border-stone-200 bg-white px-6 py-3 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] transition hover:bg-stone-100"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>

          {/* WhatsApp / Video Review CTA - REPLACED "Coming Soon" */}
          <div className="bg-white p-8 md:p-10">
            <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00]">
              Share Your Experience
            </p>

            <h3 className="mt-4 font-['Montserrat',sans-serif] text-2xl font-semibold leading-tight text-[#0A0A0A]">
              Submit Your Video Review
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-stone-500">
              Love your photos? Share your experience with a short video
              testimonial. We'll feature it here and give you a <strong>10% discount</strong>{" "}
              on your next shoot with us.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://wa.me/918531985733?text=Hi%20BSPX%20Studio,%20I%20want%20to%20submit%20a%20video%20review%20for%20my%20recent%20shoot."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#1DA851]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Submit via WhatsApp
              </a>

              <a
                href="mailto:bspxstudio@gmail.com?subject=Video%20Review%20Submission"
                className="inline-flex items-center gap-2 border border-stone-200 bg-white px-6 py-3 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] transition hover:bg-stone-100"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Email Your Video
              </a>
            </div>

            <div className="mt-6 rounded-lg bg-[#f4f2ee] p-4">
              <p className="text-xs text-stone-500">
                <strong>Tip:</strong> Record a 30-60 second video on your phone
                telling us about your experience. We'll professionally edit and
                feature it on our website and Instagram.
              </p>
            </div>
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

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:bspxstudio@gmail.com?subject=My%20Review%20for%20BSPX%20Studio"
              className="inline-flex bg-[#D4A53A] px-9 py-4 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] transition hover:bg-[#FF7A00] hover:text-white"
            >
              Email Your Review
            </a>

            <a
              href="https://wa.me/918531985733?text=Hi%20BSPX%20Studio,%20I%20want%20to%20share%20my%20review%20for%20my%20recent%20shoot."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-stone-300 bg-white px-9 py-4 font-['Montserrat',sans-serif] text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] transition hover:bg-stone-100"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}