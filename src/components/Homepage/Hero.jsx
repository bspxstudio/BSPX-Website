
import React from "react";

const shopLink = "#bspx-products";

export default function Hero() {
  return (
    <main className="bspx-store bg-[#f4f1e9] text-[#171714]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .bspx-store {
          width: 100%;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
        }

        .bspx-store *,
        .bspx-store *::before,
        .bspx-store *::after {
          box-sizing: border-box;
        }

        .bspx-hero {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          align-items: center;
          gap: 28px;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 42px 20px;
        }

        .bspx-hero-copy {
          min-width: 0;
        }

        .bspx-kicker {
          margin-bottom: 18px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #66665e;
        }

        .bspx-heading {
          max-width: 600px;
          margin: 0;
          font-size: clamp(2.5rem, 6vw, 4.6rem);
          font-weight: 600;
          line-height: .98;
          letter-spacing: -.065em;
          text-transform: uppercase;
        }

        .bspx-heading span {
          color: #777b50;
        }

        .bspx-description {
          max-width: 410px;
          margin-top: 20px;
          color: #65655d;
          font-size: 13px;
          line-height: 1.9;
        }

        .bspx-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 26px;
        }

        .bspx-button {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          padding: 12px 22px;
          border: 1px solid #171714;
          background: #171714;
          color: #fff;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .1em;
          text-decoration: none;
          text-transform: uppercase;
          transition: background .2s ease, color .2s ease;
        }

        .bspx-button:hover {
          background: transparent;
          color: #171714;
        }

        .bspx-button-secondary {
          background: transparent;
          color: #171714;
        }

        .bspx-button-secondary:hover {
          background: #171714;
          color: #fff;
        }

        .bspx-product-visual {
          position: relative;
          display: flex;
          min-width: 0;
          min-height: 300px;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #e8e5da;
        }

        .bspx-product-image {
          display: block;
          width: 100%;
          max-width: 530px;
          height: 100%;
          max-height: 530px;
          object-fit: contain;
          mix-blend-mode: multiply;
          transition: transform .45s ease;
        }

        .bspx-product-visual:hover .bspx-product-image {
          transform: scale(1.035);
        }

        .bspx-image-caption {
          position: absolute;
          right: 14px;
          bottom: 14px;
          padding: 9px 12px;
          background: #f4f1e9;
          color: #171714;
          font-size: 9px;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .bspx-bottom-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          max-width: 1440px;
          margin: 0 auto;
          padding: 15px 20px;
          border-top: 1px solid #d8d5ca;
          color: #66665e;
          font-size: 9px;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .bspx-bottom-line p {
          margin: 0;
        }

        .bspx-bottom-line a {
          color: #171714;
          text-decoration: none;
        }

        .bspx-bottom-line a:hover {
          text-decoration: underline;
        }

        @media (min-width: 768px) {
          .bspx-hero {
            grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);
            gap: 40px;
            padding: 56px 36px;
          }

          .bspx-product-visual {
            min-height: 430px;
          }

          .bspx-bottom-line {
            padding-right: 36px;
            padding-left: 36px;
          }
        }

        @media (min-width: 1024px) {
          .bspx-hero {
            gap: 64px;
            padding: 64px 56px;
          }

          .bspx-product-visual {
            min-height: 500px;
          }

          .bspx-bottom-line {
            padding-right: 56px;
            padding-left: 56px;
          }
        }

        @media (max-width: 480px) {
          .bspx-hero {
            gap: 26px;
            padding: 32px 16px 24px;
          }

          .bspx-kicker {
            margin-bottom: 14px;
            font-size: 9px;
          }

          .bspx-heading {
            font-size: clamp(2.45rem, 11vw, 3.3rem);
            line-height: .98;
          }

          .bspx-description {
            margin-top: 16px;
            font-size: 12px;
            line-height: 1.8;
          }

          .bspx-actions {
            margin-top: 21px;
          }

          .bspx-button {
            flex: 1 1 auto;
            padding: 12px 15px;
            font-size: 9px;
          }

          .bspx-product-visual {
            min-height: 270px;
          }

          .bspx-product-image {
            max-height: 340px;
          }

          .bspx-bottom-line {
            align-items: flex-start;
            padding: 13px 16px;
            font-size: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bspx-product-image,
          .bspx-button {
            transition: none;
          }
        }
      `}</style>

      <section className="bspx-hero">
        {/* HERO CONTENT */}
        <div className="bspx-hero-copy">
          <p className="bspx-kicker">
            BSPX — Everyday Streetwear
          </p>

          <h1 className="bspx-heading">
            Wear Your
            <br />
            Own <span>Style.</span>
          </h1>

          <p className="bspx-description">
            Everyday T-shirts. Clean fits. Effortless style.
            Discover clothing made for your everyday look.
          </p>

          <div className="bspx-actions">
            <a href={shopLink} className="bspx-button">
              Shop T-Shirts
            </a>

            <a
              href="#bspx-products"
              className="bspx-button bspx-button-secondary"
            >
              Explore Collection
            </a>
          </div>
        </div>

        {/* PRODUCT IMAGE */}
        <div className="bspx-product-visual">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=90"
            alt="BSPX casual T-shirt collection"
            className="bspx-product-image"
            loading="eager"
          />

          <span className="bspx-image-caption">
            BSPX Essentials
          </span>
        </div>
      </section>

      {/* SIMPLE BOTTOM BAR */}
      <div className="bspx-bottom-line">
        <p>Designed for everyday wear</p>
        <a href={shopLink}>Discover BSPX</a>
      </div>
    </main>
  );
}
