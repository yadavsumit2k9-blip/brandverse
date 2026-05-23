import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "Services", targetId: "services" },
    { name: "Creators", targetId: "creators" },
    { name: "Campaigns", targetId: "campaigns" },
    { name: "About", targetId: "about" },
    { name: "Contact", targetId: "contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-slate-100 shadow-sm py-4"
          : "bg-white/50 backdrop-blur-sm border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <BrandLogo
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            iconClassName="w-8 h-8 sm:w-9 sm:h-9"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.targetId)}
                className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors cursor-pointer border-b border-transparent hover:border-slate-300 pb-0.5"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-950 rounded-lg hover:bg-rose-600 transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
            >
              Book Consultation
              <ArrowUpRight className="ml-1 px-0.5 w-4 h-4 text-slate-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Controls */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-slate-950 focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl transition-all duration-300">
          <div className="px-4 pt-3 pb-6 space-y-3 flex flex-col">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.targetId)}
                className="w-full text-left py-2.5 text-base font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 px-3 rounded-lg transition-all"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-100 px-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-2 inline-flex items-center justify-center px-4 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg leading-none transition-all shadow-sm"
              >
                Book Consultation
                <ArrowUpRight className="ml-1 w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
