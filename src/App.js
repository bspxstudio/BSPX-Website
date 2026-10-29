import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Nav from "./components/pages/Navigation";
import Footer from "./components/pages/Footer";
import Whatsapp from "./components/pages/whatsapp";
import ScrollToTop from "./components/pages/scrolltotop";
import SEO from "./components/SEO";
import Aboutpage from "./components/pages/Aboutpage";
import Contactpage from "./components/pages/contactpage";
import Cartpage from "./components/pages/cart";
import Shop from "./components/pages/shoppage";
import Checkoutpage from "./components/pages/checkout";
import Blogpage from "./components/pages/Blogpage";
import AdminPanel from "./components/pages/adminpanel";
import Product from "./components/pages/Product";
// Main layout component
function AppLayout() {
  const location = useLocation();

  // Hide public website components on the admin page
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      <SEO
        title="BSPX Studio | Photography & Video – Coimbatore | Serving All India"
        description="Professional photography and cinematic reels studio based in Coimbatore, serving clients across India. Book your portrait, birthday, couple, baby, wedding, or event shoot today. Rated 4.9 stars."
        canonical="https://www.bspxstudio.com/"
        image="https://www.bspxstudio.com/og-image.png"
        location="Coimbatore"
        keywords="photography, videography, cinematic reels, Coimbatore photographer, wedding photography, portrait photography, birthday shoots, couple shoots, baby shoots, event photography, pre-wedding shoots, model shoots, photo frames, highlight edits"
        author="BSPX Studio"
      />

      {/* Hide navigation on admin pages */}
      {!isAdminPage && <Nav />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkoutpage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>

      {/* Hide public website widgets on admin pages */}
      {!isAdminPage && <Whatsapp />}
      {!isAdminPage && <ScrollToTop />}
      {!isAdminPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;