
import React from "react";
import { Helmet } from "react-helmet";

const values = [
  {
    number: "01",
    title: "Everyday Comfort",
    description:
      "Explore easy-to-style T-shirts for your daily wardrobe.",
  },
  {
    number: "02",
    title: "Personal Style",
    description:
      "From minimal basics to oversized fits, wear what feels like you.",
  },
  {
    number: "03",
    title: "Versatile Essentials",
    description:
      "Build different looks around simple, easy-to-wear clothing.",
  },
];

const collections = [
  {
    title: "Essential T-Shirts",
    description: "Clean, versatile everyday staples.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Oversized Fits",
    description: "Relaxed silhouettes for casual looks.",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Streetwear Style",
    description: "Everyday looks with an individual edge.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
  },
];

export default function AboutPage() {
  return (
    <main className="bspx-about">
      <Helmet>
        <title>About BSPX | T-Shirts & Everyday Streetwear</title>
        <meta
          name="description"
          content="Discover BSPX, a clothing brand focused on everyday T-shirts, relaxed fits and streetwear-inspired style."
        />
        <meta
          name="keywords"
          content="BSPX clothing, BSPX T-shirts, oversized T-shirts, streetwear, everyday clothing"
        />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .bspx-about {
          --bg: #f5f3ed;
          --ink: #171714;
          --muted: #77776d;
          --line: #dedbd1;
          --accent: #777b50;
          width: 100%;
          overflow: hidden;
          background: var(--bg);
          color: var(--ink);
          font-family: 'Poppins', sans-serif;
        }

        .bspx-about *,
        .bspx-about *::before,
        .bspx-about *::after {
          box-sizing: border-box;
        }

        .bspx-about-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding-right: 24px;
          padding-left: 24px;
        }

        .bspx-about-eyebrow {
          margin: 0 0 13px;
          color: var(--muted);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .17em;
          text-transform: uppercase;
        }

        .bspx-about-title {
          margin: 0;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 500;
          line-height: 1.12;
          letter-spacing: -.055em;
        }

        .bspx-about-title span {
          color: var(--accent);
        }

        .bspx-about-description {
          color: #68685f;
          font-size: 12px;
          line-height: 1.9;
        }

        .bspx-about-button {
          display: inline-flex;
          min-height: 43px;
          align-items: center;
          justify-content: center;
          padding: 12px 21px;
          border: 1px solid var(--ink);
          background: var(--ink);
          color: #fff;
          font-family: inherit;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .1em;
          text-decoration: none;
          text-transform: uppercase;
          transition: background .2s ease, color .2s ease;
        }

        .bspx-about-button:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
        }

        /* SECTION 1 — HERO */

        .bspx-about-hero {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          align-items: center;
          gap: 28px;
          padding-top: 38px;
          padding-bottom: 40px;
        }

        .bspx-about-hero-title {
          margin: 0;
          font-size: clamp(38px, 7vw, 64px);
          font-weight: 600;
          line-height: .99;
          letter-spacing: -.07em;
          text-transform: uppercase;
        }

        .bspx-about-hero-title span {
          color: var(--accent);
        }

        .bspx-about-hero-copy {
          max-width: 440px;
          margin: 18px 0 0;
          color: #68685f;
          font-size: 12px;
          line-height: 1.9;
        }

        .bspx-about-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 23px;
        }

        .bspx-about-button-light {
          background: transparent;
          color: var(--ink);
        }

        .bspx-about-button-light:hover {
          color: #fff;
        }

        .bspx-about-hero-visual {
          position: relative;
          min-width: 0;
          overflow: hidden;
          background: #e6e2d7;
        }

        .bspx-about-hero-visual img {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 300px;
          max-height: 520px;
          object-fit: cover;
          transition: transform .5s ease;
        }

        .bspx-about-hero-visual:hover img {
          transform: scale(1.025);
        }

        .bspx-about-image-caption {
          position: absolute;
          right: 12px;
          bottom: 12px;
          padding: 9px 12px;
          background: var(--bg);
          color: var(--ink);
          font-size: 9px;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        /* SECTION 2 — BRAND STORY */

        .bspx-about-story {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 24px;
          padding-top: 46px;
          padding-bottom: 48px;
          border-top: 1px solid var(--line);
        }

        .bspx-about-story-copy {
          max-width: 690px;
        }

        .bspx-about-story-copy p {
          margin: 15px 0 0;
        }

        .bspx-about-story-panel {
          align-self: end;
          padding: 24px;
          border: 1px solid var(--line);
        }

        .bspx-about-story-panel h3 {
          margin: 0;
          font-size: 21px;
          font-weight: 500;
          line-height: 1.35;
          letter-spacing: -.04em;
        }

        .bspx-about-story-panel p {
          margin: 10px 0 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.8;
        }

        /* SECTION 3 — BRAND VALUES */

        .bspx-about-values {
          padding-top: 44px;
          padding-bottom: 48px;
          background: #eae7dd;
        }

        .bspx-about-values-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          margin-top: 24px;
          border-top: 1px solid #d5d1c6;
        }

        .bspx-about-value {
          padding: 22px 0;
          border-bottom: 1px solid #d5d1c6;
        }

        .bspx-about-value-number {
          display: block;
          margin-bottom: 18px;
          color: var(--accent);
          font-size: 10px;
          letter-spacing: .12em;
        }

        .bspx-about-value h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: -.025em;
        }

        .bspx-about-value p {
          max-width: 330px;
          margin: 8px 0 0;
          color: #68685f;
          font-size: 11px;
          line-height: 1.85;
        }

        /* SECTION 4 — COLLECTIONS */

        .bspx-about-collections {
          padding-top: 48px;
          padding-bottom: 52px;
        }

        .bspx-about-collections-heading {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 22px;
        }

        .bspx-about-collections-heading p:last-child {
          max-width: 380px;
          margin: 9px 0 0;
        }

        .bspx-about-collection-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 22px;
        }

        .bspx-about-collection {
          min-width: 0;
          color: var(--ink);
          text-decoration: none;
        }

        .bspx-about-collection-image {
          overflow: hidden;
          aspect-ratio: 4 / 4.6;
          background: #e5e1d6;
        }

        .bspx-about-collection-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s ease;
        }

        .bspx-about-collection:hover img {
          transform: scale(1.035);
        }

        .bspx-about-collection h3 {
          margin: 13px 0 0;
          font-size: 13px;
          font-weight: 500;
        }

        .bspx-about-collection p {
          margin: 5px 0 0;
          color: var(--muted);
          font-size: 10px;
          line-height: 1.7;
        }

        /* SECTION 5 — BRAND PROMISE */

        .bspx-about-promise {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 28px;
          padding-top: 34px;
          padding-bottom: 38px;
          background: #eae7dd;
        }

        .bspx-about-promise-copy {
          max-width: 600px;
        }

        .bspx-about-promise-copy p:last-child {
          margin: 14px 0 0;
        }

        .bspx-about-promise-list {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 0;
          border-top: 1px solid #d5d1c6;
        }

        .bspx-about-promise-item {
          padding: 15px 0;
          border-bottom: 1px solid #d5d1c6;
          font-size: 12px;
          font-weight: 400;
        }

        .bspx-about-promise-item span {
          display: inline-block;
          width: 38px;
          color: var(--accent);
          font-size: 10px;
        }

        /* SECTION 6 — CTA */

        .bspx-about-cta {
          padding-top: 42px;
          padding-bottom: 46px;
          background: var(--ink);
          color: #fff;
          text-align: center;
        }

        .bspx-about-cta .bspx-about-eyebrow {
          color: rgba(255,255,255,.55);
        }

        .bspx-about-cta .bspx-about-title {
          font-size: clamp(26px, 4vw, 38px);
        }

        .bspx-about-cta .bspx-about-title span {
          color: #c7c8a0;
        }

        .bspx-about-cta-copy {
          max-width: 420px;
          margin: 12px auto 0;
          color: rgba(255,255,255,.62);
          font-size: 11px;
          line-height: 1.9;
        }

        .bspx-about-cta .bspx-about-button {
          margin-top: 22px;
          background: var(--bg);
          border-color: var(--bg);
          color: var(--ink);
        }

        .bspx-about-cta .bspx-about-button:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
        }

        @media (min-width: 640px) {
          .bspx-about-container {
            padding-right: 32px;
            padding-left: 32px;
          }

          .bspx-about-values-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 22px;
          }

          .bspx-about-value {
            padding: 22px 0 0;
            border-bottom: 0;
          }

          .bspx-about-collection-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }

          .bspx-about-promise {
            grid-template-columns: minmax(0, 1fr) minmax(0, .9fr);
            gap: 30px;
          }
        }

        @media (min-width: 900px) {
          .bspx-about-container {
            padding-right: 52px;
            padding-left: 52px;
          }

          .bspx-about-hero {
            grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
            gap: 58px;
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .bspx-about-hero-visual img {
            min-height: 430px;
          }

          .bspx-about-story {
            grid-template-columns: minmax(0, 1.5fr) minmax(240px, .7fr);
            gap: 56px;
            padding-top: 64px;
            padding-bottom: 68px;
          }

          .bspx-about-values {
            padding-top: 56px;
            padding-bottom: 62px;
          }

          .bspx-about-collections {
            padding-top: 62px;
            padding-bottom: 68px;
          }

          .bspx-about-collections-heading {
            flex-direction: row;
            align-items: flex-end;
          }

          .bspx-about-collection-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 24px;
          }

          .bspx-about-promise {
            padding-top: 48px;
            padding-bottom: 48px;
            gap: 60px;
          }
        }

        @media (max-width: 480px) {
          .bspx-about-container {
            padding-right: 16px;
            padding-left: 16px;
          }

          .bspx-about-hero {
            gap: 23px;
            padding-top: 30px;
            padding-bottom: 32px;
          }

          .bspx-about-hero-title {
            font-size: clamp(36px, 10.5vw, 46px);
          }

          .bspx-about-hero-visual img {
            min-height: 250px;
          }

          .bspx-about-button {
            padding-right: 15px;
            padding-left: 15px;
            font-size: 9px;
          }

          .bspx-about-story {
            padding-top: 36px;
            padding-bottom: 38px;
          }

          .bspx-about-values {
            padding-top: 34px;
            padding-bottom: 38px;
          }

          .bspx-about-collections {
            padding-top: 36px;
            padding-bottom: 40px;
          }

          .bspx-about-collection-grid {
            gap: 20px;
          }

          .bspx-about-promise {
            padding-top: 30px;
            padding-bottom: 32px;
          }

          .bspx-about-cta {
            padding: 34px 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bspx-about-hero-visual img,
          .bspx-about-collection-image img,
          .bspx-about-button {
            transition: none;
          }
        }
      `}</style>

      {/* SECTION 1: HERO */}
      <section className="bspx-about-container bspx-about-hero">
        <div>
          <p className="bspx-about-eyebrow">BSPX / About Us</p>

          <h1 className="bspx-about-hero-title">
            Wear Your
            <br />
            <span>Own Style.</span>
          </h1>

          <p className="bspx-about-hero-copy">
            Everyday T-shirts. Streetwear-inspired looks. Clothing
            that gives you room to express your own style.
          </p>

          <div className="bspx-about-actions">
            <a href="/shop" className="bspx-about-button">
              Shop Collection
            </a>

            <a
              href="#bspx-brand-story"
              className="bspx-about-button bspx-about-button-light"
            >
              Discover BSPX
            </a>
          </div>
        </div>

        <div className="bspx-about-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=85"
            alt="Casual T-shirts and streetwear clothing"
            loading="eager"
          />
          <span className="bspx-about-image-caption">
            Everyday Clothing
          </span>
        </div>
      </section>

      {/* SECTION 2: BRAND STORY */}
      <section
        id="bspx-brand-story"
        className="bspx-about-container bspx-about-story"
      >
        <div className="bspx-about-story-copy">
          <p className="bspx-about-eyebrow">Our Story</p>

          <h2 className="bspx-about-title">
            Simple Clothes.
            <br />
            <span>Individual Style.</span>
          </h2>

          <p className="bspx-about-description">
            BSPX is built around the idea that everyday clothing can
            be simple without feeling ordinary. What you wear is one
            way to express who you are, and your wardrobe should make
            that expression feel natural.
          </p>

          <p className="bspx-about-description">
            From versatile T-shirts to relaxed streetwear-inspired
            fits, our focus is on styles that are easy to wear and
            easy to make your own.
          </p>
        </div>

        <div className="bspx-about-story-panel">
          <p className="bspx-about-eyebrow">The BSPX Approach</p>

          <h3>
            Everyday essentials.
            <br />
            Your own identity.
          </h3>

          <p>
            Find your fit, build your look, and make everyday style
            personal.
          </p>
        </div>
      </section>

      {/* SECTION 3: BRAND VALUES */}
      <section className="bspx-about-values">
        <div className="bspx-about-container">
          <p className="bspx-about-eyebrow">What We Stand For</p>

          <h2 className="bspx-about-title">
            The BSPX <span>Mindset.</span>
          </h2>

          <div className="bspx-about-values-grid">
            {values.map((value) => (
              <article
                className="bspx-about-value"
                key={value.number}
              >
                <span className="bspx-about-value-number">
                  {value.number}
                </span>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CLOTHING COLLECTIONS */}
      <section className="bspx-about-container bspx-about-collections">
        <div className="bspx-about-collections-heading">
          <div>
            <p className="bspx-about-eyebrow">Explore The Collection</p>

            <h2 className="bspx-about-title">
              Find Your <span>Fit.</span>
            </h2>

            <p className="bspx-about-description">
              Discover everyday T-shirts and streetwear-inspired styles.
            </p>
          </div>

          <a href="/shop" className="bspx-about-button">
            Shop All Products
          </a>
        </div>

        <div className="bspx-about-collection-grid">
          {collections.map((collection, index) => (
            <a
              href="/shop"
              className="bspx-about-collection"
              key={collection.title}
            >
              <div className="bspx-about-collection-image">
                <img
                  src={collection.image}
                  alt={collection.title}
                  loading="lazy"
                />
              </div>

              <h3>{collection.title}</h3>

              <p>{collection.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 5: BRAND PROMISE */}
      <section className="bspx-about-promise">
        <div className="bspx-about-container bspx-about-promise-copy">
          <p className="bspx-about-eyebrow">The Everyday Wardrobe</p>

          <h2 className="bspx-about-title">
            Built Around
            <br />
            <span>Your Style.</span>
          </h2>

          <p className="bspx-about-description">
            Your everyday look should feel like you. BSPX brings
            together wardrobe staples and relaxed styles that can
            become part of your regular rotation.
          </p>
        </div>

        <div className="bspx-about-container bspx-about-promise-list">
          <div className="bspx-about-promise-item">
            <span>01</span>
            Everyday T-shirt styles
          </div>

          <div className="bspx-about-promise-item">
            <span>02</span>
            Relaxed and oversized looks
          </div>

          <div className="bspx-about-promise-item">
            <span>03</span>
            Easy-to-style essentials
          </div>

          <div className="bspx-about-promise-item">
            <span>04</span>
            Streetwear-inspired outfits
          </div>
        </div>
      </section>

      {/* SECTION 6: SHOP CTA */}
      <section className="bspx-about-cta">
        <div className="bspx-about-container">
          <p className="bspx-about-eyebrow">Your Style Starts Here</p>

          <h2 className="bspx-about-title">
            Make It <span>Your Own.</span>
          </h2>

          <p className="bspx-about-cta-copy">
            Explore BSPX T-shirts and everyday clothing to find
            pieces that fit your personal style.
          </p>

          <a href="/shop" className="bspx-about-button">
            Shop BSPX
          </a>
        </div>
      </section>
    </main>
  );
}
