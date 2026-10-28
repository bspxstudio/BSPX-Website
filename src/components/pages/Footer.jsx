
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { label: "All T-Shirts", href: "#bspx-products" },
    { label: "Oversized T-Shirts", href: "#bspx-products" },
    { label: "Everyday Essentials", href: "#bspx-products" },
    { label: "New Arrivals", href: "#bspx-products" },
  ];

  const supportLinks = [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQs", href: "#faq" },
    { label: "Shipping Information", href: "#faq" },
    { label: "Returns & Exchanges", href: "#faq" },
  ];

  const companyLinks = [
    { label: "About BSPX", href: "#about" },
    { label: "Our Journal", href: "#journal" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
  ];

  return (
    <footer className="overflow-hidden bg-[#171715] font-['Poppins',sans-serif] text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Brand introduction */}
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 py-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:py-16">
          <div className="max-w-2xl">
            <a
              href="/"
              aria-label="BSPX homepage"
              className="inline-block text-3xl font-bold tracking-[-0.09em] sm:text-4xl"
            >
              BSPX<span className="text-[#aaa89f]">.</span>
            </a>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white/55">
              Everyday essentials. Effortless streetwear. Discover T-shirts
              designed to fit your style and make everyday dressing simple.
            </p>
          </div>

          <a
            href="#bspx-products"
            className="inline-flex w-fit items-center justify-center bg-[#f5f4ef] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#171715] transition-colors hover:bg-white"
          >
            Shop the collection
          </a>
        </div>

        {/* Footer navigation */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 sm:grid-cols-2 sm:gap-x-10 sm:py-12 lg:grid-cols-4 lg:gap-12 lg:py-14">
          {/* Shop */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
              Shop
            </h3>

            <ul className="mt-5 space-y-3.5">
              {shopLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs leading-6 text-white/50 transition-colors hover:text-white sm:text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer support */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
              Customer Care
            </h3>

            <ul className="mt-5 space-y-3.5">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs leading-6 text-white/50 transition-colors hover:text-white sm:text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
              Discover BSPX
            </h3>

            <ul className="mt-5 space-y-3.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs leading-6 text-white/50 transition-colors hover:text-white sm:text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and social links */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
              Get in Touch
            </h3>

            <p className="mt-5 text-xs leading-6 text-white/50 sm:text-sm">
              Questions about products, sizing, or orders? We are here to help.
            </p>

            <a
              href="mailto:bspxstudio@gmail.com"
              className="mt-4 inline-block break-all text-xs text-white transition-colors hover:text-white/65 sm:text-sm"
            >
              bspxstudio@gmail.com
            </a>

            <div className="mt-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
                Follow BSPX
              </p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-white/50 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Brand statement */}
        <div className="border-t border-white/10 py-7 sm:py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg font-semibold tracking-[-0.04em] sm:text-xl">
              Wear it your way.
            </p>

            <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">
              Simple fits. Everyday style.
            </p>
          </div>
        </div>

        {/* Copyright and legal */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] leading-5 text-white/40 sm:text-xs">
            © {currentYear} BSPX. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <a
              href="/privacy-policy"
              className="text-[10px] text-white/40 transition-colors hover:text-white sm:text-xs"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-[10px] text-white/40 transition-colors hover:text-white sm:text-xs"
            >
              Terms & Conditions
            </a>

            <a
              href="#faq"
              className="text-[10px] text-white/40 transition-colors hover:text-white sm:text-xs"
            >
              Help & FAQs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
