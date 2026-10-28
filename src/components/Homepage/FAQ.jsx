
import { useState } from "react";

const faqCategories = [
  {
    title: "Orders",
    faqs: [
      {
        question: "How do I place an order?",
        answer:
          "Browse our T-shirt collection, select your preferred product, choose your size and colour if available, and add it to your cart. Follow the checkout instructions to complete your order.",
      },
      {
        question: "Can I change or cancel my order?",
        answer:
          "Contact our support team as soon as possible with your order details. Changes or cancellations depend on whether your order has already been processed or shipped.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order is dispatched, check your order confirmation or shipping notification for tracking information, if available.",
      },
      {
        question: "I received the wrong product. What should I do?",
        answer:
          "Contact customer support with your order number and clear photos of the product received. Our team can review the issue and explain the available resolution.",
      },
    ],
  },
  {
    title: "Size & Fit",
    faqs: [
      {
        question: "How do I choose the right T-shirt size?",
        answer:
          "Check the size chart on the product page before ordering. Compare the listed garment measurements with a T-shirt you already own to find your preferred fit.",
      },
      {
        question: "Do you sell oversized T-shirts?",
        answer:
          "Check the individual product description for the available fit. Products marked oversized are designed for a more relaxed silhouette than a regular-fit T-shirt.",
      },
      {
        question: "What if my T-shirt does not fit?",
        answer:
          "Please review our return and exchange policy before placing an order. Eligibility depends on the product condition and the terms stated in the policy.",
      },
      {
        question: "Are the measurements in the size chart accurate?",
        answer:
          "The size chart provides the intended product measurements. Small manufacturing variations may occur, so review the measurements and fit notes on each product page.",
      },
    ],
  },
  {
    title: "Shipping",
    faqs: [
      {
        question: "Where do you deliver?",
        answer:
          "Available delivery locations are shown during checkout. Enter your complete address and postal code to check whether delivery is supported in your area.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery time depends on your location, order processing, and courier service. Check the estimated delivery information provided during checkout or in your shipping notification.",
      },
      {
        question: "Are shipping charges extra?",
        answer:
          "Any applicable shipping charges are displayed during checkout before you confirm your order. The amount may vary based on your order and delivery location.",
      },
      {
        question: "What happens if my order is delayed?",
        answer:
          "Check your latest tracking information first. If your delivery is overdue, contact customer support with your order number so the status can be reviewed.",
      },
    ],
  },
  {
    title: "Returns",
    faqs: [
      {
        question: "Can I return or exchange a T-shirt?",
        answer:
          "Returns and exchanges are subject to the current BSPX store policy and the eligibility of your item. Please check the published policy before requesting a return.",
      },
      {
        question: "Can I return a product after wearing it?",
        answer:
          "Returned products generally need to meet the store's condition requirements. Check the current return policy for rules about worn, washed, damaged, or altered items.",
      },
      {
        question: "What should I do if my product is damaged?",
        answer:
          "Contact customer support promptly with your order number and photographs showing the issue. Our team will review your request under the applicable store policy.",
      },
      {
        question: "When will I receive my refund?",
        answer:
          "Refund timing depends on return approval, the payment method, and the payment provider. The support team can explain the applicable process once your request is reviewed.",
      },
    ],
  },
  {
    title: "Products & Care",
    faqs: [
      {
        question: "What material are BSPX T-shirts made from?",
        answer:
          "Material composition can vary by product. Check the fabric details on the individual product page for the specific T-shirt you want to purchase.",
      },
      {
        question: "How should I wash my T-shirt?",
        answer:
          "Follow the care instructions on the garment label. As a general precaution, wash with similar colours, avoid harsh treatment, and check the label before ironing or tumble drying.",
      },
      {
        question: "Will the colour or fit change after washing?",
        answer:
          "Results depend on the fabric, garment construction, and washing method. Following the care label helps maintain the garment's appearance and fit.",
      },
      {
        question: "Will the product look exactly like the photos?",
        answer:
          "We aim to represent our products accurately. Actual colours may appear slightly different depending on lighting, photography, and your screen settings.",
      },
    ],
  },
  {
    title: "Payments",
    faqs: [
      {
        question: "What payment methods can I use?",
        answer:
          "Available payment methods are displayed at checkout. The options shown there are the supported methods for your order.",
      },
      {
        question: "Is online payment secure?",
        answer:
          "Complete your payment through the checkout process provided by the store. Never share your passwords, PINs, or one-time verification codes with anyone.",
      },
      {
        question: "My payment was deducted but the order is not confirmed. What should I do?",
        answer:
          "Check your order history and confirmation messages first. If the order is still missing, contact support with the transaction reference and approximate payment time. Never share your full card details or PIN.",
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const currentCategory = faqCategories[activeCategory];

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setOpenIndex(0);
  };

  const toggleFAQ = (index) => {
    setOpenIndex((previous) => (previous === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-[#f5f4ef] py-14 font-['Poppins',sans-serif] text-[#171715] sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#77756d]">
            BSPX / Help centre
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
            Frequently asked questions
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#77756d]">
            Everything you need to know about our T-shirts, sizing, orders,
            shipping, and shopping with BSPX.
          </p>
        </div>

        {/* Category navigation */}
        <div className="mb-8 flex flex-wrap gap-2 border-b border-black/10 pb-5">
          {faqCategories.map((category, index) => (
            <button
              key={category.title}
              type="button"
              onClick={() => handleCategoryChange(index)}
              aria-pressed={activeCategory === index}
              className={`border px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors sm:px-5 ${
                activeCategory === index
                  ? "border-[#171715] bg-[#171715] text-white"
                  : "border-black/10 bg-transparent text-[#77756d] hover:border-black/40 hover:text-[#171715]"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          {/* Left information */}
          <aside>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#77756d]">
              Browse by topic
            </p>

            <h3 className="mt-3 text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
              {currentCategory.title}
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#77756d]">
              Find straightforward answers to common questions about shopping
              with BSPX.
            </p>

            <div className="mt-7 border-t border-black/10 pt-5">
              <p className="text-sm font-medium">
                Still need help?
              </p>

              <p className="mt-2 text-sm leading-6 text-[#77756d]">
                Send our team your question and include your order number
                when relevant.
              </p>

              <a
                href="mailto:bspxstudio@gmail.com?subject=BSPX%20Customer%20Support"
                className="mt-5 inline-flex border-b border-[#171715] pb-1 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-[#77756d]"
              >
                Contact customer support
              </a>
            </div>
          </aside>

          {/* Right accordion */}
          <div className="min-w-0">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#77756d]">
                {currentCategory.title} questions
              </p>

              <p className="text-[10px] text-[#77756d]">
                {currentCategory.faqs.length} answers
              </p>
            </div>

            <div className="border-t border-black/10">
              {currentCategory.faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${activeCategory}-${index}`;

                return (
                  <article
                    key={faq.question}
                    className="border-b border-black/10"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                    >
                      <span className="text-sm font-medium leading-6 tracking-[-0.01em] sm:text-base">
                        {faq.question}
                      </span>

                      <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#77756d]">
                        {isOpen ? "Hide" : "View"}
                      </span>
                    </button>

                    <div
                      id={answerId}
                      hidden={!isOpen}
                      className="pb-5 sm:pb-6"
                    >
                      <p className="max-w-3xl whitespace-pre-line text-sm leading-7 text-[#77756d]">
                        {faq.answer}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom call to action */}
        <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#77756d]">
              The BSPX collection
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
              Found your answers? Find your fit.
            </h3>
          </div>

          <a
            href="#bspx-products"
            className="inline-flex w-fit items-center justify-center bg-[#171715] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#393934]"
          >
            Shop T-shirts
          </a>
        </div>
      </div>
    </section>
  );
}
