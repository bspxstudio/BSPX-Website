
const clothingArticles = [
  {
    category: "STYLE GUIDE",
    title: "How to Style an Oversized T-Shirt",
    description:
      "Discover easy streetwear combinations with oversized tees, relaxed denim, and everyday essentials.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",
    label: "01",
  },
  {
    category: "FABRIC & FIT",
    title: "Finding Your Perfect Everyday Fit",
    description:
      "A simple guide to choosing comfortable fits, versatile colours, and T-shirts for daily wear.",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
    label: "02",
  },
  {
    category: "STREETWEAR",
    title: "Build a Minimal Streetwear Wardrobe",
    description:
      "Create more outfits with fewer essentials, timeless colours, and effortless everyday styling.",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85",
    label: "03",
  },
];

const featuredArticle = {
  category: "THE BSPX EDIT",
  title: "Everyday Essentials. Unmistakable Style.",
  description:
    "Explore everyday streetwear, relaxed silhouettes, and versatile T-shirts designed to complement your personal style.",
  image:
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
};

export default function BlogSectionClassic() {
  return (
    <section
      id="journal"
      className="relative overflow-hidden bg-[#f5f4ef] py-14 font-['Poppins',sans-serif] text-[#171715] sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#77756d]">
              BSPX / Journal
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[42px]">
              The everyday style edit.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#77756d]">
            Streetwear inspiration, everyday essentials, and simple ways to
            make your T-shirt collection work harder.
          </p>
        </div>

        {/* Featured Story */}
        <article className="group grid overflow-hidden bg-white md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e7e0] md:aspect-auto md:min-h-[390px]">
            <img
              src={featuredArticle.image}
              alt="BSPX streetwear fashion editorial"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>

          <div className="flex flex-col items-start justify-center p-6 sm:p-9 lg:p-12">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77756d]">
              {featuredArticle.category}
            </p>

            <h3 className="max-w-lg text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl lg:text-[34px]">
              {featuredArticle.title}
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-[#77756d]">
              {featuredArticle.description}
            </p>

            <a
              href="#bspx-products"
              className="mt-6 inline-block border-b border-[#171715] pb-2 text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors hover:text-[#77756d]"
            >
              Explore the collection
            </a>
          </div>
        </article>

        {/* Article Section Heading */}
        <div className="mb-6 mt-12 flex items-end justify-between gap-4 sm:mt-14">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77756d]">
              Style notes
            </p>

            <h3 className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
              Wear it your way.
            </h3>
          </div>

          <a
            href="#bspx-products"
            className="shrink-0 border-b border-[#171715] pb-1 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-[#77756d]"
          >
            Shop BSPX
          </a>
        </div>

        {/* Clothing Editorial Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {clothingArticles.map((article) => (
            <article key={article.label} className="group min-w-0">
              <a
                href="#bspx-products"
                className="block overflow-hidden bg-[#e9e7e0]"
                aria-label={`Explore collection: ${article.title}`}
              >
                <div className="relative aspect-[4/4.2] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </a>

              <div className="pt-4">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#77756d]">
                  {article.category}
                </p>

                <h4 className="text-lg font-semibold leading-snug tracking-[-0.025em] sm:text-xl">
                  {article.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#77756d]">
                  {article.description}
                </p>

                <a
                  href="#bspx-products"
                  className="mt-4 inline-block border-b border-transparent pb-1 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all group-hover:border-[#171715]"
                >
                  Discover more
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-14 flex flex-col gap-5 border-t border-[#d9d7d0] pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77756d]">
              Less noise. More style.
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Find your everyday fit.
            </h3>
          </div>

          <a
            href="#bspx-products"
            className="inline-flex w-fit items-center justify-center bg-[#171715] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#393934]"
          >
            Shop the collection
          </a>
        </div>
      </div>
    </section>
  );
}
