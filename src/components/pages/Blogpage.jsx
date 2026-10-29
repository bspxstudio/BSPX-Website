import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { usePublishedAdminBlogs } from "../../data/useAdminContent";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = {
    title: "The Everyday T-Shirt: Finding Your Perfect Fit",
    excerpt:
      "From relaxed oversized silhouettes to timeless regular fits, discover how the right T-shirt can transform your everyday wardrobe.",
    category: "T-Shirt Guide",
    date: "October 18, 2026",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=85",
  };

  // Keep existing blog posts unchanged.
  const blogPosts = useMemo(
    () => [
      {
        id: 1,
        title: "How to Style an Oversized T-Shirt",
        excerpt:
          "Build effortless everyday looks with balanced proportions, relaxed layers and your favourite oversized tee.",
        category: "Streetwear",
        date: "October 15, 2026",
        image:
          "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
      },
      {
        id: 2,
        title: "5 T-Shirt Colours Every Wardrobe Needs",
        excerpt:
          "Discover versatile colours that work across seasons and make everyday outfit combinations easier.",
        category: "Style Tips",
        date: "October 12, 2026",
        image:
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
      },
      {
        id: 3,
        title: "What Makes a Great Everyday T-Shirt?",
        excerpt:
          "Explore the details that matter, from fabric feel and stitching to shape, comfort and durability.",
        category: "T-Shirt Guide",
        date: "October 9, 2026",
        image:
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
      },
      {
        id: 4,
        title: "Minimal Streetwear, Maximum Impact",
        excerpt:
          "Keep your look simple with clean silhouettes, thoughtful layering and easy-to-wear essentials.",
        category: "Streetwear",
        date: "October 6, 2026",
        image:
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
      },
      {
        id: 5,
        title: "Keep Your T-Shirts Looking New",
        excerpt:
          "Simple washing, drying and storage habits can help preserve colour, shape and fabric quality.",
        category: "Fabric Care",
        date: "October 3, 2026",
        image:
          "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
      },
      {
        id: 6,
        title: "Build a Wardrobe Around the Basics",
        excerpt:
          "Create more outfit options with a small collection of versatile tees and everyday clothing staples.",
        category: "Style Tips",
        date: "September 28, 2026",
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
      },
    ],
    []
  );

  // Combine existing posts with published posts from the Admin Panel.
  const allBlogPosts = usePublishedAdminBlogs(blogPosts);

  // Automatically include categories added through the Admin Panel.
  const categories = useMemo(() => {
    const dynamicCategories = allBlogPosts
      .map((post) => post.category)
      .filter(Boolean);

    return ["All", ...new Set(dynamicCategories)];
  }, [allBlogPosts]);

  // Filter both existing and admin-created blog posts.
  const filteredPosts =
    activeCategory === "All"
      ? allBlogPosts
      : allBlogPosts.filter(
          (post) => post.category === activeCategory
        );

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "BSPX Style Journal",
    description:
      "Explore T-shirt styling ideas, streetwear inspiration, clothing guides and fabric care tips from BSPX.",
    url: "https://yourdomain.com/blog",
    publisher: {
      "@type": "Organization",
      name: "BSPX",
    },
  };

  return (
    <main className="bspx-blog min-h-screen bg-[#f8f7f3] text-[#191a17]">
      <Helmet>
        <title>BSPX Style Journal | T-Shirt & Streetwear Guides</title>

        <meta
          name="description"
          content="Discover T-shirt styling tips, streetwear inspiration, wardrobe essentials and clothing care guides with BSPX."
        />

        <meta
          name="keywords"
          content="BSPX, T-shirt fashion, oversized T-shirts, streetwear, clothing style guide, casual wear"
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/blog"
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

        .bspx-blog {
          font-family: 'DM Sans', sans-serif;
        }

        .bspx-blog h1,
        .bspx-blog h2,
        .bspx-blog h3,
        .bspx-blog h4 {
          font-family: 'Manrope', sans-serif;
        }

        .bspx-blog button,
        .bspx-blog a {
          -webkit-tap-highlight-color: transparent;
        }

        .bspx-blog .blog-image {
          transition: transform .6s ease;
        }

        .bspx-blog .blog-card:hover .blog-image {
          transform: scale(1.045);
        }

        .bspx-blog .category-button {
          transition:
            background .2s ease,
            color .2s ease,
            border-color .2s ease;
        }

        .bspx-blog .blog-card {
          transition: border-color .25s ease;
        }

        .bspx-blog .blog-card:hover {
          border-color: #9a9d83;
        }

        @media (prefers-reduced-motion: reduce) {
          .bspx-blog *,
          .bspx-blog *::before,
          .bspx-blog *::after {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pb-24">
        {/* SECTION 1 — BLOG HERO */}
        <section className="mb-12 border-b border-[#deded5] pb-10 text-center sm:mb-16 sm:pb-12">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#777b61]">
            The BSPX Edit
          </p>

          <h1 className="mx-auto mb-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            Style starts with
            <span className="block text-[#777b61]">
              the everyday essentials.
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-6 text-[#73736c] sm:text-base">
            Your guide to better fits, everyday T-shirts, modern streetwear
            and a wardrobe that feels like you.
          </p>
        </section>

        {/* SECTION 2 — FEATURED ARTICLE */}
        <section className="mb-14 sm:mb-20">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#777b61]">
              Editor's Pick
            </p>

            <span className="text-xs text-[#85857d]">
              01 / Featured
            </span>
          </div>

          <article className="grid overflow-hidden rounded-xl border border-[#e5e3dc] bg-white md:grid-cols-2">
            <a
              href="/blogs/everyday-tshirt-fit-guide"
              className="group relative block min-h-[260px] overflow-hidden bg-[#e8e6df] sm:min-h-[340px] lg:min-h-[390px]"
              aria-label={`Read ${featuredPost.title}`}
            >
              <img
                src={featuredPost.image}
                alt="Everyday T-shirt essentials"
                className="blog-image absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
            </a>

            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#777b61]">
                {featuredPost.category}
              </p>

              <h2 className="mb-4 max-w-md text-2xl font-semibold leading-snug tracking-[-0.035em] sm:text-3xl">
                {featuredPost.title}
              </h2>

              <p className="mb-6 max-w-md text-sm leading-6 text-[#77776f]">
                {featuredPost.excerpt}
              </p>

              <p className="mb-6 text-xs text-[#8a8a81]">
                {featuredPost.date}
              </p>

              <a
                href="/blogs/everyday-tshirt-fit-guide"
                className="w-fit border-b border-[#777b61] pb-1 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:text-[#777b61]"
              >
                Read the article
              </a>
            </div>
          </article>
        </section>

        {/* SECTION 3 — DYNAMIC CATEGORY FILTER */}
        <section className="mb-8 border-y border-[#deded5] py-6 sm:mb-10">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#777b61]">
                Explore the journal
              </p>

              <h2 className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                Find your kind of style
              </h2>
            </div>

            <p className="text-xs text-[#85857d]">
              {filteredPosts.length} articles
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`category-button rounded-full border px-4 py-2.5 text-xs font-medium ${
                  activeCategory === category
                    ? "border-[#20211d] bg-[#20211d] text-white"
                    : "border-[#deded5] bg-transparent text-[#65665e] hover:border-[#777b61] hover:text-[#20211d]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 4 — BLOG ARTICLE GRID */}
        <section className="mb-16 sm:mb-20">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="blog-card flex flex-col overflow-hidden rounded-lg border border-[#e5e3dc] bg-white"
                >
                  <a
                    href={`/blogs/${post.slug || post.id}`}
                    className="group relative block aspect-[4/3] overflow-hidden bg-[#e8e6df]"
                    aria-label={`Read ${post.title}`}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-image h-full w-full object-cover"
                      loading="lazy"
                    />
                  </a>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#777b61]">
                        {post.category}
                      </span>

                      <span className="text-[#c6c5bc]">/</span>

                      <span className="text-[11px] text-[#8a8a81]">
                        {post.date}
                      </span>
                    </div>

                    <h3 className="mb-3 text-lg font-semibold leading-snug tracking-[-0.025em] sm:text-xl">
                      {post.title}
                    </h3>

                    <p className="mb-5 flex-1 text-sm leading-6 text-[#77776f]">
                      {post.excerpt}
                    </p>

                    <a
                      href={`/blogs/${post.slug || post.id}`}
                      className="w-fit border-b border-[#c8c9bd] pb-1 text-[11px] font-bold uppercase tracking-[0.12em] hover:border-[#777b61] hover:text-[#777b61]"
                    >
                      Read more
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <h3 className="mb-2 text-xl font-semibold">
                No articles found
              </h3>

              <p className="text-sm text-[#77776f]">
                Try selecting another category.
              </p>
            </div>
          )}
        </section>

        {/* SECTION 5 — STYLE EDITORIAL STRIP */}
        <section className="mb-16 grid overflow-hidden rounded-xl bg-[#e9e8df] md:grid-cols-2 sm:mb-20">
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#777b61]">
              Less, but better
            </p>

            <h2 className="mb-4 max-w-md text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">
              Build a wardrobe that works every day.
            </h2>

            <p className="mb-6 max-w-md text-sm leading-6 text-[#6e6e64]">
              Start with the pieces you reach for most. Discover simple
              styling ideas, versatile basics and comfortable fits made
              for everyday life.
            </p>

            <a
              href="/shop"
              className="w-fit bg-[#20211d] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#777b61]"
            >
              Explore the collection
            </a>
          </div>

          <div className="relative min-h-[240px] overflow-hidden sm:min-h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
              alt="Modern everyday fashion styling"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* SECTION 6 — FINAL SHOP CTA */}
        <section className="border-t border-[#deded5] pt-10 text-center sm:pt-14">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#777b61]">
            Wear it your way
          </p>

          <h2 className="mx-auto mb-4 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">
            Good style. Everyday comfort.
          </h2>

          <p className="mx-auto mb-7 max-w-md text-sm leading-6 text-[#77776f]">
            Find your next favourite T-shirt and make it part of your
            everyday rotation.
          </p>

          <a
            href="/shop"
            className="inline-flex items-center justify-center bg-[#20211d] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#777b61]"
          >
            Shop BSPX
          </a>
        </section>
      </div>
    </main>
  );
}