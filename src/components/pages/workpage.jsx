import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import HTMLFlipBook from "react-pageflip";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

// --- Realistic Album Page Component ---
const AlbumPage = React.forwardRef((props, ref) => (
  <div className="h-full w-full bg-[#FDFDFC] border border-[#E0E0E0] shadow-[0_0_20px_rgba(0,0,0,0.05)] overflow-hidden" ref={ref}>
    {/* Page Shadow for depth */}
    <div className={`absolute inset-y-0 ${props.isLeft ? 'right-0' : 'left-0'} w-12 bg-gradient-to-r from-black/10 to-transparent z-10`} />
    {props.children}
  </div>
));
AlbumPage.displayName = 'AlbumPage';

export default function WorkPage() {
  const flipBookRef = useRef(null);
  
  const portfolioItems = [
    { id: 1, title: "Royal Wedding", category: "Wedding", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000" },
    { id: 2, title: "Golden Portraits", category: "Portraits", image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000" },
    { id: 3, title: "Corporate Gala", category: "Events", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000" },
    { id: 4, title: "Candid Series", category: "Wedding", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000" },
  ];

  const albumPages = [
    { type: 'cover', title: 'BSPX', subtitle: 'The Editorial Archive' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1000' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000' },
    { type: 'cover', title: 'THE END', subtitle: 'Stay Connected' }
  ];

  return (
    <main className="min-h-screen bg-[#050505] font-['Montserrat',sans-serif] text-white">
      <Helmet><title>Work | BSPX Studio</title></Helmet>

      {/* --- SECTION 1: HEADER --- */}
      <div className="py-32 px-6 text-center border-b border-white/10">
        <h1 className="font-['Cormorant_Garamond',serif] text-8xl italic text-[#D4A53A] mb-8">Archives</h1>
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/40">Selected Works & Editorial Spreads</p>
      </div>

      {/* --- SECTION 2: GRID --- */}
      <div className="max-w-[1700px] mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {portfolioItems.map((item) => (
            <div key={item.id} className="relative h-[500px] overflow-hidden group border border-white/5">
              <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.title} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[9px] uppercase tracking-widest text-[#D4A53A]">{item.category}</p>
                <h4 className="text-3xl font-['Cormorant_Garamond',serif] italic">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 3: EDITORIAL FLIPBOOK --- */}
      <div className="py-32 border-t border-white/10 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-16">
          <BookOpen className="text-[#D4A53A]" />
          <h3 className="font-['Cormorant_Garamond',serif] text-5xl">The Editorial Album</h3>
        </div>

        <div className="flex gap-8 mb-12 items-center">
          <button onClick={() => flipBookRef.current.pageFlip().flipPrev()} className="p-4 border border-white/10 hover:bg-[#D4A53A] hover:text-black transition-colors"><ChevronLeft /></button>
          <span className="text-[9px] uppercase tracking-[0.3em]">Flip Through</span>
          <button onClick={() => flipBookRef.current.pageFlip().flipNext()} className="p-4 border border-white/10 hover:bg-[#D4A53A] hover:text-black transition-colors"><ChevronRight /></button>
        </div>

        <HTMLFlipBook 
          width={450} 
          height={600} 
          ref={flipBookRef}
          className="shadow-[0_0_80px_rgba(0,0,0,0.9)]"
        >
          {albumPages.map((page, i) => (
            <AlbumPage key={i} isLeft={i % 2 === 0}>
              {page.type === 'cover' ? (
                <div className="w-full h-full flex flex-col items-center justify-center text-black p-12 text-center">
                  <h2 className="text-6xl font-['Cormorant_Garamond',serif] italic text-[#D4A53A] mb-4">{page.title}</h2>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-black/50">{page.subtitle}</p>
                </div>
              ) : (
                <div className="w-full h-full relative">
                  <img src={page.src} className="w-full h-full object-cover" alt="Album page" />
                  <div className="absolute bottom-6 left-0 right-0 text-center font-['Montserrat',sans-serif] text-[8px] text-black/30 uppercase tracking-widest">
                    Page {i + 1}
                  </div>
                </div>
              )}
            </AlbumPage>
          ))}
        </HTMLFlipBook>
      </div>

      {/* --- SECTION 4: CTA --- */}
      <div className="py-32 border-t border-white/10 text-center">
        <h2 className="font-['Cormorant_Garamond',serif] text-7xl italic mb-12">Capture your legacy.</h2>
        <button className="px-12 py-5 bg-[#D4A53A] text-black font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-colors">
          Start Your Project <ArrowRight className="inline ml-2 w-4" />
        </button>
      </div>
    </main>
  );
}