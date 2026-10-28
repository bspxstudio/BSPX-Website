
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";

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
      "https://images.unsplash.com/photo-155 shirt-placeholder",
    badge: "NEW",
  },
];

const categories = [
  "All Products",
  "Basic T-Shirts",
  "Oversized",
  "Graphic T-Shirts",
];

export default function ProcessPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("featured");
  const [cart, setCart] = useState([]);
  const [notice, setNotice] = useState("");

  const visibleProducts = useMemo(() => {
    let result =
      activeCategory === "All Products"
        ? [...products]
        : products.filter(
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
  }, [activeCategory, sortBy]);

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
    setNotice(`${product.name} added to cart`);
    window.setTimeout(() => setNotice(""), 2200);
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
        }

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

          .bspx-product-price {
            font-size: 11px;
          }

          .bspx-add-button {
            min-height: 36px;
            font-size: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bspx-product-photo img,
          .bspx-category-button,
          .bspx-add-button {
            transition: none;
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
            {categories.map((category) => (
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
            <p className="bspx-empty-products">
              No products found in this category.
            </p>
          ) : (
            visibleProducts.map((product) => (
              <article className="bspx-product-card" key={product.id}>
                <div className="bspx-product-photo">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />

                  {product.badge && (
                    <span className="bspx-product-badge">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="bspx-product-details">
                  <h2 className="bspx-product-name">
                    {product.name}
                  </h2>

                  <p className="bspx-product-color">
                    {product.color}
                  </p>

                  <div className="bspx-product-price">
                    <span>₹{product.price}</span>

                    {product.oldPrice && (
                      <span className="bspx-product-old-price">
                        ₹{product.oldPrice}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="bspx-add-button"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            ))
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

      {notice && (
        <div className="bspx-cart-status" role="status">
          {notice} · Cart items: {cart.length}
        </div>
      )}
    </main>
  );
}
