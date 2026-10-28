
import React, { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Essential Oversized Tee",
    category: "Oversized",
    price: 799,
    color: "Washed Black",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    label: "BESTSELLER",
    background: "#e9e7e1",
  },
  {
    id: 2,
    name: "Classic Everyday Tee",
    category: "Essentials",
    price: 599,
    color: "Classic White",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    label: "EVERYDAY FIT",
    background: "#e8e5df",
  },
  {
    id: 3,
    name: "Urban Streetwear Tee",
    category: "Graphic Tees",
    price: 899,
    color: "Street Edition",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
    label: "NEW ARRIVAL",
    background: "#e7e3dc",
  },
  {
    id: 4,
    name: "Relaxed Fit Tee",
    category: "Oversized",
    price: 749,
    color: "Neutral Beige",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85",
    label: "RELAXED FIT",
    background: "#e9e5df",
  },
  {
    id: 5,
    name: "Minimal Signature Tee",
    category: "Essentials",
    price: 649,
    color: "Everyday Grey",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
    label: "MINIMAL STYLE",
    background: "#e7e5df",
  },
  {
    id: 6,
    name: "Statement Graphic Tee",
    category: "Graphic Tees",
    price: 949,
    color: "Graphic Edition",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=900&q=85",
    label: "MAKE A STATEMENT",
    background: "#e9e6e0",
  },
];

const categories = ["All Products", "Oversized", "Essentials", "Graphic Tees"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [visibleProducts, setVisibleProducts] = useState(products);
  const [addedProducts, setAddedProducts] = useState([]);

  useEffect(() => {
    setVisibleProducts(
      activeCategory === "All Products"
        ? products
        : products.filter((product) => product.category === activeCategory)
    );
  }, [activeCategory]);

  const handleAddToBag = (product) => {
    setAddedProducts((previous) =>
      previous.includes(product.id)
        ? previous
        : [...previous, product.id]
    );
  };

  return (
    <section
      id="shop"
      className="bspx-shop relative overflow-hidden bg-[#f7f6f2] text-[#20201e]"
    >
      <style>{`
        .bspx-shop {
          font-family: 'Poppins', sans-serif;
        }

        .bspx-shop * {
          box-sizing: border-box;
        }

        .shop-reveal {
          opacity: 0;
          transform: translateY(20px);
          animation: shopReveal .7s ease forwards;
        }

        .shop-reveal-delay-1 { animation-delay: .1s; }
        .shop-reveal-delay-2 { animation-delay: .2s; }
        .shop-reveal-delay-3 { animation-delay: .3s; }

        .shop-product-image {
          transition: transform .65s cubic-bezier(.2,.7,.2,1);
        }

        .shop-product:hover .shop-product-image {
          transform: scale(1.045);
        }

        .shop-filter {
          transition: background .25s ease, color .25s ease, border-color .25s ease;
        }

        .shop-product {
          animation: shopReveal .55s ease both;
        }

        .shop-product:nth-child(2) { animation-delay: .06s; }
        .shop-product:nth-child(3) { animation-delay: .12s; }
        .shop-product:nth-child(4) { animation-delay: .18s; }
        .shop-product:nth-child(5) { animation-delay: .24s; }
        .shop-product:nth-child(6) { animation-delay: .30s; }

        @keyframes shopReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shop-reveal,
          .shop-product {
            animation: none !important;
            opacity: 1;
            transform: none;
          }

          .shop-product-image,
          .shop-filter {
            transition: none;
          }
        }
      `}</style>

      {/* COLLECTION INTRO */}
      <div className="mx-auto max-w-[1600px] px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pt-24">
        <div className="shop-reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.24em] text-black/50 sm:text-xs">
              BSPX / The Clothing Collection
            </p>

            <h2 className="text-3xl font-medium uppercase leading-[1.05] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
              Everyday essentials.
              <br />
              <span className="text-black/45">Your own kind of style.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
              Easy-to-wear T-shirts, relaxed silhouettes, and everyday pieces
              made for your personal style.
            </p>
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.14em] text-black/45">
            Designed for everyday wear
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="shop-reveal shop-reveal-delay-1 mt-10 flex gap-2 overflow-x-auto pb-2 sm:mt-12 sm:flex-wrap sm:overflow-visible">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`shop-filter shrink-0 border px-4 py-3 text-[10px] font-medium uppercase tracking-[0.12em] sm:px-5 ${
                activeCategory === category
                  ? "border-[#20201e] bg-[#20201e] text-white"
                  : "border-black/15 bg-transparent text-black/65 hover:border-black hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div
          className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 lg:gap-x-7 lg:gap-y-12"
          aria-live="polite"
        >
          {visibleProducts.map((product) => (
            <article key={product.id} className="shop-product group min-w-0">
              <div
                className="relative overflow-hidden"
                style={{ backgroundColor: product.background }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="shop-product-image h-full w-full object-cover"
                  />
                </div>

                <span className="absolute left-2 top-2 bg-white/90 px-2 py-1.5 text-[8px] font-medium uppercase tracking-[0.12em] text-black sm:left-3 sm:top-3 sm:px-3 sm:text-[9px]">
                  {product.label}
                </span>

                <button
                  type="button"
                  onClick={() => handleAddToBag(product)}
                  className="absolute bottom-2 left-2 right-2 bg-white/95 px-2 py-3 text-[9px] font-medium uppercase tracking-[0.12em] text-black transition-colors hover:bg-[#c7ff38] sm:bottom-3 sm:left-3 sm:right-3 sm:py-3.5 sm:text-[10px]"
                >
                  {addedProducts.includes(product.id)
                    ? "Added to Bag"
                    : "Add to Bag"}
                </button>
              </div>

              <div className="flex items-start justify-between gap-2 pt-3 sm:pt-4">
                <div className="min-w-0">
                  <h3 className="text-xs font-medium leading-5 sm:text-sm">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-black/50 sm:text-xs">
                    {product.color}
                  </p>
                </div>

                <p className="shrink-0 text-xs font-medium sm:text-sm">
                  ₹{product.price}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* COLLECTION FOOTNOTE */}
        <div className="shop-reveal shop-reveal-delay-2 mt-14 border-t border-black/10 pt-6 sm:mt-20 sm:pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-black/55 sm:text-sm">
              Find your fit. Keep your style. Make it yours.
            </p>

            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-black/45">
              BSPX Clothing Collection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
