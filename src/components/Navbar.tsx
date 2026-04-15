"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { 
    name: "Products", 
    href: "#features",
    dropdown: [
      { name: "IBAN Accounts", href: "#features" },
      { name: "Crypto Wallets", href: "#features" },
      { name: "Card Issuing", href: "#features" },
      { name: "Investment Products", href: "#features" },
    ]
  },
  { 
    name: "Solutions", 
    href: "#use-cases",
    dropdown: [
      { name: "Neobank", href: "#use-cases" },
      { name: "Crypto Bank", href: "#use-cases" },
      { name: "Institutional", href: "#use-cases" },
      { name: "Wealth Management", href: "#use-cases" },
    ]
  },
  { name: "Developers", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Company", href: "#" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              CHIPI
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/10 ${
                    isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} />}
                </a>
                
                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--primary)] transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
              }`}
            >
              Sign In
            </a>
            <button className="btn-primary !py-2.5 !px-5 text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container-custom py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    className="block py-3 text-gray-900 font-medium"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.name}
                  </a>
                  {link.dropdown && (
                    <div className="pl-4 space-y-2 mb-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block py-2 text-sm text-gray-600"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t flex flex-col gap-3">
                <a href="#" className="text-center py-3 text-gray-700 font-medium">
                  Sign In
                </a>
                <button className="btn-primary w-full justify-center">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
