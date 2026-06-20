import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Nav from "./components/pages/Navigation";
import Footer from "./components/pages/Footer";
import Whatsapp from "./components/pages/whatsapp";
import ScrollToTop from "./components/pages/scrolltotop";
import SEO from "./components/SEO"; // Fixed import path

function App() {
  return (
    <Router>
      {/* Global SEO - Applied to all pages */}
      <SEO
        title="BSPX Studio | Photography & Video – Coimbatore | Serving All India"
        description="Professional photography and cinematic reels studio based in Coimbatore, serving clients across India. Book your portrait, birthday, couple, baby, wedding, or event shoot today. Rated 4.9 stars."
        canonical="https://bspx-website.vercel.app/"
        image="https://bspx-website.vercel.app/og-image.png"
        location="Coimbatore"
        keywords="photography, videography, cinematic reels, Coimbatore photographer, wedding photography, portrait photography, birthday shoots, couple shoots, baby shoots, event photography, pre-wedding shoots, model shoots, photo frames, highlight edits"
        author="BSPX Studio"
      />

      <Nav />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>

      <Whatsapp />
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;