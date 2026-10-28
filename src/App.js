import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Nav from "./components/pages/Navigation";
import Footer from "./components/pages/Footer";
import Whatsapp from "./components/pages/whatsapp";
import ScrollToTop from "./components/pages/scrolltotop";
import SEO from "./components/SEO"; // Fixed import path
import Aboutpage from "./components/pages/Aboutpage"; // Fixed import path
import Contactpage from "./components/pages/contactpage"; // Fixed import path
import Cartpage from "./components/pages/cart"; // Fixed import path
import Shop from "./components/pages/shoppage"; // Fixed import path
import Checkoutpage from "./components/pages/checkout"; // Fixed import path
import Blogpage from "./components/pages/Blogpage"; // Fixed import path
import Scrollmodel from "./components/pages/3dscrollmodel"; // Fixed import path

function App() {
  return (
    <Router>
      {/* Global SEO - Applied to all pages */}
      <SEO
        title="BSPX Studio | Photography & Video – Coimbatore | Serving All India"
        description="Professional photography and cinematic reels studio based in Coimbatore, serving clients across India. Book your portrait, birthday, couple, baby, wedding, or event shoot today. Rated 4.9 stars."
        canonical="https://www.bspxstudio.com/"
        image="https://www.bspxstudio.com/og-image.png"
        location="Coimbatore"
        keywords="photography, videography, cinematic reels, Coimbatore photographer, wedding photography, portrait photography, birthday shoots, couple shoots, baby shoots, event photography, pre-wedding shoots, model shoots, photo frames, highlight edits"
        author="BSPX Studio"
      />

      <Nav />
    

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkoutpage />} />
        <Route path="/blog" element={<Blogpage />} />
      </Routes>
  <Scrollmodel />
      <Whatsapp />
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;