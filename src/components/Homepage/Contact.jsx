
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderNumber: "",
    subject: "Order enquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `BSPX Customer Enquiry - ${formData.subject}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || "Not provided"}\n` +
        `Order Number: ${formData.orderNumber || "Not provided"}\n` +
        `Enquiry Type: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
    );

    setSubmitted(true);

    window.location.href = `mailto:bspxstudio@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="overflow-hidden bg-[#f5f4ef] font-['Poppins',sans-serif] text-[#171715]"
    >
      {/* Top brand strip */}
      <div className="border-b border-black/10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a
            href="/"
            className="text-xl font-bold tracking-[-0.07em] sm:text-2xl"
            aria-label="BSPX homepage"
          >
            BSPX<span className="text-[#77756d]">.</span>
          </a>

          <a
            href="#bspx-products"
            className="text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-[#77756d] sm:text-xs"
          >
            Continue shopping
          </a>
        </div>
      </div>

      {/* Main contact area */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-20">
        {/* Left content */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#77756d]">
              BSPX / Customer care
            </p>

            <h1 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
              Here to help with your next favourite fit.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#77756d]">
              Questions about our T-shirts, sizing, orders, or delivery?
              Send us a message and our team will help you find the right
              answer.
            </p>
          </div>

          {/* Support information */}
          <div className="mt-10 border-y border-black/10 py-6 sm:mt-14">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#77756d]">
                  Email support
                </p>

                <a
                  href="mailto:bspxstudio@gmail.com"
                  className="mt-2 inline-block break-all text-sm font-medium transition-colors hover:text-[#77756d]"
                >
                  bspxstudio@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#77756d]">
                  Product enquiries
                </p>

                <p className="mt-2 text-sm leading-6 text-[#77756d]">
                  Sizes, fits, colours, availability, and product details.
                </p>
              </div>
            </div>
          </div>

          {/* Minimal brand statement */}
          <div className="mt-8 hidden lg:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#77756d]">
              Made for everyday wear
            </p>

            <p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
              Your style. Your rules.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="border border-black/10 bg-white p-5 sm:p-8 lg:p-10">
          <div className="mb-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77756d]">
              Contact form
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              How can we help?
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#77756d]">
              Fill in your details and tell us what you need help with.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and email */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#77756d]"
                >
                  Full name *
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full border border-black/10 bg-[#f9f8f5] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#aaa89f] focus:border-[#171715]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#77756d]"
                >
                  Email address *
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full border border-black/10 bg-[#f9f8f5] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#aaa89f] focus:border-[#171715]"
                />
              </div>
            </div>

            {/* Phone and order number */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#77756d]"
                >
                  Phone number
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  placeholder="+91"
                  className="w-full border border-black/10 bg-[#f9f8f5] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#aaa89f] focus:border-[#171715]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-order"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#77756d]"
                >
                  Order number
                </label>

                <input
                  id="contact-order"
                  type="text"
                  name="orderNumber"
                  value={formData.orderNumber}
                  onChange={handleChange}
                  placeholder="If already ordered"
                  className="w-full border border-black/10 bg-[#f9f8f5] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#aaa89f] focus:border-[#171715]"
                />
              </div>
            </div>

            {/* Enquiry type */}
            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#77756d]"
              >
                What do you need help with? *
              </label>

              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-black/10 bg-[#f9f8f5] px-4 py-3.5 text-sm outline-none transition focus:border-[#171715]"
              >
                <option value="Order enquiry">Order enquiry</option>
                <option value="Product enquiry">Product enquiry</option>
                <option value="Size and fit">Size and fit</option>
                <option value="Shipping and delivery">
                  Shipping and delivery
                </option>
                <option value="Return or exchange">Return or exchange</option>
                <option value="Payment issue">Payment issue</option>
                <option value="Other enquiry">Other enquiry</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#77756d]"
              >
                Your message *
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us how we can help..."
                className="w-full resize-y border border-black/10 bg-[#f9f8f5] px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-[#aaa89f] focus:border-[#171715]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center bg-[#171715] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#393934] focus:outline-none focus:ring-2 focus:ring-[#77756d] focus:ring-offset-2"
            >
              Send your enquiry
            </button>

            {submitted && (
              <p
                role="status"
                className="text-sm leading-6 text-[#55544d]"
              >
                Your email app should open with your enquiry details. Send
                the email to complete your message.
              </p>
            )}

            <p className="text-xs leading-5 text-[#89877e]">
              Please avoid sharing passwords or payment card details in
              your message.
            </p>
          </form>
        </div>
      </div>

      {/* Bottom brand strip */}
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[-0.02em]">
            BSPX.
          </p>

          <p className="text-[10px] uppercase tracking-[0.14em] text-[#77756d]">
            Everyday essentials. Personal style.
          </p>
        </div>
      </div>
    </section>
  );
}
