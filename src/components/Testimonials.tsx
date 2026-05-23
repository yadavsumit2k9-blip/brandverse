import React, { useState } from "react";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Decorative background visual lines */}
      <div className="absolute right-0 top-1/2 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Info title */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="text-xs font-bold tracking-widest text-rose-600 uppercase">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-950 mt-3 mb-6 leading-tight">
              What CMOs say about BRANDVERSE
            </h2>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              We focus on building lasting agency relationships. Over 84% of our client brands launch secondary and tertiary campaigns through our talent network within the first 6 months.
            </p>

            {/* Manual Controls */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={prevTestimonial}
                className="w-11 h-11 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all cursor-pointer"
                aria-label="Previous review"
              >
                <ArrowLeft className="w-4 h-4 text-slate-700" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-11 h-11 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all cursor-pointer"
                aria-label="Next review"
              >
                <ArrowRight className="w-4 h-4 text-slate-700" />
              </button>
            </div>
          </div>

          {/* Right panel: Active review display slider card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 relative min-h-[380px] flex flex-col justify-between">
              <div className="absolute top-8 right-8 text-rose-500/10 pointer-events-none">
                <Quote className="w-24 h-24 stroke-[1.5]" />
              </div>

              {/* 5-star validation bar */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
                <span className="text-xs font-bold font-mono text-slate-400 ml-2">5.0 / 5.0 RATING</span>
              </div>

              {/* Animating Slide text and author */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="flex flex-col flex-grow justify-between"
                >
                  <blockquote className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal italic mb-8 relative z-10">
                    "{TESTIMONIALS[activeIndex].quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-200/60 mt-auto">
                    <div className="flex items-center space-x-4">
                      <img
                        src={TESTIMONIALS[activeIndex].avatar}
                        alt={TESTIMONIALS[activeIndex].authorName}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-950">
                          {TESTIMONIALS[activeIndex].authorName}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {TESTIMONIALS[activeIndex].authorRole}
                        </p>
                      </div>
                    </div>

                    {/* Company logo placeholder tag */}
                    <div className="flex items-center space-x-2.5 bg-white border border-slate-200/50 rounded-lg px-3.5 py-1.5 shadow-3xs">
                      <span className="w-6 h-6 bg-slate-950 text-white rounded-md text-[10px] font-black flex items-center justify-center">
                        {TESTIMONIALS[activeIndex].companyLogoLetters}
                      </span>
                      <span className="text-xs font-extrabold text-slate-950 uppercase tracking-wider font-display">
                        {TESTIMONIALS[activeIndex].companyName}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile-only Manual Controls */}
            <div className="flex lg:hidden items-center justify-center space-x-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center bg-white shadow-2xs hover:bg-slate-50 active:scale-95 transition"
              >
                <ArrowLeft className="w-4 h-4 text-slate-700" />
              </button>
              
              <span className="text-xs font-mono font-bold text-slate-400">
                {activeIndex + 1} / {TESTIMONIALS.length}
              </span>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center bg-white shadow-2xs hover:bg-slate-50 active:scale-95 transition"
              >
                <ArrowRight className="w-4 h-4 text-slate-700" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
