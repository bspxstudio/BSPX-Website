import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  const phoneNumber = "+919994917537";
  const whatsappNumber = "919994917537";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Phone Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-stone-950 text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105 hover:bg-stone-800 hover:shadow-[0_14px_35px_rgba(0,0,0,0.22)]"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.28)] transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_35px_rgba(37,211,102,0.34)]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}