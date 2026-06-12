import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Outdoor Portraits',
    subtitle: 'Natural light. Real backgrounds.',
    desc: 'Portraits that capture personality, mood, and location in one cinematic frame.',
    img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: '02',
    title: 'Birthday Shoots',
    subtitle: 'Fun. Colorful. Candid.',
    desc: 'Celebrate milestones with vibrant frames that feel alive and personal.',
    img: 'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: '03',
    title: 'Couple Shoots',
    subtitle: 'Romantic creative sessions.',
    desc: 'Soft, emotional visuals designed around chemistry, story, and location.',
    img: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: '04',
    title: 'Baby Shoots',
    subtitle: 'Cute expressions. Calm moments.',
    desc: 'Patient, warm, and detail-led photography for your little one’s early memories.',
    img: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: '05',
    title: 'Cinematic Reels',
    subtitle: 'Short videos. Strong stories.',
    desc: 'Professional vertical reels made for Instagram, memories, and brand storytelling.',
    img: 'https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: '06',
    title: 'Highlight Edits',
    subtitle: 'Raw clips to story-driven edits.',
    desc: 'We turn moments into emotional highlight films with pacing, music, and rhythm.',
    img: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: '07',
    title: 'Photo Frames',
    subtitle: 'Premium printed memories.',
    desc: 'High-quality physical prints and frames for homes, gifting, and keepsakes.',
    img: 'https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: '08',
    title: 'Pre & Post Wedding',
    subtitle: 'Emotional relaxed shoots.',
    desc: 'Premium couple storytelling before and after the wedding with cinematic direction.',
    img: 'https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: '09',
    title: 'Model Shoots',
    subtitle: 'Fashion and editorial looks.',
    desc: 'Portfolio-ready frames built around styling, confidence, and visual identity.',
    img: 'https://images.pexels.com/photos/157675/fashion-model-model-female-157675.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: '10',
    title: 'Event Photography',
    subtitle: 'Birthdays. Gatherings. Moments.',
    desc: 'Full event coverage that captures emotion, people, energy, and atmosphere.',
    img: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export default function Services() {
  return (
    <section className="bg-[#f7f4ef] text-stone-950 py-28 font-['Poppins',sans-serif]">
      <div className="max-w-[112rem] mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-20 flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="max-w-3xl">
            <span className="text-[#FF7A00] font-bold tracking-[0.35em] uppercase text-xs mb-5 block">
              What We Shoot
            </span>

            <h2 className="font-['Bebas_Neue',sans-serif] text-6xl md:text-8xl tracking-tight leading-[0.9] text-stone-950">
              SERVICES THAT<br />FEEL LIKE STORIES.
            </h2>

            <p className="mt-8 max-w-2xl text-stone-600 text-lg font-['Montserrat',sans-serif] font-semibold leading-relaxed">
              A premium visual experience for portraits, celebrations, reels, weddings, and personal memories — designed as cinematic story cards.
            </p>
          </div>

          <div className="text-sm space-y-4 text-stone-500 border-l border-stone-300 pl-8">
            <p>↗ Visual memory design</p>
            <p>↗ Cinematic framing</p>
            <p>↗ Emotional positioning</p>
            <p>↗ Premium personal storytelling</p>
          </div>
        </div>

        {/* Story Style Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative h-[560px] overflow-hidden bg-stone-900 shadow-2xl"
            >
              {/* Background Image */}
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Overlay Treatment */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/80" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Top Number */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
                <span className="h-9 w-9 bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center justify-center">
                  {service.id}
                </span>

                <span className="text-white/70 text-[10px] uppercase tracking-[0.25em] font-bold">
                  Service
                </span>
              </div>

              {/* Main Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-7 text-white">
                <div className="mb-7 text-center">
                  <h3 className="font-['Bebas_Neue',sans-serif] text-5xl leading-[0.9] tracking-wide drop-shadow-lg">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-white/90">
                    {service.subtitle}
                  </p>

                  <p className="mt-4 text-xs leading-relaxed text-white/70 max-w-[17rem] mx-auto">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom CTA */}
                <button className="w-full h-14 bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-between px-5 text-white hover:bg-white hover:text-stone-950 transition-all duration-300">
                  <span className="h-9 w-9 bg-white/20 flex items-center justify-center">
                    <ArrowRight size={17} />
                  </span>

                  <span className="text-xs font-bold tracking-[0.2em] uppercase">
                    Book Now
                  </span>

                  <span className="text-white/40 group-hover:text-stone-400">
                    »»
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-24 bg-stone-950 text-white p-10 md:p-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="text-[#FF7A00] text-xs uppercase tracking-[0.3em] font-bold">
              Start Your Visual Story
            </span>

            <h3 className="mt-4 font-['Bebas_Neue',sans-serif] text-5xl uppercase tracking-wide">
              Ready to tell your story?
            </h3>

            <p className="mt-4 text-white/60 max-w-xl text-sm leading-relaxed">
              Book a professional shoot experience designed around your occasion, personality, location, and visual story.
            </p>
          </div>

          <button className="bg-[#FF7A00] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-stone-950 transition-colors">
            Book Your Shoot Today
          </button>
        </div>

      </div>
    </section>
  );
}