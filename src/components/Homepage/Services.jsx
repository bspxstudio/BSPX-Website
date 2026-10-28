
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Plus,
  Minus,
  Check,
  Star,
  X,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Essential Oversized Tee",
    category: "BSPX ESSENTIALS",
    description: "Relaxed silhouette for effortless everyday styling.",
    price: 899,
    oldPrice: 1199,
    rating: 4.8,
    reviews: 124,
    tag: "BESTSELLER",
    color: "Obsidian Black",
    colorHex: "#22221f",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=90",
    bg: "#e6e3d9",
  },
  {
    id: 2,
    name: "Urban Graphic Tee",
    category: "STREET COLLECTION",
    description: "Statement streetwear with a modern everyday fit.",
    price: 1099,
    oldPrice: 1399,
    rating: 4.7,
    reviews: 86,
    tag: "NEW ARRIVAL",
    color: "Cloud White",
    colorHex: "#f4f1e9",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=90",
    bg: "#e9e6de",
  },
  {
    id: 3,
    name: "Classic Everyday Tee",
    category: "CORE COLLECTION",
    description: "Minimal design for a versatile everyday wardrobe.",
    price: 799,
    oldPrice: 999,
    rating: 4.9,
    reviews: 203,
    tag: "FAVOURITE",
    color: "Natural Beige",
    colorHex: "#c7b69b",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=90",
    bg: "#e5dfd3",
  },
  {
    id: 4,
    name: "Relaxed Fit Essential",
    category: "DAILY UNIFORM",
    description: "Relaxed proportions with a clean streetwear finish.",
    price: 999,
    oldPrice: 1299,
    rating: 4.8,
    reviews: 97,
    tag: "TRENDING",
    color: "Midnight Black",
    colorHex: "#171714",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=90",
    bg: "#deded6",
  },
  {
    id: 5,
    name: "Premium Cotton Tee",
    category: "PREMIUM EDIT",
    description: "A versatile staple for a clean, elevated look.",
    price: 1199,
    oldPrice: 1499,
    rating: 4.8,
    reviews: 74,
    tag: "PREMIUM",
    color: "Classic White",
    colorHex: "#f7f5ef",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=90",
    bg: "#e7e4dc",
  },
  {
    id: 6,
    name: "Street Culture Tee",
    category: "GRAPHIC SERIES",
    description: "Contemporary styling inspired by street culture.",
    price: 1099,
    oldPrice: 1399,
    rating: 4.7,
    reviews: 61,
    tag: "JUST DROPPED",
    color: "Charcoal",
    colorHex: "#454540",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=90",
    bg: "#dfded6",
  },
  {
    id: 7,
    name: "Minimal Logo Tee",
    category: "BSPX ORIGINALS",
    description: "Understated design with a modern minimalist feel.",
    price: 899,
    oldPrice: 1099,
    rating: 4.8,
    reviews: 92,
    tag: "ESSENTIAL",
    color: "Stone",
    colorHex: "#b8b2a6",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=90",
    bg: "#e8e3d9",
  },
  {
    id: 8,
    name: "Weekend Oversized Tee",
    category: "RELAXED COLLECTION",
    description: "An easygoing silhouette for off-duty streetwear.",
    price: 999,
    oldPrice: 1299,
    rating: 4.9,
    reviews: 115,
    tag: "POPULAR",
    color: "Off White",
    colorHex: "#eee9dc",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=90",
    bg: "#e5e0d6",
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

export default function Products() {
  const [cart, setCart] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [activeProduct, setActiveProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const addToCart = (product) => {
    const size = selectedSizes[product.id];

    if (!size) {
      setNotice(`Please select a size for ${product.name}.`);
      return;
    }

    setCart((previous) => {
      const existing = previous.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existing) {
        return previous.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...product, size, quantity: 1 }];
    });

    setNotice(`${product.name} added to your bag.`);
    setActiveProduct(null);
  };

  const changeQuantity = (id, size, change) => {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id, size) => {
    setCart((previous) =>
      previous.filter(
        (item) => !(item.id === id && item.size === size)
      )
    );
  };

  return (
    <section
      id="shop"
      className="bspx-products bg-[#f4f1e9] px-4 py-14 text-[#171714] sm:px-8 sm:py-20 lg:px-14 lg:py-24"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .bspx-products {
          font-family: 'Poppins', sans-serif;
        }

        .bspx-product-scene {
          perspective: 1100px;
          transform-style: preserve-3d;
        }

        .bspx-product-image {
          transform: rotateY(-8deg) rotateX(2deg) scale(.92);
          filter: drop-shadow(0 22px 18px rgba(0,0,0,.14));
          transition: transform .7s cubic-bezier(.2,.8,.2,1),
                      filter .7s ease;
        }

        .bspx-product-card:hover .bspx-product-image {
          transform: rotateY(0deg) rotateX(0deg) scale(1.02) translateY(-7px);
          filter: drop-shadow(0 32px 24px rgba(0,0,0,.2));
        }

        .bspx-product-card {
          transition: transform .4s ease, box-shadow .4s ease;
        }

        .bspx-product-card:hover {
          transform: translateY(-5px);
        }

        .bspx-product-orbit {
          transition: transform .7s ease;
        }

        .bspx-product-card:hover .bspx-product-orbit {
          transform: scale(1.07) rotate(8deg);
        }

        .bspx-size-button {
          transition: background .2s ease, color .2s ease,
                      border-color .2s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .bspx-product-image,
          .bspx-product-card,
          .bspx-product-orbit {
            transition: none;
          }
        }
      `}</style>

      {/* SECTION HEADER */}
      <div className="mx-auto mb-8 flex max-w-[1500px] items-end justify-between gap-3 sm:mb-14">
        <div>
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[.2em] text-[#78953c] sm:mb-3 sm:text-[10px] sm:tracking-[.24em]">
            BSPX STUDIO / THE LATEST DROP
          </p>

          <h2 className="text-2xl font-bold uppercase leading-tight tracking-[-.06em] sm:text-4xl md:text-5xl lg:text-6xl">
            Shop the
            <span className="text-[#849c4e]"> collection.</span>
          </h2>

          <p className="mt-2 max-w-lg text-[10px] leading-5 text-black/55 sm:mt-3 sm:text-sm sm:leading-6">
            Elevated essentials. Distinctive streetwear. Find your next
            everyday favourite.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setCartOpen(true)}
          aria-label={`Open shopping bag, ${cartCount} items`}
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#171714] text-white transition hover:bg-[#819a49] sm:h-14 sm:w-14"
        >
          <ShoppingBag size={17} />

          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c8f169] px-1 text-[9px] font-bold text-black">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* RESPONSIVE PRODUCT GRID: TWO COLUMNS ON MOBILE */}
      <div
        id="all-products"
        className="mx-auto grid max-w-[1500px] grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
      >
        {products.map((product) => {
          const selectedSize = selectedSizes[product.id];

          return (
            <article
              key={product.id}
              className="bspx-product-card min-w-0 overflow-hidden rounded-xl border border-black/[.055] bg-white/60 sm:rounded-2xl"
            >
              {/* PRODUCT IMAGE */}
              <div
                className="bspx-product-scene relative overflow-hidden"
                style={{ backgroundColor: product.bg }}
              >
                <div className="relative flex aspect-[4/4.5] items-center justify-center overflow-hidden">
                  <div className="bspx-product-orbit absolute h-[75%] w-[75%] rounded-full border border-black/[.055]" />

                  <div className="absolute h-[58%] w-[58%] rounded-full bg-white/35 blur-3xl" />

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="bspx-product-image relative z-10 h-[88%] w-[88%] object-contain"
                  />

                  <span className="absolute left-2 top-2 z-20 max-w-[75%] truncate rounded-full bg-[#171714] px-2 py-1.5 text-[7px] font-semibold uppercase tracking-[.06em] text-white sm:left-4 sm:top-4 sm:px-3 sm:py-2 sm:text-[8px] sm:tracking-[.12em]">
                    {product.tag}
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveProduct(product)}
                    aria-label={`View ${product.name} details`}
                    className="absolute bottom-2 right-2 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-[#f4f1e9] transition hover:rotate-45 hover:bg-[#c8f169] sm:bottom-4 sm:right-4 sm:h-10 sm:w-10"
                  >
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>

              {/* PRODUCT DETAILS */}
              <div className="p-3 sm:p-5">
                <p className="truncate text-[7px] font-semibold uppercase tracking-[.1em] text-[#82964d] sm:text-[8px] sm:tracking-[.19em]">
                  {product.category}
                </p>

                <h3 className="mt-1.5 min-h-[2.2rem] text-xs font-semibold leading-snug tracking-[-.025em] sm:mt-2 sm:min-h-0 sm:text-base">
                  {product.name}
                </h3>

                <p className="mt-2 hidden min-h-[36px] text-[11px] leading-[1.8] text-black/55 sm:block">
                  {product.description}
                </p>

                {/* RATING */}
                <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:mt-3 sm:gap-2">
                  <div
                    className="flex items-center gap-px text-[#9b7936]"
                    aria-label={`${product.rating} out of 5 stars`}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={9}
                        fill={
                          star <= Math.floor(product.rating)
                            ? "currentColor"
                            : "none"
                        }
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <span className="text-[9px] font-semibold sm:text-[10px]">
                    {product.rating.toFixed(1)}
                  </span>

                  <span className="hidden text-[9px] text-black/40 sm:inline">
                    ({product.reviews})
                  </span>
                </div>

                {/* COLOR */}
                <div className="mt-3 flex min-w-0 items-center gap-1.5 sm:mt-4 sm:gap-2">
                  <span
                    className="h-3.5 w-3.5 shrink-0 rounded-full border border-black/15 sm:h-4 sm:w-4"
                    style={{ backgroundColor: product.colorHex }}
                  />

                  <span className="truncate text-[9px] text-black/60 sm:text-[10px]">
                    {product.color}
                  </span>
                </div>

                {/* SIZE SELECTION */}
                <div className="mt-3 sm:mt-4">
                  <p className="mb-2 text-[8px] font-semibold uppercase tracking-wider text-black/50 sm:text-[9px]">
                    Select size
                  </p>

                  <div className="flex gap-1 sm:gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        aria-pressed={selectedSize === size}
                        onClick={() =>
                          setSelectedSizes((previous) => ({
                            ...previous,
                            [product.id]: size,
                          }))
                        }
                        className={`bspx-size-button flex h-7 min-w-0 flex-1 items-center justify-center rounded-md border text-[9px] font-semibold sm:h-8 sm:flex-none sm:w-9 sm:text-[10px] ${
                          selectedSize === size
                            ? "border-[#171714] bg-[#171714] text-white"
                            : "border-black/10 bg-transparent text-black/70 hover:border-black"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* PRICE */}
                <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:mt-5 sm:gap-2">
                  <span className="text-sm font-bold tracking-tight sm:text-base">
                    {formatPrice(product.price)}
                  </span>

                  <span className="text-[9px] text-black/35 line-through sm:text-[11px]">
                    {formatPrice(product.oldPrice)}
                  </span>
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-3 grid grid-cols-[1fr_34px] gap-1.5 sm:mt-4 sm:grid-cols-[1fr_auto] sm:gap-2">
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="flex h-10 min-w-0 items-center justify-center gap-1 rounded-full bg-[#171714] px-1.5 text-[8px] font-semibold uppercase tracking-[-.02em] text-white transition hover:bg-[#819a49] sm:h-11 sm:gap-2 sm:px-3 sm:text-[10px] sm:tracking-[.09em]"
                  >
                    <ShoppingBag size={12} className="shrink-0 sm:h-[14px] sm:w-[14px]" />
                    <span className="truncate">Add to cart</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveProduct(product)}
                    aria-label={`Shop ${product.name}`}
                    className="flex h-10 w-[34px] items-center justify-center rounded-full border border-black/15 transition hover:border-[#171714] hover:bg-[#c8f169] sm:h-11 sm:w-11"
                  >
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* COLLECTION FOOTER */}
      <div className="mx-auto mt-10 flex max-w-[1500px] flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 sm:mt-12 sm:flex-row sm:gap-5 sm:pt-7">
        <p className="text-center text-[8px] font-medium uppercase tracking-[.12em] text-black/45 sm:text-left sm:text-[9px] sm:tracking-[.16em]">
          BSPX STUDIO / DESIGNED FOR YOUR EVERYDAY
        </p>

        <a
          href="#all-products"
          className="inline-flex items-center gap-3 rounded-full border border-black/15 px-5 py-3 text-[9px] font-semibold uppercase tracking-[.12em] transition hover:bg-[#171714] hover:text-white"
        >
          Explore the collection
          <ArrowRight size={14} />
        </a>
      </div>

      {/* STATUS MESSAGE */}
      {notice && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-[100] flex w-[calc(100%-32px)] max-w-md -translate-x-1/2 items-center gap-3 rounded-xl bg-[#171714] px-4 py-4 text-xs text-white shadow-2xl"
        >
          <Check size={17} className="shrink-0 text-[#c8f169]" />
          <span className="flex-1">{notice}</span>
          <button
            type="button"
            onClick={() => setNotice("")}
            aria-label="Dismiss message"
          >
            <X size={15} />
          </button>
        </div>
      )}

      {/* QUICK VIEW MODAL */}
      {activeProduct && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-black/65 p-3 backdrop-blur-sm sm:p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveProduct(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeProduct.name}
            className="relative grid max-h-[94dvh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-2xl bg-[#f4f1e9] sm:grid-cols-2"
          >
            <button
              type="button"
              onClick={() => setActiveProduct(null)}
              aria-label="Close product details"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90"
            >
              <X size={17} />
            </button>

            <div
              className="flex min-h-[200px] items-center justify-center p-5 sm:min-h-[430px]"
              style={{ backgroundColor: activeProduct.bg }}
            >
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="max-h-[300px] w-full object-contain drop-shadow-2xl sm:max-h-[390px]"
              />
            </div>

            <div className="flex flex-col justify-center p-5 sm:p-8">
              <p className="text-[9px] font-semibold uppercase tracking-[.18em] text-[#819a49]">
                {activeProduct.category}
              </p>

              <h3 className="mt-3 text-xl font-bold leading-tight tracking-[-.05em] sm:text-2xl">
                {activeProduct.name}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-xs">
                <Star size={14} fill="#9b7936" color="#9b7936" />
                <span className="font-semibold">
                  {activeProduct.rating.toFixed(1)}
                </span>
                <span className="text-black/45">
                  ({activeProduct.reviews} reviews)
                </span>
              </div>

              <p className="mt-4 text-xs leading-6 text-black/60">
                {activeProduct.description}
              </p>

              <p className="mt-4 text-xl font-bold">
                {formatPrice(activeProduct.price)}
                <span className="ml-2 text-sm font-normal text-black/35 line-through">
                  {formatPrice(activeProduct.oldPrice)}
                </span>
              </p>

              <p className="mb-3 mt-5 text-[10px] font-semibold uppercase tracking-wider">
                Choose your size
              </p>

              <div className="flex flex-wrap gap-2">
                {activeProduct.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    aria-pressed={selectedSizes[activeProduct.id] === size}
                    onClick={() =>
                      setSelectedSizes((previous) => ({
                        ...previous,
                        [activeProduct.id]: size,
                      }))
                    }
                    className={`bspx-size-button h-10 w-11 rounded-lg border text-xs font-semibold ${
                      selectedSizes[activeProduct.id] === size
                        ? "border-black bg-black text-white"
                        : "border-black/15 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => addToCart(activeProduct)}
                className="mt-6 flex h-12 items-center justify-center gap-2 rounded-full bg-[#171714] text-[10px] font-semibold uppercase tracking-wider text-white transition hover:bg-[#819a49]"
              >
                <ShoppingBag size={16} />
                Add to bag — {formatPrice(activeProduct.price)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SHOPPING CART DRAWER */}
      {cartOpen && (
        <div className="fixed inset-0 z-[90] flex justify-end bg-black/55">
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default"
            aria-label="Close shopping bag"
            onClick={() => setCartOpen(false)}
          />

          <aside className="relative flex h-full w-full max-w-md flex-col bg-[#f4f1e9] shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-5">
              <div>
                <h3 className="text-lg font-bold tracking-tight">
                  Your bag
                </h3>
                <p className="mt-1 text-[10px] text-black/45">
                  {cartCount} item{cartCount === 1 ? "" : "s"}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setCartOpen(false)}
                aria-label="Close bag"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10"
              >
                <X size={17} />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag size={30} strokeWidth={1.3} />
                  <p className="mt-4 text-sm font-semibold">
                    Your bag is empty
                  </p>
                  <p className="mt-2 text-xs text-black/50">
                    Discover your next everyday essential.
                  </p>
                  <button
                    type="button"
                    onClick={() => setCartOpen(false)}
                    className="mt-5 rounded-full bg-black px-6 py-3 text-[10px] font-semibold uppercase tracking-wider text-white"
                  >
                    Continue shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 border-b border-black/10 pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-28 w-24 rounded-xl object-cover"
                    />

                    <div className="flex min-w-0 flex-1 flex-col">
                      <p className="text-xs font-semibold">{item.name}</p>
                      <p className="mt-1 text-[10px] text-black/50">
                        Size: {item.size}
                      </p>

                      <p className="mt-2 text-sm font-bold">
                        {formatPrice(item.price * item.quantity)}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center gap-3 rounded-full border border-black/10 px-2 py-1">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() =>
                              changeQuantity(item.id, item.size, -1)
                            }
                          >
                            <Minus size={12} />
                          </button>

                          <span className="text-[10px] font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() =>
                              changeQuantity(item.id, item.size, 1)
                            }
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="text-[10px] text-black/45 underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-black/10 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-black/55">Subtotal</span>
                  <span className="text-lg font-bold">
                    {formatPrice(cartTotal)}
                  </span>
                </div>

                <p className="mt-2 text-[10px] text-black/45">
                  Shipping and applicable taxes are calculated at checkout.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setNotice(
                      "Connect your checkout and payment gateway to complete your order."
                    )
                  }
                  className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#171714] text-[10px] font-semibold uppercase tracking-wider text-white transition hover:bg-[#819a49]"
                >
                  Proceed to checkout
                  <ArrowRight size={15} />
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </section>
  );
}
