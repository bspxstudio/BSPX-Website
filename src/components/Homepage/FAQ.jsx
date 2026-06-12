import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import Lenis from "@studio-freight/lenis";

const faqCategories = [
  {
    title: "General & Booking Questions",
    faqs: [
      {
        question: "Where is BSPX Studio located?",
        answer:
          "Our office is in Coimbatore, Tamil Nadu. But we provide photography services all over India — from Chennai, Bangalore, Hyderabad, and Mumbai to Delhi, Kerala, Goa, and small towns. We travel to your location.",
      },
      {
        question: "How do I book a shoot with BSPX Studio?",
        answer:
          "Very simple. Just send an email to bspxstudio@gmail.com with your city, type of shoot, preferred date, and number of people. We will reply within 24 hours with price and availability.",
      },
      {
        question: "Do you only shoot in Coimbatore?",
        answer:
          "No. We are based in Coimbatore but we shoot everywhere in India. Travel charges may apply depending on distance. Email us your city and we will tell you the exact cost.",
      },
      {
        question: "How much does a photoshoot cost?",
        answer:
          "Prices depend on the shoot type, location, duration, and extras like reels, highlight edits, or photo frames. For an exact price, email us at bspxstudio@gmail.com with your requirements. We have simple, clear pricing with no hidden fees.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "At least 7 to 10 days before your preferred date. For wedding or event shoots, book 15 to 30 days early. For weekend shoots in Coimbatore, book early because slots fill fast.",
      },
    ],
  },
  {
    title: "Shoot Day Questions",
    faqs: [
      {
        question: "How long does a photoshoot take?",
        answer:
          "Birthday shoot: 1 to 2 hours\nCouple shoot: 1 to 2 hours\nBaby shoot: 1 to 2 hours, based on the baby’s comfort\nOutdoor portraits: 1 to 2 hours\nModel shoot: 2 to 3 hours\nEvent shoot: 3 to 6 hours\nPre/post wedding shoot: 2 to 4 hours",
      },
      {
        question: "What should we wear for the shoot?",
        answer:
          "Wear comfortable clothes that make you feel confident. Solid colors usually work best. Avoid very small prints or large logos. For couple shoots, matching colors are better than identical outfits. For baby shoots, soft and simple clothes work well. If you are unsure, email us and we will guide you for free.",
      },
      {
        question: "Do you provide props, costumes, or outfits?",
        answer:
          "No, we do not provide costumes or outfits. For birthday shoots, we can suggest simple props like balloons, cakes, or banners that you can arrange yourself. We focus on natural, candid photography rather than heavy setups.",
      },
      {
        question: "Can we choose the location?",
        answer:
          "Yes. You can choose your home, a park, rooftop, farmhouse, or any outdoor location. If you are in Coimbatore and not sure where to go, we can suggest good spots. If you are in another city, we can research or follow your suggestion.",
      },
      {
        question: "What if the weather is bad on shoot day?",
        answer:
          "We will contact you one day before. If rain or extreme heat is expected, we can reschedule to another date with no extra charge, shift to an indoor location, or continue if you are comfortable. Your safety and comfort come first.",
      },
    ],
  },
  {
    title: "Photos, Videos & Delivery",
    faqs: [
      {
        question: "When do I get my edited photos?",
        answer:
          "You will receive your edited photos within 7 to 10 days after the shoot. We send a Google Drive link with high-resolution edited photos.",
      },
      {
        question: "Do you also make reels and highlight edits?",
        answer:
          "Yes. When you book, tell us if you want reels or highlight edits. We shoot short videos during your photoshoot and edit them with music and transitions. Delivery time for reels is also usually 7 to 10 days.",
      },
      {
        question: "Can I see the photos before final editing?",
        answer:
          "Yes. We send low-resolution watermarked previews for your approval. You can request one free round of changes, such as removing one photo or brightening another. After you approve, we prepare the final high-resolution files.",
      },
      {
        question: "Do you provide physical photo frames?",
        answer:
          "Yes. We print your best photos on high-quality paper and place them in beautiful frames. We ship frames to any address in India. Delivery takes 5 to 7 extra days after photo editing is complete.",
      },
      {
        question: "How many photos will I get?",
        answer:
          "A 1-hour shoot usually includes 30 to 50 edited photos. A 2-hour shoot usually includes 50 to 80 edited photos. A full event usually includes 100 to 200 edited photos. Exact numbers depend on the shoot type and candid moments captured.",
      },
    ],
  },
  {
    title: "Payment & Cancellation",
    faqs: [
      {
        question: "What is your payment process?",
        answer:
          "We take 50% advance to confirm your booking after you agree to the price and date. The remaining 50% is paid after the shoot and before final photo delivery. We accept bank transfer, GPay, PhonePe, or cash in Coimbatore.",
      },
      {
        question: "Can I cancel my shoot? Will I get a refund?",
        answer:
          "Cancel 7 or more days before the shoot: 100% refund of advance.\nCancel 3 to 6 days before the shoot: 50% refund of advance.\nCancel less than 3 days before the shoot: no refund because we block our calendar for you.\nIn case of emergency, talk to us. We try to be fair.",
      },
      {
        question: "Do you charge extra for travel?",
        answer:
          "Within Coimbatore city, there is no travel charge. Outside Coimbatore, such as Pollachi, Tirupur, or Ooty, a small travel charge may apply. For other cities like Chennai, Bangalore, Mumbai, or Delhi, travel and accommodation may apply. Email us your exact location and we will tell you the total price before you book.",
      },
    ],
  },
  {
    title: "Service-Specific Questions",
    faqs: [
      {
        question: "Do you do outdoor portraits in cities other than Coimbatore?",
        answer:
          "Yes. We shoot outdoor portraits in Chennai, Bangalore, Hyderabad, Mumbai, Pune, Delhi, and many other cities. We come to your city. Just email us.",
      },
      {
        question: "Can you shoot a birthday party at my home?",
        answer:
          "Yes. Birthday shoots at home are very common. Small or big, we manage. We also do outdoor birthday shoots in parks or farmhouses.",
      },
      {
        question: "Do you do couple shoots for anniversaries or just engagements?",
        answer:
          "Both. We shoot engagement couple shoots, anniversary couple shoots, casual love-story shoots, and surprise proposal shoots. Tell us your story and we will capture it.",
      },
      {
        question: "Is baby shoot safe? My baby is only 2 months old.",
        answer:
          "Yes. We are very careful with newborn and young babies. We do not use harsh lights. We do not force poses. We shoot at the baby’s comfort level. Many parents in Coimbatore and other cities trust us for baby shoots.",
      },
      {
        question: "Do you cover corporate events or small family events?",
        answer:
          "Yes. We cover birthday parties, anniversary parties, family get-togethers, corporate events, conferences, and small functions. Just email us the details.",
      },
      {
        question: "What is a model shoot? Do I need experience?",
        answer:
          "A model shoot is for building your portfolio as an aspiring model, actor, influencer, or personal brand. You do not need experience. We guide you on poses, expressions, and outfits.",
      },
      {
        question: "Do you edit reels and highlight edits if I already have video footage?",
        answer:
          "Yes. If you already have video clips from your phone or another camera, you can send them to us. We can edit them into a reel or highlight video with music and transitions. Pricing is different from a full photoshoot, so email us for details.",
      },
    ],
  },
  {
    title: "Contact & Support",
    faqs: [
      {
        question: "How can I contact BSPX Studio?",
        answer:
          "The best way is email: bspxstudio@gmail.com. We check email every day. You can also continue the conversation through our reply for calls or WhatsApp if needed.",
      },
      {
        question: "Do you have a studio in Coimbatore where I can visit?",
        answer:
          "We have an office base in Coimbatore. For shoots, we usually come to your location, whether home or outdoor. If you want to meet and discuss before booking, email us and we can arrange a meeting in Coimbatore.",
      },
      {
        question: "Do you serve small towns or villages, not just big cities?",
        answer:
          "Yes. We have shot in small towns like Pollachi, Udumalpet, Mettupalayam, and remote locations. If you have a location in India, we will try our best to come. Email us first so we can check travel feasibility.",
      },
      {
        question: "I am not in Coimbatore. Can I still book without meeting you?",
        answer:
          "Yes. Many clients from other cities book us without meeting first. We plan everything over email and phone. On shoot day, we meet you directly at your location. It works smoothly.",
      },
      {
        question: "Do you have a question that is not listed here?",
        answer:
          "Just email us at bspxstudio@gmail.com. Ask anything. We reply within 24 hours. No pressure. No spam.",
      },
    ],
  },
];

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

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

  const toggleFAQ = (catIdx, index) => {
    if (openCategory === catIdx && openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenCategory(catIdx);
      setOpenIndex(index);
    }
  };

  return (
    <section
      id="faq"
      className="relative flex justify-center overflow-hidden bg-[#090604] py-28 text-white md:py-40 font-['Poppins',sans-serif]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-[420px] w-[420px] bg-[#D4A53A]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8%] bottom-[10%] h-[480px] w-[480px] bg-[#FF7A00]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1700px] grid-cols-1 gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        {/* Left Content */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <span className="mb-8 inline-flex border border-white/10 bg-white/5 px-5 py-2 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
            FAQs
          </span>

          <h2 className="font-['Montserrat',sans-serif] text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
            Frequently asked
            <br />
            <span className="text-[#FF7A00]">questions</span>
          </h2>

          <p className="mt-7 max-w-md text-sm leading-relaxed text-white/40">
            Simple answers, no confusion. Based in Coimbatore, serving all India.
            Email: bspxstudio@gmail.com
          </p>

          {/* Category Navigation */}
          <div className="mt-12 flex flex-wrap gap-3 lg:max-w-md">
            {faqCategories.map((category, catIdx) => (
              <button
                key={category.title}
                onClick={() => {
                  setOpenCategory(catIdx);
                  setOpenIndex(0);
                }}
                className={`border px-4 py-3 font-['Montserrat',sans-serif] text-[9px] font-semibold uppercase tracking-[0.18em] transition ${
                  openCategory === catIdx
                    ? "border-[#FF7A00] bg-[#FF7A00] text-white"
                    : "border-white/10 bg-white/5 text-white/45 hover:border-[#FF7A00] hover:text-[#FF7A00]"
                }`}
              >
                {category.title.replace(" Questions", "")}
              </button>
            ))}
          </div>

          <div className="mt-14 border-t border-white/10 pt-8">
            <h3 className="font-['Montserrat',sans-serif] text-xl font-semibold text-white">
              Still have a question?
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/40">
              We answer every email personally. Whether you are in Coimbatore or
              anywhere in India, just write to us.
            </p>

            <a
              href="mailto:bspxstudio@gmail.com"
              className="mt-7 inline-flex bg-[#FF7A00] px-7 py-4 font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#D4A53A] hover:text-[#0A0A0A]"
            >
              Email bspxstudio@gmail.com now
            </a>
          </div>
        </div>

        {/* Right FAQ Accordion */}
        <div>
          <div className="mb-8">
            <p className="font-['Montserrat',sans-serif] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF7A00]">
              {faqCategories[openCategory].title}
            </p>
          </div>

          <div className="space-y-4">
            {faqCategories[openCategory].faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.question}
                  className={`border bg-white/[0.035] transition-all duration-500 ${
                    isOpen
                      ? "border-[#FF7A00]/35"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(openCategory, idx)}
                    className="flex w-full items-center justify-between gap-8 px-5 py-5 text-left md:px-7"
                  >
                    <span className="font-['Montserrat',sans-serif] text-sm font-semibold leading-snug text-white md:text-base">
                      {faq.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-white/70">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden px-5 transition-all duration-500 ease-in-out md:px-7 ${
                      isOpen
                        ? "max-h-[420px] pb-6 opacity-100"
                        : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="border-t border-white/10 pt-5 text-sm leading-relaxed text-white/45 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}