
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Read the cart and calculate the total product quantity.
  const updateCartCount = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");

      const count = Array.isArray(cart)
        ? cart.reduce(
            (total, item) =>
              total + Math.max(0, Number(item.quantity ?? 1) || 0),
            0
          )
        : 0;

      setCartCount(count);
    } catch {
      setCartCount(0);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setCategoriesOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Keep the cart badge updated.
  useEffect(() => {
    updateCartCount();

    const handleCartUpdated = () => {
      updateCartCount();
    };

    window.addEventListener("cartUpdated", handleCartUpdated);
    window.addEventListener("storage", handleCartUpdated);
    window.addEventListener("focus", handleCartUpdated);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
      window.removeEventListener("storage", handleCartUpdated);
      window.removeEventListener("focus", handleCartUpdated);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Journal", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const categories = [
    { name: "All T-Shirts", href: "/shop" },
    { name: "Oversized T-Shirts", href: "/shop?category=oversized" },
    { name: "Regular Fit", href: "/shop?category=regular-fit" },
    { name: "New Arrivals", href: "/shop?category=new-arrivals" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setCategoriesOpen(false);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    navigate(`/shop?search=${encodeURIComponent(query)}`);
    setSearchOpen(false);
    setSearchQuery("");
    closeMenu();
  };

  const linkClass = ({ isActive }) =>
    `whitespace-nowrap px-3 py-2 text-[11px] font-medium transition-colors duration-200 ${
      isActive
        ? "text-[#171715]"
        : "text-[#77756d] hover:text-[#171715]"
    }`;

  // Reusable cart link with quantity badge.
  const CartLink = ({ mobile = false }) => (
    <Link
      to="/cart"
      onClick={mobile ? closeMenu : undefined}
      aria-label={`Cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
      className={`inline-flex shrink-0 items-center gap-2 font-medium text-[#171715] transition-colors hover:text-[#77756d] ${
        mobile
          ? "text-[10px] uppercase tracking-[0.08em]"
          : "text-[11px]"
      }`}
    >
      <span>Cart</span>

      <span
        aria-live="polite"
        className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#171715] px-1.5 text-[10px] font-semibold tabular-nums text-white"
      >
        {cartCount}
      </span>
    </Link>
  );

  return (
    <>
      {/* Announcement strip */}
      <div className="bg-[#171715] px-4 py-2 text-center text-[9px] font-medium uppercase tracking-[0.16em] text-white sm:text-[10px]">
        Everyday essentials. Everyday style.
      </div>

      <header
        className={`sticky top-0 z-50 w-full border-b border-black/10 bg-[#f5f4ef] font-['Poppins',sans-serif] transition-shadow duration-300 ${
          scrolled ? "shadow-[0_5px_24px_rgba(0,0,0,0.05)]" : ""
        }`}
      >
        {/* Main navigation */}
        <nav className="mx-auto flex min-h-[68px] max-w-[1600px] items-center justify-between gap-4 px-5 sm:px-8 lg:min-h-[76px] lg:px-12">
          {/* Brand wordmark */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="BSPX home"
            className="relative z-10 shrink-0 text-[28px] font-bold leading-none tracking-[-0.09em] text-[#171715] sm:text-[32px]"
          >
            BSPX<span className="text-[#77756d]">.</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/shop" className={linkClass}>
              Shop
            </NavLink>

            {/* Categories dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <button
                type="button"
                onClick={() =>
                  setCategoriesOpen((previous) => !previous)
                }
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setCategoriesOpen(false);
                  }
                }}
                aria-expanded={categoriesOpen}
                className={`flex items-center gap-2 px-3 py-2 text-[11px] font-medium transition-colors ${
                  categoriesOpen
                    ? "text-[#171715]"
                    : "text-[#77756d] hover:text-[#171715]"
                }`}
              >
                Categories

                <span
                  aria-hidden="true"
                  className={`mt-[-3px] inline-block h-1.5 w-1.5 rotate-45 border-b border-r border-current transition-transform ${
                    categoriesOpen
                      ? "translate-y-[2px] rotate-[225deg]"
                      : ""
                  }`}
                />
              </button>

              {categoriesOpen && (
                <div className="absolute left-0 top-full w-60 pt-3">
                  <div className="border border-black/10 bg-white p-2 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        onClick={() => setCategoriesOpen(false)}
                        className="block px-4 py-3 text-xs text-[#55544d] transition-colors hover:bg-[#f5f4ef] hover:text-[#171715]"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>

            <NavLink to="/blog" className={linkClass}>
              Journal
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </div>

          {/* Desktop actions */}
          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            {searchOpen && (
              <form onSubmit={submitSearch} className="flex items-center gap-2 rounded-full border border-black/15 bg-white px-3 py-2">
                <Search size={15} className="shrink-0 text-[#77756d]" />
                <input
                  autoFocus
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search products..."
                  aria-label="Search products"
                  className="w-36 bg-transparent text-xs outline-none placeholder:text-[#aaa79e]"
                />
                <button type="submit" aria-label="Submit search" className="text-[10px] font-semibold uppercase tracking-wider">Go</button>
              </form>
            )}
            <button
              type="button"
              onClick={() => setSearchOpen((previous) => !previous)}
              aria-label={searchOpen ? "Close search" : "Search products"}
              aria-expanded={searchOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-[#171715] transition hover:bg-white"
            >
              {searchOpen ? <X size={17} /> : <Search size={17} />}
            </button>
            <CartLink />

            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-[#171715] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#393934]"
            >
              Shop now
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen((previous) => !previous)}
              aria-label={searchOpen ? "Close search" : "Search products"}
              aria-expanded={searchOpen}
              className="flex h-10 w-10 items-center justify-center border border-black/15 text-[#171715]"
            >
              {searchOpen ? <X size={17} /> : <Search size={17} />}
            </button>
            <CartLink mobile />

            <button
              type="button"
              onClick={() => setIsOpen((previous) => !previous)}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              className="flex min-h-10 min-w-10 items-center justify-center border border-black/15 px-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#171715]"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </nav>

        {/* Search panel */}
        {searchOpen && (
          <div className="border-t border-black/10 bg-[#f5f4ef] px-5 py-4 lg:hidden">
            <form onSubmit={submitSearch} className="mx-auto flex max-w-[1600px] items-center gap-3 border border-black/15 bg-white px-4 py-3">
              <Search size={17} className="shrink-0 text-[#77756d]" />
              <input
                autoFocus
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search products..."
                aria-label="Search products"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#aaa79e]"
              />
              <button type="submit" className="text-[10px] font-semibold uppercase tracking-wider text-[#171715]">Search</button>
            </form>
          </div>
        )}

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-black/10 bg-[#f5f4ef] transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
            isOpen
              ? "max-h-[85vh] overflow-y-auto opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="mx-auto max-w-[1600px] px-5 py-5 sm:px-8">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : -1}
                  className={({ isActive }) =>
                    `border-b border-black/10 py-4 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#171715]"
                        : "text-[#77756d] hover:text-[#171715]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile categories */}
              <button
                type="button"
                onClick={() =>
                  setCategoriesOpen((previous) => !previous)
                }
                aria-expanded={categoriesOpen}
                tabIndex={isOpen ? 0 : -1}
                className="flex items-center justify-between border-b border-black/10 py-4 text-left text-sm font-medium text-[#171715]"
              >
                Categories

                <span className="text-[10px] uppercase tracking-wider text-[#77756d]">
                  {categoriesOpen ? "Hide" : "View"}
                </span>
              </button>

              {categoriesOpen && (
                <div className="border-b border-black/10 py-2 pl-4">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      onClick={closeMenu}
                      tabIndex={isOpen ? 0 : -1}
                      className="block py-3 text-xs text-[#77756d] transition-colors hover:text-[#171715]"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/shop"
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="mt-5 flex w-full items-center justify-center bg-[#171715] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#393934]"
            >
              Explore the collection
            </Link>

            <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.1em] text-[#77756d]">
              <span>BSPX Clothing</span>
              <span>Everyday essentials</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
