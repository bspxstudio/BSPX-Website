
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { ArrowRight, ArrowUpRight, ShoppingBag, X } from "lucide-react";
import { useStorefrontProducts } from "../../data/useAdminContent";

const products = [
  {
    id: 1,
    name: "Essential Black Tee",
    category: "Basic T-Shirts",
    price: 599,
    oldPrice: 799,
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Classic White Tee",
    category: "Basic T-Shirts",
    price: 599,
    oldPrice: null,
    color: "White",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=700&q=85",
    badge: "",
  },
  {
    id: 3,
    name: "Urban Oversized Tee",
    category: "Oversized",
    price: 799,
    oldPrice: 999,
    color: "Neutral",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=85",
    badge: "SALE",
  },
  {
    id: 4,
    name: "Everyday Street Tee",
    category: "Graphic T-Shirts",
    price: 699,
    oldPrice: null,
    color: "Graphic",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=85",
    badge: "",
  },
  {
    id: 5,
    name: "Relaxed Fit Tee",
    category: "Oversized",
    price: 849,
    oldPrice: null,
    color: "Grey",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=85",
    badge: "NEW",
  },
  {
    id: 6,
    name: "Minimal Logo Tee",
    category: "Graphic T-Shirts",
    price: 699,
    oldPrice: 899,
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=700&q=85",
    badge: "SALE",
  },
  {
    id: 7,
    name: "Daily Essential Tee",
    category: "Basic T-Shirts",
    price: 549,
    oldPrice: null,
    color: "White",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f37f4c10?auto=format&fit=crop&w=700&q=85",
    badge: "",
  },
  {
    id: 8,
    name: "Street Culture Tee",
    category: "Graphic T-Shirts",
    price: 749,
    oldPrice: null,
    color: "Graphic",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
    badge: "NEW",
  },
];

const categories = [
  "All Products",
  "Basic T-Shirts",
  "Oversized",
  "Graphic T-Shirts",
];

const readCart = () => {
  try {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    return Array.isArray(saved)
      ? saved.filter((item) => item && item.id != null)
      : [];
  } catch {
    return [];
  }
};

export default function ProcessPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("featured");
  const [cart, setCart] = useState(readCart);
  const [notice, setNotice] = useState("");
  const [selectedSizes, setSelectedSizes] = useState({});
  const [activeProduct, setActiveProduct] = useState(null);

  // Merge existing products with products published from the admin panel.
  const allProducts = useStorefrontProducts(products);

  // Keep the original categories and include any new categories created in admin.
  const availableCategories = useMemo(() => {
    const dynamicCategories = allProducts
      .map((product) => product.category)
      .filter(Boolean);

    return [...new Set([...categories, ...dynamicCategories])];
  }, [allProducts]);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error("Unable to save cart:", error);
    }
  }, [cart]);

  useEffect(() => {
    const syncCart = () => {
      const latest = readCart();
      setCart((current) =>
        JSON.stringify(current) === JSON.stringify(latest) ? current : latest
      );
    };

    window.addEventListener("cartUpdated", syncCart);
    window.addEventListener("storage", syncCart);
    return () => {
      window.removeEventListener("cartUpdated", syncCart);
      window.removeEventListener("storage", syncCart);
    };
  }, []);

  const visibleProducts = useMemo(() => {
    let result =
      activeCategory === "All Products"
        ? [...allProducts]
        : allProducts.filter(
            (product) => product.category === activeCategory
          );

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, sortBy, allProducts]);

  const addToCart = (product) => {
    // Use the selected size, defaulting to Medium.
    const size = selectedSizes[product.id] || "M";

    setCart((current) => {
      const existing = current.find(
        (item) => item.id === product.id && (item.size || "M") === size
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id && (item.size || "M") === size
            ? { ...item, quantity: (Number(item.quantity) || 1) + 1 }
            : item
        );
      }

      return [...current, { ...product, size, quantity: 1 }];
    });

    setNotice(`${product.name} added to cart (size ${size}).`);
  };

  return (
    <main className="bspx-products-page">
      <Helmet>
        <title>Shop All T-Shirts & Streetwear | BSPX</title>
        <meta
          name="description"
          content="Shop BSPX T-shirts, oversized fits, graphic tees and everyday streetwear essentials."
        />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .bspx-products-page {
          --bg: #f5f3ed;
          --ink: #171714;
          --muted: #77776d;
          --line: #dedbd1;
          background: var(--bg);
          color: var(--ink);
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
          width: 100%;
        }

        .bspx-products-page *,
        .bspx-products-page *::before,
        .bspx-products-page *::after {
          box-sizing: border-box;
        }

        .bspx-products-container {
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;
          padding: 0 24px;
        }

        .bspx-shop-banner {
          background: #e9e6dc;
          padding: 54px 0 48px;
          border-bottom: 1px solid var(--line);
        }

        .bspx-eyebrow {
          margin: 0 0 12px;
          color: var(--muted);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        .bspx-page-title {
          margin: 0;
          font-size: clamp(32px, 5vw, 52px);
          line-height: 1.08;
          font-weight: 600;
          letter-spacing: -.06em;
          text-transform: uppercase;
        }

        .bspx-page-title span {
          color: #777b50;
        }

        .bspx-page-description {
          max-width: 490px;
          margin: 14px 0 0;
          color: #66665e;
          font-size: 12px;
          line-height: 1.9;
        }

        .bspx-products-toolbar {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 18px;
          padding-top: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--line);
        }

        .bspx-category-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .bspx-category-button {
          border: 1px solid var(--line);
          background: transparent;
          color: var(--ink);
          padding: 10px 14px;
          cursor: pointer;
          font-family: inherit;
          font-size: 10px;
          transition: background .2s, color .2s, border-color .2s;
        }

        .bspx-category-button:hover,
        .bspx-category-button.active {
          background: var(--ink);
          border-color: var(--ink);
          color: #fff;
        }

        .bspx-sort-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          color: var(--muted);
          font-size: 10px;
        }

        .bspx-sort-select {
          max-width: 175px;
          border: 1px solid var(--line);
          border-radius: 0;
          background: transparent;
          color: var(--ink);
          padding: 10px 28px 10px 10px;
          font-family: inherit;
          font-size: 10px;
          outline-offset: 3px;
        }

        .bspx-product-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px 12px;
          padding-top: 26px;
          padding-bottom: 56px;
        }

        .bspx-product-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(23,23,20,.07);
          border-radius: 18px;
          background: #fbfaf7;
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .bspx-product-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 32px rgba(23,23,20,.07);
        }

        .bspx-product-photo {
          aspect-ratio: 1 / 1.02;
        }

        .bspx-product-details {
          padding: 14px 15px 16px;
        }

        .bspx-product-name {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -.025em;
          color: #171714;
        }

        .bspx-product-description {
          margin: 7px 0 0;
          min-height: 34px;
          color: #77776d;
          font-size: 10px;
          line-height: 1.7;
        }

        .bspx-product-rating {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 13px;
          color: #9b7936;
          font-size: 10px;
        }

        .bspx-product-rating strong { color: #171714; font-weight: 600; }
        .bspx-product-rating small { color: #aaa79f; font-size: 9px; }

        .bspx-product-color-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 13px;
          color: #77776d;
          font-size: 10px;
        }

        .bspx-size-label {
          margin: 13px 0 8px;
          color: #77776d;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .bspx-size-list { display: flex; gap: 7px; }

        .bspx-size-button {
          min-width: 36px;
          height: 32px;
          padding: 0 8px;
          border: 1px solid #dedbd1;
          border-radius: 7px;
          background: transparent;
          color: #45443e;
          font: 500 9px 'Poppins', sans-serif;
          cursor: pointer;
          transition: .2s ease;
        }

        .bspx-size-button.active,
        .bspx-size-button:hover {
          border-color: #171714;
          background: #171714;
          color: white;
        }

        .bspx-card-actions {
          display: grid;
          grid-template-columns: minmax(0,1fr) 44px;
          gap: 8px;
          margin-top: 17px;
        }

        .bspx-add-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 0;
          min-height: 44px;
          border-radius: 999px;
          background: #171714;
          color: #fff;
        }

        .bspx-add-button:hover { background: #777b50; color: #fff; }

        .bspx-quick-view {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          min-height: 44px;
          border: 1px solid #d8d5cc;
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
          transition: .2s ease;
        }
        .bspx-quick-view:hover { background: #171714; color: white; border-color: #171714; }

        .bspx-product-photo {
          position: relative;
          overflow: hidden;
          background: #e8e5dc;
          aspect-ratio: 3 / 4;
        }

        .bspx-product-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s ease;
        }

        .bspx-product-card:hover .bspx-product-photo img {
          transform: scale(1.035);
        }

        .bspx-product-badge {
          position: absolute;
          left: 9px;
          top: 9px;
          padding: 6px 8px;
          background: var(--bg);
          color: var(--ink);
          font-size: 8px;
          letter-spacing: .08em;
        }

        .bspx-product-details {
          padding-top: 12px;
        }

        .bspx-product-name {
          margin: 0;
          font-size: 12px;
          line-height: 1.6;
          font-weight: 500;
        }

        .bspx-product-color {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 10px;
        }

        .bspx-product-price {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          margin-top: 8px;
          font-size: 12px;
          font-weight: 500;
        }

        .bspx-product-old-price {
          color: #89877f;
          font-size: 10px;
          text-decoration: line-through;
          font-weight: 400;
        }

        .bspx-add-button {
          display: block;
          width: 100%;
          margin-top: 12px;
          min-height: 38px;
          border: 1px solid var(--ink);
          background: transparent;
          color: var(--ink);
          font-family: inherit;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: .1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background .2s, color .2s;
        }

        .bspx-add-button:hover {
          background: var(--ink);
          color: white;
        }

        /* Keep the add-to-cart + arrow layout responsive at every card width. */
        .bspx-card-actions {
          display: grid;
          grid-template-columns: minmax(0, 1fr) clamp(34px, 3.2vw, 44px);
          align-items: stretch;
          gap: clamp(5px, 0.7vw, 8px);
          width: 100%;
          min-width: 0;
          margin-top: clamp(12px, 1.2vw, 17px);
        }

        .bspx-card-actions .bspx-add-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(4px, 0.6vw, 8px);
          width: 100%;
          min-width: 0;
          min-height: clamp(36px, 3.3vw, 44px);
          margin: 0;
          padding: 0 clamp(5px, 0.8vw, 12px);
          border: 1px solid var(--ink);
          border-radius: 999px;
          background: transparent;
          color: var(--ink);
          font-family: inherit;
          font-size: clamp(7px, 0.65vw, 9px);
          font-weight: 500;
          letter-spacing: clamp(.02em, .08vw, .1em);
          line-height: 1.1;
          white-space: nowrap;
          overflow: hidden;
        }

        .bspx-card-actions .bspx-add-button svg {
          flex: 0 0 auto;
          width: clamp(11px, 1vw, 14px);
          height: clamp(11px, 1vw, 14px);
        }

        .bspx-card-actions .bspx-add-button:hover {
          background: var(--ink);
          color: #fff;
        }

        .bspx-card-actions .bspx-quick-view {
          width: 100%;
          min-width: 0;
          min-height: clamp(36px, 3.3vw, 44px);
          aspect-ratio: 1 / 1;
        }

        @media (max-width: 480px) {
          .bspx-card-actions {
            grid-template-columns: minmax(0, 1fr) 34px;
            gap: 5px;
            margin-top: 12px;
          }

          .bspx-card-actions .bspx-add-button {
            min-height: 36px;
            padding-inline: 5px;
            gap: 4px;
            font-size: 7px;
            letter-spacing: .025em;
          }

          .bspx-card-actions .bspx-quick-view {
            min-height: 34px;
          }
        }

        @media (max-width: 350px) {
          .bspx-card-actions {
            grid-template-columns: minmax(0, 1fr) 30px;
            gap: 4px;
          }

          .bspx-card-actions .bspx-add-button {
            padding-inline: 3px;
            gap: 3px;
            font-size: 6.5px;
            letter-spacing: 0;
          }

          .bspx-card-actions .bspx-add-button svg {
            width: 10px;
            height: 10px;
          }

          .bspx-card-actions .bspx-quick-view {
            min-height: 30px;
          }
        }

        .bspx-empty-products {
          grid-column: 1 / -1;
          padding: 50px 0;
          text-align: center;
          color: var(--muted);
          font-size: 13px;
        }

        .bspx-cart-status {
          position: fixed;
          right: 18px;
          bottom: 18px;
          z-index: 50;
          max-width: calc(100% - 36px);
          padding: 14px 18px;
          background: var(--ink);
          color: #fff;
          font-size: 11px;
          box-shadow: 0 8px 24px rgba(0,0,0,.15);
        }

        .bspx-products-footer {
          padding: 34px 0;
          background: var(--ink);
          color: white;
          text-align: center;
        }

        .bspx-products-footer h2 {
          margin: 0;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 500;
          letter-spacing: -.04em;
        }

        .bspx-products-footer p {
          margin: 10px 0 0;
          color: rgba(255,255,255,.6);
          font-size: 11px;
          line-height: 1.8;
        }

        @media (min-width: 640px) {
          .bspx-products-container {
            padding-right: 32px;
            padding-left: 32px;
          }

          .bspx-products-toolbar {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .bspx-product-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 34px 18px;
          }
        }

        @media (min-width: 1024px) {
          .bspx-products-container {
            padding-right: 52px;
            padding-left: 52px;
          }

          .bspx-shop-banner {
            padding-top: 66px;
            padding-bottom: 60px;
          }

          .bspx-product-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 40px 22px;
            padding-top: 32px;
          }
        }

        @media (max-width: 480px) {
          .bspx-products-container {
            padding-right: 16px;
            padding-left: 16px;
          }

          .bspx-shop-banner {
            padding-top: 38px;
            padding-bottom: 34px;
          }

          .bspx-page-title {
            font-size: 34px;
          }

          .bspx-products-toolbar {
            padding-top: 22px;
          }

          .bspx-category-list {
            gap: 6px;
          }

          .bspx-category-button {
            padding: 9px 10px;
            font-size: 9px;
          }

          .bspx-product-grid {
            gap: 24px 10px;
            padding-top: 20px;
          }

          .bspx-product-name {
            font-size: 11px;
          }
          .bspx-product-details { padding: 11px 10px 12px; }
          .bspx-product-description { font-size: 9px; }
          .bspx-size-list { gap: 5px; }
          .bspx-size-button { min-width: 30px; height: 30px; padding: 0 6px; }
          .bspx-card-actions { grid-template-columns: minmax(0,1fr) 38px; gap: 6px; }
          .bspx-quick-view { width: 38px; min-height: 40px; }
          .bspx-add-button { gap: 5px; font-size: 8px; }

          .bspx-product-price {
            font-size: 11px;
          }

          .bspx-add-button {
            min-height: 36px;
            font-size: 8px;
          }
        }

        /* Responsive refinements: compact phones, tablets and wide screens */
        .bspx-products-page {
          overflow-x: clip;
        }

        .bspx-products-container,
        .bspx-product-card,
        .bspx-product-details,
        .bspx-products-toolbar {
          min-width: 0;
        }

        .bspx-product-name,
        .bspx-product-description,
        .bspx-product-color-row span {
          overflow-wrap: anywhere;
        }

        .bspx-size-list {
          flex-wrap: wrap;
        }

        .bspx-category-list {
          min-width: 0;
        }

        .bspx-sort-select {
          width: min(175px, 55vw);
          min-width: 0;
        }

        .bspx-cart-status {
          left: 16px;
          right: 16px;
          width: auto;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          line-height: 1.6;
        }

        @media (max-width: 360px) {
          .bspx-products-container {
            padding-left: 12px;
            padding-right: 12px;
          }

          .bspx-page-title {
            font-size: clamp(27px, 9vw, 34px);
          }

          .bspx-product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 8px;
            row-gap: 18px;
          }

          .bspx-product-card {
            border-radius: 12px;
          }

          .bspx-product-details {
            padding: 10px 8px 10px;
          }

          .bspx-product-name {
            font-size: 10px;
          }

          .bspx-product-description {
            min-height: 0;
            font-size: 8px;
          }

          .bspx-product-rating {
            gap: 4px;
            font-size: 9px;
          }

          .bspx-product-rating small {
            font-size: 8px;
          }

          .bspx-product-color-row {
            gap: 5px;
            font-size: 9px;
          }

          .bspx-size-list {
            gap: 4px;
          }

          .bspx-size-button {
            min-width: 27px;
            height: 29px;
            padding: 0 5px;
            font-size: 8px;
          }

          .bspx-card-actions {
            grid-template-columns: minmax(0, 1fr) 34px;
            gap: 5px;
            margin-top: 12px;
          }

          .bspx-add-button {
            min-height: 36px;
            padding: 0 6px;
            gap: 4px;
            font-size: 7px;
            letter-spacing: .04em;
          }

          .bspx-quick-view {
            width: 34px;
            min-height: 36px;
          }

          .bspx-sort-row {
            flex-wrap: wrap;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .bspx-product-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 28px 16px;
          }

          .bspx-product-details {
            padding: 13px 12px 14px;
          }

          .bspx-product-name {
            font-size: 13px;
          }
        }

        @media (min-width: 1280px) {
          .bspx-product-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 38px 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bspx-product-photo img,
          .bspx-category-button,
          .bspx-add-button,
          .bspx-product-card {
            transition: none !important;
          }
        }
      `}</style>

      {/* SHOP PAGE HEADER */}
      <section className="bspx-shop-banner">
        <div className="bspx-products-container">
          <p className="bspx-eyebrow">BSPX / The Collection</p>
          <h1 className="bspx-page-title">
            Shop All <span>Products.</span>
          </h1>
          <p className="bspx-page-description">
            Everyday essentials and streetwear staples.
            Find the fit that feels like you.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTERS AND SORTING */}
      <section className="bspx-products-container">
        <div className="bspx-products-toolbar">
          <div className="bspx-category-list" aria-label="Filter products">
            {availableCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  "bspx-category-button" +
                  (activeCategory === category ? " active" : "")
                }
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="bspx-sort-row">
            <span>{visibleProducts.length} products</span>

            <select
              className="bspx-sort-select"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* ALL PRODUCTS */}
        <div id="bspx-products" className="bspx-product-grid">
          {visibleProducts.length === 0 ? (
            <p className="bspx-empty-products">No products found in this category.</p>
          ) : (
            visibleProducts.map((product) => {
              const sizes = Array.isArray(product.sizes)
                ? product.sizes
                : ["S", "M", "L", "XL"];
              const selectedSize = selectedSizes[product.id] || "M";
              const rating = Number(product.rating || 4.8);
              const reviews = Number(product.reviews || 124);
              const colorHex = product.colorHex ||
                (/white|cloud|cream/i.test(product.color || "") ? "#f4f1e9" :
                 /grey|gray|stone/i.test(product.color || "") ? "#aaa99f" : "#22221f");

              return (
                <article className="bspx-product-card" key={product.id}>
                  <div className="bspx-product-photo">
                    <img src={product.image} alt={product.name} loading="lazy" />
                    {product.badge && <span className="bspx-product-badge">{product.badge}</span>}
                    <button
                      type="button"
                      className="bspx-quick-view"
                      style={{ position: "absolute", right: 10, bottom: 10, width: 38, minHeight: 38, background: "#f5f3ed" }}
                      onClick={() => setActiveProduct(product)}
                      aria-label={`View ${product.name}`}
                    >
                      <ArrowUpRight size={17} />
                    </button>
                  </div>

                  <div className="bspx-product-details">
                    <p className="bspx-eyebrow" style={{ marginBottom: 5, fontSize: 8, color: "#82964d" }}>
                      {product.category || "BSPX ESSENTIALS"}
                    </p>
                    <h2 className="bspx-product-name">{product.name}</h2>
                    <p className="bspx-product-description">
                      {product.description || "Relaxed silhouette for effortless everyday styling."}
                    </p>

                    <div className="bspx-product-rating" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
                      <span aria-hidden="true">★★★★<span style={{ color: "#c7c2b7" }}>★</span></span>
                      <strong>{rating.toFixed(1)}</strong>
                      <small>({reviews})</small>
                    </div>

                    <div className="bspx-product-color-row">
                      <span style={{ width: 16, height: 16, borderRadius: "50%", background: colorHex, border: "1px solid rgba(0,0,0,.12)", flexShrink: 0 }} />
                      <span>{product.color || "Classic"}</span>
                    </div>

                    <p className="bspx-size-label">Select size</p>
                    <div className="bspx-size-list">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          className={`bspx-size-button ${selectedSize === size ? "active" : ""}`}
                          aria-pressed={selectedSize === size}
                          onClick={() => setSelectedSizes((previous) => ({ ...previous, [product.id]: size }))}
                        >
                          {size}
                        </button>
                      ))}
                    </div>

                    <div className="bspx-product-price" style={{ marginTop: 17, fontSize: 15, fontWeight: 700 }}>
                      <span>₹{product.price}</span>
                      {product.oldPrice && Number(product.oldPrice) > Number(product.price) && (
                        <span className="bspx-product-old-price">₹{product.oldPrice}</span>
                      )}
                    </div>

                    <div className="bspx-card-actions">
                      <button type="button" className="bspx-add-button" onClick={() => addToCart(product)}>
                        <ShoppingBag size={14} />
                        Add to cart
                      </button>
                      <button type="button" className="bspx-quick-view" onClick={() => setActiveProduct(product)} aria-label={`View ${product.name} details`}>
                        <ArrowRight size={17} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="bspx-products-footer">
        <div className="bspx-products-container">
          <h2>Everyday Style. Your Way.</h2>
          <p>
            Find your essentials and make the look your own.
          </p>
        </div>
      </section>

      {activeProduct && (
        <div
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProduct(null);
          }}
          style={{ position: "fixed", inset: 0, zIndex: 80, display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(8px, 3vw, 16px)", background: "rgba(0,0,0,.6)" }}
        >
          <section role="dialog" aria-modal="true" aria-label={activeProduct.name} style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%, 240px),1fr))", width: "100%", maxWidth: 760, maxHeight: "90vh", overflow: "auto", background: "#f5f3ed", borderRadius: 18 }}>
            <button type="button" onClick={() => setActiveProduct(null)} aria-label="Close product details" style={{ position: "absolute", right: 12, top: 12, zIndex: 2, display: "grid", placeItems: "center", width: 36, height: 36, border: 0, borderRadius: "50%", background: "white", cursor: "pointer" }}>
              <X size={17} />
            </button>
            <div style={{ background: "#e8e5dc", minHeight: 300 }}>
              <img src={activeProduct.image} alt={activeProduct.name} style={{ width: "100%", height: "100%", maxHeight: 480, objectFit: "cover" }} />
            </div>
            <div style={{ padding: "clamp(16px, 4vw, 28px)", alignSelf: "center", minWidth: 0 }}>
              <p className="bspx-eyebrow">{activeProduct.category || "BSPX ESSENTIALS"}</p>
              <h2 style={{ fontSize: 24, lineHeight: 1.2, fontWeight: 600, letterSpacing: "-.04em" }}>{activeProduct.name}</h2>
              <p style={{ marginTop: 12, fontSize: 12, lineHeight: 1.8, color: "#77776d" }}>{activeProduct.description || "Relaxed silhouette for effortless everyday styling."}</p>
              <p style={{ marginTop: 20, fontSize: 20, fontWeight: 700 }}>₹{activeProduct.price} {activeProduct.oldPrice && <del style={{ marginLeft: 8, fontSize: 12, color: "#999" }}>₹{activeProduct.oldPrice}</del>}</p>
              <button type="button" className="bspx-add-button" style={{ marginTop: 22, width: "100%" }} onClick={() => { addToCart(activeProduct); setActiveProduct(null); }}>
                <ShoppingBag size={15} /> Add to cart
              </button>
            </div>
          </section>
        </div>
      )}

      {notice && (
        <div className="bspx-cart-status" role="status">
          <span>{notice} · Cart items: {cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0)}</span>
          <button
            type="button"
            onClick={() => setNotice("")}
            aria-label="Dismiss notification"
            style={{ marginLeft: 12, textDecoration: "underline", background: "transparent", color: "inherit", border: 0, cursor: "pointer" }}
          >
            Dismiss
          </button>
        </div>
      )}
    </main>
  );
}
