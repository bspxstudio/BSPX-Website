import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  const phoneNumber = "+919876543210";
  const whatsappNumber = "919876543210";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Phone Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_35px_rgba(0,0,0,0.16)]"
        aria-label="Call us"
      >
        <span className="hidden text-sm font-semibold text-stone-800 sm:block">
          Call Us
        </span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-950 text-white transition group-hover:bg-stone-800">
          <Phone className="h-5 w-5" />
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 shadow-[0_10px_30px_rgba(37,211,102,0.28)] transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_35px_rgba(37,211,102,0.34)]"
        aria-label="Chat on WhatsApp"
      >
        <span className="hidden text-sm font-semibold text-white sm:block">
          WhatsApp
        </span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#25D366] transition group-hover:scale-105">
          <MessageCircle className="h-5 w-5" />
        </span>
      </a>
    </div>
  );
}