import React from "react";
import { Mail, Phone, Instagram, MessageSquare } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navLinks = [
    { name: "Sourced Services", id: "services" },
    { name: "Creator Network", id: "creators" },
    { name: "Active Campaigns", id: "campaigns" },
    { name: "About Us", id: "about" },
    { name: "Contact Intake", id: "contact" }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 mb-12 border-b border-slate-800">
          
          {/* Company Brief Column */}
          <div className="md:col-span-5 text-left">
            <BrandLogo
              onClick={handleScrollToTop}
              variant="footer"
              className="mb-4"
              iconClassName="w-8 h-8 sm:w-9 sm:h-9"
            />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              A premium, certified influencer marketing agency connecting global consumer brands with vetted digital creators. We replace guessing with real performance metrics and compliant legal protection.
            </p>

            {/* Social Icons row */}
            <div className="flex flex-col gap-3">
              <a 
                href="https://www.instagram.com/brandversehq?igsh=MTY3YzFienIwaGgzaw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-rose-500/10 hover:border-rose-500/30 text-xs font-semibold text-slate-300 hover:text-rose-500 border border-white/5 transition-all w-fit group"
              >
                <Instagram className="w-4 h-4 text-rose-500 transition-transform group-hover:scale-110" />
                <span>Follow BRANDVERSE</span>
              </a>
            </div>
          </div>

          {/* Quick contact list column */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-widest mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                <div>
                  <p className="text-slate-500 font-bold uppercase text-[9px] leading-none mb-1">Email Address</p>
                  <a href="mailto:businessnexvora@gmail.com?subject=Brand%20Promotion%20Inquiry" className="text-slate-100 font-semibold hover:text-rose-400 transition text-[13px]">
                    businessnexvora@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <div>
                  <p className="text-slate-500 font-bold uppercase text-[9px] leading-none mb-1">WhatsApp Chat</p>
                  <a 
                    href="https://wa.me/918700783650?text=Hello%20BRANDVERSE%2C%20I%20want%20to%20discuss%20influencer%20marketing%20and%20creator%20promotions." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-100 font-semibold hover:text-rose-400 transition text-[13px]"
                  >
                    Discuss Your Promotion
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Navigation Links column */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-widest mb-4">
              Agency Operations
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-left">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const el = document.getElementById(link.id);
                    if (el) {
                      const offset = 80;
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elRect = el.getBoundingClientRect().top;
                      const offsetPosition = elRect - bodyRect - offset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }}
                  className="hover:text-slate-100 text-left cursor-pointer transition flex items-center group w-fit text-slate-400"
                >
                  <span className="mr-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-rose-500 font-mono">→</span>
                  {link.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Lower footer information */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-medium">
          <div className="text-center sm:text-left">
            <p>© {currentYear} BRANDVERSE INC. All rights reserved.</p>
            <p className="mt-1 text-[10px]">
              Compliance registered. Campaign content subject to FTC & regional compliance vetting.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span className="cursor-pointer hover:text-rose-500 transition">Terms of Agency Protection</span>
            <span className="cursor-pointer hover:text-rose-500 transition">Creator Rights Agreement</span>
            <span className="cursor-pointer hover:text-rose-500 transition">ESG Oversight Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
