
import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Heart,

  Minus,
  Plus,
  ShoppingBag,
  SlidersHorizontal,
  X,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Essential Heavyweight Tee",
    category: "Essentials",
    price: 1299,
    oldPrice: 1599,
    color: "Cloud White",
    colorHex: "#eeeae2",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    badge: "BESTSELLER",
    description:
      "A premium everyday T-shirt with a relaxed silhouette and a structured, heavyweight feel.",
  },
  {
    id: 2,
    name: "Midnight Oversized Tee",
    category: "Oversized",
    price: 1499,
    oldPrice: null,
    color: "Midnight Black",
    colorHex: "#242424",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
    badge: "NEW DROP",
    description:
      "An oversized streetwear essential designed for effortless styling and everyday comfort.",
  },
  {
    id: 3,
    name: "Urban Graphic Tee",
    category: "Graphic Tees",
    price: 1199,
    oldPrice: null,
    color: "Stone Grey",
    colorHex: "#99958e",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    badge: null,
    description:
      "A contemporary graphic-inspired style for a clean, expressive streetwear wardrobe.",
  },
  {
    id: 4,
    name: "Everyday Relaxed Tee",
    category: "Essentials",
    price: 999,
    oldPrice: null,
    color: "Natural Beige",
    colorHex: "#c9bba7",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85",
    badge: "EVERYDAY PICK",
    description:
      "A versatile relaxed-fit T-shirt that works with denim, cargos, and layered outfits.",
  },
  {
    id: 5,
    name: "Classic Black Tee",
    category: "Essentials",
    price: 1099,
    oldPrice: null,
    color: "Jet Black",
    colorHex: "#171717",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=900&q=85",
    badge: null,
    description:
      "A timeless black tee with a minimal look that fits effortlessly into any wardrobe.",
  },
  {
    id: 6,
    name: "Street Form Oversized",
    category: "Oversized",
    price: 1599,
    oldPrice: 1799,
    color: "Off White",
    colorHex: "#e8e4dc",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
    badge: "LIMITED DROP",
    description:
      "A relaxed streetwear silhouette with a modern shape and a minimal aesthetic.",
  },
];

const categories = [
  "All Pieces",
  "Essentials",
  "Oversized",
  "Graphic Tees",
];

const sizes = ["S", "M", "L", "XL", "XXL"];

const money = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All Pieces");
  const [selectedSizes, setSelectedSizes] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All Pieces") return products;

    return products.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const addToCart = (product, size) => {
    if (!size) {
      setNotice("Please select a size before adding this item.");
      return;
    }

    setCart((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...current,
        { ...product, size, quantity: 1 },
      ];
    });

    setNotice(`${product.name} added to your bag.`);
    setSelectedProduct(null);
  };

  const changeQuantity = (id, size, change) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <main className="bspx-shop min-h-screen overflow-hidden bg-[#f8f7f4] text-[#191919]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

        .bspx-shop {
          --accent: #ff7a00;
          font-family: 'DM Sans', sans-serif;
        }

        .bspx-shop h1,
        .bspx-shop h2,
        .bspx-shop h3,
        .bspx-shop .display-font {
          font-family: 'Manrope', sans-serif;
        }

        .bspx-shop button {
          -webkit-tap-highlight-color: transparent;
        }

        .bspx-shop .product-image-wrap {
          perspective: 1000px;
          background: #eeece7;
        }

        .bspx-shop .product-image {
          transition: transform 650ms cubic-bezier(.2,.75,.25,1);
        }

        .bspx-shop .product-card {
          transition: transform 350ms ease, box-shadow 350ms ease;
        }

        .bspx-shop .product-card:hover {
          transform: translateY(-4px);
        }

        .bspx-shop .product-card:hover .product-image {
          transform: scale(1.055);
        }

        .bspx-shop .accent-button {
          transition: background .2s ease, color .2s ease, transform .2s ease;
        }

        .bspx-shop .accent-button:hover {
          transform: translateY(-2px);
        }

        .bspx-shop .filter-button {
          transition: color .2s ease, background .2s ease, border-color .2s ease;
        }

        .bspx-shop .story-image {
          transition: transform 700ms cubic-bezier(.2,.75,.25,1);
        }

        .bspx-shop .story-image-wrap:hover .story-image {
          transform: scale(1.04);
        }

        .bspx-shop .modal-image {
          animation: bspxModalImage .4s ease both;
        }

        @keyframes bspxModalImage {
          from { opacity: 0; transform: scale(1.025); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .bspx-shop *,
          .bspx-shop *::before,
          .bspx-shop *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* PRODUCT COLLECTION */}
      <section
        id="shop"
        className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#ff7a00] sm:text-[10px]">
              BSPX Studio / Collection 01
            </p>

            <h1 className="display-font text-3xl font-semibold tracking-[-0.06em] sm:text-4xl md:text-5xl">
              Pieces you'll live in.
            </h1>

            <p className="mt-3 max-w-lg text-xs leading-6 text-stone-500 sm:text-sm">
              Considered silhouettes, elevated essentials, and everyday
              streetwear made to feel like you.
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <span className="text-[10px] text-stone-500 sm:text-xs">
              {filteredProducts.length} pieces
            </span>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.1em] transition hover:border-[#ff7a00] hover:text-[#ff7a00]"
            >
              <ShoppingBag size={15} />
              Bag ({cartCount})
            </button>
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-8 flex items-center justify-between gap-4 border-b border-black/10 pb-4 sm:mt-10">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`filter-button shrink-0 rounded-full border px-4 py-2.5 text-[10px] font-medium sm:px-5 sm:text-xs ${
                  activeCategory === category
                    ? "border-[#191919] bg-[#191919] text-white"
                    : "border-stone-200 bg-transparent text-stone-600 hover:border-[#ff7a00] hover:text-[#ff7a00]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <span className="hidden shrink-0 items-center gap-2 text-[10px] text-stone-500 sm:flex">
            <SlidersHorizontal size={13} />
            Collection
          </span>
        </div>

        {/* Product grid */}
        <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-7 sm:mt-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="product-card group min-w-0"
            >
              <div className="product-image-wrap relative overflow-hidden rounded-[3px]">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  aria-label={`View ${product.name}`}
                  className="block aspect-[4/5] w-full overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="product-image h-full w-full object-cover"
                  />
                </button>

                {product.badge && (
                  <span className="absolute left-2 top-2 bg-white/95 px-2 py-1.5 text-[7px] font-semibold uppercase tracking-[0.12em] text-stone-800 sm:left-3 sm:top-3 sm:px-3 sm:text-[8px]">
                    {product.badge}
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  aria-label={
                    wishlist.includes(product.id)
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                  }
                  className={`absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full shadow-sm backdrop-blur transition sm:right-3 sm:top-3 sm:h-9 sm:w-9 ${
                    wishlist.includes(product.id)
                      ? "bg-[#ff7a00] text-white"
                      : "bg-white/90 text-stone-800 hover:bg-white"
                  }`}
                >
                  <Heart
                    size={15}
                    fill={
                      wishlist.includes(product.id)
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-white/95 px-3 py-3 text-[9px] font-semibold uppercase tracking-[0.1em] shadow-sm transition hover:bg-[#191919] hover:text-white sm:bottom-3 sm:left-3 sm:right-3 sm:px-4 sm:py-3.5 sm:text-[10px] sm:opacity-0 sm:group-hover:opacity-100"
                >
                  Quick view
                  <ArrowUpRight size={14} />
                </button>
              </div>

              <div className="pt-3 sm:pt-4">
                <div className="flex items-start justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="min-w-0 text-left"
                  >
                    <h2 className="text-[11px] font-semibold leading-5 sm:text-sm">
                      {product.name}
                    </h2>
                    <p className="mt-1 text-[9px] text-stone-500 sm:text-[11px]">
                      {product.color}
                    </p>
                  </button>

                  <div className="shrink-0 text-right">
                    <p className="text-[11px] font-semibold sm:text-sm">
                      {money(product.price)}
                    </p>

                    {product.oldPrice && (
                      <p className="mt-1 text-[9px] text-stone-400 line-through sm:text-[10px]">
                        {money(product.oldPrice)}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-1.5">
                  {[product.colorHex, "#c8c2b7", "#252525"].map(
                    (color, index) => (
                      <span
                        key={`${product.id}-${color}`}
                        className={`h-3.5 w-3.5 rounded-full border ${
                          index === 0
                            ? "border-stone-700 ring-1 ring-stone-300 ring-offset-1"
                            : "border-black/10"
                        }`}
                        style={{ backgroundColor: color }}
                        title={index === 0 ? product.color : `Color option ${index + 1}`}
                      />
                    )
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="mt-4 flex w-full items-center justify-between border-t border-black/10 pt-3 text-[9px] font-semibold uppercase tracking-[0.1em] transition hover:text-[#ff7a00] sm:text-[10px]"
                >
                  Select size
                  <Plus size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="py-12 text-center text-sm text-stone-500">
            No products found in this category.
          </p>
        )}

        <div className="mt-12 flex justify-center sm:mt-16">
          <button
            type="button"
            onClick={() => setActiveCategory("All Pieces")}
            className="inline-flex items-center gap-3 rounded-full border border-stone-300 px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.12em] transition hover:border-[#191919] hover:bg-[#191919] hover:text-white sm:text-xs"
          >
            View all products
            <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* BRAND STORY */}
      <section
        id="story"
        className="mx-5 mb-14 grid overflow-hidden rounded-md bg-[#eae7df] sm:mx-8 sm:mb-20 lg:mx-12 lg:grid-cols-2"
      >
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14 xl:px-20">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#ff7a00] sm:text-[10px]">
            The BSPX point of view
          </p>

          <h2 className="display-font mt-4 text-3xl font-semibold leading-tight tracking-[-0.06em] sm:text-4xl lg:text-5xl">
            Your wardrobe.
            <br />
            Your everyday ritual.
          </h2>

          <p className="mt-5 max-w-md text-xs leading-6 text-stone-600 sm:text-sm sm:leading-7">
            Great style doesn't need to be complicated. Start with versatile
            T-shirts, find the fit that feels right, and build a wardrobe that
            feels like you.
          </p>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("shop")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-7 inline-flex w-fit items-center gap-3 border-b border-stone-500 pb-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition hover:border-[#ff7a00] hover:text-[#ff7a00] sm:text-xs"
          >
            Find your fit
            <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="story-image-wrap relative min-h-[280px] overflow-hidden bg-[#d9d4ca] sm:min-h-[420px]">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85"
            alt="Contemporary streetwear styling"
            loading="lazy"
            className="story-image absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="text-[8px] uppercase tracking-[0.2em] text-white/80 sm:text-[9px]">
                Style without the noise
              </p>
              <p className="display-font mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                Keep it simple.
              </p>
            </div>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <div className="rounded-md bg-[#191919] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#ff9b43] sm:text-[10px]">
                Your next favourite tee
              </p>

              <h2 className="display-font mt-3 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl lg:text-4xl">
                Good fits. Better everyday.
              </h2>

              <p className="mt-3 max-w-lg text-xs leading-6 text-white/60 sm:text-sm">
                Explore the collection and find pieces that fit your style.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("shop")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="accent-button inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-white px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-stone-950 hover:bg-[#ff7a00] hover:text-white sm:px-7 sm:text-xs"
            >
              Shop BSPX
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-[#f3f1ec]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p className="display-font text-xl font-extrabold tracking-[-0.09em]">
            BSPX<span className="text-[#ff7a00]">.</span>
          </p>

          <p className="text-[10px] leading-5 text-stone-500 sm:text-xs">
            Everyday clothing. Individual expression.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-medium text-stone-600 sm:text-xs">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("shop")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="transition hover:text-[#ff7a00]"
            >
              Shop
            </button>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("story")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="transition hover:text-[#ff7a00]"
            >
              About
            </button>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="transition hover:text-[#ff7a00]"
            >
              Shopping bag ({cartCount})
            </button>
          </div>
        </div>
      </footer>

      {/* PRODUCT QUICK-VIEW MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-black/65 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedProduct(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="bspx-product-title"
            className="relative my-auto grid max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-md bg-[#f8f7f4] shadow-2xl md:grid-cols-2 md:overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close product details"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-[#ff7a00] hover:text-white"
            >
              <X size={17} />
            </button>

            <div className="relative min-h-[280px] overflow-hidden bg-[#eeece7] sm:min-h-[440px]">
              <img
                key={selectedProduct.id}
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="modal-image absolute inset-0 h-full w-full object-cover"
              />

              {selectedProduct.badge && (
                <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.13em]">
                  {selectedProduct.badge}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#ff7a00]">
                BSPX / {selectedProduct.category}
              </p>

              <h2
                id="bspx-product-title"
                className="display-font mt-3 text-2xl font-semibold leading-tight tracking-[-0.05em] sm:text-3xl"
              >
                {selectedProduct.name}
              </h2>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-lg font-semibold">
                  {money(selectedProduct.price)}
                </span>

                {selectedProduct.oldPrice && (
                  <span className="text-sm text-stone-400 line-through">
                    {money(selectedProduct.oldPrice)}
                  </span>
                )}
              </div>

              <p className="mt-5 text-xs leading-6 text-stone-600 sm:text-sm sm:leading-7">
                {selectedProduct.description}
              </p>

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">
                    Select size
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setNotice(
                        "Available sizes in this demo: S, M, L, XL and XXL."
                      )
                    }
                    className="text-[10px] text-stone-500 underline underline-offset-4"
                  >
                    Size guide
                  </button>
                </div>

                <div className="mt-3 grid grid-cols-5 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() =>
                        setSelectedSizes((current) => ({
                          ...current,
                          [selectedProduct.id]: size,
                        }))
                      }
                      aria-pressed={
                        selectedSizes[selectedProduct.id] === size
                      }
                      className={`flex h-11 items-center justify-center border text-xs font-medium transition ${
                        selectedSizes[selectedProduct.id] === size
                          ? "border-[#191919] bg-[#191919] text-white"
                          : "border-stone-200 bg-white hover:border-[#ff7a00]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7 grid grid-cols-[1fr_48px] gap-2">
                <button
                  type="button"
                  onClick={() =>
                    addToCart(
                      selectedProduct,
                      selectedSizes[selectedProduct.id]
                    )
                  }
                  className="accent-button flex items-center justify-center gap-3 bg-[#191919] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-[#ff7a00] sm:text-xs"
                >
                  <ShoppingBag size={16} />
                  Add to bag
                </button>

                <button
                  type="button"
                  aria-label="Toggle wishlist"
                  onClick={() => toggleWishlist(selectedProduct.id)}
                  className={`flex items-center justify-center border transition ${
                    wishlist.includes(selectedProduct.id)
                      ? "border-[#ff7a00] bg-[#ff7a00] text-white"
                      : "border-stone-300 hover:border-[#ff7a00]"
                  }`}
                >
                  <Heart
                    size={18}
                    fill={
                      wishlist.includes(selectedProduct.id)
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>
              </div>

              <div className="mt-5 flex items-start gap-2 border-t border-stone-200 pt-4 text-[10px] leading-5 text-stone-500">
                <Check size={14} className="mt-0.5 shrink-0 text-[#ff7a00]" />
                <p>Choose your size before adding this product to your bag.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SHOPPING CART DRAWER */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/55 backdrop-blur-[2px]"
          onClick={() => setCartOpen(false)}
          role="presentation"
        >
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
            className="absolute bottom-0 right-0 top-0 flex w-full max-w-md flex-col bg-[#f8f7f4] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-5 sm:px-7">
              <div>
                <h2 className="display-font text-xl font-semibold tracking-tight">
                  Your bag
                </h2>
                <p className="mt-1 text-[10px] text-stone-500">
                  {cartCount} {cartCount === 1 ? "item" : "items"}
                </p>
              </div>

              <button
                type="button"
                aria-label="Close shopping bag"
                onClick={() => setCartOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 transition hover:bg-stone-200"
              >
                <X size={17} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eeece7]">
                  <ShoppingBag size={25} strokeWidth={1.4} />
                </div>

                <h3 className="display-font mt-5 text-xl font-semibold">
                  Your bag is empty.
                </h3>

                <p className="mt-2 max-w-xs text-xs leading-6 text-stone-500">
                  Find your next everyday essential and add it to your bag.
                </p>

                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#191919] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#ff7a00]"
                >
                  Continue shopping
                  <ArrowRight size={15} />
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
                  {cart.map((item) => (
                    <div
                      key={`${item.id}-${item.size}`}
                      className="flex gap-4 border-b border-black/10 py-5 first:pt-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-28 w-24 shrink-0 rounded-sm bg-[#eeece7] object-cover"
                      />

                      <div className="flex min-w-0 flex-1 flex-col">
                        <h3 className="text-xs font-semibold leading-5">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-[10px] text-stone-500">
                          Size: {item.size}
                        </p>

                        <p className="mt-2 text-xs font-semibold">
                          {money(item.price)}
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center border border-stone-200 bg-white">
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() =>
                                changeQuantity(item.id, item.size, -1)
                              }
                              className="flex h-8 w-8 items-center justify-center"
                            >
                              <Minus size={12} />
                            </button>

                            <span className="w-7 text-center text-[10px]">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() =>
                                changeQuantity(item.id, item.size, 1)
                              }
                              className="flex h-8 w-8 items-center justify-center"
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          <span className="text-xs font-semibold">
                            {money(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-black/10 bg-white px-5 py-5 sm:px-7">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-500">Subtotal</span>
                    <span className="font-semibold">{money(cartTotal)}</span>
                  </div>

                  <p className="mt-2 text-[10px] leading-5 text-stone-500">
                    Shipping and taxes are not included.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setNotice(
                        "Connect your ecommerce checkout and payment provider to accept orders."
                      )
                    }
                    className="accent-button mt-5 flex w-full items-center justify-center gap-3 bg-[#191919] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-[#ff7a00] sm:text-xs"
                  >
                    Continue to checkout
                    <ArrowRight size={15} />
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {/* FEEDBACK MESSAGE */}
      {notice && (
        <div className="fixed bottom-4 left-1/2 z-[120] flex w-[calc(100%-32px)] max-w-md -translate-x-1/2 items-start gap-3 rounded-md bg-[#191919] px-4 py-4 text-white shadow-2xl sm:bottom-6">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
            <Check size={14} className="text-[#ff9b43]" />
          </span>

          <p className="flex-1 text-xs leading-5">{notice}</p>

          <button
            type="button"
            aria-label="Dismiss message"
            onClick={() => setNotice("")}
            className="flex h-6 w-6 shrink-0 items-center justify-center text-white/70 hover:text-white"
          >
            <X size={15} />
          </button>
        </div>
      )}
    </main>
  );
}
