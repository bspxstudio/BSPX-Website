
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";

const formatPrice = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "Tamil Nadu",
    pincode: "",
    country: "India",
  });

  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [notice, setNotice] = useState("");

  // Read the actual cart saved by Products.jsx / CartPage.jsx.
  const [products, setProducts] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const savedCart = JSON.parse(window.localStorage.getItem("cart") || "[]");
      if (!Array.isArray(savedCart)) return [];
      return savedCart.map((item, index) => ({
        ...item,
        id: item.id ?? item.productId ?? index,
        name: item.name || item.title || "BSPX Clothing product",
        variant: item.variant || item.color || item.description || "",
        size: item.size || "M",
        price: Number(item.price ?? item.amount ?? 0),
        quantity: Math.max(1, Number(item.quantity) || 1),
        image: item.image || item.imageUrl || "",
      }));
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const syncCart = () => {
      try {
        const savedCart = JSON.parse(window.localStorage.getItem("cart") || "[]");
        setProducts(Array.isArray(savedCart) ? savedCart.map((item, index) => ({
          ...item,
          id: item.id ?? item.productId ?? index,
          name: item.name || item.title || "BSPX Clothing product",
          variant: item.variant || item.color || item.description || "",
          size: item.size || "M",
          price: Number(item.price ?? item.amount ?? 0),
          quantity: Math.max(1, Number(item.quantity) || 1),
          image: item.image || item.imageUrl || "",
        })) : []);
      } catch {
        setProducts([]);
      }
    };
    window.addEventListener("cartUpdated", syncCart);
    window.addEventListener("storage", syncCart);
    return () => {
      window.removeEventListener("cartUpdated", syncCart);
      window.removeEventListener("storage", syncCart);
    };
  }, []);

  const subtotal = useMemo(
    () =>
      products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ),
    [products]
  );

  const discount =
    appliedPromo === "BSPX10" ? Math.round(subtotal * 0.1) : 0;

  const shipping =
    deliveryMethod === "express"
      ? 149
      : subtotal >= 1499
        ? 0
        : 79;

  const total = subtotal - discount + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setNotice("");
  };

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === "BSPX10") {
      setAppliedPromo("BSPX10");
      setPromoMessage("BSPX10 applied successfully.");
    } else {
      setAppliedPromo("");
      setPromoMessage("Invalid code. Try BSPX10.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (products.length === 0) {
      setNotice("Your cart is empty. Please add a product before checkout.");
      return;
    }

    setNotice(
      "Your details have been validated in this demo. Connect your checkout backend and payment gateway to place a real order."
    );
  };

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Checkout | BSPX Clothing",
    description:
      "Enter delivery details and review your BSPX clothing order before payment.",
    url: "https://www.bspxstudio.com/checkout",
  };

  return (
    <main className="bspx-checkout min-h-screen bg-[#f8f7f3] text-[#20211d]">
      <Helmet>
        <title>Secure Checkout | BSPX Clothing</title>
        <meta
          name="description"
          content="Complete your BSPX T-shirt order. Enter delivery details, choose shipping and review your order before checkout."
        />
        <link rel="canonical" href="https://www.bspxstudio.com/checkout" />
        <meta name="robots" content="noindex,follow" />
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

        .bspx-checkout {
          font-family: 'DM Sans', sans-serif;
        }

        .bspx-checkout h1,
        .bspx-checkout h2,
        .bspx-checkout h3 {
          font-family: 'Manrope', sans-serif;
        }

        .bspx-checkout input,
        .bspx-checkout select,
        .bspx-checkout button {
          -webkit-tap-highlight-color: transparent;
        }

        .bspx-checkout input:focus,
        .bspx-checkout select:focus {
          outline: none;
          border-color: #777b61;
          box-shadow: 0 0 0 2px rgba(119, 123, 97, .12);
        }

        .bspx-checkout .checkout-button {
          transition: background .2s ease, color .2s ease;
        }

        .bspx-checkout .checkout-image {
          transition: transform .4s ease;
        }

        .bspx-checkout .checkout-product:hover .checkout-image {
          transform: scale(1.04);
        }

        @media (prefers-reduced-motion: reduce) {
          .bspx-checkout *,
          .bspx-checkout *::before,
          .bspx-checkout *::after {
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pb-24">

        {/* SECTION 1 — CHECKOUT HEADER */}
        <section className="mb-9 border-b border-[#deded5] pb-7 sm:mb-12 sm:pb-9">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.23em] text-[#777b61]">
            BSPX Online Store
          </p>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Checkout
              </h1>

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#77776f]">
                Almost yours. Add your delivery details and review your
                clothing order below.
              </p>
            </div>

            <a
              href="/cart"
              className="text-xs font-semibold underline underline-offset-4 hover:text-[#777b61]"
            >
              Return to cart
            </a>
          </div>
        </section>

        <form onSubmit={handleSubmit}>
          <div className="grid items-start gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:gap-12">

            <div className="min-w-0">

              {/* SECTION 2 — CONTACT INFORMATION */}
              <section className="mb-9 rounded-lg border border-[#e2e0d8] bg-white p-5 sm:p-7">
                <div className="mb-6">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#777b61]">
                    Step 01
                  </p>

                  <h2 className="text-xl font-semibold tracking-[-0.03em]">
                    Contact information
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#77776f]">
                    Where should we send your order updates?
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold"
                    >
                      Email address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3.5 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-semibold"
                    >
                      Mobile number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      pattern="[0-9+() -]{10,18}"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3.5 text-sm"
                    />
                  </div>
                </div>
              </section>

              {/* SECTION 3 — DELIVERY ADDRESS */}
              <section className="mb-9 rounded-lg border border-[#e2e0d8] bg-white p-5 sm:p-7">
                <div className="mb-6">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#777b61]">
                    Step 02
                  </p>

                  <h2 className="text-xl font-semibold tracking-[-0.03em]">
                    Delivery address
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#77776f]">
                    Enter the address where you would like your order
                    delivered.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-xs font-semibold"
                    >
                      First name *
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      autoComplete="given-name"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3.5 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-xs font-semibold"
                    >
                      Last name *
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      autoComplete="family-name"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3.5 text-sm"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="mb-2 block text-xs font-semibold"
                    >
                      Street address *
                    </label>

                    <input
                      id="address"
                      name="address"
                      autoComplete="street-address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="House number, street and area"
                      className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3.5 text-sm"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="apartment"
                      className="mb-2 block text-xs font-semibold"
                    >
                      Apartment, landmark or nearby location
                    </label>

                    <input
                      id="apartment"
                      name="apartment"
                      autoComplete="address-line2"
                      value={formData.apartment}
                      onChange={handleChange}
                      placeholder="Optional"
                      className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3.5 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-xs font-semibold"
                    >
                      City *
                    </label>

                    <input
                      id="city"
                      name="city"
                      autoComplete="address-level2"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3.5 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="state"
                      className="mb-2 block text-xs font-semibold"
                    >
                      State *
                    </label>

                    <select
                      id="state"
                      name="state"
                      autoComplete="address-level1"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3.5 text-sm"
                    >
                      <option value="">Select state</option>
                      {[
                        "Andhra Pradesh",
                        "Arunachal Pradesh",
                        "Assam",
                        "Bihar",
                        "Chhattisgarh",
                        "Goa",
                        "Gujarat",
                        "Haryana",
                        "Himachal Pradesh",
                        "Jharkhand",
                        "Karnataka",
                        "Kerala",
                        "Madhya Pradesh",
                        "Maharashtra",
                        "Manipur",
                        "Meghalaya",
                        "Mizoram",
                        "Nagaland",
                        "Odisha",
                        "Punjab",
                        "Rajasthan",
                        "Sikkim",
                        "Tamil Nadu",
                        "Telangana",
                        "Tripura",
                        "Uttar Pradesh",
                        "Uttarakhand",
                        "West Bengal",
                        "Delhi",
                        "Jammu and Kashmir",
                        "Ladakh",
                      ].map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="pincode"
                      className="mb-2 block text-xs font-semibold"
                    >
                      PIN code *
                    </label>

                    <input
                      id="pincode"
                      name="pincode"
                      type="text"
                      inputMode="numeric"
                      autoComplete="postal-code"
                      pattern="[0-9]{6}"
                      maxLength={6}
                      required
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="6-digit PIN code"
                      className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3.5 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="mb-2 block text-xs font-semibold"
                    >
                      Country *
                    </label>

                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3.5 text-sm"
                    >
                      <option value="India">India</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* SECTION 4 — SHIPPING METHOD */}
              <section className="mb-9 rounded-lg border border-[#e2e0d8] bg-white p-5 sm:p-7">
                <div className="mb-6">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#777b61]">
                    Step 03
                  </p>

                  <h2 className="text-xl font-semibold tracking-[-0.03em]">
                    Shipping method
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#77776f]">
                    Choose your preferred delivery option.
                  </p>
                </div>

                <div className="space-y-3">
                  <label
                    className={`flex cursor-pointer items-start justify-between gap-4 rounded-md border p-4 ${
                      deliveryMethod === "standard"
                        ? "border-[#777b61] bg-[#f7f7f1]"
                        : "border-[#deded5]"
                    }`}
                  >
                    <div className="flex min-w-0 gap-3">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="standard"
                        checked={deliveryMethod === "standard"}
                        onChange={(e) =>
                          setDeliveryMethod(e.target.value)
                        }
                        className="mt-1 accent-[#777b61]"
                      />

                      <div>
                        <p className="text-sm font-semibold">
                          Standard delivery
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#77776f]">
                          Delivery estimate confirmed by the store.
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 text-sm font-semibold">
                      {subtotal >= 1499 ? "Free" : formatPrice(79)}
                    </span>
                  </label>

                  <label
                    className={`flex cursor-pointer items-start justify-between gap-4 rounded-md border p-4 ${
                      deliveryMethod === "express"
                        ? "border-[#777b61] bg-[#f7f7f1]"
                        : "border-[#deded5]"
                    }`}
                  >
                    <div className="flex min-w-0 gap-3">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="express"
                        checked={deliveryMethod === "express"}
                        onChange={(e) =>
                          setDeliveryMethod(e.target.value)
                        }
                        className="mt-1 accent-[#777b61]"
                      />

                      <div>
                        <p className="text-sm font-semibold">
                          Express delivery
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#77776f]">
                          Priority shipping where available.
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 text-sm font-semibold">
                      {formatPrice(149)}
                    </span>
                  </label>
                </div>

                <p className="mt-4 text-xs leading-5 text-[#85857d]">
                  Delivery availability and estimated dates must be confirmed
                  by your store's shipping service.
                </p>
              </section>

              {/* SECTION 5 — PAYMENT METHOD */}
              <section className="mb-9 rounded-lg border border-[#e2e0d8] bg-white p-5 sm:p-7">
                <div className="mb-6">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#777b61]">
                    Step 04
                  </p>

                  <h2 className="text-xl font-semibold tracking-[-0.03em]">
                    Payment method
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#77776f]">
                    Choose how you would like to pay.
                  </p>
                </div>

                <div className="space-y-3">
                  <label
                    className={`block cursor-pointer rounded-md border p-4 ${
                      paymentMethod === "online"
                        ? "border-[#777b61] bg-[#f7f7f1]"
                        : "border-[#deded5]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        checked={paymentMethod === "online"}
                        onChange={(e) =>
                          setPaymentMethod(e.target.value)
                        }
                        className="mt-1 accent-[#777b61]"
                      />

                      <div>
                        <p className="text-sm font-semibold">
                          Online payment
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#77776f]">
                          Pay using the payment options enabled by the store.
                        </p>
                      </div>
                    </div>
                  </label>

                  <label
                    className={`block cursor-pointer rounded-md border p-4 ${
                      paymentMethod === "cod"
                        ? "border-[#777b61] bg-[#f7f7f1]"
                        : "border-[#deded5]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) =>
                          setPaymentMethod(e.target.value)
                        }
                        className="mt-1 accent-[#777b61]"
                      />

                      <div>
                        <p className="text-sm font-semibold">
                          Cash on delivery
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#77776f]">
                          Available only if enabled for your delivery address.
                        </p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="mt-5 rounded-md bg-[#f5f4ee] p-4">
                  <p className="text-xs leading-5 text-[#77776f]">
                    Payment selection in this demo does not process a payment.
                    Connect a supported payment gateway to enable secure
                    transactions.
                  </p>
                </div>
              </section>
            </div>

            {/* SECTION 6 — ORDER REVIEW AND PLACE ORDER */}
            <aside className="h-fit rounded-lg border border-[#e2e0d8] bg-white p-5 sm:p-7 lg:sticky lg:top-8">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#777b61]">
                Final Review
              </p>

              <h2 className="mb-6 text-xl font-semibold tracking-[-0.03em]">
                Your order
              </h2>

              <div className="mb-6 space-y-5 border-b border-[#e8e7df] pb-6">
                {products.length === 0 ? (
                  <div className="rounded-md bg-[#f5f4ee] p-4 text-sm text-[#77776f]">
                    Your cart is empty. Add a product before continuing to checkout.
                    <a href="/products" className="ml-1 font-semibold text-[#20211d] underline underline-offset-4">
                      Shop now
                    </a>
                  </div>
                ) : products.map((product) => (
                  <div
                    key={product.id}
                    className="checkout-product flex items-start gap-4"
                  >
                    <div className="relative h-24 w-[76px] shrink-0 overflow-hidden rounded-md bg-[#eeede6]">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="checkout-image h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-[10px] text-[#85857d]">
                          BSPX
                        </div>
                      )}

                      <span className="absolute right-1 top-1 rounded-full bg-[#20211d] px-2 py-0.5 text-[10px] font-semibold text-white">
                        {product.quantity}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold leading-5">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[#77776f]">
                        {product.variant}
                      </p>

                      <p className="mt-1 text-xs text-[#77776f]">
                        Size: {product.size}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm font-semibold">
                      {formatPrice(product.price * product.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="promoCode"
                  className="mb-2 block text-xs font-semibold"
                >
                  Discount code
                </label>

                <div className="flex gap-2">
                  <input
                    id="promoCode"
                    value={promoCode}
                    onChange={(e) => {
                      setPromoCode(e.target.value);
                      setPromoMessage("");
                    }}
                    placeholder="Enter code"
                    className="min-w-0 flex-1 rounded-md border border-[#deded5] bg-[#fbfaf7] px-3 py-3 text-sm"
                  />

                  <button
                    type="button"
                    onClick={applyPromo}
                    className="checkout-button rounded-md border border-[#20211d] px-4 py-3 text-xs font-bold hover:bg-[#20211d] hover:text-white"
                  >
                    Apply
                  </button>
                </div>

                {promoMessage && (
                  <p
                    role="status"
                    className="mt-2 text-xs leading-5 text-[#777b61]"
                  >
                    {promoMessage}
                  </p>
                )}
              </div>

              <div className="space-y-3 border-b border-[#e8e7df] pb-5 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-[#77776f]">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-[#77776f]">Shipping</span>
                  <span>
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between gap-3 text-[#777b61]">
                    <span>Discount</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 py-5">
                <span className="text-sm font-semibold">Total</span>
                <span className="text-2xl font-bold tracking-[-0.04em]">
                  {formatPrice(total)}
                </span>
              </div>

              <p className="mb-5 text-xs leading-5 text-[#85857d]">
                Final taxes and shipping charges depend on your store
                configuration.
              </p>

              {notice && (
                <div
                  role="status"
                  className="mb-4 rounded-md border border-[#d9d9ca] bg-[#f5f4ee] p-4 text-xs leading-5 text-[#646650]"
                >
                  {notice}
                </div>
              )}

              <button
                type="submit"
                disabled={products.length === 0}
                className="checkout-button w-full rounded-md bg-[#20211d] px-5 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white hover:bg-[#777b61] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {paymentMethod === "online"
                  ? "Continue to payment"
                  : "Continue with COD"}
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-[#85857d]">
                Review your details before completing your order.
              </p>

              <a
                href="/cart"
                className="mt-5 block text-center text-xs font-semibold underline underline-offset-4 hover:text-[#777b61]"
              >
                Edit shopping bag
              </a>
            </aside>
          </div>
        </form>
      </div>
    </main>
  );
}
