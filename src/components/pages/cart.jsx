import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

const formatPrice = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

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

export default function CartPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState(readCart);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState("");
  const [promoMessage, setPromoMessage] = useState("");

  // Keep this page in sync with the Products page and Navigation badge.
  useEffect(() => {
    const syncCart = () => {
      const latestCart = readCart();

      // Ignore the cartUpdated event if localStorage already matches this page.
      // This prevents a render loop when this component dispatches cartUpdated
      // after saving its own state.
      setItems((currentItems) => {
        const current = JSON.stringify(currentItems);
        const latest = JSON.stringify(latestCart);
        return current === latest ? currentItems : latestCart;
      });
    };

    window.addEventListener("cartUpdated", syncCart);
    window.addEventListener("storage", syncCart);

    return () => {
      window.removeEventListener("cartUpdated", syncCart);
      window.removeEventListener("storage", syncCart);
    };
  }, []);

  // Persist changes and notify the navigation cart badge.
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(items));
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error("Unable to save cart:", error);
    }
  }, [items]);

  const itemCount = items.reduce(
    (total, item) => total + Math.max(0, Number(item.quantity) || 0),
    0
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) =>
          total + (Number(item.price) || 0) * (Number(item.quantity) || 0),
        0
      ),
    [items]
  );

  const discount =
    appliedPromo === "BSPX10" ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal === 0 || subtotal >= 1499 ? 0 : 79;
  const total = Math.max(0, subtotal - discount + shipping);

  const updateQuantity = (id, size, change) => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id && (item.size || "") === (size || "")
            ? {
                ...item,
                quantity: Math.max(
                  0,
                  Math.min(10, (Number(item.quantity) || 1) + change)
                ),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
    setAppliedPromo("");
    setPromoMessage("");
  };

  const removeItem = (id, size) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.id === id && item.size === size)
      )
    );
    setAppliedPromo("");
    setPromoMessage("Product removed from your bag.");
  };

  const applyPromo = (event) => {
    event.preventDefault();

    if (subtotal <= 0) {
      setAppliedPromo("");
      setPromoMessage("Add an item before applying a promo code.");
      return;
    }

    if (promoCode.trim().toUpperCase() === "BSPX10") {
      setAppliedPromo("BSPX10");
      setPromoMessage("BSPX10 applied: 10% off your subtotal.");
    } else {
      setAppliedPromo("");
      setPromoMessage("Invalid promo code. Try BSPX10.");
    }
  };

  return (
    <main className="bspx-cart min-h-screen bg-[#f8f7f3] text-[#20211d]">
      <Helmet>
        <title>Shopping Cart | BSPX Clothing</title>
        <meta
          name="description"
          content="Review your BSPX T-shirts, sizes and quantities before checkout."
        />
        <link rel="canonical" href="https://www.bspxstudio.com/cart" />
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
        .bspx-cart { font-family: 'DM Sans', sans-serif; }
        .bspx-cart h1, .bspx-cart h2, .bspx-cart h3 { font-family: 'Manrope', sans-serif; }
        .bspx-cart button, .bspx-cart a, .bspx-cart input { -webkit-tap-highlight-color: transparent; }
        .bspx-cart .product-image { transition: transform .35s ease; }
        .bspx-cart .product-image-wrap:hover .product-image { transform: scale(1.04); }
        .bspx-cart .cart-button { transition: background .2s ease, color .2s ease, border-color .2s ease; }
        .bspx-cart input:focus { outline: none; border-color: #777b61; box-shadow: 0 0 0 2px rgba(119,123,97,.12); }
        @media (prefers-reduced-motion: reduce) {
          .bspx-cart *, .bspx-cart *::before, .bspx-cart *::after { transition-duration: .01ms !important; }
        }
      `}</style>

      <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pb-24">
        {/* Section 1 — Cart header */}
        <section className="mb-9 border-b border-[#deded5] pb-7 sm:mb-12 sm:pb-9">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#777b61]">
            Your BSPX Selection
          </p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Your shopping bag
              </h1>
              <p className="mt-3 text-sm leading-6 text-[#77776f]">
                Your everyday essentials, all in one place.
              </p>
            </div>
            <p className="text-xs text-[#77776f]" aria-live="polite">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </p>
          </div>
        </section>

        {/* Section 2 — Cart items */}
        <section className="mb-12 grid items-start gap-8 lg:grid-cols-[1.55fr_0.85fr] lg:gap-12">
          <div>
            <div className="mb-5 flex items-center justify-between border-b border-[#deded5] pb-3">
              <h2 className="text-base font-semibold">Cart items</h2>
              <Link
                to="/shop"
                className="text-xs font-semibold underline underline-offset-4 hover:text-[#777b61]"
              >
                Continue shopping
              </Link>
            </div>

            {items.length > 0 ? (
              <div className="divide-y divide-[#deded5]">
                {items.map((item) => (
                  <article
                    key={`${item.id}-${item.size || "one-size"}`}
                    className="grid grid-cols-[100px_minmax(0,1fr)] gap-4 py-5 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6"
                  >
                    <Link
                      to="/shop"
                      className="product-image-wrap block aspect-[3/4] overflow-hidden rounded-md bg-[#e9e8e1]"
                    >
                      <img
                        src={item.image}
                        alt={item.name || "BSPX T-shirt"}
                        className="product-image h-full w-full object-cover"
                        loading="lazy"
                      />
                    </Link>

                    <div className="flex min-w-0 flex-col justify-between gap-4">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="text-sm font-semibold leading-5 sm:text-base">
                              {item.name}
                            </h3>
                            <p className="mt-1 text-xs leading-5 text-[#77776f]">
                              {item.variant || item.color || item.category || "BSPX Clothing"}
                            </p>
                            {item.size && (
                              <p className="mt-1 text-xs text-[#77776f]">
                                Size: {item.size}
                              </p>
                            )}
                          </div>
                          <p className="shrink-0 text-sm font-semibold">
                            {formatPrice((Number(item.price) || 0) * (Number(item.quantity) || 0))}
                          </p>
                        </div>
                        <p className="mt-3 text-xs text-[#77776f]">
                          {formatPrice(Number(item.price) || 0)} per item
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div
                          className="flex items-center rounded-md border border-[#deded5] bg-white"
                          aria-label={`Quantity for ${item.name}`}
                        >
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.size, -1)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                            className="cart-button h-9 w-9 text-base hover:bg-[#eeede6] disabled:cursor-not-allowed disabled:opacity-35"
                          >
                            −
                          </button>
                          <span className="min-w-8 text-center text-xs font-semibold" aria-live="polite">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.size, 1)}
                            disabled={item.quantity >= 10}
                            aria-label="Increase quantity"
                            className="cart-button h-9 w-9 text-base hover:bg-[#eeede6] disabled:cursor-not-allowed disabled:opacity-35"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-xs font-medium text-[#77776f] underline underline-offset-4 hover:text-[#20211d]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="border-b border-[#deded5] py-12 text-center">
                <h3 className="mb-3 text-xl font-semibold">Your bag is empty</h3>
                <p className="mb-6 text-sm text-[#77776f]">
                  Looks like you haven't added any T-shirts yet.
                </p>
                <Link
                  to="/shop"
                  className="cart-button inline-block rounded-md bg-[#20211d] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#777b61]"
                >
                  Explore clothing
                </Link>
              </div>
            )}
          </div>

          {/* Section 3 — Order summary */}
          <aside className="rounded-lg border border-[#e2e0d8] bg-white p-5 sm:p-7">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#777b61]">
              Your Order
            </p>
            <h2 className="mb-6 text-xl font-semibold tracking-[-0.03em]">
              Order summary
            </h2>

            <div className="space-y-4 border-b border-[#e8e7df] pb-5 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-[#77776f]">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[#77776f]">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 && subtotal > 0 ? "Free" : formatPrice(shipping)}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between gap-4 text-[#777b61]">
                  <span>Discount (BSPX10)</span>
                  <span>-{formatPrice(discount)}</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 py-5">
              <span className="text-sm font-semibold">Estimated total</span>
              <span className="text-xl font-bold">{formatPrice(total)}</span>
            </div>

            <p className="mb-5 text-xs leading-5 text-[#85857d]">
              {subtotal === 0
                ? "Add products to see your order total."
                : subtotal >= 1499
                  ? "Your order qualifies for free shipping."
                  : `Add ${formatPrice(1499 - subtotal)} more for free shipping.`}
            </p>

            <button
              type="button"
              disabled={items.length === 0}
              onClick={() => navigate("/checkout", { state: { items, subtotal, discount, shipping, total } })}
              className="cart-button block w-full rounded-md bg-[#20211d] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.13em] text-white hover:bg-[#777b61] disabled:cursor-not-allowed disabled:bg-[#d9d8d0] disabled:text-[#77776f]"
            >
              {items.length > 0 ? "Proceed to checkout" : "Cart is empty"}
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-[#85857d]">
              Final delivery details are confirmed at checkout.
            </p>
          </aside>
        </section>

        {/* Section 4 — Promo code */}
        <section className="mb-12 border-y border-[#deded5] py-7 sm:py-8">
          <div className="grid gap-5 sm:grid-cols-2 sm:items-center">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#777b61]">
                A Little Extra
              </p>
              <h2 className="text-xl font-semibold">Have a promo code?</h2>
              <p className="mt-2 text-sm leading-6 text-[#77776f]">
                Enter your code to see your discount reflected in the total.
              </p>
            </div>

            <form onSubmit={applyPromo} className="flex min-w-0 gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(event) => {
                  setPromoCode(event.target.value);
                  setPromoMessage("");
                }}
                placeholder="Enter code"
                aria-label="Promo code"
                className="min-w-0 flex-1 rounded-md border border-[#deded5] bg-white px-4 py-3 text-sm uppercase"
              />
              <button
                type="submit"
                disabled={items.length === 0}
                className="cart-button rounded-md bg-[#20211d] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#777b61] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Apply
              </button>
            </form>
          </div>

          {promoMessage && (
            <p role="status" className="mt-3 text-xs leading-5 text-[#777b61]">
              {promoMessage}
            </p>
          )}
        </section>

        {/* Section 5 — Shopping benefits */}
        <section className="mb-12 sm:mb-16">
          <div className="mb-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#777b61]">
              Shopping With BSPX
            </p>
            <h2 className="text-2xl font-semibold tracking-[-0.035em]">
              Made for everyday wear
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="border-t border-[#deded5] py-5">
              <h3 className="mb-2 text-sm font-semibold">Everyday essentials</h3>
              <p className="text-sm leading-6 text-[#77776f]">
                Explore T-shirts and versatile styles for your daily wardrobe.
              </p>
            </div>
            <div className="border-t border-[#deded5] py-5">
              <h3 className="mb-2 text-sm font-semibold">Fit for your style</h3>
              <p className="text-sm leading-6 text-[#77776f]">
                Review product measurements and sizing details before ordering.
              </p>
            </div>
            <div className="border-t border-[#deded5] py-5">
              <h3 className="mb-2 text-sm font-semibold">Need assistance?</h3>
              <p className="text-sm leading-6 text-[#77776f]">
                Contact our team if you have questions about your purchase.
              </p>
              <Link
                to="/contact"
                className="mt-3 inline-block text-xs font-semibold underline underline-offset-4 hover:text-[#777b61]"
              >
                Contact BSPX
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6 — Continue shopping */}
        <section className="rounded-xl bg-[#eae9e1] px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#777b61]">
            Find Your Next Favourite
          </p>
          <h2 className="mx-auto mb-4 max-w-xl text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
            Good basics. Better everyday style.
          </h2>
          <p className="mx-auto mb-7 max-w-md text-sm leading-6 text-[#77776f]">
            Keep exploring T-shirts, oversized fits and everyday clothing
            essentials from BSPX.
          </p>
          <Link
            to="/shop"
            className="cart-button inline-block rounded-md bg-[#20211d] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white hover:bg-[#777b61]"
          >
            Continue shopping
          </Link>
        </section>
      </div>
    </main>
  );
}
