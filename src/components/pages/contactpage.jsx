
import React, { useState } from "react";
import { Helmet } from "react-helmet";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Order enquiry",
    orderNumber: "",
    message: "",
  });

  const [formError, setFormError] = useState("");

  const contactEmail = "bspxstudio@gmail.com";
  const contactPhone = "+918531985733";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setFormError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `BSPX Contact Enquiry - ${formData.topic}`
    );

    const body = encodeURIComponent(
      `Hello BSPX Team,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Enquiry Type: ${formData.topic}
Order Number: ${formData.orderNumber || "Not applicable"}

Message:
${formData.message}

Thank you.`
    );

    setFormError(
      "Your email app will open so you can review and send your enquiry."
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "Use the order tracking link provided in your shipping confirmation, or contact our team with your order number.",
    },
    {
      question: "How do I choose the right T-shirt size?",
      answer:
        "Check the size chart on the product page before ordering. If you need help with the fit, send us the product name and your usual size.",
    },
    {
      question: "Can I request a return or exchange?",
      answer:
        "Return and exchange eligibility depends on BSPX's published policy. Contact us with your order number and the reason for your request.",
    },
  ];

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "BSPX",
    email: contactEmail,
    telephone: contactPhone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    url: "https://yourdomain.com/contact",
  };

  return (
    <main className="bspx-contact min-h-screen bg-[#f8f7f3] text-[#20211d]">
      <Helmet>
        <title>Contact BSPX | T-Shirts & Clothing Support</title>

        <meta
          name="description"
          content="Contact BSPX for T-shirt orders, size and fit guidance, shipping questions, returns and product enquiries. Our team is here to help."
        />

        <meta
          name="keywords"
          content="BSPX contact, T-shirt support, clothing enquiries, order tracking, T-shirt size help, clothing returns"
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/contact"
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

        .bspx-contact {
          font-family: 'DM Sans', sans-serif;
        }

        .bspx-contact h1,
        .bspx-contact h2,
        .bspx-contact h3 {
          font-family: 'Manrope', sans-serif;
        }

        .bspx-contact input,
        .bspx-contact select,
        .bspx-contact textarea,
        .bspx-contact button,
        .bspx-contact a {
          -webkit-tap-highlight-color: transparent;
        }

        .bspx-contact input:focus,
        .bspx-contact select:focus,
        .bspx-contact textarea:focus {
          outline: none;
          border-color: #777b61;
          box-shadow: 0 0 0 2px rgba(119, 123, 97, .12);
        }

        .bspx-contact .contact-image {
          transition: transform .65s ease;
        }

        .bspx-contact .contact-image-wrap:hover .contact-image {
          transform: scale(1.035);
        }

        .bspx-contact .contact-link {
          transition: color .2s ease, background .2s ease;
        }

        @media (max-width: 640px) {
          .bspx-contact .contact-form {
            padding: 22px 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bspx-contact *,
          .bspx-contact *::before,
          .bspx-contact *::after {
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pb-24">

        {/* SECTION 1 — CONTACT HERO */}
        <section className="mb-12 border-b border-[#deded5] pb-10 sm:mb-16 sm:pb-12">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#777b61]">
            BSPX Customer Care
          </p>

          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <h1 className="mb-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Need a hand?
                <span className="block text-[#777b61]">
                  We're here to help.
                </span>
              </h1>

              <p className="max-w-xl text-sm leading-6 text-[#73736c] sm:text-base">
                Questions about your order, the perfect fit or your next
                favourite T-shirt? Get in touch with the BSPX team.
              </p>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#77776f] md:justify-self-end">
              Real questions deserve clear answers. Tell us what you need and
              include your order details when relevant.
            </p>
          </div>
        </section>

        {/* SECTION 2 — CONTACT DETAILS */}
        <section className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:mb-20">
          <div className="rounded-lg border border-[#e2e0d8] bg-white p-6 sm:p-7">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#777b61]">
              Email Support
            </p>

            <h2 className="mb-2 text-lg font-semibold">
              Send us an email
            </h2>

            <p className="mb-5 text-sm leading-6 text-[#77776f]">
              For product questions, order assistance and general enquiries.
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="contact-link break-all text-sm font-semibold hover:text-[#777b61]"
            >
              {contactEmail}
            </a>
          </div>

          <div className="rounded-lg border border-[#e2e0d8] bg-white p-6 sm:p-7">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#777b61]">
              Phone Support
            </p>

            <h2 className="mb-2 text-lg font-semibold">
              Talk to our team
            </h2>

            <p className="mb-5 text-sm leading-6 text-[#77776f]">
              Prefer a conversation? Call us about your shopping questions.
            </p>

            <a
              href={`tel:${contactPhone}`}
              className="contact-link text-sm font-semibold hover:text-[#777b61]"
            >
              +91 85319 85733
            </a>
          </div>

          <div className="rounded-lg border border-[#e2e0d8] bg-white p-6 sm:p-7 sm:col-span-2 lg:col-span-1">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#777b61]">
              Our Location
            </p>

            <h2 className="mb-2 text-lg font-semibold">
              Coimbatore, India
            </h2>

            <p className="mb-5 text-sm leading-6 text-[#77776f]">
              BSPX clothing enquiries from Coimbatore and across India are
              welcome.
            </p>

            <span className="text-sm font-medium text-[#777b61]">
              Tamil Nadu, India
            </span>
          </div>
        </section>

        {/* SECTION 3 — WHAT CAN WE HELP WITH */}
        <section className="mb-14 sm:mb-20">
          <div className="mb-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#777b61]">
              Customer Support
            </p>

            <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
              What can we help you with?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#77776f]">
              Choose the topic that best describes your question. This helps
              you provide the right details in your message.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Orders",
                description:
                  "Order status, confirmations and order-related questions.",
              },
              {
                number: "02",
                title: "Size & Fit",
                description:
                  "T-shirt measurements, oversized fits and product guidance.",
              },
              {
                number: "03",
                title: "Shipping",
                description:
                  "Delivery timelines, shipping details and tracking help.",
              },
              {
                number: "04",
                title: "Returns",
                description:
                  "Return, exchange and eligible order issue enquiries.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-lg border border-[#e2e0d8] p-5 sm:p-6"
              >
                <p className="mb-5 text-xs font-semibold text-[#99998f]">
                  {item.number}
                </p>

                <h3 className="mb-2 text-base font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-[#77776f]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 — CONTACT FORM */}
        <section
          id="contact-form"
          className="mb-16 grid gap-8 rounded-xl bg-[#eae9e1] p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:p-12 sm:mb-20"
        >
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#777b61]">
                Get In Touch
              </p>

              <h2 className="mb-4 max-w-md text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">
                Let's sort it out.
              </h2>

              <p className="mb-8 max-w-md text-sm leading-6 text-[#6e6e64]">
                Fill in the details below and tell us how we can help. If
                you're contacting us about an existing order, add the order
                number so it's easier to identify.
              </p>
            </div>

            <div className="contact-image-wrap relative hidden overflow-hidden rounded-lg bg-[#d9d8cf] lg:block">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85"
                alt="Everyday T-shirt collection"
                className="contact-image h-[280px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="contact-form rounded-lg border border-[#deded5] bg-white p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Full name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3 text-sm"
                  />
                </div>

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
                    className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3 text-sm"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="topic"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Enquiry type *
                  </label>

                  <select
                    id="topic"
                    name="topic"
                    required
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3 text-sm"
                  >
                    <option>Order enquiry</option>
                    <option>Product information</option>
                    <option>Size and fit</option>
                    <option>Shipping and delivery</option>
                    <option>Return or exchange</option>
                    <option>Payment issue</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="orderNumber"
                  className="mb-2 block text-xs font-semibold"
                >
                  Order number
                  <span className="ml-1 font-normal text-[#8b8b82]">
                    (optional)
                  </span>
                </label>

                <input
                  id="orderNumber"
                  name="orderNumber"
                  type="text"
                  value={formData.orderNumber}
                  onChange={handleChange}
                  placeholder="e.g. BSPX-1001"
                  className="w-full rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold"
                >
                  Your message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-y rounded-md border border-[#deded5] bg-[#fbfaf7] px-4 py-3 text-sm leading-6"
                />
              </div>

              {formError && (
                <p
                  role="status"
                  className="text-sm leading-6 text-[#777b61]"
                >
                  {formError}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-md bg-[#20211d] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#777b61] sm:w-auto"
              >
                Continue to email
              </button>

              <p className="text-xs leading-5 text-[#85857d]">
                Your email application will open with your enquiry prepared.
                Review it and press Send to contact BSPX.
              </p>
            </form>
          </div>
        </section>

        {/* SECTION 5 — FREQUENTLY ASKED QUESTIONS */}
        <section className="mb-16 sm:mb-20">
          <div className="mb-7 max-w-xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#777b61]">
              Quick Answers
            </p>

            <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="border-t border-[#deded5]">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-b border-[#deded5] py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold sm:text-base">
                  <span>{faq.question}</span>

                  <span className="text-lg font-normal text-[#777b61] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="max-w-3xl pt-4 text-sm leading-6 text-[#77776f]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* SECTION 6 — FINAL CTA */}
        <section className="rounded-xl bg-[#20211d] px-6 py-10 text-center text-white sm:px-10 sm:py-14">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.23em] text-[#b8bba4]">
            The BSPX Collection
          </p>

          <h2 className="mx-auto mb-4 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">
            Your next everyday favourite is waiting.
          </h2>

          <p className="mx-auto mb-7 max-w-md text-sm leading-6 text-white/65">
            Explore T-shirts and clothing essentials designed to fit your
            everyday style.
          </p>

          <a
            href="/shop"
            className="inline-flex items-center justify-center rounded-md bg-[#f8f7f3] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-[#20211d] transition-colors hover:bg-[#dcdccf]"
          >
            Shop the collection
          </a>
        </section>
      </div>
    </main>
  );
}
