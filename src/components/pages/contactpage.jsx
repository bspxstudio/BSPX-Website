import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Send,
  Clock,
  CheckCircle2
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", date: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "PhotographyBusiness",
    "name": "BSPX Studio",
    "image": "https://yourdomain.com/logo.webp", // Update with your actual logo URL
    "email": "bspxstudio@gmail.com",
    "telephone": "+919876543210", // Update with your actual phone number
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "url": "https://yourdomain.com/contact"
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] font-['Montserrat',sans-serif] text-white">
      <Helmet>
        <title>Contact BSPX Studio | Book Your Shoot Today</title>
        <meta name="description" content="Get in touch with BSPX Studio. Based in Coimbatore and traveling across India for weddings, events, and premium portrait photography. Request a quote today." />
        <link rel="canonical" href="https://yourdomain.com/contact" />
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      </Helmet>

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#1C1C1C]/50 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#D4A53A]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-[#1E3A5F]/10 rounded-full blur-[100px]" />
        
        {/* Faded Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <h2 className="select-none font-['Cormorant_Garamond',serif] text-[8rem] font-bold tracking-widest text-white/[0.03] md:text-[14rem] lg:text-[20rem]">
            HELLO
          </h2>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1700px] px-6 py-32 md:px-12 lg:px-20 lg:py-40">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* --- LEFT COLUMN: INFO & VIBES --- */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-12 flex items-start justify-between">
                <p className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-white">
                  04<span className="text-sm italic text-white/50">/05</span>
                </p>
                <div className="h-20 w-px bg-white/25" />
              </div>

              <p className="mb-4 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A53A]">
                Get In Touch
              </p>
              
              <h1 className="font-['Cormorant_Garamond',serif] text-6xl leading-[1.05] text-white md:text-7xl lg:text-8xl mb-8">
                Let's Tell<br />
                <span className="italic text-[#D4A53A]">Your Story.</span>
              </h1>
              
              <p className="max-w-md text-sm leading-relaxed text-white/60 mb-12">
                Whether you're planning a grand wedding, an intimate portrait session, or need a cinematic reel for your brand, we're ready with our cameras. Drop us a line and let's craft something beautiful together.
              </p>
            </div>

            <div className="space-y-8 border-l border-white/10 pl-6 lg:pl-10">
              {/* Contact Blocks */}
              <div className="group">
                <p className="mb-2 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Email Us</p>
                <a href="mailto:bspxstudio@gmail.com" className="inline-flex items-center gap-3 text-lg font-medium text-white transition-colors hover:text-[#D4A53A]">
                  <Mail className="h-5 w-5 text-[#D4A53A]" />
                  bspxstudio@gmail.com
                </a>
              </div>

              <div className="group">
                <p className="mb-2 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Call Us</p>
                <a href="tel:+919876543210" className="inline-flex items-center gap-3 text-lg font-medium text-white transition-colors hover:text-[#D4A53A]">
                  <Phone className="h-5 w-5 text-[#D4A53A]" />
                  +91 8531985733
                </a>
              </div>

              <div className="group">
                <p className="mb-2 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Studio Location</p>
                <div className="inline-flex items-start gap-3 text-sm leading-relaxed text-white/80">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A53A]" />
                  <p>Coimbatore, Tamil Nadu, India.<br /><span className="text-white/40 text-xs">Available for travel nationwide.</span></p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-6 border-t border-white/10 pt-8">
              <p className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Socials</p>
              <div className="flex items-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-[#D4A53A] hover:bg-[#D4A53A] hover:text-black">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-[#D4A53A] hover:bg-[#D4A53A] hover:text-black">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-[#D4A53A] hover:bg-[#D4A53A] hover:text-black">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTACT FORM --- */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[2rem] border border-white/10 bg-[#111111]/60 p-8 shadow-[0_32px_90px_rgba(0,0,0,0.6)] backdrop-blur-3xl sm:p-12">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent opacity-50" />
              
              <div className="relative z-10 mb-10 flex items-center gap-4 rounded-2xl bg-[#D4A53A]/10 p-4 border border-[#D4A53A]/20">
                <Clock className="h-5 w-5 text-[#D4A53A]" />
                <p className="text-xs font-medium text-[#D4A53A]">We typically respond within 24 hours to set up an initial consultation.</p>
              </div>

              {isSubmitted ? (
                <div className="flex h-[500px] flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#D4A53A]/20 border border-[#D4A53A]/30">
                    <CheckCircle2 className="h-12 w-12 text-[#D4A53A]" />
                  </div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-4xl text-white mb-4">Request Sent Successfully</h3>
                  <p className="text-sm text-white/60 max-w-sm">
                    Thank you for reaching out to BSPX Studio. We have received your details and will be in touch shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4A53A] hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {/* Name */}
                    <div className="group relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="peer w-full border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-transparent focus:border-[#D4A53A] focus:outline-none transition-colors"
                        placeholder="Name"
                      />
                      <label 
                        htmlFor="name" 
                        className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#D4A53A]"
                      >
                        Your Name
                      </label>
                    </div>

                    {/* Phone */}
                    <div className="group relative">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="peer w-full border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-transparent focus:border-[#D4A53A] focus:outline-none transition-colors"
                        placeholder="Phone"
                      />
                      <label 
                        htmlFor="phone" 
                        className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#D4A53A]"
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="peer w-full border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-transparent focus:border-[#D4A53A] focus:outline-none transition-colors"
                      placeholder="Email"
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#D4A53A]"
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {/* Service Type */}
                    <div className="group relative">
                      <select
                        name="service"
                        id="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full border-b border-white/20 bg-transparent py-3 text-sm focus:border-[#D4A53A] focus:outline-none transition-colors cursor-pointer appearance-none ${formData.service ? 'text-white' : 'text-white/40'}`}
                      >
                        <option value="" disabled className="bg-[#111] text-white/50">Select a Service</option>
                        <option value="Wedding" className="bg-[#111] text-white">Wedding Photography</option>
                        <option value="Outdoor/Portrait" className="bg-[#111] text-white">Outdoor / Portrait</option>
                        <option value="Baby Shoot" className="bg-[#111] text-white">Baby Shoot</option>
                        <option value="Events" className="bg-[#111] text-white">Event Coverage</option>
                        <option value="Reels/Video" className="bg-[#111] text-white">Reels & Video Edits</option>
                        <option value="Other" className="bg-[#111] text-white">Other</option>
                      </select>
                      <label 
                        htmlFor="service" 
                        className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-widest text-[#D4A53A]"
                      >
                        Interested In
                      </label>
                    </div>

                    {/* Date */}
                    <div className="group relative">
                      <input
                        type="date"
                        name="date"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white focus:border-[#D4A53A] focus:outline-none transition-colors cursor-pointer dark:[color-scheme:dark]"
                      />
                      <label 
                        htmlFor="date" 
                        className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-widest text-[#D4A53A]"
                      >
                        Event Date (Optional)
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group relative pt-4">
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="peer w-full border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-transparent focus:border-[#D4A53A] focus:outline-none transition-colors resize-none"
                      placeholder="Message"
                    />
                    <label 
                      htmlFor="message" 
                      className="absolute left-0 top-0 text-[10px] font-bold uppercase tracking-widest text-white/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#D4A53A]"
                    >
                      Tell us about your vision
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#D4A53A] px-9 py-4 font-['Montserrat',sans-serif] text-xs font-black uppercase tracking-widest text-[#0A0A0A] shadow-[0_15px_45px_rgba(212,165,58,0.25)] transition-all duration-300 hover:bg-[#FF7A00] hover:text-white active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed sm:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}